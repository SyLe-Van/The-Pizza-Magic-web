import { Link } from "react-router-dom";
import Username from "../features/user/Username";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
    return (
        <header className="bg-yellow-500 flex items-center justify-between uppercase py-3 px-4 border-b border-stone-200 sm:px-6">
            <Link className="tracking-widest" to="/">Pizza Magic Co.</Link>
            <SearchOrder />

            <Username />
            
        </header>
    )
}