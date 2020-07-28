import React, { Component } from 'react';
import Logo from "./Photos/Logo1.png";
import {Link} from 'react-router-dom';

class Menu extends Component {

    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div >
                <div className="Menu-style">
                    <button style={{float: "left"}} type="button" className=" btn btn-light" data-toggle="collapse" 
                                    data-target={"#copp"}>
                        <div className="menu"></div>
                        <div className="menu"></div>
                        <div className="menu"></div>
                    </button> 
                        {' '}{" "}

                    <Link>  
                    <a><img className="Logo" src={Logo}></img></a>
                    <a id="SiteTitle" style={{display:"block"}}>OMDB Movie Search !! ...</a>
                    </Link>
                    <Link  style={{float: "right",padding: "15px"}}>
                    <a href="#" >Contact Us</a>
                    </Link>
                    <Link to ="/" style={{float: "right",padding: "15px"}}>
                    <a href="#" >Home</a>
                    </Link>
                    

                </div>

                <div id="copp" className="collapse topnav">
                    <div id="myLinks" >
                        <Link to ="/">
                        <a href="#" >Home</a>
                        </Link>
                        <Link>
                        <a href="#" >Contact Us</a>
                        </Link>
                    </div>
                </div>

            </div>
        );
  }
}

export default Menu;