import { useSelector } from "react-redux";

function Username() {
    useSelector(state => state.user);
    return (
        <div className="text-sm hidden font-semibold md:block">Sy Le</div>
    )
}

export default Username;