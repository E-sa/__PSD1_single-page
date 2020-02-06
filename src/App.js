import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'





import './App.scss';



class App extends React.Component{
      constructor(props) {
            super(props);
            this.state = {
              width: 0,
              isScreenSmall:false,
              isNavClicked:false
            };

            window.addEventListener("resize", this.update);
        }

      componentDidMount() {
        this.update();
      }

      update = () => {
        this.setState({
          width: window.innerWidth
        });

        if(this.state.width<770){
          this.setState({
            isScreenSmall: true
          });
        }
        else{

          this.setState({
            isScreenSmall: false
          });

        }
      };

      navbut=()=>{
       const isNavClicked = this.state.isNavClicked
        if(isNavClicked){
          this.setState({
            isNavClicked: false
          });
        }
        else{
          this.setState({
            isNavClicked: true
          });

        }
        

      }



        render(){
            return(
                  <div className="Container">

                  {/* header */}
                  <header className="header">
                  <AnchorLink href='#Home Page'><button className="header_button">Home Page</button></AnchorLink>
                  <AnchorLink   offset='110' href='#AboutUS'><button className="header_button">About Us</button></AnchorLink>
                  <AnchorLink offset='78' href='#Services'><button className="header_button">Services</button></AnchorLink>
                  <AnchorLink href='#Contact'><button className="header_button">Contact</button></AnchorLink>
                  <AnchorLink ><button className="header_button">External</button></AnchorLink>
                  </header>
                  
                    {/* nav bar */}
                  <div className="little_nav">

                  { 
                  this.state.isScreenSmall 
                  &&  
                  <div className="black_square" onClick={this.navbut}>
                    <div className="lines"></div>
                    <div className="lines"></div>
                    <div className="lines"></div>

                  </div>                           
                  }

{
                  this.state.isNavClicked
                   && 
                   this.state.isScreenSmall 
                   &&
                  <list>
                  <AnchorLink href='#Home Page'><li>Home Page</li></AnchorLink>
                  <AnchorLink href='#AboutUS'><li>About Us</li></AnchorLink>
                  <AnchorLink href='#Services'><li>Services</li></AnchorLink>
                  <AnchorLink href='#Contact'><li>Contact</li></AnchorLink>
                  <AnchorLink href='#External'><li>External</li></AnchorLink>
                  </list>
                  }


                  
                  </div>
      

                
                  

                  {/* first big obj */}
                  <div className="first" id="Home Page">
                    <p className="first1">CONQUER</p>
                    <p>simple bootstrap template</p>
                  </div>




                  {/* second big obj */}
                  <div className="second_OBJ" id="AboutUS">

                    <div className="second_OBJ_first_article no11">
                      <div></div>
                      <p>Bootstrap v3.3.6</p>
                      <p>Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque.</p>
                      <button>Button Green</button>
                    </div>
                    <div className="second_OBJ_second_article no11">
                      <div></div>
                      <p>Responsive Design</p>
                      <p>Conquer Template is provided by TemplateMo for free of charge. You can use this template for any kind of website. No credit link is required. All images by Unsplash. Thank you for visiting our website. Please come again!</p>
                      <button>See Details</button>
                    </div>
                    <div className="second_OBJ_third_article no11">
                      <div></div>
                      <p>Parallax Layout</p>
                      <p>Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque.</p>
                      <button>Button Red</button>
                    </div>
                  
                  </div>


                  {/* third big obj */}
                  <div className="third_OBJ">
                    <div className="third_OBJ_first_column">
                      <div></div>
                      <p>Two Column Left Side</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium.
                      </p>
                      <p>
                      Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus.
                      </p>
                    </div>
                    <div className="third_OBJ_second_column">
                      <div></div>
                      <p>Two Column Right Side</p>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium.
                      </p>
                      <p>
                      Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus.                
                      </p>
                      <button>Read More</button>
                    </div>
                  </div>


                  {/* fourth big obj */}
                  <div className="fourth_OBJ" id="Services">
                    <p>Our Services</p>
                    <p>
                      Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id
                      <br />felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia.
                      <br />Etiam a mi quis arcu varius condimentum.
                    </p>

                  </div>
                  
                  {/* fourlets */}
                  {/* fifth big obj */}
                  <div className="fifth_OBJ">
                    <div className="fifth_OBJ_first_flex">
                    <div className="fifth_OBJ_first_article">
                          <div></div>
                          <p>Column One</p>
                          <p>
                          Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt purus pretium quis. Fusce posuere egestas enim eu viverra.                       
                          </p>
                      </div>
                      <div className="fifth_OBJ_second_article">
                          <div></div>
                          <p>Column two</p>
                          <p>
                          Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt purus pretium quis.
                          </p>
                          <button>Read It</button>
                      </div>
                      </div>
                      <div className="fifth_OBJ_sec_flex">
                      <div className="fifth_OBJ_third_article">
                          <div></div>
                          <p>Column three</p>
                          <p>
                          Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt purus pretium quis. Fusce posuere egestas enim eu viverra.
                          </p>
                      </div>
                      <div className="fifth_OBJ_fourth_article">
                          <div></div>
                          <p>Column four</p>
                          <p>
                          Ut ac odio scelerisque ante ornare commodo. Sed faucibus dui libero, in tincidunt purus pretium quis.
                          </p>
                          <button>Details</button>
                      </div>
                      </div>
                  </div>
                  
                  {/* sixth big obj */}
                  <div className="sixth_OBJ">
                    <div className="sixth_OBJ_only_column">
                    <div></div>
                    <p>One Big Column</p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eros eget eros maximus, ut cursus sem euismod. Donec iaculis tristique odio at consectetur. Nullam dignissim varius suscipit. Sed in leo sit amet velit finibus pretium. Vivamus dictum nisi ac fermentum interdum. Vestibulum vel mauris at erat mattis accumsan et ac lorem. Cras non venenatis orci, sed tincidunt massa. Duis nisl lectus, auctor eu sodales at, dignissim eu orci. Sed vitae venenatis magna, in blandit metus. Praesent volutpat cursus rhoncus. Aenean arcu diam, suscipit ac neque in, sollicitudin convallis orci.
                    <br /> Fusce eu porta massa, sed tincidunt turpis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus a urna tellus. Integer pharetra vitae nisi et lacinia. Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque quis, maximus eget nisi.
                    </p>
                    <button>Read More</button>
                    </div>

                    
                  </div>
                  
                  
                  {/* contact Info  */}
                  <div className="contact-info" id="Contact">

                    <p>Contact Form</p>

                    <p className="content-info-p">
                            Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id
                      <br />felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia.
                      <br />Etiam a mi quis arcu varius condimentum.
                    </p>

                    <div className="inputs">
                      <div className="inputs-first-column">
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="Email"></input>
                        <input type="text" placeholder="Subject"></input>


                      </div>
                      <div className="inputs-second-column">
                      <input type="text" placeholder="Your message here..."></input>
                      <button>Send</button>

                      </div>
                    </div>



                  </div>
                    
              
                </div>
    )
        }
    }
    

    

// function App() {
//   return (
    
//   );
// }

export default App;
