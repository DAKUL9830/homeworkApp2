const path=require('path');
const db=require('./db');
const {Computers,Shoes,Movies,Games,Homes,NonDeps}=db.models;
//const faker =require('faker');
const morgan =require('morgan');


const express = require('express');
const app=express();
app.use(require('body-parser').json());
app.use(morgan('dev'));

app.use('/dist',express.static(path.join(__dirname,'dist')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));
app.use('/api/computers',async(req,res,next)=>{
    try{
        res.send(await Computers.findAll())
    }
    catch(ex){
     next(ex);
    }
})

app.use('/api/shoes',async(req,res,next)=>{
    try{
        res.send(await Shoes.findAll())
    }
    catch(ex){
     next(ex);
    }
})

app.use('/api/movies',async(req,res,next)=>{
    try{
        res.send(await Movies.findAll())
    }
    catch(ex){
     next(ex);
    }
})

app.use('/api/games',async(req,res,next)=>{
    try{
        res.send(await Games.findAll())
    }
    catch(ex){
     next(ex);
    }
})

app.use('/api/homes',async(req,res,next)=>{
    try{
        res.send(await Homes.findAll())
    }
    catch(ex){
     next(ex);
    }
})

app.use('/api/nondeps',async(req,res,next)=>{
    try{
        res.send(await NonDeps.findAll())
    }
    catch(ex){
     next(ex);
    }
})



app.use((err, req, res, next)=> {
    res.status(500).send({ error: err.message });
  });

  

  app.post('/api/nondeps', async (req, res, next)=> {
    try {
      res.send(await NonDeps.create({ name: req.body.name}));
      
    }
    catch(ex){
      next(ex);
    }
  });
  app.delete('/api/computers/:id', async (req, res, next)=> {
    try {
      const computer = await Computers.findByPk(req.params.id);
      await computer.destroy();
      res.sendStatus(204);
    }
    catch(ex){
      next(ex);
    }
  });
  

//   app.put('/api/computers/:id', async (req, res, next)=> {
//     try {
//       const computer = await Computers.findByPk(req.params.id);
//       await computer.update(req.body);
//       res.send(computer);
//     }
//     catch(ex){
//       next(ex);
//     }
//   });

  
  
  const init = async()=> {
    try {
      await db.syncAndSeed();
      const port = process.env.PORT || 3000;
      app.listen(port, ()=> console.log(`listening on port ${port}`));
    }
    catch(ex){
      console.log(ex);
    }
  };
  
  init();
  



