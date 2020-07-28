import React, { Component } from 'react';
import Logo from "./Photos/Logo1.png";
import Menu from "./Menu";
import Footer from "./Footer";
import {Link} from 'react-router-dom';

var flag = 0;

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      SearchArr: [],
      SearchName: "Man",
      redirect: false,
      PageNo: 1,
    }

  }

  componentDidMount(){
    this.getData();
    //this.getFindFalcone();
  }

  async getData(){
    let word=this.state.SearchName;
    let page=this.state.PageNo;

    fetch('https://www.omdbapi.com/?apikey=793d9894&s='+word+'&page='+page)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      this.setState({
        SearchArr:[...data.Search]
      })

    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }

  searchMovie = (event) =>{
    let name=event.target.value;
    this.setState({
      SearchName:name,
    })
    //this.getData();
  }

  onClickSearchMovie = () =>{
    this.setState({
      PageNo: 1,
    })
    flag=1;
  }

  getMovieId(event){
    let movid=event.target.id;
    console.log("Movie id is: ",movid);
    localStorage.setItem('MovieId',JSON.stringify(movid));
  }

  changePage = (event) =>{
    
    let pageno = event.target.rel;
    pageno = Number(pageno);

    if(event.target.rel > 0){
      console.log("PageNo : "+pageno);

      this.setState({
        PageNo: pageno
      })
      flag=1;
    }
  }

  /*renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/movieinfo' />
    }
  }*/

  render() {
    if(flag == 1){
      this.getData();
      flag=0;
      console.log("Page is :"+this.state.PageNo);
    }

    return (
      <div className="App">

        <div className="MainContent">
            <Menu /> <br></br><br></br>

            <div className="SearchBar">
              <input className="form-control" type="text" value={this.state.SearchName} placeholder="Search..." 
              onChange={this.searchMovie}></input>{" "}
              <button className="btn btn-primary" onClick={this.onClickSearchMovie}>Find</button>
            </div>
            <br></br><br></br>

            
            <div className="Content">
            {
              this.state.SearchArr.map((movie)=>{
                    return( 
                            <div className="MovieCard" key={movie.imdbID}>
                              <Link to ="/movieinfo">
                              <a>
                                <img id={movie.imdbID} className="Poster" src={movie.Poster} onClick={this.getMovieId}></img>
                              </a>
                              </Link>
                              <br></br>
                              <h5 className="MovieTitle">{movie.Title}</h5><br></br>
                              <div className="year">{movie.Year}</div>
                            </div>
                    )
                }
              )
            }
            </div>


                <div className="center">
                    <div className="pagination">
                        <a href="#" onClick={this.changePage} rel={this.state.PageNo-1}>&laquo;</a>
                        <a href="#" onClick={this.changePage} rel="1">1</a>
                        <a href="#" onClick={this.changePage} rel="2">2</a>
                        <a href="#" onClick={this.changePage} rel="3">3</a>
                        <a href="#" onClick={this.changePage} rel="4">4</a>
                        <a href="#" onClick={this.changePage} rel={this.state.PageNo+1}>&raquo;</a>
                    </div>
                </div>

                <br></br><br></br>

        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
