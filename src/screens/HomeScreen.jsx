import AllShopList from "../components/AllShopList"
import BinaryTest from "../components/BinaryTest"
import DashDoneTasks from "../components/DashDoneTasks"
import HomeComponents from "../components/HomeComponents"
import Test from "../components/Test"

/// <Test/>   

const HomeScreen = () => {
    return (
        <>
         <BinaryTest />
         <div className="bg bg-red-500 h-4"></div>
         <DashDoneTasks />
        </>
    )
}

export default HomeScreen