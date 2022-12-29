import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../config/Data';
import '../Styling/Style.css';

const Hollywood = () => {

  const [data] = useContext(store);


  return (
    <div className='bollyContainer'>
      <div className="leftContained">
        <h1 className='bollyTitle'>HollyWood</h1>

      <Link className='blogItem-link' to={`/HollyWood/${data[31].id}`}>
        <div className="cardContained">
            <img src={data[31].image} alt="link not working" />
            <div className="cardContents">
                <h3 className="newsTitle">
                  {data[1].title}
                </h3>
                <div className="newsContent">
                  {data[1].content}
                </div>
                  {/* <h4 className="readMore">...read more</h4> */}
                  <h5>....read more</h5>
            </div>

        </div>
      </Link>

        <Link className='blogItem-link' to={`/HollyWood/${data[32].id}`}>
        <div className="cardContained">
            <img src={data[32].image} alt="link not working" />
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





      <Link className='blogItem-link' to={`/HollyWood/${data[33].id}`}>
        <div className="cardContained">
            <img src={data[33].image} alt="link not working" />
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



      <Link className='blogItem-link' to={`/HollyWood/${data[34].id}`}>
        <div className="cardContained">
            <img src={data[34].image} alt="link not working" />
            <div className="cardContents">
                <h3 className="newsTitle">
                  {data[19].title}
                </h3>
                <div className="newsContent">
                  {data[19].content}
                </div>
                  {/* <h4 className="readMore">...read more</h4> */}
                  <h5>....read more</h5>
            </div>

        </div>
      </Link>



      <Link className='blogItem-link' to={`/HollyWood/${data[35].id}`}>
        <div className="cardContained">
            <img src={data[35].image} alt="link not working" />
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



      <Link className='blogItem-link' to={`/HollyWood/${data[30].id}`}>
        <div className="cardContained">
            <img src={data[30].image} alt="link not working" />
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



      <Link className='blogItem-link' to={`/HollyWood/${data[36].id}`}>
        <div className="cardContained">
            <img src={data[36].image} alt="link not working" />
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

        
      </div>








      <div className="rightContained">
        <h1 className='bollyTitle'>Top Posts</h1>

        <Link className='blogItem-link' to={`/Hollywood/${data[31].id}`}>
            <div className="cardContaining">
              <div className="topCardImg">

              <img src={data[31].image} alt="" />
              </div>
              <div className="topCardContents">
                <h3 className="topNewsTitle">
                {data[1].title}
                </h3>
          
               
              </div>
            </div>
        </Link>


        <Link className='blogItem-link' to={`/HollyWood/${data[34].id}`}>
            <div className="cardContaining">
              <div className="topCardImg">

              <img src={data[34].image} alt="" />
              </div>
              <div className="topCardContents">
                <h3 className="topNewsTitle">
                {data[2].title}
                </h3>
                <h4 className="topReadMore">...read more</h4>
              
              </div>
            </div>
        </Link>


        <Link className='blogItem-link' to={`/Hollywood/${data[6].id}`}>
            <div className="cardContaining">
              <div className="topCardImg">

              <img src={data[6].image} alt="" />
              </div>
              <div className="topCardContents">
                <h3 className="topNewsTitle">
                {data[6].title}
                </h3>
                <h4 className="topReadMore">...read more</h4>
                <h4 className="topDateIssue">Issue date : <span>{data[6].date}</span></h4>
               
              </div>
            </div>
        </Link>


        <Link className='blogItem-link' to={`/HollyWood/${data[32].id}`}>
            <div className="cardContaining">
              <div className="topCardImg">

              <img src={data[32].image} alt="" />
              </div>
              <div className="topCardContents">
                <h3 className="topNewsTitle">
                {data[1].title}
                </h3>
                <h4 className="topReadMore">...read more</h4>
              
               
              </div>
            </div>
        </Link>


      </div>

    </div>
  )
}

export default Hollywood;