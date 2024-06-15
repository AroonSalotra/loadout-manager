import LoadoutItem from "./LoadoutItem";
import LoadoutInfo from "../data/loadout-info.json";
import { useEffect } from "react";

const LoadoutItems = () => {
  useEffect(() => {
    console.log(LoadoutInfo);
  }, []);

  return (
    <div className="container-loadout">
      {LoadoutInfo.map(({ weaponName, weaponIcon }) => {
        return (
          <LoadoutItem
            key={weaponName}
            weaponName={weaponName}
            weaponIcon={weaponIcon}
          />
        );
      })}
    </div>
  );
};

export default LoadoutItems;
