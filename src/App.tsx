import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./context/UserProvider";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";


export default function App() {
  return <div className="min-h-[100vh] h-auto md:h-[100vh] w-[100vw] flex items-center justify-center md:overflow-hidden ">
    <BrowserRouter>
    <UserProvider>
      <div className="py-4 md:py-6 lg:py-8 px-2 md:px-4 w-full md:w-[510px] lg:w-[680px] h-full md:h-[90vh] bg-black md:rounded-xl  md:shadow-md md:shadow-gray-900">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/onboarding" element={<Onboarding />}></Route>
        </Routes>
      </div>
    </UserProvider>
    </BrowserRouter>
  </div>
}