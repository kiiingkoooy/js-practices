import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

const ExerciseMenu = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [exData, setExData] = useState([]);

  const fetchData = () => {
    const ex9 =
      "https://js-practices-default-rtdb.asia-southeast1.firebasedatabase.app/ex9.json";
    const ex19 =
      "https://js-practices-default-rtdb.asia-southeast1.firebasedatabase.app/ex19.json";

    const getEx9 = axios.get(ex9);
    const getEx19 = axios.get(ex19);

    let loadedData = [];

    axios.all([getEx9, getEx19]).then(
      axios.spread((...allData) => {
        for (let i = 0; i < allData.length; i++) {
          for (const key in allData[i].data) {
            loadedData.push({
              id: key,
              title: allData[i].data[key].details.title,
            });
          }
        }
        setExData(loadedData);
      })
    );
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
    fetchData();
  }, []);

  const clickHandler = (data) => {
    navigate(`/exercises/${data.id}`, {
      state: {
        id: data.id,
      },
    });
  };

  return (
    <div className="mt-[8%]">
      {loading ? <Spinner /> : ""}
      <div className="flex justify-center text-[70px] font-bold mb-[5%] text-blue-800">
        Exercises
      </div>
      <div className="sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
        {exData?.map((data) => (
          <li className="list-none" key={data.id}>
            <div
              className="flex cursor-pointer justify-center mt-5 hover:text-blue-600 hover:text-[20px] hover:font-bold"
              onClick={() => clickHandler(data)}
            >
              <p className="font-bold mr-1">{data.id.slice(1) + ".)"}</p>
              {data.title}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ExerciseMenu;
