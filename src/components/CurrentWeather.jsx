const CurrentWeather = ({ current }) => {
  return (
    <section className="current-weather">
      <p className="cityName">{current.city}</p>
      <figure>
        <img src={current.imgUrl} />
      </figure>
      <h1>
        {current.temp_c} <span>C</span>
      </h1>
      <p>{current.txt}</p>
    </section>
  );
};

export default CurrentWeather;
