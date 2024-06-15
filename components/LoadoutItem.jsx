import { useState } from "react";
import { GiPistolGun } from "react-icons/gi";

const LoadoutItem = ({ weaponName, weaponIcon }) => {
  const [showWeapon, setShowWeapon] = useState(false);

  const handleShowWeapon = () => {
    setShowWeapon(!showWeapon);
    console.log(showWeapon);
  };

  return (
    <div className="wrapper-loadout">
      <button className="btn-loadout" type="button" onClick={handleShowWeapon}>
        <i>
          <GiPistolGun />
        </i>
        <p>{weaponName}</p>
      </button>

      {showWeapon ? (
        <i className="icon-large">
          <GiPistolGun />
        </i>
      ) : null}
    </div>
  );
};

export default LoadoutItem;
