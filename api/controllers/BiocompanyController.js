/**
 * BiocompanyController
 *
 * @description :: Server-side logic for managing Biocompanies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

module.exports = {

    searchByCoordinates: function (req, res, next) {

        var searchCriteria = actionUtil.parseCriteria(req);
        if (!searchCriteria.lng || !searchCriteria.lat)
            return res.badRequest("No coordinates");

        // distanza in metri
        var maxDistance = 50000;
        if (searchCriteria.maxDistance)
            maxDistance = searchCriteria.maxDistance;

        Biocompany.native(function (err, collection) {
            collection.find({

                "coordinates": {
                    "$near": {
                        "$maxDistance": Number(maxDistance),
                        "$geometry": {
                            "type": "Point",
                            "coordinates": [
                                Number(searchCriteria.lng),
                                Number(searchCriteria.lat)]
                        }
                    }
                }
            })
                .toArray(function (err, docs) {
                    // Handle Error and use docs
                    if (err) { return next(err); }

                    if (docs.length == 0) {
                        return res.notFound();
                    }

                    var biocompanyIdList = docs.map(function (element) {
                        return element.id
                    });

                    // remove consumed query params
                    delete searchCriteria["longitude"];
                    delete searchCriteria["latitude"];
                    delete searchCriteria["maxDistance"];

                    Biocompany.find({ id: biocompanyIdList }).exec(function(err, biocompanies) {
                        if (err) { return res.notFound(); }

                        return res.json(biocompanies);
                    });


                });
        });
    },

};

