import React from "react";

import './globe.css'

function Globe () {
  return(
    <>
      <img className="Map" src={process.env.PUBLIC_URL + '/pic/map.jpg'} />
      <a href="https://gcaptain.com/shell-scrambles-after-major-oil-leak-in-singapore-waters/">
        <div className="singapore dot">
        <img className="logotyp pics" src={process.env.PUBLIC_URL + '/pic/singapour.jpg'} /><br/>
        <div className="tex">Tons of Slop: Shell Scrambles After Major Oil Leak in Singapore Waters</div>
        <div className="tex">Shell has confirmed an oil leak from a pipeline at its Shell Energy and Chemicals Park Singapore on Pulau Bukom island, with approximately 30-40 metric tonnes of slop–a mixture of oil and water–leaking into the water.SEE MORE...</div>
      </div>
      </a>
      
      <div className="USA dot">
        <a className="EgLink" href="https://storymaps.arcgis.com/stories/c469a794e6be48049ee0e29f23ca2038">
          <img className="eqyptic pics" src={process.env.PUBLIC_URL + '/pic/california.jpg'} /><br/>
          <div className="tex">On October 2nd, 2021, a major oil spill was detected in Southern California, originating from an underwater pipe connected to the Elly platform about 4.5 miles offshore near Long Beach. SEE MORE...</div>
        </a>
      </div>
      <div className="uar dot">
        <a className="EgLink" href="https://safety4sea.com/algoa-bay-oil-spill-investigation-ongoing-as-wildlife-impact-confirmed/">
          <img className="eqyptic pics" src={process.env.PUBLIC_URL + '/pic/africa.jpg'} /><br/>
          <div className="tex">According to the South African Maritime Safety Authority (SAMSA), an oil spill from a cargo vessel in Algoa Bay at the weekend, and which has since been confirmed to have affected local wildlife, continues to be investigated, even as its spread at sea and along local beaches seems limited. SEE MORE...</div>
        </a>
      </div>
      <div className="eqypt dot">
        <a href="https://wwz.cedre.fr/en/Resources/Spills/Spills/Atlantic-Empress-Aegean-Captain" className="EgLink" >
          <img className="eqyptic pics" src={process.env.PUBLIC_URL + '/pic/atlantic.jpg'} /><br/>
          <div className="tex">On 19 July 1979 at 7pm, two loaded VLCCs , the Atlantic Empress (carrying 276,000 tonnes of crude oil) and the Aegean Captain (carrying 200,000 tonnes of crude oil) collided with each other in the Caribbean Sea, off Tobago island.SEE MORE...</div>
        </a>
      </div>
      <div className="kaspi dot">
        <a href="https://en.inform.kz/news/oil-spill-detected-in-caspian-sea-6544df/" className="EgLink">
          <img className="kaspitic pics" src={process.env.PUBLIC_URL + '/pic/kaspi.jpeg'} /> <br/>
          <div className="tex">"According to space monitoring data, received from Sentinel-1A  (02:43 UTC), an oil spill was detected on March 30 in the area of ​​Kashagan field in the Caspian Sea. The spill area is about 7 square kilometers.SEE MORE...</div>
        </a>
      </div>
    </>
    
    
  )
  
}

export default Globe