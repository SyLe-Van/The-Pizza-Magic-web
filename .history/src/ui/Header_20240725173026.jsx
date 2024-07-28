import { Link } from "react-router-dom";
import Username from "../features/user/Username";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
    return (
        <header className="bg-yellow-500 uppercase">
            <Link className="tracking-widest" to="/">Pizza Magic Co.</Link>
            <SearchOrder />

            <Username />
            <p>Sy Le</p>
        </header>
    )
}