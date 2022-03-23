import React from "react";
// import App from "./App";

// css of footer.js inside index.css

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-15 mx-auto">
              <div className="row">

                  {/* fontawesome linked inside index.html */}
                  {/* <link src="http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
                    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
                */}

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                        <a href="https://www.facebook.com"
                        target="_blank" rel="noreferrer">
                      <i class="fa fa-facebook fontawesome-style"></i>
                        </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com"
                        target="_blank" rel="noreferrer">
                        <i class="fa fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                        <a href="https://www.youtube.com"
                        target="_blank" rel="noreferrer">
                      <i class="fa fa-youtube fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                        <a href="https://www.twitter.com"
                        target="_blank" rel="noreferrer">
                      <i class="fa fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>



                <div className="col-4 col-lg-4">
                  <h2>About Us</h2>
                  <ul>
                    <li>
                      <a href="https://www.google.com">Contact</a>
                    </li>
                    <li>
                      <a href="https://www.google.com">Details</a>
                    </li>
                    <li>
                      <a href="https://www.google.com">Explore</a>
                    </li>
                    
                  </ul>
                </div>

                {/* <div className="col-4 col-lg-4">
                  <h2>Contact Us</h2>
                  <ul>
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Youtube</a>
                    </li>
                    
                  </ul>
                </div> */}

                

                <div className="col-4 col-lg-4">
                  <h2>Get Back To</h2>
                  <ul>
                    <li>
                      <a href="https://www.google.com">Public Post</a>
                    </li>
                    <li>
                      <a href="https://www.google.com">Your Post</a>
                    </li>
                    <li>
                      <a href="https://www.google.com">Home</a>
                    </li>
                    
                  </ul>
                </div>

                
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;