/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: {type: 'string', required: true},

    valuta: {type: 'string', required: true},

    '2014-11': {type: 'number'},
    '2014-12': {type: 'number'},
    '2015-01': {type: 'number'},
    '2015-02': {type: 'number'},
    '2015-03': {type: 'number'},
    '2015-04': {type: 'number'},
    '2015-05': {type: 'number'},
    '2015-06': {type: 'number'},
    '2015-07': {type: 'number'},

    '2015-08': {type: 'number'},
    '2015-09': {type: 'number'},
    '2015-10': {type: 'number'},
    '2015-11': {type: 'number'},
    '2015-12': {type: 'number'},
    '2016-01': {type: 'number'},
    '2016-02': {type: 'number'},
    '2016-03': {type: 'number'},
    '2016-04': {type: 'number'},
    '2016-05': {type: 'number'},
    '2016-06': {type: 'number'},
    '2016-07': {type: 'number'},
    '2016-08': {type: 'number'},
    '2016-09': {type: 'number'},

    // product list
    listProducts : {
      collection: 'listProduct',
      via: 'product'
    },

  }
};

