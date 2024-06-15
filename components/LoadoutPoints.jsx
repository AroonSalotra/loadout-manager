import { useState, useEffect } from "react";
import PointIcon from "./PointIcon";

const LoadoutPoints = ({ points, id }) => {
  const [usedPoints, setUsedPoints] = useState([]);
  const [availablePoints, setAvailablePoints] = useState([]);

  useEffect(() => {
    if (!usedPoints.length) {
      for (let a = 0; a < 5; a++) {
        if (a < points) console.log("true " + points);

        if (a < points) setUsedPoints((usedPoints) => [...usedPoints, true]);
        else setUsedPoints((usedPoints) => [...usedPoints, false]);
      }
    }
  }, [points]);

  return (
    <>
      <div className="wrapper-point">
        {usedPoints.map((elem, elemId) => {
          return <PointIcon key={`${id} ${elemId}`} pointTaken={elem} />;
        })}
      </div>
    </>
  );
};

export default LoadoutPoints;
