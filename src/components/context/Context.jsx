import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const apiKey = import.meta.VITE_API_KEY;
const initContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [erorrmsg, setErorrmsg] = useState(null);
  const [inptValue, setInptValue] = useState(null);

  useEffect(() => {
    const FetchMethod = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${inptValue}`
        );
        console.log(response.data);
      } catch (err) {
        setErorrmsg(JSON.stringify(err));
      }
    };
  }, []);

  return (
    <initContext.Provider value={{ data, erorrmsg, setInptValue }}>
      {children}
    </initContext.Provider>
  );
};

export default ContextProvider;

export const usecontextHook = () => {
  return useContext(initContext);
};
