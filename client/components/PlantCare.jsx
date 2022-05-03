import React from 'react'
// import plantData from '../../data/data'
import Nav from './Nav'


function PlantCare() {
  return (
    <>
    <Nav />
   
    <div className='care-div'>
    <img src='../../images/plantcare.png' className='care-header'/>
    <br/>
    <div className='left'>
    <h3 className='header-3'>Here are some tips that will help you care for indoor plants:</h3>
    <br/>
    <ul>
        <li>🪴  Keep the potting soil moist- It is important to make sure soil is not too wet nor too dry</li>
        <br/>
        <li>🪴  Make sure the plant pot has drainage holes in the bottom of the pot</li>
        <br/>
        <li>🪴  Place your plant near a light source, whether it is natural or artificial</li>
        <br/>
        <li>🪴  Determine what species of plant you have so you can more accurately care for it</li>
    </ul>
    <br/>
    <h1 className='header-3'>How do you prune indoor plants?</h1>
    <br/>
    <h4>If you have no reason to prune plants, don’t do it. But, if you notice your plant getting tally and spindly, then we recommend you prune them.</h4>
    <br/>
    <br/>
    <h1 className='header-3'>Some of the most common reasons plants die are:</h1>
    <br/>
    <ul >
        <li>🌵 Overwatering or underwatering</li>
        <br/>
        <li>🌵 Light Levels - either not enough light or too much light</li>
        <br/>
        <li>🌵 Neglect</li>
    </ul>
    <br/>
    <br/>
    <h1 className='header-3'>How long do indoor plants typically live?</h1>
    <br/>
    <p>On average, indoor house plants last 2-5 years. After that, plants stop thriving and it is best to invest in another plant.</p>
    <br/>
    <br/>
    <h1 className='header-3'>How do I know when to water my indoor plant?</h1>
    <br/>
    <p>Over-watering is a common mistake, and you will want to make sure the plant actually requires water now or if it should wait until later. Here are some ways to see if it’s time to water:</p>
    <br/>
    <ul>
        <li>🌱 Soil probe – This probe will draw out soil, which will help you understand how dry the soil is below the surface.</li>
        <br/>
        <li>🌱 Moisture meter – This tool tells you, on a scale, how dry soil is.</li>
        <br/>
        <li>🌱 Lifting the plant up – Heaviness signifies the plant has enough water, but lightness signifies the plant is dry.</li>
        <br/>
        <li>🌱 Wilting – Wilting typically happens because the plant is not getting sufficient water. Lift the plant to see if it is light in weight or if it’s heavy.</li>
        <br/>
        <li>🌱 Tipping – If the leaf edges begin browning and are crispy to the touch, the plant likely needs water. If the leaf edges are becoming brown but feel mushy, the plant has likely gotten too much water.</li>
        <br/>
        <li>🌱 Yellow leaves – Yellow leaves may also signify that a plant has too much or too little water, but this is not always the case.</li>
    </ul>
    </div>
    <div className='decor-div'>
    <img src="../../images/decor2.png" className='decor'/> 
    <img src='../../images/decor.png' className='decor-right'/>
    </div>
    
    </div>

  </>

  )
}

export default PlantCare