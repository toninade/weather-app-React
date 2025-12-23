import axios from "axios";
import "./sass/absracts/reset.scss";
import ContextProvider from "./components/context/Context";
import CurrentWeather from "./components/CurrentWeather";
import ExpectedWeather from "./components/ExpectedWeather";
import SearchForm from "./components/SearchForm";
import Loading from "./components/Loading";
import { useEffect, useRef, useState } from "react";
import ComponentErorr from "./components/ComponentErorr";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const autofill = useRef();
  const [errorMsg, setErrorMsg] = useState(false);
  const [current, setCurrent] = useState({});
  const [expected, setExpected] = useState([]);
  const [loading, setLoading] = useState(true);

  // filter next 24 hours
  const filterHourly = (hourlyDate) => {
    const currenthour = new Date().setMinutes(0, 0, 0);
    const next24Hours = currenthour + 24 * 60 * 60 * 1000;

    const next24hoursDate = hourlyDate.filter(({ time }) => {
      const forecastTime = new Date(time).getTime();
      return forecastTime <= next24Hours && forecastTime >= currenthour;
    });

    setExpected(next24hoursDate);
  };
  //async function ofr fetch data
  const fetchData = async (link) => {
    try {
      setErrorMsg(false);
      const response = await axios(link);
      const city = response.data.location.name;
      const temp_c = Math.floor(response.data.current.temp_c);
      const txt = response.data.current.condition.text;
      const imgUrl = response.data.current.condition.icon;
      setCurrent({ city, temp_c, txt, imgUrl });
      console.log(response.data);
      const expected48Hours = [
        ...response.data.forecast.forecastday[0].hour,
        ...response.data.forecast.forecastday[1].hour,
      ];
      filterHourly(expected48Hours);
    } catch {
      setErrorMsg(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // function to get autmatic location
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchData(
          `https://api.weatherapi.com/v1/forecast.json?key=0a0f7393e6ff4740a13103427251710&q=${latitude},${longitude}&days=2`
        );
      },
      () => {
        alert(
          "location access denied , pleace enable permation to use this feature "
        );
      }
    );
  };

  //set default city name
  useEffect(() => {
    fetchData(
      `https://api.weatherapi.com/v1/forecast.json?key=0a0f7393e6ff4740a13103427251710&q=cairo&days=2`
    );
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <ContextProvider>
      {loading ? (
        <Loading />
      ) : (
        <section className="main-section">
          {/* search faild */}
          <SearchForm fetchData={fetchData} getLocation={getLocation} />
          {errorMsg ? (
            <>
              <ComponentErorr />
            </>
          ) : (
            <>
              {/* current weather */}
              <CurrentWeather current={current} />
              {/* expected weather */}
              <ExpectedWeather expected={expected} />
            </>
          )}
        </section>
      )}
    </ContextProvider>
  );
}

export default App;
