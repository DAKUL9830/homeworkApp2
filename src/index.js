import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');


class Acme extends React.Component{
    constructor(){
        super()
        this.state={
            computers:[],
            shoes:[],
            movies:[],
            games:[],
            homes:[],
            nondeps:[],
            
        },
        //this.destroyComputer=this.destroyComputer.bind(this);
        this.destroyShoe=this.destroyShoe.bind(this);
        this.destroyMovie=this.destroyMovie.bind(this);
        this.destroyGame=this.destroyGame.bind(this);
        this.destroyHome=this.destroyHome.bind(this);
        this.destroyNonDep=this.destroyNonDep.bind(this);
        this.create = this.create.bind(this);
    }

    async create(ev){
        ev.target;
        const computer = (await axios.post('/api/computers/id')).data;
        const nondeps = [...this.state.nondeps];
        nondeps.push(computer)
        this.setState({ nondeps:nondeps});
    }
   
    async componentDidMount(){
        this.setState({ computers: (await axios.get('/api/computers')).data });
        this.setState({ shoes: (await axios.get('/api/shoes')).data });
        this.setState({ movies: (await axios.get('/api/movies')).data });
        this.setState({ games: (await axios.get('/api/games')).data });
        this.setState({ homes: (await axios.get('/api/homes')).data });
        this.setState({ nondeps: (await axios.get('/api/nondeps')).data });
      }
     
  

    // async destroyComputer(computer){
    //            await axios.delete(`api/computers/${computer.id}`)
    //            const computers = this.state.computers.filter( c => c.id !== computer.id);
    //            this.setState({ computers });
    // }
    async destroyShoe(shoe){
            await axios.delete(`api/shoes/${shoe.id}`)
            const shoes= this.state.shoes.filter( s => s.id !== shoe.id);
                this.setState({ shoes });
    }
    async destroyMovie(movie){
        await axios.delete(`api/movies/${movie.id}`)
        const movies= this.state.movies.filter( m => m.id !== movie.id);
            this.setState({ movies });
   }
    async destroyGame(game){
        await axios.delete(`api/games/${game.id}`)
        const games= this.state.games.filter( g => g.id !== game.id);
           this.setState({ games });
   }
    async destroyHome(home){
        await axios.delete(`api/shoes/${home.id}`)
        const homes= this.state.homes.filter( h => h.id !== home.id);
           this.setState({ homes });
   }
   async destroyNonDep(nondep){
    await axios.delete(`api/nondeps/${nondep.id}`)
    const nondeps= this.state.nondeps.filter( n => n.id !== nondep.id);
       this.setState({ nondeps });
}



    render(){
        let style={
            backgroundColor:'lightgrey',
            
            
        }
        let style1={
            float: 'left',
             width: '15%',
            padding: '10px',
            height: '300px',
        }
       
        const {computers,shoes,movies,games,homes,nondeps}=this.state;
            //const {destroyComputer}=this;
            const{create}=this;
            const {destroyShoe}=this;
            const {destroyMovie}=this;
            const {destroyGame}=this;
            const {destroyHome}=this;
            const {destroyNonDep}=this;
        return(
            
           <div>
               <h1>Acme Employees and Department</h1>
               <p>Total Employees({computers.length+shoes.length+movies.length+games.length+homes.length+nondeps.length})</p>
               <ul style={style1}>
                   <h2>Computers({computers.length})</h2>
                  {computers.map(computer =>{
                      return(
                          <li key={computer.id}>
                              
                              <h3>{computer.name}</h3>
                              <button onClick={(ev)=> create(ev)}>x</button>
                              <h4 style={style}>Remove From Department</h4>
                          </li>
                      )
                  })}
               </ul>
               <ul style={style1}>
               <h2>Shoes({shoes.length})</h2>
                  {shoes.map(shoe =>{
                      return(
                          <li key={shoe.id}>
                              
                              <h3>{shoe.name}</h3>
                              <button onClick={()=> destroyShoe(shoe)}>x</button>
                              <h4 style={style}>Remove From Department</h4>
                          </li>
                      )
                  })}
               </ul>
               <ul style={style1}>
               <h2>Movies({movies.length})</h2>
                  {movies.map(movie =>{
                      return(
                          <li key={movie.id}>
                              
                              <h3>{movie.name}</h3>
                              <button onClick={()=> destroyMovie(movie)}>x</button>
                              <h4 style={style}>Remove From Department</h4>
                          </li>
                      )
                  })}
               </ul>
               <ul style={style1}>
               <h2>Games({games.length})</h2>
                  {games.map(game =>{
                      return(
                          <li key={game.id}>
                              
                              <h3>{game.name}</h3>
                              <button onClick={()=> destroyGame(game)}>x</button>
                              <h4 style={style}>Remove From Department</h4>
                          </li>
                      )
                  })}
               </ul>
               <ul style={style1}>
               <h2>Home({homes.length})</h2>
                  {homes.map(home =>{
                      return(
                          <li key={home.id}>
                              
                              <h3>{home.name}</h3>
                              <button onClick={()=> destroyHome(home)}>x</button>
                              <h4 style={style}>Remove From Department</h4>
                          </li>
                      )
                  })}
               </ul>
               <ul >
               <h2>Employees Without Departments({nondeps.length})</h2>
                  {nondeps.map(nondep =>{
                      return(
                          <li key={nondep.id}>
                             
                              <h3>{nondep.name}</h3>
                              <button onClick={()=> destroyNonDep(nondep)}>x</button>
                              
                          </li>
                      )
                  })}
               </ul>
           </div>

        )
    }
}
ReactDOM.render(
    <Acme />,
    document.getElementById('app')
  );