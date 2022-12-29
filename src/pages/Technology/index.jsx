
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../config/Data';
import '../Styling/Style.css';

const Technology = () => {

  const [data] = useContext(store);


  return (
    <div className='bollyContainer'>
    <div className="leftContained">
      <h1 className='bollyTitle'>Technology</h1>






    <Link className='blogItem-link' to={`/technology/${data[18].id}`}>
      <div className="cardContained">
          <img src={data[23].image} alt="link not working" />
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



    <Link className='blogItem-link' to={`/technology/${data[19].id}`}>
      <div className="cardContained">
          <img src={data[24].image} alt="link not working" />
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



    <Link className='blogItem-link' to={`/technology/${data[20].id}`}>
      <div className="cardContained">
          <img src={data[25].image} alt="link not working" />
          <div className="cardContents">
              <h3 className="newsTitle">
                {data[20].title}
              </h3>
              <div className="newsContent">
                {data[20].content}
              </div>
              <h5>....read more</h5>
              
          </div>

      </div>
    </Link>



    <Link className='blogItem-link' to={`/technology/${data[21].id}`}>
      <div className="cardContained">
          <img src={data[26].image} alt="link not working" />
          <div className="cardContents">
              <h3 className="newsTitle">
                {data[21].title}
              </h3>
              <div className="newsContent">
                {data[21].content}
              </div>
                {/* <h4 className="readMore">...read more</h4> */}
                <h5>....read more</h5>
          </div>

      </div>
    </Link>



    <Link className='blogItem-link' to={`/technology/${data[20].id}`}>
      <div className="cardContained">
          <img src={data[27].image} alt="link not working" />
          <div className="cardContents">
              <h3 className="newsTitle">
                {data[20].title}
              </h3>
              <div className="newsContent">
                {data[20].content}
              </div>
                {/* <h4 className="readMore">...read more</h4> */}
                <h5>....read more</h5>
          </div>

      </div>
    </Link>

      
    </div>








    <div className="rightContained">
      <h1 className='bollyTitle'>Top Posts</h1>

      <Link className='blogItem-link' to={`/technology/${data[26].id}`}>
          <div className="cardContaining">
            <div className="topCardImg">

            <img src={data[26].image} alt="" />
            </div>
            <div className="topCardContents">
              <h3 className="topNewsTitle">
              {data[3].title}
              </h3>
              <h4 className="topReadMore">...read more</h4>
              <h4 className="topDateIssue">Issue date : <span>{data[3].date}</span></h4>
              <h5>....read more</h5>
            </div>
          </div>
      </Link>


      <Link className='blogItem-link' to={`/technology/${data[21].id}`}>
          <div className="cardContaining">
            <div className="topCardImg">

            <img src={data[21].image} alt="" />
            </div>
            <div className="topCardContents">
              <h3 className="topNewsTitle">
              {data[2].title}
              </h3>
              <h5>....read more</h5>
            </div>
          </div>
      </Link>


      <Link className='blogItem-link' to={`/technology/${data[23].id}`}>
          <div className="cardContaining">
            <div className="topCardImg">

            <img src={data[23].image} alt="" />
            </div>
            <div className="topCardContents">
              <h3 className="topNewsTitle">
              {data[6].title}
              </h3>
              <h5>....read more</h5>
            </div>
          </div>
      </Link>


      <Link className='blogItem-link' to={`/technology/${data[8].id}`}>
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

export default Technology