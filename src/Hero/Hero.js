import React from 'react'


//styling imports
import "./Hero.css"

//image imports
import CssSticker from '../Assets/css3.png'
import Html5Sticker from '../Assets/html5.png'
import JsSticker from '../Assets/js.jpg'
import NodeSticker from '../Assets/node.png'
import PortPic from '../Assets/PortMe1.png'
import ReactSticker from '../Assets/react.png'


const HeroPage = () => {


    return(
        <div class='Container'>
            <div class='Left'>
                <img class='PortPic' src={PortPic} alt='PortPic'/>

            </div>
            <div class='Right'>
                <div class='info'>
                    <h1>LANCE DIXON</h1>
                    <h2>ASPIRING DEVELOPER</h2>
                    <p>I'm and Eleven Fifty bootcamp graduate trying to start my career in development.  I currently work alongside a senior level developer on projects to increase my skill level.</p>


                    <div class='logo-container'>
                        <img class='logo' src={CssSticker} alt='csssticker'/>
                        <img class='logo' src={Html5Sticker} alt='htmlSticker'/>
                        <img class='logo' src={JsSticker} alt='JsSticker'/>
                        <img class='logo' src={ReactSticker} alt='ReactSticker'/>
                        <img class='logo' src={NodeSticker} alt='NodeSticker'/>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default HeroPage;