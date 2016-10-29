/**
 * ShoppingList.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // when the list closes?
    closeDate: {type: 'Date', required: true},

    // Reference to GAS
  	gas : { 
        model :'Gas',
        required : true
    },

    // product list
    listProducts : {
      collection: 'listProduct',
      via: 'shoppingList'
    },

  }
};

