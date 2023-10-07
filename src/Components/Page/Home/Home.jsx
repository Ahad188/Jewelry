import Banner from "../Banner/Banner"
import Hero from "../Hero/Hero"
import Location from "../Location/Location"
import New from "../New/New"
import Popular from "../Popular/Popular"
import PopularCard from "../Popular/PopularCard"
import ShopCard from "../ShopCard/ShopCard"
import UpComing from "../UpComing/UpComing"

 

const Home = () => {
  return (
     <>
     <Banner/>
     <UpComing/>
     <Popular/>
     <Hero/>
     <PopularCard/>
     <ShopCard/>
     <Location/>
     <New/>
     </>
  )
}

export default Home