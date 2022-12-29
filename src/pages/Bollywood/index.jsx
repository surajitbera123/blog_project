import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../config/Data';
import '../Styling/Style.css';

const Bollywood = () => {

  const [data] = useContext(store);


  return (
    <div className='bollyContainer'>
      <div className="leftContained">

        <h1 className='bollyTitle' style={{color:'green'}}>BollyWood</h1>

      <Link className='blogItem-link' to={`/Bollywood/${data[1].id}`}>
        <div className="cardContained">
            <img src={data[1].image} alt="" />
            <div className="cardContents">
                <h3 className="newsTitle">
                  {data[1].title}
                </h3>
                <div className="newsContent">
                  {data[1].content}
                </div>
                <h5>....read more</h5>
            </div>

        </div>
      </Link>

        <Link className='blogItem-link' to={`/Bollywood/${data[17].id}`}>
        <div className="cardContained">
            <img src={data[17].image} alt="link not working" />
            <div className="cardContents">
                <h3 className="newsTitle">
                  {data[17].title}
                </h3>
                <div className="newsContent">
                  {data[17].content}
                </div>
                <h5>....read more</h5>
            </div>

        </div>
      </Link>





      <Link className='blogItem-link' to={`/Bollywood/${data[18].id}`}>
        <div className="cardContained">
            <img src={data[18].image} alt="link not working" />
            <div className="cardContents">
                <h3 className="newsTitle">
                  {data[18].title}
                </h3>
                <div className="newsContent">
                  {data[18].content}
                </div>
                <h5>....read more</h5>
            </div>

        </div>
      </Link>



      <Link className='blogItem-link' to={`/Bollywood/${data[19].id}`}>
        <div className="cardContained">
            <img src={data[19].image} alt="link not working" />
            <div className="cardContents">
                <h3 className="newsTitle">
                  {data[19].title}
                </h3>
                <div className="newsContent">
                  {data[19].content}
                </div>
                <h5>....read more</h5>
            </div>

        </div>
      </Link>



      <Link className='blogItem-link' to={`/Bollywood/${data[20].id}`}>
        <div className="cardContained">
            <img src={data[20].image} alt="link not working" />
            <div className="cardContents">
                <h3 className="newsTitle">
                  {data[20].title}
                </h3>
                <div className="newsContent">
                  {data[20].content}
                </div>
                  {/* <h4 className="readMore">...read more</h4> */}
                <h3 className="dateIssue">Issue date : <span>Nov/2022</span></h3>
            </div>

        </div>
      </Link>



      <Link className='blogItem-link' to={`/Bollywood/${data[21].id}`}>
        <div className="cardContained">
            <img src={data[21].image} alt="link not working" />
            <div className="cardContents">
                <h3 className="newsTitle">
                  {data[21].title}
                </h3>
                <div className="newsContent">
                  {data[21].content}
                </div>
                <h5>....read more</h5>
            </div>

        </div>
      </Link>



      <Link className='blogItem-link' to={`/Bollywood/${data[22].id}`}>
        <div className="cardContained">
            <img src={data[22].image} alt="link not working" />
            <div className="cardContents">
                <h3 className="newsTitle">
                  {data[22].title}
                </h3>
                <div className="newsContent">
                  {data[22].content}
                </div>
                <h5>....read more</h5>
            </div>

        </div>
      </Link>

        
      </div>








      <div className="rightContained">
        <h1 className='bollyTitle'>Top Posts</h1>

        <Link className='blogItem-link' to={`/bollywood/${data[3].id}`}>
            <div className="cardContaining">
              <div className="topCardImg">

              <img src={data[3].image} alt="" />
              </div>
              <div className="topCardContents">
                <h3 className="topNewsTitle">{data[3].title}</h3>
                <h5>....read more</h5>
              </div>
            </div>
        </Link>


        <Link className='blogItem-link' to={`/bollywood/${data[2].id}`}>
            <div className="cardContaining">
              <div className="topCardImg">

              <img src={data[2].image} alt="" />
              </div>
              <div className="topCardContents">
                <h3 className="topNewsTitle">
                {data[2].title}
                </h3>
                <h5>....read more</h5>
              </div>
            </div>
        </Link>


        <Link className='blogItem-link' to={`/bollywood/${data[6].id}`}>
            <div className="cardContaining">
              <div className="topCardImg">

              <img src={data[6].image} alt="" />
              </div>
              <div className="topCardContents">
                <h3 className="topNewsTitle">
                {data[6].title}
                </h3>
                <h5>....read more</h5>
              </div>
            </div>
        </Link>


        <Link className='blogItem-link' to={`/bollywood/${data[8].id}`}>
            <div className="cardContaining">
              <div className="topCardImg">

              <img src={data[8].image} alt="" />
              </div>
              <div className="topCardContents">
                <h3 className="topNewsTitle">
                {data[8].title}
                </h3>
                <h5>....read more</h5>
              </div>
            </div>
        </Link>


      </div>

    </div>
  )
}

export default Bollywood