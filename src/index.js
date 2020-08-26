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
        this.destroy=this.destroy.bind(this);
        this.destroy1=this.destroy1.bind(this);
    }
    async componentDidMount(){
        this.setState({ computers: (await axios.get('/api/computers')).data });
        this.setState({ shoes: (await axios.get('/api/shoes')).data });
        this.setState({ movies: (await axios.get('/api/movies')).data });
        this.setState({ games: (await axios.get('/api/games')).data });
        this.setState({ homes: (await axios.get('/api/homes')).data });
      }
    //   async destroy(computer,shoe,movie,game,home){
    //       await axios.delete(`api/computers/${computer.id}`)
    //       const computers = this.state.computers.filter( c => c.id !== computer.id);
    //       this.setState({ computers });
    //       await axios.delete(`api/shoes/${shoe.id}`)
    //       const shoes = this.state.shoes.filter( s => s.id !== shoe.id);
    //       this.setState({ shoes });
    //       await axios.delete(`api/movies/${movie.id}`)
    //       const movies = this.state.movies.filter( m => m.id !== movie.id);
    //       this.setState({ movies });
    //       await axios.delete(`api/games/${game.id}`)
    //       const games = this.state.games.filter( g => g.id !== game.id);
    //       this.setState({games });
    //       await axios.delete(`api/homes/${home.id}`)
    //       const homes = this.state.homes.filter( h => h.id !== home.id);
    //       this.setState({ homes });
    //   }

    async destroy(computer){
               await axios.delete(`api/computers/${computer.id}`)
               const computers = this.state.computers.filter( c => c.id !== computer.id);
               this.setState({ computers });
    }
    async destroy1(shoe){
            await axios.delete(`api/shoes/${shoe.id}`)
            const shoes= this.state.shoes.filter( s => s.id !== shoe.id);
                this.setState({ shoes });
    }
    async destroy2(shoe){
        await axios.delete(`api/shoes/${shoe.id}`)
        const shoes= this.state.shoes.filter( s => s.id !== shoe.id);
            this.setState({ shoes });
   }
    async destroy3(shoe){
        await axios.delete(`api/shoes/${shoe.id}`)
        const shoes= this.state.shoes.filter( s => s.id !== shoe.id);
           this.setState({ shoes });
   }
    async destroy4(shoe){
        await axios.delete(`api/shoes/${shoe.id}`)
        const shoes= this.state.shoes.filter( s => s.id !== shoe.id);
           this.setState({ shoes });
   }


    render(){
        const {computers,shoes,movies,games,homes,nondeps}=this.state;
            const {destroy}=this;
            const {destroy1}=this;
            const {destroy2}=this;
            const {destroy3}=this;
            const {destroy4}=this;
            const {destroy5}=this;
        return(
            
           <div>
               <h1>Acme Employees and Department</h1>
               <p>Total Employees({computers.length+shoes.length+movies.length+games.length+homes.length+nondeps.length})</p>
               <ul>
                   <h2>Computers({computers.length})</h2>
                  {computers.map(computer =>{
                      return(
                          <li key={computer.id}>
                              
                              <h3>{computer.name}</h3>
                              <button onClick={()=> destroy(computer)}>x</button>
                              <h4>Remove From Department</h4>
                          </li>
                      )
                  })}
               </ul>
               <ul>
               <h2>Shoes({shoes.length})</h2>
                  {shoes.map(shoe =>{
                      return(
                          <li key={shoe.id}>
                              
                              <h3>{shoe.name}</h3>
                              <button onClick={()=> destroy1(shoe)}>x</button>
                              <h4>Remove From Department</h4>
                          </li>
                      )
                  })}
               </ul>
               <ul>
               <h2>Movies({movies.length})</h2>
                  {movies.map(movie =>{
                      return(
                          <li key={movie.id}>
                              
                              <h3>{movie.name}</h3>
                              <button onClick={()=> destroy2(movie)}>x</button>
                              <h4>Remove From Department</h4>
                          </li>
                      )
                  })}
               </ul>
               <ul>
               <h2>Games({games.length})</h2>
                  {games.map(game =>{
                      return(
                          <li key={game.id}>
                              
                              <h3>{game.name}</h3>
                              <button onClick={()=> destroy3(game)}>x</button>
                              <h4>Remove From Department</h4>
                          </li>
                      )
                  })}
               </ul>
               <ul>
               <h2>Home({homes.length})</h2>
                  {homes.map(home =>{
                      return(
                          <li key={home.id}>
                              
                              <h3>{home.name}</h3>
                              <button onClick={()=> destroy4(home)}>x</button>
                              <h4>Remove From Department</h4>
                          </li>
                      )
                  })}
               </ul>
               <ul>
               <h2>Employees Without Departments({nondeps.length})</h2>
                  {nondeps.map(nondep =>{
                      return(
                          <li key={nondep.id}>
                             
                              <h3>{nondep.name}</h3>
                              <button onClick={()=> destroy5(nondep)}>x</button>
                              
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