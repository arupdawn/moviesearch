import React, { Component } from 'react';
import Menu from "./Menu";
import Footer from "./Footer";

class Extra extends Component {

    constructor(props){
        super(props)
        this.state = {
            MovieArr:''
        }
      }

    componentDidMount(){
        this.movieGetData();
        //this.getFindFalcone();
    }
    
    async movieGetData(){
        let movid = localStorage.getItem('MovieId');
        let movieid = JSON.parse(movid);

        fetch('https://www.omdbapi.com/?apikey=793d9894&i='+movieid+'&plot=full')
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          this.setState({
            MovieArr:data
          })
    
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    render() {
        let movid = localStorage.getItem('MovieId');
        let movieid = JSON.parse(movid);
        return (
            <div className="App">

                <div className="MainContent">
                <Menu /> <br></br><br></br>
                    
                    <div className="ContentMovie">
                        
                        <div className="TopRow">
                            <div className="MovieCard2">
                                <img className="BigPoster" src={this.state.MovieArr.Poster}></img>
                            </div>

                            <div className="MovInfo" >
                                <h1>{this.state.MovieArr.Title}</h1><br></br>
                                <h5>{this.state.MovieArr.Year}</h5><br></br>
                                <h5>{this.state.MovieArr.Genre}</h5><br></br>
                                <h5>IMDB : {this.state.MovieArr.imdbRating}</h5><br></br>
                            </div>

                        </div>

                        <div className="BottomRow">
                            <div className="LeftBottom">
                            <h5>Synopsis : </h5><br></br>
                            <p>{this.state.MovieArr.Plot}</p><br></br>
                            </div>
                            
                            <div className="RightBottom">
                            <h5>Director : {this.state.MovieArr.Director}</h5><br></br>
                            <h5>Cast : {this.state.MovieArr.Actors}</h5><br></br>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <Footer />
            </div>
        );
    }
}

export default Extra;