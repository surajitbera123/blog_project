import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { store } from '../../config/Data';
import './Style.css';

const Middle = () => {
    const [data] = useContext(store);
  return (
    <div className='mainContainer'>
        
        <div className="leftContainer">
        <h1 className="headingArt">
          Latest Article
        </h1>
        <Link className='blogItem-link' to={`/technology/${data[6].id}`}>
            <div className="cardArticle">
                    <img src={data[6].image} alt="image not found" />
                    <div className="discr">
                        <div className="titleDisc">
                            {data[6].title}
                            <br /><br />
                            <p className="categ"><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, molestias!</span></p>
                        </div>
                       
                        <h5 className="issueD">Travel:<span>{data[6].date}</span></h5>
                    </div>
            </div>
        </Link>

                    <Link className='blogItem-link' to={`/technology/${data[7].id}`}>
            <div className="cardArticle">
                    <img src={data[7].image} alt="image not found" />
                    <div className="discr">
                        <div className="titleDisc">
                            {data[7].title}
                            <br /><br />
                            <p className="categ"><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, molestias!</span></p>
                        </div>
                       
                        <h5 className="issueD">Travel: <span>{data[7].date}</span></h5>
                    </div>
            </div>
        </Link>
        
        <Link className='blogItem-link' to={`/technology/${data[8].id}`}>
            <div className="cardArticle">
                    <img src={data[8].image} alt="image not found" />
                    <div className="discr">
                        <div className="titleDisc">
                            {data[8].title}
                            <br /><br />
                            <p className="categ"><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, molestias!</span></p>
                        </div>
                       
                        <h5 className="issueD">Travel: <span>{data[8].date}</span></h5>
                    </div>
            </div>
        </Link>
        
        <Link className='blogItem-link' to={`/technology/${data[9].id}`}>
            <div className="cardArticle">
                    <img src={data[9].image} alt="image not found" />
                    <div className="discr">
                        <div className="titleDisc">
                            {data[9].title}
                            <br /><br />
                            <p className="categ"><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, molestias!</span></p>
                        </div>
                      
                        <h5 className="issueD">Travel:<span>{data[9].date}</span></h5>
                    </div>
            </div>
        </Link>
        

        </div>
        <div className="rightContainer">

            <div className="top">
                Advertisments
            </div>
            <div className="top">
                Advertisments
            </div>
        </div>
        
        
    </div>
  )
}

export default Middle;