import React, { Component } from 'react';

class Footer extends Component {

    constructor(props){
        super(props)
    
    }
  render() {
      return (
        <div >
            <div className="Footer">
            <footer>
                
                <br></br>
                <h7 className="footer-copyright text-center py-3">
                <strong>OMDB © 2011 - 2020</strong> - Blog - DMCA - API - RSS - Contact - Browse Movies - Requests - Login
                </h7><br></br><br></br>
                <h7>EZTV - OMDB VPN</h7><br></br><br></br>
                <h9>By using this site you agree to and accept our User Agreement, which can be read here.</h9>
                <br></br>

            </footer>
            </div>
        </div>
      );
  }
}

export default Footer;