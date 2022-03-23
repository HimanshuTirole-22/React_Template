// import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Footer from "./Footer.js";
// import intro from "./intro.js";
import Intro from "./Intro.js";
import UploadForm from "./UploadForm.js";
import logo1 from './assests/4.jpg';


function App() {
  return (
    <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">
            <img
              src={logo1}
              width="30"
              height="30"
              // className="d-inline-block align-top"
              alt="Logo"
            />
          </ReactBootStrap.Navbar.Brand>


          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">

              <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
              {/* <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand> */}

              <ReactBootStrap.Nav.Link href="#PublicPost">Public Post</ReactBootStrap.Nav.Link>

              <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
              {/* <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand> */}
              {/* <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand> */}

              <ReactBootStrap.Nav.Link href="#YourPost">Your Post</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>

            <ReactBootStrap.Nav>

              <ReactBootStrap.Navbar.Brand href="#home">
                <img
          src={logo1}
                  width="30"
                  height="30"
                  // className="d-inline-block align-top"
                  alt="Name"
                />
              </ReactBootStrap.Navbar.Brand>

              <ReactBootStrap.Nav.Link href="#Signup">Sign Up</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand>
              {/* <ReactBootStrap.Navbar.Brand>  </ReactBootStrap.Navbar.Brand> */}
              <ReactBootStrap.Nav.Link href="#Login">
                Login
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>


      <Intro />
      <UploadForm />
      <Footer />
    </div>
  );
}

export default App;
