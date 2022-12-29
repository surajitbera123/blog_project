import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../config/Data';
import '../Styling/Style.css';

const Fitness = () => {

  const [data] = useContext(store);


  return (
    <div className='bollyContainer'>
    <div className="leftContained">
      <h1 className='bollyTitle'>Fitness</h1>

    <Link className='blogItem-link' to={`/Fitness/${data[41].id}`}>
      <div className="cardContained">
          <img src={data[41].image} alt="link not working" />
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

      <Link className='blogItem-link' to={`/Fitness/${data[40].id}`}>
      <div className="cardContained">
          <img src={data[40].image} alt="link not working" />
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





    <Link className='blogItem-link' to={`/Fitness/${data[40].id}`}>
      <div className="cardContained">
          <img src={data[40].image} alt="link not working" />
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



    <Link className='blogItem-link' to={`/Fitness/${data[40].id}`}>
      <div className="cardContained">
          <img src={data[40].image} alt="link not working" />
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



    <Link className='blogItem-link' to={`/Fitness/${data[42].id}`}>
      <div className="cardContained">
          <img src={data[42].image} alt="link not working" />
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



    <Link className='blogItem-link' to={`/Fitness/${data[41].id}`}>
      <div className="cardContained">
          <img src={data[41].image} alt="link not working" />
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



    <Link className='blogItem-link' to={`/Fitness/${data[40].id}`}>
      <div className="cardContained">
          <img src={data[40].image} alt="link not working" />
          <div className="cardContents">
              <h3 className="newsTitle">
                {data[40].title}
              </h3>
              <div className="newsContent">
                {data[40].content}
              </div> <h5>....read more</h5>
          </div>

      </div>
    </Link>

      
    </div>








    <div className="rightContained">
      <h1 className='bollyTitle'>Top Posts</h1>

      <Link className='blogItem-link' to={`/Fitness/${data[39].id}`}>
          <div className="cardContaining">
            <div className="topCardImg">

            <img src={data[39].image} alt="" />
            </div>
            <div className="topCardContents">
              <h3 className="topNewsTitle">
              {data[3].title}
              </h3>
              <h4 className="topReadMore">...read more</h4>
              <h5>....read more</h5>
            </div>
          </div>
      </Link>


      <Link className='blogItem-link' to={`/Fitness/${data[42].id}`}>
          <div className="cardContaining">
            <div className="topCardImg">

            <img src={data[42].image} alt="" />
            </div>
            <div className="topCardContents">
              <h3 className="topNewsTitle">
              {data[2].title}
              </h3>
              <h5>....read more</h5>
             
            </div>
          </div>
      </Link>


      <Link className='blogItem-link' to={`/Fitness/${data[39].id}`}>
          <div className="cardContaining">
            <div className="topCardImg">

            <img src={data[39].image} alt="" />
            </div>
            <div className="topCardContents">
              <h3 className="topNewsTitle">
              {data[6].title}
              </h3>
              <h5>....read more</h5>
            </div>
          </div>
      </Link>


      <Link className='blogItem-link' to={`/Fitness/${data[40].id}`}>
          <div className="cardContaining">
            <div className="topCardImg">

            <img src={data[40].image} alt="" />
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

export default Fitness;