import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm"
import useCart from "../../../../hookes/useCart";

 
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
     const [cart] = useCart();
     const total = cart.reduce((sum, item) => item.price + sum, 0);
     const price = parseFloat(total.toFixed(2))
  return (
     <div className="w-full">
                
               <h2 className="text-center"> If you need product then Give dolor</h2>
               <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price}></CheckoutForm>
               </Elements>
          </div>
  )
}

export default Payment