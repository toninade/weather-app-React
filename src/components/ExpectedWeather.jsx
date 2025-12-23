import "../sass/components/expected.scss";

function ExpectedWeather({ expected }) {
  return (
    <section className="expected">
      <ul className="expected-list">
        {expected.map((ele, index) => {
          return (
            <li key={index}>
              <p>{ele.time.split(" ")[1]}</p>
              <figure>
                <img
                  src={`https:${ele.condition.icon}`}
                  fetchPriority="high"
                  width="40"
                  height="40"
                  alt="expect img"
                />
              </figure>
              <p>
                {Math.floor(ele.temp_c)}
                <span>°C</span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ExpectedWeather;
