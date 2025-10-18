function ExpectedWeather({ expected }) {
  console.log(expected);
  return (
    <section className="expected">
      <ul className="expected-list">
        {expected.map((ele, index) => {
          return (
            <li key={index}>
              <p>{ele.time.split(" ")[1]}</p>
              <figure>
                <img src={ele.condition.icon} />
              </figure>
              <p>
                {Math.floor(ele.temp_c)}
                <span>c</span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ExpectedWeather;
