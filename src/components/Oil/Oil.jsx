import React from "react";
import './oil.css'

function Oil() {
    return(
        <>
        <div className="oil">
            <h1>Threads to Nature</h1>
            <div className="pictex">
            <div className="picti">
                    <img className="picbird" src={process.env.PUBLIC_URL + '/pic/bird.jpeg'} alt="" />
                </div>
                <div className="texti">Leaks and releases

A couple of liters of oil spilled from a barrel or container in a production facility may not be difficult to clean up. However, releases into the air, soil, and especially a body of water can cause irreparable damage that will be felt for decades

Regardless of the cause, an accidental spill at the very least disrupts normal plant operations. At worst, it can lead to the evacuation of people from surrounding areas, damage infrastructure and contaminate air, land and water. Preventing spills before they reach water bodies, soil or the atmosphere minimizes the risk of harm to people and the ecosystem, and saves time and money</div>
                
            </div>
            <div className="pictexdown">
                <div className="textidown">
                Responding to Oil Spills at Sea <br/>

1. Dispersion: Chemical dispersion is achieved by applying chemicals designed to remove oil from the water surface by breaking the oil into small droplets.<br/>
2. Burning: Also referred to as "in situ burning," this is the method of setting fire to freshly spilled oil, usually while still floating on the water surface.<br/>
3. Booms: Booms are long, floating barriers used to contain or prevent the spread of spilled oil.<br/>
4. Skimming: Skimming is achieved with boats equipped with a floating skimmer designed to remove thin layers of oil from the surface, often with the help of booms.<br/>
                </div>
                <img className="picbird" src={process.env.PUBLIC_URL + '/pic/turtle.jpeg'} alt="" />
            </div>
        </div>
        
        </>
    )
}

export default Oil