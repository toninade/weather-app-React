import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import "../sass/components/search.scss";

const SearchForm = ({ fetchData, getLocation }) => {
  const HandleSbmit = (e) => {
    e.preventDefault();
    const inputEle = e.target.querySelector(".search-inpt");
    const searchValue = !inputEle.value ? "cairo" : inputEle.value;
    fetchData(
      `https://api.weatherapi.com/v1/forecast.json?key=0a0f7393e6ff4740a13103427251710&q=${searchValue}&days=2`
    );
  };

  return (
    <section className="search-content">
      <form onSubmit={HandleSbmit} className="search-form">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="search"
          className="search-inpt"
          required
          placeholder="Enter City"
        />
      </form>
      <button
        className="location-btn"
        onClick={getLocation}
        aria-label="auto location"
      >
        <FontAwesomeIcon icon={faLocationCrosshairs} />
      </button>
    </section>
  );
};

export default SearchForm;
