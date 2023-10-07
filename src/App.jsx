import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import router from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="container w-[1240px] mx-auto">
     <AuthProvider>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
     </AuthProvider>
    </div>
  );
}

export default App;
