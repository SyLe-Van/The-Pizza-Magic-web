import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";

function Home() {
  const username = useSelector(state => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="text-xl font-semibold md:text-3xl mb-8 ">
        The best pizza.
        <br />
        <span className="text-yellow-500 ">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {<CreateUser />}
    </div>
  );
}

export default Home;
