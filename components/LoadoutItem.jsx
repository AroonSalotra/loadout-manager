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
    // <button className="wrapper-loadout">
    <button className="btn-loadout" type="button" onClick={handleShowWeapon}>
      <div>
        <i className="icon-large">
          <GiPistolGun />
        </i>
        <p className="weapon-name">{weaponName}</p>
        <LoadoutPoints points={points} id={weaponName} />
      </div>
    </button>
    // </button>
  );
};

export default LoadoutItem;
