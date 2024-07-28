import { useSelector } from "react-redux";

function Username() {
    const username = useSelector(state => state.user.username);
    return (
        <div className="text-sm hidden font-semibold md:block">Sy Le</div>
    )
}

export default Username;