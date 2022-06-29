import React, { Component } from 'react';

const TextContainer = ({
  Name,
  Header,
  subHeader,
  id,
  btnTxt,
  btnLink,
  btn2Txt,
  btn2Link,
}) => {
  return (
    <>
      <h2 className="name-text">{Name}</h2>
      <h2 className="header-text">{Header}</h2>
      <h3 className="sub-header-text">{subHeader}</h3>
      {(id === 1 || id === 3 || id === 4) && (
        <>
          <span
            onClick={(e) => {
              window.location = btnLink;
              e.preventDefault();
            }}
          >
            <span className="btn1">{btnTxt}</span>
          </span>
          <span
            onClick={(e) => {
              window.location = btnLink;
              e.preventDefault();
            }}
          >
            <span className="btn2">{btn2Txt}</span>
          </span>
        </>
      )}
    </>
    // <Link to={btnLink}  > <span className='btn   color-Valencia bg-black Boilover btn-Slider-more'>{btnTxt}</span></Link>
    //    <div className="d-flex ">
    //      <a
    //        href={btnTxt}
    //        target="_blank"
    //        rel="noopener noreferrer"
    //        style={{ width: '10vw' }}
    //      >
    //        {/*<img src='/img/items/google.png' className='me-3 social-img object-fit-container cursor-pointer w-100'  alt="twitter"/>*/}
    //        <img
    //          src="/img/items/google.png"
    //          className="  cursor-pointer w-100"
    //          alt="twitter"
    //        />
    //      </a>
    //      <a
    //        href={btnLink}
    //        target="_blank"
    //        rel="noopener noreferrer"
    //        className="ms-2"
    //        style={{ width: '10vw' }}
    //      >
    //        <img
    //          src="/img/items/apple.png"
    //          className="  cursor-pointer w-100  "
    //          alt="twitter"
    //        />
    //      </a>
    //    </div>
  );
};

export default TextContainer;
