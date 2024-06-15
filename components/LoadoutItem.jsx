import { useState } from "react";
import { GiPistolGun } from "react-icons/gi";
import LoadoutPoints from "./LoadoutPoints";

const LoadoutItem = ({ weaponName, weaponIcon, points }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowWeapon = () => {
    setShowDetails(!showDetails);
    console.log(showDetails);
  };

  return (
    <div className="wrapper-loadout">
      <button className="btn-loadout" type="button" onClick={handleShowWeapon}>
        <i>
          <GiPistolGun />
        </i>
        <p>{weaponName}</p>
      </button>

      {showDetails ? (
        <div>
          <i className="icon-large">
            <GiPistolGun />
          </i>
          <LoadoutPoints points={points} id={weaponName} />
        </div>
      ) : null}
    </div>
  );
};

export default LoadoutItem;
