import { useState } from "react";
import { GiPistolGun } from "react-icons/gi";

const LoadoutItem = () => {
  const { showWeapon, setShowWeapon } = useState(false);

  return (
    <div className="wrapper-loadout">
      <button className="btn-loadout" type="button">
        <i>
          <GiPistolGun />
        </i>
        <p>Weapon</p>
      </button>

      <i className="icon-large">
        <GiPistolGun />
      </i>
    </div>
  );
};

export default LoadoutItem;
