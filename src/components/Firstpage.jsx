import React from 'react'

const Firstpage = () => {

  return (
    <div className='bannerContainer'>
      
        <div className="leftBanner">
            <h1 className='bannerOneTitle'>Title of Vertical Gallery</h1>
            <h3 className='secondline'>Travel/November2022</h3>
        </div>

        <div className="rightBanner">
            <div className="rightSubBanner" id='firstSBanner'>
              
              <h1 className='firstline'> The Sound loud <br/> You Loved in doomed </h1>
            <h3 className='secondlin'>Travel/November2022</h3>

              </div>
            <div className="rightSubBanner" id='secondSBanner'>
             
              <h1 className='firstlin'> The Sound loud <br /> You Loved in doomed  </h1>
            <h3 className='secondli'>Travel/November2022</h3>

              </div>
        </div>
    </div>
  )
}

export default Firstpage;