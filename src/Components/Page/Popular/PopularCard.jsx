import Card from "../../Common/Card";

 

 

const PopularCard = ({items}) => {
     console.log(items);
  return (
     <div className='grid md:grid-cols-3 gap-10 my-5'>
      {
          items?.slice(0,3).map(item=><Card
          key={item.id}
          item={item}
          />)
      }
 </div>
  )
}

export default PopularCard
// 

{/* {/* {
         items.map(item => <Card
             key={item._id}
             item={item}
         ></Card>)
     } */}
     {/* {
           items.map(item => <Card
               key={item._id}
               item={item}
               ></Card>)
     } */} 