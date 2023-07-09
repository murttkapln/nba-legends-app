import { useState } from "react";

const PlayCard = ({ name, img, statistics }) => {
  console.log(name);
  const [visible, setVisible] = useState(true);
  const handleClick = () => {
    setVisible(!visible);
  };
  console.log(name);
  return (
    <div className="col col-sm-6 col-md-4 col-lg-3">
      <div onClick={handleClick} className="card mt-2 mx-auto border-0">
        {visible ? (
          <div className="img-container">
            <img src={img} className="card-img-top " alt="player" />
          </div>
        ) : (
          <ul className="card-toogle  mx-auto mt-5">
            {statistics.map((statistic) => (
              <li>🏀{statistic}</li>
            ))}
          </ul>
        )}

        <div className="card-body p-2 border-0 btn btn-outline-light">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default PlayCard;
