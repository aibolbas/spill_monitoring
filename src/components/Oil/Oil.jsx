import React from "react";
import './oil.css'

function Oil() {
    return(
        <>
        <div className="oil">
            <h1>Threats to Nature</h1>
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
            <div className="pictexdowndown">
            <img className="picbird" src={process.env.PUBLIC_URL + '/pic/inter.jpeg'} alt="" />
                <div className="textdown">1) The urgency of the problem of oil leakage into the environment

Each year, more than a million tons of oil enter the oceans due to technical or human errors, and given the growth of oil production and transportation, this figure is constantly increasing.
Oil leakage is one of the urgent and complex problems in the oil and gas industry, which has serious environmental, economic and social consequences, and its prevention and solution requires coordinated actions on the part of oil companies, the state and society.<br/>

2) Consequences of oil leaks<br/>
1) For oil and gas companies - leaks lead to significant economic losses (losses from downtime, fines, cleaning costs) and reputational risks (growing discontent among society and pressure on oil companies to stop their work, etc.).<br/>
2) For the environment, the consequences can be catastrophic, depending on the scale of the spill, leading to the complete destruction of flora and fauna, without the possibility of recovery.<br/>
                </div>
                
            </div>
            <div className="textidowndowndown">
            3) For people - leaks affect public health, especially those living close to oil production sites.<br/>

3) Methods of preventing oil leaks include regular inspections of tankers, pipelines and their timely maintenance; use of modern technologies for monitoring and prevention of spills; elimination of human factors - continuous training of personnel to detect and prevent, detect and respond to oil spills.<br/>
4) Measures in the event of an oil leak include mechanical methods to limit the spread of oil, chemical and biological methods to clean up contaminated areas, evacuation of personnel and residents of nearby areas.<br/>
5) The contribution of ordinary people - almost EVERYTHING around us is made of oil or thanks to it, and each of us can contribute to reducing oil production and, accordingly, oil spills, adhering to the principles of reasonable consumption and properly disposing of waste, for example, using public transport instead of personal, buying less clothes, using reusable dishes for coffee, water, etc.
            </div>
        </div>
        
        </>
    )
}

export default Oil