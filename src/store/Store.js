import React, { useContext, useState } from "react";

export const Data = React.createContext();
export const Loading = React.createContext();

export function useData() {
  return useContext(Data);
}

export function useLoader() {
  return useContext(Loading);
}

const Store = ({ children }) => {
  const [toBeLoaded, setToBeLoaded] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <Data.Provider value={{ toBeLoaded, setToBeLoaded }}>
      <Loading.Provider value={{ loading, setLoading }}>
        {children}
      </Loading.Provider>
    </Data.Provider>
  );
};

export default Store;
