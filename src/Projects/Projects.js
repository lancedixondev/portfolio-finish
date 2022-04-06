import React from 'react'

//css styling
import "./Projects.css"

//Picture imports
import Wine from '../Assets/wine.png'
import BIA from '../Assets/BIA.png'
import Bubble from '../Assets/Bubble.png'
import Pokemon from '../Assets/Pokemon.png'


const ProjectPage = () => {



    return(
        <div class='container'>
            {/* Professional */}
            <div class='projects-container'>
                <h2>PROFESSIONAL PROJECTS</h2>
                <div class='projects'>
                    <div class='projects-info'>
                        <h3>Brothers In Arms</h3>
                        <p>Arms dealer contract website. Using Wordpress</p>
                    </div>
                    <div class='projects-pic'>
                        <a href="https://brothersinarmsknox.com/" target="_blank" rel="noreferrer" ><img src={BIA} alt="Brothers In Arms" /></a>
                    </div>
                </div>
                <div class='projects'>
                    <div class='projects-info'>
                        <h3>Wine468</h3>
                        <p>Winery website built using Shopify.</p>
                    </div>
                    <div class='projects-pic'>
                        <a href="https://468wine.com/" target="_blank" rel="noreferrer" ><img src={Wine} alt="468Winery" /></a>
                    </div>
                </div>
            </div>
            {/* personal */}
            <div class='projects-container'>
                <h2>PERSONAL PROJECTS</h2>
                <div class='projects'>
                    <div class='projects-info'>
                        <h3>Bubble</h3>
                        <p>Fully functioning social media.  Built with React</p>
                    </div>
                    <div class='projects-pic'>
                        <a href="https://rbpbubleclient.herokuapp.com/homepage" target="_blank" rel="noreferrer" ><img src={Bubble} alt="Bubble" /></a>
                    </div>
                </div>
                <div class='projects'>
                    <div class='projects-info'>
                        <h3>Pokemon Api</h3>
                        <p>Api Usage to randomly generate a Pokemon and show it's stats</p>
                    </div>
                    <div class='projects-pic'>
                        <a href="https://lancedixondev.github.io/API1/" target="_blank" rel="noreferrer" ><img src={Pokemon} alt="Pokemon API" /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectPage;