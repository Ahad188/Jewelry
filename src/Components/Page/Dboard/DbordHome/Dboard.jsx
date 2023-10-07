import dash from '../../../../../public/computer.json'
import Lottie from "lottie-react";
const Dboard = () => {
  return (
    <>
     <div className="w-full p-5">
               
               <Lottie size={400} animationData={dash}  />
          </div>
    </>
  )
}

export default Dboard