import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/exercises");
  };
  return (
    <>
      <p className="flex justify-center text-[50px] font-bold text-blue-800 sm:mt-[25%] md:mt-[15%]">
        Welcome to JS Practices
      </p>

      <p className="flex justify-center text-[20px] mt-[3%] font-semibold text-blue-600">
        Where you can practice and improve your JS skills
      </p>
      <p className="flex justify-center text-[20px] mt-[3%] font-semibold text-blue-600">
        You may Redirect to:
        <span className="ml-[8px] cursor-pointer underline" onClick={clickHandler}>         
          Exercises
        </span>
      </p>
    </>
  );
};

export default Home;
