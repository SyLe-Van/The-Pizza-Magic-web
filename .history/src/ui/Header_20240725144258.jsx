import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
    return (
        <header>
            <Link to="/">Pizza Magic Co.</Link>
            <SearchOrder />
            <p>Sy Le</p>
        </header>
    )
}