import React from "react";

import grass from '../img/leave image.png'
import grass2 from '../img/leave image (1).png'
import grass3 from '../img/leave image (2).png'
import  eat from '../img/hero- Image.png'
import easy from '../img/easy.png'
import live from '../img/organic.png'
import organic from '../img/organic.png'
import cocos from '../img/cocos.png'
import fruit from '../img/fruite.png'
import green from '../img/green.png'
import fresh from '../img/image.png'
import cook from '../img/chef.png'
import check from '../img/check mark.png'
import salad1 from '../img/salad1.png'
import salad2 from '../img/salad2.png'
import salad3 from '../img/salad3.png'
import avatar from '../img/avatar.png'
import avatar2 from '../img/avatar (1).png'
import arrow from '../img/Arrows.png'


function About(){
    return(
        <div id="hero">
        <div className="container">
            <div className="hero-title">
                <div className="hero-text">
                   <h1>Just <span className="hero-sub">Eat healthy </span>  <br/>
                    food to live a    <br/>
                     healthier life</h1>

                     <p>Enjoy a healthy life by eating healthy foods 
                        that have extraordinary flavors that make  
                        your life healthier for today and in the future</p>


                        <button className="hero-btn">Order Now</button>
                       
                        
                </div>
                <div>
                      <img   src={eat}></img>
                      <img className="img1g"  src={grass}></img>   
                      <img className="img2g" src={grass2}></img>
                      <img className="img3g" src={grass3}></img>
                </div>
                
                     
                    
               
              
            </div>
            <div id="choose">
              <div className="container">
                <div className="choose-title">
                    <div className="choose-t">
                     <h1>Why Choose US?</h1>
                     <p>Organic food is grown without the use of synthetic chemicals</p>
                     <div className="ch-comp">
                       <div>
                          <img src={easy}></img>
                          <h3>Easy to order</h3>
                          <p>foods include fresh produce,  <br/>
                           meats as well as processed</p>
                       </div>
                       <div>
                          <img src={live}></img>
                          <h3>Live Order</h3>
                          <p>Place your online Order easily  <br/>
                            and get the food instantly</p>
                      </div> 
                       <div>
                          <img src={organic}></img>
                          <h3>100% Organic</h3>
                          <p>Organic food is grown without <br/>
                            the use of synthetic chemicals</p>
                       </div>
                     </div>
                     <div className="numbers">
                        <div>
                        <h1> 40+</h1>
                        <p>Food Partners</p>
                        </div>
                        <div>
                        <h1> 459+</h1>
                        <p>Trusted Clients</p>
                        </div>
                        <div>
                        <h1>12k+</h1>
                        <p>Order Online</p>
                        </div>
                        
                     </div>
                     
                     </div>
                </div>
             </div>  
        </div>



        <div id="about">
            <div className="container">
                <div className="about-title">
                  <div className="ab-tit">
                      <h1>About US</h1>
                      <p>Organic food is grown without the use of <br/>
                         synthetic chemicals, such as human-made     <br/>
                         pesticides and fertilizers, and does not contain   <br/>
                         genetically modified organisms (GMOs).   <br/>
                         Organic foods include fresh produce, meats,   <br/>
                         and dairy products as well as processed foods   <br/>
                         such as crackers, drinks, and frozen meals.</p>
                         <button className="ab-btn">Learn More</button>
                  </div>
                  <div className="ab-img">
                       <div className="ab-img1">
                              <img className="ab-imga" src={cocos}></img> <br/>
                              <img src={fruit}></img>
                       </div>
                       
                    <div ab-img2>
                       <img src={green}></img>
                    </div>
                         
                       
                  </div>
                </div>
             </div>  
        </div>



        <div id="fresh">
            <div className="container">
                <div className="fresh-title">
                    <img src={fresh}></img>
                    <div>
                          <h1>Fresh Vegetables <br/>
                            Every Day</h1>
                            <p>
                            Healthy life as informed declared we enjoy the <br/>
                             margaret. Joy horrible moreover man feelings   <br/>
                             own shy. Request norland neither mistake for yet.  <br/>
                              Between the for morning assured country   <br/>
                              believe.
                            </p>
                            <button className="fr-btn">Learn More</button>
                    </div>
                </div>
             </div>  
        </div>
                      


        <div id="chefs">
            <div className="container">
                <div className="chefs-title">
                  <div className="ch-tit">
                      <h1>Cooked by the <br/>
                          Best Chefs</h1>
                          <h6>Believing neglected so so allowance existence  <br/>
                            departure in. In design active temper be    <br/>
                            uneasy. Thirty for remove plenty regard you   <br/>
                            summer though. He preference connection   <br/>
                            astonished on of ye.</h6>

                            <div className="ch-img">
                            <div className="img1">
                            <div>
                            <img src={check}></img>
                            </div>
                            <div>
                            <p>A guaranteed delicious meal</p>
                            </div>
                           </div>
                           <div className="img1">
                            <div>
                            <img src={check}></img>
                            </div>
                            <div>
                            <p>Food is guaranteed hygienic</p>
                            </div>
                           </div>
                           <div className="img1">
                            <div>
                            <img src={check}></img>
                            </div>
                            <div>
                            <p>Cooked quickly</p>
                            </div>
                           </div>
                  </div>
                  </div>
                 
                  <div>
                    <img src={cook}></img>
                  </div>
                  
                </div>
             </div>  
        </div>
                

        <div id="dish">
            <div className="container">
                <div className="dish-title">
                     <div className="d-1">
                             <h1>Special Dishes for you</h1>
                             <p>Made with premium & 100% Organic ingredients</p>
                     </div>

                     <div className="d-2">
                            <div className="d-2a">
                                <img src={salad1}></img>
                                <h3>Green Salad</h3>
                                <p>A salad combined witha delicious <br/>
                                   cut of bacon and mixed with tasty  <br/>
                                   and fresh sesome oil.</p>

                            </div>
                             <div className="d-2b">
                                 <img src={salad2}></img>
                                 <h3>Beef Salad</h3>
                                <p>A salad combined witha delicious <br/>
                                   cut of bacon and mixed with tasty  <br/>
                                   and fresh sesome oil.</p>
                                  
                            </div>
                               
                             <div className="d-2c">
                                 <img src={salad3}></img>
                                 <h3>Nut Salad</h3>
                                <p>A salad combined witha delicious <br/>
                                   cut of bacon and mixed with tasty  <br/>
                                   and fresh sesome oil.</p>
                             </div>
                     </div>
                     <button className="d-btn">View All</button>
                     
                </div>
             </div>  
        </div>
            

        <div id="clients">
            <div className="container">
                <div className="client-title">
                     <div className="cl-1">
                            <h1>Happy Clients Says</h1>
                     </div>
                     <div className="cl-2">
                             <div className="cl-sub">
                               <div className="cl-2a">
                                 <div>
                                    <img src={avatar}></img>
                                </div>
                                <div className="cl-tit">
                                    <h5>KHALIL NAZIR</h5>
                                    <h6>CEO of UI.Desk</h6>
                                </div>
                               </div>
                                <p>Thirty for remove plenty regard you summer though. <br/>
                                     He preference Partiality on or continuing in particular   <br/>
                                      principles as. Do believing oh disposing to supported     <br/>
                                      allowance we.</p>
                             </div>
                             <div className="cl-sub">
                                <div className="cl-2b">
                                <div>
                                    <img src={avatar2}></img>
                                </div>
                                <div className="cl-tit">
                                    <h5>ZEESHAN ANWER</h5>
                                    <h6>CEO of UI Box</h6>
                                </div>
                                </div>
                                <p>Really boy law county she unable her sister. Feet you    <br/>
                                    off its like like six. Among sex are leave law built now.    <br/>
                                     In built table in an rapid blush. Merits behind on afraid   <br/>
                                     or warmly.
                                   </p>
                             </div>
                           


                     </div>
                     <img  className="cli-img"   src={arrow}></img>
                </div>
             </div>  
        </div>
        <div id="subs">
            <div className="container">
                <div className="subs-title">
                  <div className="s-title">
                    <h1>Subscribe to the Newsletter</h1>
                    <p>Enter your email below to get our daily offers and news</p>
                  </div>
                  <div className="s-subtitle">
                    <input className="s-input"></input>
                    <button className="s-btn">Get Started</button>
                  </div>
                </div>
             </div>  
        </div>

        <div id="footer">
            <div className="container">
                <div className="footer-title">
                    <div className="f-1">
                        <h4>UI.desk</h4>
                        <p>On formed merits hunted unable <br/>
                            merely by mr whence or. </p>
                    </div>
                    <div className="footer-tit">
                    <div className="f-2">
                        <h4> Home</h4>
                        <p>Company</p>
                        <p>News</p>
                        <p>Team</p>
                    </div>
                    <div className="f-3">
                        <h4>About</h4>
                        <p>History</p>
                        <p>Service</p>
                        <p>Pricing</p>
                    </div>
                    <div className="f-4">
                        <h4>Partner</h4>
                        <p>Business</p>
                        <p>Plan</p>
                        <p>Marketing</p>
                    </div>
                    <div className="f-5">
                        <h4>Contact</h4>
                        <p>UI.desk</p>
                        <p>(465)954-8487</p>
                        <p>Lahore, Pakistan</p>
                    </div>
                    </div>
                    
                     
                </div>
             </div>  
        </div>
           

        <div id="line">
                  <div className="container">
                         <p className="l-p">© Copyright 2020 by ui.desk. All right reserved.</p>
                  </div>
        </div>







         </div>  

    </div>





    )
}




export default About ;