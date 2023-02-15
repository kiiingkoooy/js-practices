import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ExerciseMenu = () => {
  const navigate = useNavigate();
  const [inst, setInst] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://js-practices-default-rtdb.asia-southeast1.firebasedatabase.app/ex9.json"
      );

      const resData = await res.json();
      const loadedData = [];

      for (const key in resData) {
        loadedData.push({
          id: key,
          title: resData[key]?.details.title,
          instruction: resData[key]?.details.instruction,
          samp_output: resData[key]?.details.samp_output,
        });
      }
      setInst(loadedData);
    };
    fetchData();
  }, [setInst]);

  const clickHandler = () => {

  };

  return (
    <div className="mt-[10%]">
      <div className="flex justify-center text-[45px] font-bold mb-[5%] text-blue-800">
        Exercises
      </div>
      {inst?.map((data) => (
        <li
          className="flex justify-center mt-2 cursor-pointer hover:text-blue-600 hover:text-[20px] hover:font-bold"
          key={data.id}
          onClick={clickHandler}
        >
          <p className="mr-1">{data.id.slice(1) + ".)"}</p>
          {data.title}
        </li>
      ))}
    </div>
  );
};

export default ExerciseMenu;
