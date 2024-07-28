import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
export default function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"
    return (
        <div className="grid h-[500px] bg-red-500 grid-row-3">
            {isLoading && <Loader />}
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    )
}















