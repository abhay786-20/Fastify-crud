const { v4 :uuidv4 } = require('uuid');
let Items = require('../Items');


const  getItems = (req,reply)=>{
    reply.send(Items);
}

const  getItem = (req,reply)=>{
    const {id} = req.params;

    const item = Items.find( (item)=>{
        return item.id === id;
    })

    reply.send(item);
}

const addItem = (req, reply) => {
    const { name , age} = req.body
    console.log(name + " " + age);
    const item = {
      id: uuidv4(),
      name,
      age
    }
  
    Items = [...Items, item]
  
    reply.code(201).send(item)
  }

  const  deleteItem = (req,reply)=>{
    const {id} = req.params;

     Item = Items.filter( (item)=>{
        return item.id !== id;
    })

    reply.send({message:`Item  ${id} deleted Successfully`});
}
/* 
const  updateItem = (req,reply)=>{
    let {id} = req.params;
    let {name,age} = req.body;
    console.log("In the teminal");
    Item = Item.map((item)=>{
        return item.id === id ? {id,name,age} : item
    })

    reply.send({message:`Item  ${id} Updated Successfully`});
}
*/
const updateItem = (req, reply) => {
    const { id } = req.params
    const { name , age } = req.body

    console.log(name,age);
  
    Items = Items.map((item) => (item.id === id ? { id, name , age} : item))
  
    Item = Items.find((item) => item.id === id)
  
    reply.send(item)
  }
  

module.exports = {
    getItems,
    getItem,
    addItem,
    deleteItem,
    updateItem
}
