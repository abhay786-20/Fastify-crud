const fastify = require('fastify')({
    logger:true
})
/*
fastify.register(require('@fastify/swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
      info: { title: 'fastify-api' },
    },
  })
  */
fastify.register(require('./Routes/items'));


const start = async()=>{
    try{
      await fastify.listen({port:5000},()=>{
        console.log("Abhay");
      });
    }catch(err){
        fastify.log.error(err);
        console.log("error");
        process.exit(1);
    }
}
start();