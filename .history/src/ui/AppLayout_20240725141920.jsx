import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
export default function AppLayout() {
    const navigation = useNavigation()
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    )
}















