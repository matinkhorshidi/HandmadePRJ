// import React, {useState, useEffect, useRef, useCallback} from 'react';
import React, { useRef } from 'react';
import Swiper from 'react-id-swiper';

// import IconsTop from "../Icons/IconsTop";
import {Link} from "react-router-dom";

// export const renderSlide = ({ id, ...rest }) => (
//     <EachItem {...rest} key={`${id}-slideContent`}   />
// );


const EachItem=(props)=>{

    let {bg,Name,Header,subHeader,id,btnTxt,btnLink}=props
    return(

        <div className={["   bg-cover position-relative 100vh ", bg].join(" ")}
             style={{backgroundImage: `url(${bg})`}} key={id}>
            <div className='w-100 px-4 d-flex flex-column h-100'>
                <div className='w-100 d-flex justify-content-between mt-1  '>
                    <h1 className='Due fw-bold text-white Fs-37-3-7'  >{Name}</h1>
                    <img src='/img/items/logo.png' alt="logo" className='logo-img'/>

                </div>
                <div className='w-100 d-flex justify-content-start mt-3 mt-lg-4 pt-0 pt-lg-5 mb-0 mb-md-1 mb-lg-4 pb-4 ml-links '  >
                    <div className='  ml-2   '>

                        <Link to='/' className=' text-decoration-none'>
                            <span className='color-Valencia Boilover   d-block rotation90 Fs-14-1-4 text-decoration-none'  >Home</span>
                        </Link>


                        <span
                              onClick={(e) => {
                                  window.location ="mailto:info@thehandmade.io";
                                  e.preventDefault();
                              }}   className="d-block">
                            <span className='Boilover text-white text-decoration-none d-block rotation90 Fs-14-1-4 mt-4 mt-lg-5 cursor-pointer '  >contact</span>
                        </span>

                    </div>
                </div>



                <div>
                    <h2 className='Due fw-bold text-white Fs-50-6'  >{Header}</h2>
                    <h3 className='Due text-white Fs-37-3-7'  >{subHeader}</h3>
                    {
                        id!==3?
                            <span
                                  onClick={(e) => {
                                      window.location =btnLink;
                                      e.preventDefault();
                                  }}  >
                                <span className='btn   color-Valencia bg-black Boilover btn-Slider-more fw-bold'  >{btnTxt}</span>
                            </span>
                                // <Link to={btnLink}  > <span className='btn   color-Valencia bg-black Boilover btn-Slider-more'>{btnTxt}</span></Link>
                    :
                            <div className='d-flex '>

                                <a href={btnTxt} target="_blank" rel="noopener noreferrer"  style={{width:'10vw'}}>
                                     {/*<img src='/img/items/google.png' className='me-3 social-img object-fit-container cursor-pointer w-100'  alt="twitter"/>*/}
                                    <img src='/img/items/google.png' className='  cursor-pointer w-100'  alt="twitter"/>

                                </a>
                                <a href={btnLink} target="_blank" rel="noopener noreferrer" className='ms-2'  style={{width:'10vw'}}>

                                          <img src='/img/items/apple.png' className='  cursor-pointer w-100  '  alt="twitter"/>


                                </a>
                            </div>


                    }
                </div>
                <div className=' d-flex mt-auto w-100'  >
                    <div className='w-100 d-flex  justify-content-between align-items-center mb-1 mb-lg-3'>
                        <p className='Boilover  color-gray mb-0 Fs-12-1 mb-0' >Handmade Interactive
                            LLC, All Right Reserved</p>

                        <div className='d-flex  '>
                            <Link to='https://twitter.com/handmadellc'>
                                <img src='/img/items/twitter.png' className='me-3 social-img object-fit-container cursor-pointer'  alt="twitter"/>
                            </Link>
                            <Link to='https://www.youtube.com/channel/UCi6xob2DaoNcGRNnhoRGNpQ'>
                                <img src='/img/items/youtube.png' className='me-3 social-img object-fit-container cursor-pointer'  alt="youtube"/>
                            </Link>
                            <Link to='https://www.instagram.com/thehandmade.io/'>
                                <img src='/img/items/instagram.png'  className='me-3 social-img object-fit-container cursor-pointer'  alt="instagram"/>
                            </Link>
                            <Link to='https://www.linkedin.com/company/handmadeinteractive'>
                                <img src='/img/items/linkedin.png' className='me-3 social-img object-fit-container cursor-pointer'  alt="linkedin"/>
                            </Link>
                            <Link to='https://www.facebook.com/TicketToHeavenGame/'>
                                <img src='/img/items/facebook.png' className='me-5 social-img object-fit-container cursor-pointer' alt="facebook"/>
                            </Link>

                        </div>

                        <span
                              onClick={(e) => {
                                  window.location ="mailto:info@thehandmade.io";
                                  e.preventDefault();
                              }} >
                            <span className='Boilover  text-white Fs-12-1  ' >info@thehandmade.io</span>
                        </span>

                    </div>

                </div>

            </div>



        </div>
    )
}

const Slider = (props) => {
    const swiperRef = useRef(null);
    const initialSlide = 0;

    // const [sliderIndex, updateCurrentIndex] = useState(0);


    const params = {
        initialSlide: initialSlide || 0,
        // rtl: "ltr",
        slidesPerView: 1,
        speed: 700,
        // centeredSlides: true,
        // spaceBetween: 8,
        loop: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        // },

        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
                return '<span class="' + className + ' rotation90 '+ '">' +'0' + (index + 1) + '</span>';
            }
        },
        direction: 'vertical',
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true
        // }

    }
    // const updateIndex = useCallback(
    //
    //     () =>{
    //
    //         // dispatch(HOME_SLIDER(swiperRef.current.swiper.realIndex))
    //         updateCurrentIndex(swiperRef.current.swiper.realIndex)} ,
    //     []
    // );
    //
    // useEffect(() => {
    //     const swiperInstance = swiperRef.current.swiper;
    //
    //     if (swiperInstance) {
    //
    //         swiperInstance.on("slideChange", updateIndex);
    //     }
    //
    //     return () => {
    //         if (swiperInstance) {
    //             swiperInstance.off("slideChange", updateIndex);
    //         }
    //     };
    // }, [updateIndex]);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };



    const SliderInside = [
        {bg: "/img/bg/slide1_cover.png",
            Name:"THE LAST SCENT OF LOVE",
            Header:"THE LAST SCENT OF LOVE",
            subHeader:"STORY OF LOVE, AND LIBERATION",
            id:1,
            btnTxt:"COMING SOON",
            btnLink:"/",
        },
        {bg: "/img/bg/slide2_cover.png",
            Name:"TICKET TO HEAVEN",
            Header:"THE GRAND TOURNAMENT OF LIFE AND DEATH",
            subHeader:"FIGHT TO HEAVEN OR STAY IN HELL",
            id:2,
            btnTxt:"Learn More",
            btnLink:"http://tickettoheaven.thehandmade.io/",
        },
        {bg: "/img/bg/slide3_cover.png",
            Name:"HYPER CASUALS",
            Header:"LET THE FUN BEGIN!",
            subHeader:"HYPER CASUALS FOR HYPER TIMES",
            id:3,
            btnTxt:'https://play.google.com/store/apps/dev?id=7540410499310856189',
            btnLink:"https://apps.apple.com/us/developer/shima-ghafouri/id1534210976",

        },
        {bg: "/img/bg/slide4_cover.png",
            Name:"GET IN TOUCH",
            Header:"INTERESTED IN WORKING WITH US",
            subHeader:"SEND US A MESSAGE ABOUT YOUR BUSINESS",
            id:4,
            btnTxt:"Drop A Message",
            btnLink:"mailto:info@thehandmade.io",
        }
 ]


    return (
        <div className=" position-relative" id='main'>
            <Swiper {...params} ref={swiperRef}>

                {
                    SliderInside.map(EachItem)

                }

            </Swiper>
            <div className='position-absolute  d-flex flex-column arrowposition' style={{ zIndex:3}}>

                      <span onClick={goNext} className='social-img d-flex justify-content-end' >
                    <img src="/img/items/up-arrow.svg" alt="up" className=' w-80  object-fit-container cursor-pointer'/>
                          {/*<img src="/img/items/up-arrow.svg" alt=""/>*/}
                </span>

                      <span onClick={goPrev} className='social-img d-flex justify-content-end mt-2 mt-lg-3 '>
                    <img src="/img/items/down.svg" alt="down" className=' w-80 social-img object-fit-container cursor-pointer'/>
                          {/*<img src="/img/items/up-arrow.svg" alt=""/>*/}
                </span>


            </div>
        </div>
    );
};

export default Slider;