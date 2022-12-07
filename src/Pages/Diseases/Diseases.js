import { useEffect, useState } from "react";
import { Disease } from "./Disease";
import "./style.css";
export const Diseases = () => {
  const [diseases, setDiseases] = useState();
  const [filteredItems, setFilteredItems] = useState([]);
  const [searching, setSearching] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/diseases", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDiseases(data));
  }, []);
  const handleQuery = (e) => {
    console.log(e);
    // e.preventDefault();
    if (e === "") {
      setSearching(false);
    } else {
      setSearching(true);
    }
    const findDisease = diseases.filter((disease) => disease.name.toLowerCase().includes(e.toLowerCase()));
    setFilteredItems(findDisease);
  };
  return (
    <div>
      <h3 className="text-primary text-center text-xl font-bold">Diseases</h3>
      <div className="slider__row__main__search">
        <div className="slider__row__main__search__input">
          <input
            className="slider__row__main__search__input__box"
            name="searchInput"
            type="text"
            onChange={(e) => {
              handleQuery(e.target.value);
            }}
            placeholder="Search"
          />
        </div>
      </div>
      {searching ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {filteredItems?.map((disease) => (
            <Disease key={disease?._id} disease={disease} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {diseases?.map((disease) => (
            <Disease key={disease?._id} disease={disease} />
          ))}
        </div>
      )}
    </div>
  );
};
