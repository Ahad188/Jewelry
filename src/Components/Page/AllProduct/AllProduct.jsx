import usejewelry from "../../../hookes/usejewelry"
import Card from "../../Common/Card"

 

const AllProduct = () => {
     const [product] = usejewelry()
  return (
    <div className="container mx-auto my-20">
         <div className="md:grid md:grid-cols-3 gap-10">
         {
               product.map(item=><Card
              
                    key={item.id}
                    item={item}
                    />)
          }
         </div>
    </div>
  )
}

export default AllProduct