
const { getItems, getItem, addItem, deleteItem, updateItem} = require('../controller/items');

const Item = {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
     // age : {  type : 'integer'}
    },
  }
  
  // Options for get all items
  const getItemsOpts = {
    schema: {
      response: {
        200: {
          type: 'array',
          items: Item,
        },
      },
    },
    handler : getItems
   
  }
  
  const getItemOpts = {
    schema: {
      response: {
        200: Item,
      },
    },
    handler : getItem
  }


  
  const postItemsOpts = {
    schema: {
      response: {
        201: Item,
      },
    },
    handler : addItem
  }

  const deleteItemOpts = {
    schema: {
      response: {
        200:{
            type : 'object',
            properties: {
                message: {
                    type : "string"
                },
            },
        },
      },
    },
    handler : deleteItem
  }
  

  const updateItemOpts = {
    schema: {
      response: {
        200: Item,
      },
    },
    handler : updateItem
  }

function itemRoutes ( fastify, optional, done){

// Routes

// Get all items
fastify.get('/items', getItemsOpts);

// Get one items
fastify.get('/items/:id',getItemOpts);

//Add Items
fastify.post('/item',postItemsOpts);

//Delete
fastify.delete('/items/:id',deleteItemOpts);

//Update
fastify.put('/items/:id',updateItemOpts);

done();
}

module.exports = itemRoutes;


