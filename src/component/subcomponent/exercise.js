import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { useLocation } from "react-router-dom";

const Exercise = () => {
  const location = useLocation();
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
              instruction: allData[i].data[key].details.instruction,
              samp_output: allData[i].data[key].details.samp_output,
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

  let dataLoad = exData
    .filter((data) => data.id === location.state?.id)
    .map((data) => data);

  return (
    <div>
      {loading ? <Spinner /> : ""}
      {dataLoad?.map((data) => {
        return (
          <div key={data.id}>
            <div>{data.id}</div>
            <div>{data.title}</div>
            <div>{data.instruction}</div>
            <div>{data.samp_output}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Exercise;
