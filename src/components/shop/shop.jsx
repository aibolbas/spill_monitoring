import React from "react";
import Product from "../product/product";
import './shop.css'

function Shop() {
    return(
        <>
        <div className="shoper">
            <div className="shopermain">
            <h1>Help Planet!</h1>
            <h3>From pollution to solutions: tackling oil spills together.</h3>


            </div>
            <div className="texer">
                <p>It is an incredibly important service in terms of recycling used oil and plastic to help protect our environment. Improper disposal of oil causes an indelible stain in waterways that destroys wildlife ands it upending the ecosystems. It reduces the need for new oil, also helping to prevent pollution and natural environmental damage through recycled used oil collection and reprocessing of such. Recycling plastic reduces the amount of plastic waste in landfills and stops harmful microplastics from entering our oceans and soil. Not only do we decrease carbon footprint by selling recycled oil, and plastic but also foster a circular economy where waste becomes a valuable resource—protecting nature and conserving the earth’s finite resources for future generations.</p>
            </div>
            <div className="producer">
                <Product link={'/tub'} img={process.env.PUBLIC_URL + '/pic/taz.jpeg'}  name={'Tub'} price={"1.99$"}/>
                <Product link={'/shop'} img={process.env.PUBLIC_URL + '/pic/tea.jpeg'}  name={'Tea Service'} price={"1.99$"}/>
                <Product link={'/shop'} img={process.env.PUBLIC_URL + '/pic/bin.jpeg'}  name={'Miniature Trash Bin'} price={"1.99$"}/>
                <Product link={'/shop'} img={process.env.PUBLIC_URL + '/pic/taz.jpeg'}  name={'Tub'} price={"1.99$"}/>
            </div>
        </div>
        
        </>
    )
}

export default Shop