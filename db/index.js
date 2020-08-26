const Sequelize =require('sequelize');
const {STRING} =Sequelize;
const conn =new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/homework2_db')


const Computers=conn.define('computers',{
    name:{
        type:STRING,
        allowNull :false,
        validate:{
            notEmpty:true,
        },
        unique:true
    }
})

const Shoes=conn.define('shoes',{
    name:{
        type:STRING,
        allowNull :false,
        validate:{
            notEmpty:true,
        },
        unique:true
    }
})

const Movies=conn.define('movies',{
    name:{
        type:STRING,
        allowNull :false,
        validate:{
            notEmpty:true,
        },
        unique:true
    }
})

const Games=conn.define('games',{
    name:{
        type:STRING,
        allowNull :false,
        validate:{
            notEmpty:true,
        },
        unique:true
    }
})

const Homes=conn.define('homes',{
    name:{
        type:STRING,
        allowNull :false,
        validate:{
            notEmpty:true,
        },
        unique:true
    }
})

const NonDeps=conn.define('nondeps',{
    name:{
        type:STRING,
        allowNull :false,
        validate:{
            notEmpty:false,
        },
        unique:true
    }
})


const syncAndSeed = async()=> {
    await conn.sync({ force: true });
    const [moe, larry, lucy] = await Promise.all([
      Computers.create({ name: 'moe'}),
      Computers.create({ name: 'larry'}),
      Computers.create({ name: 'lucy'})
    ]);
  

  
    const [ben, joe, alina] = await Promise.all([
      Shoes.create({ name: 'ben'}),
      Shoes.create({ name: 'joe'}),
      Shoes.create({ name: 'alina'})
    ]);


  
    const [peter, mark, ann] = await Promise.all([
      Movies.create({ name: 'peter'}),
      Movies.create({ name: 'mark'}),
      Movies.create({ name: 'ann'})
    ]);
  


    const [kate, steve, donald] = await Promise.all([
      Games.create({ name: 'kate'}),
      Games.create({ name: 'steve'}),
      Games.create({ name: 'donald'})
    ]);
  

  
    const [mike, jack, chan] = await Promise.all([
      Homes.create({ name: 'mike'}),
      Homes.create({ name: 'jack'}),
      Homes.create({ name: 'chan'})
    ]);
    
    const [] = await Promise.all([
      NonDeps.create({ name:'jam'}),
      
    ]);
}
  






module.exports = {
    models: {
      Computers,
      Shoes,
      Movies,
      Games,
      Homes,
      NonDeps

    },
    syncAndSeed
  };
  