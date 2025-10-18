import imgErorr from "../../public/imgs/erorr.png";

const ComponentErorr = () => {
  return (
    <section className="Error-component">
      <img src={imgErorr} />
      <h5>Some Thing Wont Wrong</h5>
      <p>
        pleace , Make sure your device is connecting by internet or city name
        write Correctly
      </p>
    </section>
  );
};

export default ComponentErorr;
