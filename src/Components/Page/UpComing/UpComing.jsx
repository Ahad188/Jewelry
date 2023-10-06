import bg1 from '../../../assets/banner/bg-1.jpg'
import bg2 from '../../../assets/banner/bg-2.jpg'
import bg3 from '../../../assets/banner/bg-3.jpg'

const UpComing = () => {
  return (
    <div className='container'>
    <h3 className='text-center my-5 text-xl text-orange-400'>UPComing</h3>  
    <div className="md:grid md:grid-cols-3 ">
    <div className="card w-80 bg-base-100 shadow-xl image-full my-4">
  <figure><img src={bg1} alt="Shoes" /></figure>
  <div className="card-body">
  <p className='card-title text-gray-500'>New Design</p>
  <h2>Small design Rings</h2>
  <span className='text-orange-400'>Sale 20% </span>
    
  </div>
</div>
    <div className="card w-80 bg-base-100 shadow-xl image-full my-4">
  <figure><img src={bg2} alt="Shoes" /></figure>
  <div className="card-body">
  <p className='card-title text-gray-500'>Bestselling Rings</p>
  <h2>White gold rings</h2>
  <span className='text-orange-400'>Sale 10% </span>
  </div>
</div>
    <div className="card w-80 bg-base-100 shadow-xl image-full my-4">
  <figure><img src={bg3} alt="Shoes" /></figure>
  <div className="card-body">
  <p className='text-gray-500 card-title'>Featured Rings</p>
  <h2>Platinum Rings</h2>
  <span className='text-orange-400'>Sale 30% </span>
    
  </div>
</div>
    </div>
    
     </div>
     
  )
}

export default UpComing