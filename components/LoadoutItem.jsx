import { GiPistolGun } from "react-icons/gi";

const LoadoutItem = () => {
  return (
    <button className="btn-loadout" type="button">
        <i><GiPistolGun /></i>
        <p>Weapon</p>
    </button>
  );
};

export default LoadoutItem;
