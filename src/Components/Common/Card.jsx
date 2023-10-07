 
 
 const Card = ({item}) => {
     const { name, photo, price, rating, category, _id } = item;
   return (
     <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} className="h-[200px]" alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-orange-400">Rating:{ rating}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handelAddtoCard(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
   )
 }
 
 export default Card