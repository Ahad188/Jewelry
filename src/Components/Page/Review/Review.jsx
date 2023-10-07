 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
 
 
 
 
import { useQuery } from '@tanstack/react-query';
 
 

 
 const Review = () => {
     const {data: reviews=[]}= useQuery({
          queryKey:['reviews'],
          queryFn: async()=>{
               const res = await fetch('http://localhost:5000/reviews')
               return res.json()
          }
     })
     console.log(reviews);
   return (
     <div className="container mx-auto h-[400px] my-16">
          <h3 className="text-center text-3xl font-bold my-6">Costumer Reviews</h3>
        <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
          {reviews.map((review) => (
          <SwiperSlide className="bg-orange-400" key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
             
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-gray-600">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
   )
 }
 
 export default Review