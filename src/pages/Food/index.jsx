import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../config/Data';
import '../Styling/Style.css';

const Food = () => {

  const [data] = useContext(store);


  return (
    <div className='bollyContainer'>
    <div className="leftContained">
      <h1 className='bollyTitle'>Food</h1>

    <Link className='blogItem-link' to={`/Food/${data[11].id}`}>
      <div className="cardContained">
          <img src={data[11].image} alt="link not working" />
          <div className="cardContents">
              <h3 className="newsTitle">
                {data[11].title}
              </h3>
              <div className="newsContent">
                {data[11].content}
              </div>
                {/* <h4 className="readMore">...read more</h4> */}
             <h5>....read more</h5>
          </div>

      </div>
    </Link>

      <Link className='blogItem-link' to={`/Food/${data[12].id}`}>
      <div className="cardContained">
          <img src={data[12].image} alt="link not working" />
          <div className="cardContents">
              <h3 className="newsTitle">
                {data[12].title}
              </h3>
              <div className="newsContent">
                {data[12].content}
              </div>
                {/* <h4 className="readMore">...read more</h4> */}
                <h5>....read more</h5>
          </div>

      </div>
    </Link>





    <Link className='blogItem-link' to={`/Food/${data[13].id}`}>
      <div className="cardContained">
          <img src={data[13].image} alt="link not working" />
          <div className="cardContents">
              <h3 className="newsTitle">
                {data[13].title}
              </h3>
              <div className="newsContent">
                {data[13].content}
              </div>
                {/* <h4 className="readMore">...read more</h4> */}
                <h5>....read more</h5>
          </div>

      </div>
    </Link>



    <Link className='blogItem-link' to={`/Food/${data[11].id}`}>
      <div className="cardContained">
          <img src={data[11].image} alt="link not working" />
          <div className="cardContents">
              <h3 className="newsTitle">
                {data[11].title}
              </h3>
              <div className="newsContent">
                {data[11].content}
              </div>
              <h5>....read more</h5>
          </div>

      </div>
    </Link>



    <Link className='blogItem-link' to={`/Food/${data[13].id}`}>
      <div className="cardContained">
          <img src={data[13].image} alt="link not working" />
          <div className="cardContents">
              <h3 className="newsTitle">
                {data[13].title}
              </h3>
              <div className="newsContent">
                {data[13].content}
              </div>
              <h5>....read more</h5>
          </div>

      </div>
    </Link>



    <Link className='blogItem-link' to={`/Food/${data[11].id}`}>
      <div className="cardContained">
          <img src={data[11].image} alt="link not working" />
          <div className="cardContents">
              <h3 className="newsTitle">
                {data[11].title}
              </h3>
              <div className="newsContent">
                {data[11].content}
              </div>
             
                <h5>....read more</h5>
          </div>

      </div>
    </Link>



    <Link className='blogItem-link' to={`/Food/${data[11].id}`}>
      <div className="cardContained">
          <img src={data[11].image} alt="link not working" />
          <div className="cardContents">
              <h3 className="newsTitle">
                {data[11].title}
              </h3>
              <div className="newsContent">
                {data[11].content}
              </div>
              <h5>....read more</h5>
          </div>

      </div>
    </Link>

      
    </div>








    <div className="rightContained">
      <h1 className='bollyTitle'>Top Posts</h1>

      <Link className='blogItem-link' to={`/Food/${data[11].id}`}>
          <div className="cardContaining">
            <div className="topCardImg">

            <img src={data[11].image} alt="" />
            </div>
            <div className="topCardContents">
              <h3 className="topNewsTitle">
              {data[11].title}
              </h3>
              {/* <h4 className="topReadMore">...read more</h4> */}
              <h4 className="topDateIssue">Issue date : <span>{data[11].date}</span></h4>
             
            </div>
          </div>
      </Link>


      <Link className='blogItem-link' to={`/Food/${data[12].id}`}>
          <div className="cardContaining">
            <div className="topCardImg">

            <img src={data[12].image} alt="" />
            </div>
            <div className="topCardContents">
              <h3 className="topNewsTitle">
              {data[12].title}
              </h3>
              {/* <h4 className="topReadMore">...read more</h4> */}
              <h4 className="topDateIssue">Issue date : <span>{data[2].date}</span></h4>
             
            </div>
          </div>
      </Link>


      <Link className='blogItem-link' to={`/Food/${data[13].id}`}>
          <div className="cardContaining">
            <div className="topCardImg">

            <img src={data[13].image} alt="" />
            </div>
            <div className="topCardContents">
              <h3 className="topNewsTitle">
              {data[13].title}
              </h3>
              <h4 className="topReadMore">...read more</h4>
              <h4 className="topDateIssue">Issue date : <span>{data[6].date}</span></h4>
             
            </div>
          </div>
      </Link>


      <Link className='blogItem-link' to={`/Food/${data[11].id}`}>
          <div className="cardContaining">
            <div className="topCardImg">

            <img src={data[11].image} alt="" />
            </div>
            <div className="topCardContents">
              <h3 className="topNewsTitle">
              {data[11].title}
              </h3>
              {/* <h4 className="topReadMore">...read more</h4> */}
              <h4 className="topDateIssue">Issue date : <span>{data[8].date}</span></h4>
             
            </div>
          </div>
      </Link>


    </div>

  </div>
  )
}

export default Food