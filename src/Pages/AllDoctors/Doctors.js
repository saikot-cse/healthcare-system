import { useEffect, useState } from "react";
import { Doctor } from "./Doctor";
import stethoscope from "../../assets/icons/stethoscope.png";
export const Doctors = () => {
  const [doctor, setDocrtor] = useState();
  const [filteredItems, setFilteredItems] = useState([]);
  const [searching, setSearching] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/doctor", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDocrtor(data));
  }, []);
  const handleQuery = (e) => {
    console.log(e);
    // e.preventDefault();
    if (e === "") {
      setSearching(false);
    } else {
      setSearching(true);
    }
    const findDoctor = doctor.filter((doctor) => doctor.name.toLowerCase().includes(e.toLowerCase()));
    setFilteredItems(findDoctor);
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
          {filteredItems?.map((doctor) => (
            <Doctor key={doctor?._id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {doctor?.map((doctor) => (
            <Doctor key={doctor?._id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
};
