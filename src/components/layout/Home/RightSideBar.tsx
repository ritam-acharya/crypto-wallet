import Body from "./Body"
import Footer from "./Footer"
import Header from "./Header"


const RightSideBar = ({toggleNav}: {toggleNav: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div className="w-full lg:w-[85%] relative h-full lg:pl-4 flex flex-col items-center justify-center ">
            {/**  header  **/}
            
            <div className="hidden md:block w-full h-auto ">
                <Header toggleNav={toggleNav} />
            </div>
            <div className="block md:hidden fixed w-full h-auto top-0 right-0 ">
                <Header toggleNav={toggleNav} />
            </div>
            {/** body **/}
            <Body />
            {/**  footer  **/}
            <div className="hidden md:block w-full h-auto ">
                <Footer />
            </div>
            <div className="block md:hidden fixed w-full h-auto bottom-0 right-0 ">
                <Footer />
            </div>
        </div>
  )
}

export default RightSideBar