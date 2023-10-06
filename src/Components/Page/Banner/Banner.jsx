import img1 from '../../../assets/slider/1.png'
import img2 from '../../../assets/slider/2.jpg'
import img3 from '../../../assets/slider/3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import './style.css'
const Banner = () => {
  return (
    <div className="container mx-auto">

<>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='relative'>
          <img src={img1} alt="" />
               <div className=' md:text-xl md:absolute md:mt-[-30%] md:ms-10 z-10'>
                    <p className='text-slate-500 my-2'>exclusive offer -20% off this week</p>
                    <h1 className='text-orange-400'>Necklace</h1>
                    <span className='text-gray-400 my-2'>22 Carat gold necklace for wedding</span>
                    <p >starting at <span className="text-orange-400">Rs. 75,999</span></p>
                    <a href="#" className="btn mt-3">Shop Now</a>
                    
               </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
          <img src={img2} alt="" />
               <div className=' md:text-xl md:absolute md:mt-[-30%] md:ms-10 z-10'>
                    <p className='text-slate-500 my-2'>exclusive offer -40% off this week</p>
                    <h1 className='text-orange-400'>Earings and Pendant</h1>
                    <span className='text-gray-400 my-2'>Complete bridal set with white pearls</span>
                    <p >starting at <span className="text-orange-400">Rs. 89,499</span></p>
                    <a href="#" className="btn mt-3">Shop Now</a>
                    
               </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
          <img src={img3} alt="" />
               <div className=' md:text-xl md:absolute md:mt-[-30%] md:ms-10 z-10'>
                    <p className='text-slate-500 my-2'>exclusive offer -10% off this week</p>
                    <h1 className='text-orange-400'>Wedding Rings</h1>
                    <span className='text-gray-400 my-2'>Ashirwaad Special wedding rings for couples.</span>
                    <p >starting at <span className="text-orange-400">Rs. 14,999</span></p>
                    <a href="#" className="btn mt-3">Shop Now</a>
                    
               </div>
          </div>
        </SwiperSlide>
         
         
      </Swiper>
    </>

    </div>
  )
}

export default Banner