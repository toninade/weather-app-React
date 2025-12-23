import "../sass/components/currentWeather.scss";

const CurrentWeather = ({ current }) => {
  console.log(current);
  return (
    <section className="current-weather">
      <p className="cityName">{current.city}</p>
      <figure>
        <img
          src={`https:${current.imgUrl}`}
          fetchPriority="high"
          width="155"
          height="155"
          style={{ width: "120px", height: "auto" }}
          alt="current weather"
        />
      </figure>
      <h1>
        {current.temp_c} <span>°C</span>
      </h1>
      <p>{current.txt}</p>
    </section>
  );
};

export default CurrentWeather;
