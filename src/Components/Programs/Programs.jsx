import React from 'react'
import './Programs.css'
import program_1 from '../../assets/pexels-davidmcbee-1546166.jpg'
import program_2 from '../../assets/pexels-pixasquare-1115804.jpg'
import program_3 from '../../assets/pexels-expect-best-79873-323780.jpg'

import program_icon_1 from '../../assets/pexels-davidmcbee-1546166.jpg'
import program_icon_2 from '../../assets/pexels-pixasquare-1115804.jpg'
import program_icon_3 from '../../assets/pexels-expect-best-79873-323780.jpg'


const Programs = () => {
  return (
    <div className='programs'> 

       <div className='program'>
        {/* <img src={program_icon_1} alt=''/> */}
        <div className="caption">
            <img src={program_icon_1} alt=''/>
            <p>Rent</p>
        </div>
        </div> 

        <div className='program'>
         {/* <img src={program_2} alt=''/> */}
         <div className="caption">
             <img src={program_icon_2} alt=''/>
             <p>Sell</p>
         </div>
        
         </div> 

         <div className='program'>
         {/* <img src={program_3} alt=''/> */}
         <div className="caption">
             <img src={program_icon_3} alt=''/>
             <p>Buy</p>
         </div>
        
         </div> 

     </div>
  )
}

export default Programs