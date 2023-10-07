import Card from "../../Common/Card"

 

const PopularCard = ({items}) => {
  return (
     <div className='grid md:grid-cols-3 gap-10 my-5'>
     {/* {
         items.map(item => <Card
             key={item._id}
             item={item}
         ></Card>)
     } */}
     {
           items.slice(0,3).map(item => <Card
               key={item._id}
               item={item}
               ></Card>)
     }
 </div>
  )
}

export default PopularCard