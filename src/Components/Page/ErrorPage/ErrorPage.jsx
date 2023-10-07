import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import sad from '../../../../public/sad.json'
const ErrorPage = () => {
     const { error, status } = useRouteError();
  return (
     <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
       

        <div className="w-[500px] h-[500px]">
        <Lottie size={400} animationData={sad} loop={true} />
        </div>

        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-yellow-500">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">{error?.message}</p>
          <Link to="/" className="btn">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage