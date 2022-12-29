import React from 'react'
import Firstpage from '../../components/Firstpage';
import Footer from '../../components/Footer';
import Latest from '../../components/Latest';
import Middle from '../../components/Middle';
import Technology from '../../components/Technology';

const Home = () => {
  return (
    <div className='home'>
        <Firstpage/>
        <h1 className="headLine">The Latest</h1>
        <Latest/>
        <Middle />
        <h1 className="headLine">LatestStories</h1>
        <Footer/>  
    </div>
  )
}

export default Home