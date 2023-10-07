 

const Hero = () => {
  return (
    <div className="container mx-auto ">

<div className="hero h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/n72SJYq/banner2222.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <p className="mb-5 text-3xl font-bold text-orange-400">Sale Off 20% All Products</p>
       <h1 className="text-2xl text-white">New Trending Collection</h1>
       <span className="text-gray-300 text-xl">Best Design makes you more special.</span> <br />
      <button className="btn my-5"> Shop Now</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero