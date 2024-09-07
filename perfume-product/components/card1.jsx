import React from 'react'
import product1 from '../src/assests/image-product-desktop.jpg'
const Card1 =()=>{
    return(
        <div className="Card1">
            <div className="content">
    <div className="prdouct-image">
      <img src={product1}/>
      </div>
  <div className="info">
    <label className="labl">Perfume</label>
    <h1> Gabrielle
     <br/>Essence Eau
     <br/> De Parfum
    </h1>
     <p>A floral, solar and voluptuous <br/>
      interpretation composed by <br/>
      Olivier Polge,  Perfumer-Creator <br/>
      for the House of CHANEL.<br/>
    </p>
     <label id="price1">$149.99</label> 
     <label id="price2">$169.99</label><br/>
     <a href="#">  
     <button className="btn">Add to Cart</button>
     </a>
  </div>
</div>
        </div>
    )
}

export default Card1