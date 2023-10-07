import usejewelry from "../../../hookes/usejewelry"
import Card from "../../Common/Card"

 

const ShopCard = () => {
     const [products] = usejewelry()
  return (
    <div className="container mx-auto my-10">
     <h3 className="text-center text-3xl my-5 font-bold ">Addible Products</h3>
     <div className="divider"></div> 
     <div className="md:grid md:grid-cols-3 gap-5 my-2">
     {
               products?.slice(0,6).map(item=><Card
              
               key={item.id}
               item={item}
               />)
          }
     </div>
         
    </div>
  )
}

export default ShopCard