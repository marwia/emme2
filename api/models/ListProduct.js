/**
 * ListProduct.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      // Reference to a Product
      product : { 
        model :'Product',
        required : true
      },

      // Reference to a Shopping List
      shoppingList : { 
        model :'ShoppingList',
        required : true
      },

      // From who buy this product
      biocompany : {
        model: 'Biocompany',
        required : true
      },

      // product list
      userListProduct : {
        collection: 'UserListProduct',
        via: 'listProduct'
      },
  }
};

