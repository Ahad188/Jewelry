import img1 from'../../../assets/banner/bg-2.jpg'
import img2 from'../../../assets/banner/bg-1.jpg'

const New = () => {
  return (
    <div className="container mx-auto bg-orange-300 h-[300px]">
           
          
             
               
                 
                        <div className="my-12 md:p-10">
                            <h2 className='text-center text-2xl'>Subscribe for Ashirwaad Magazines</h2>
                            <p className='text-center text-xl text-gray-500 my-5'>Get E-mail of all the updates about our lastest and special offers</p>
                            <div className="text-center my-5">
                                <form className="footer-newsletter">
                                <input type="email" placeholder=" Email address" className="input input-bordered" />
                                    <button className='ml-2 btn'>Subscribe</button>
                                </form>
                            </div>
                        </div>
                 
                
          
       
     
    </div>
  )
}

export default New