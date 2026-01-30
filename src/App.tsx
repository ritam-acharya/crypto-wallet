import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import AccountProvider from "./context/AccountProvider";
import Passowrd from "./pages/Password";
import History from "./pages/History";

const App = () => {
  
  return <div className="min-h-[100vh] h-auto md:h-[100vh] w-[100vw] flex items-center justify-center md:overflow-hidden ">
    <BrowserRouter>
    <AccountProvider>
      <div className="py-4 md:py-6 lg:py-8 px-2 md:px-4 w-full md:w-[510px] lg:w-[680px] h-full md:h-[90vh] bg-black md:rounded-xl  md:shadow-md md:shadow-gray-900">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/onboarding" element={<Onboarding />}></Route>
          <Route path="/password" element={<Passowrd />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </AccountProvider>
    </BrowserRouter>
  </div>
}

export default App;