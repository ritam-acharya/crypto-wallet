import Footer from "../components/layout/Home/Footer";
import Header from "../components/layout/History/Header";
import Body from "../components/layout/History/Body";

const History = () => {
    return (
        <div className="h-full w-full relative flex items-center justify-start flex-col ">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default History