
import React from 'react'
import img1 from './beku-1.webp'
import Rule2 from './Rule2'
import Rule1 from './Rule1'
const Rule4 = () => {
    // Variabel
    let gjeresi = "50%"
  return (
    <div>
        {/* cdo variabel, funkison apo instuksione
        therriten me ane te klapave{},ndryshe expression*/}
    <img src={img1} alt="..." width={gjeresi} height={gjeresi}/>
    <p> {1+3}</p>
    <p>{ 10%2 ==0 ? "10 Eshte cift" : "10 eshte tek"}</p>
    {10 % 2 === 0 ? <Rule2 />  : <Rule1/>}
    </div>
  )
}

export default Rule4