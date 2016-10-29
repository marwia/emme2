/**
 * BiocompanyController
 *
 * @description :: Server-side logic for managing Biocompanies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var NodeGeocoder = require('node-geocoder');

var options = {
    provider: 'google',

    // Optional depending on the providers 
    httpAdapter: 'https', // Default 
    apiKey: 'AIzaSyCJ_da-748crYAJ1oelQpD5NNzOYDGv3kQ', // for Mapquest, OpenCage, Google Premier 
    formatter: null         // 'gpx', 'string', ... 
};
var geocoder = NodeGeocoder(options);

var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

var resolveGeocode = function (result, callback) {
    var azienda = result[0];
    console.info(azienda);
    geocoder.geocode(
        azienda.indirizzo_sede_legale + " " +
        azienda.comune_sede_legale
        , function (err, res) {
            //console.log(res);
            console.log("err: " + err);
            if (!err && res instanceof Array) {
                console.log(res);
                Biocompany
                    .update(azienda.id, { 'latitude': res[0].latitude, 'longitude': res[0].longitude })
                    .exec(function (err, done) {
                        console.log("fatto!");
                        console.log(done);
                        if(callback)
                            callback(err, done);
                    });
            }
        });
}

module.exports = {

    find: function (req, res, next) {

        Biocompany
            .find()
            .exec(function (err, result) {
                if (err) { return next(err); }

                if (result.length == 0) {
                    return res.notFound({ error: 'No company found' });
                }

                var functions = [];
                for (var i = 0; i < 10; i++) {
                    //resolveGeocode(i, result[i]);
                    //if (!result[i].latitude) {
                        //functions.push(function(callback){ callback(null,resolveGeocode(i, result[i]))});
                    var x = result.slice(i, i+1);
                    console.log(x);
                    functions[i] = function (cb) {
                        resolveGeocode(x, function (err, done) {
                            cb(err, done);
                        })
                    }
                    //}
                }
                console.info(functions);

                if (functions.length > 0)
                    async.series(functions, function (err) { //This function gets called after the two tasks have called their "task callbacks"
                        if (err) return next(err);
                        //Here locals will be populated with `user` and `posts`
                        //Just like in the previous example
                        console.log("!!!!!!FINISH!!!");
                    });
                else
                    console.log("!!!!!!FINISH xk tutto ok!!!");
                return res.json(result);

            });

    }

};

