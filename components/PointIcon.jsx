import { useEffect, useState } from "react";


const PointIcon = ({pointTaken}) => {
    
    const [isPoint, setIsPoint] = useState(pointTaken)

    useEffect(() => {
        if (pointTaken) {
            setIsPoint("point-active")
        }
    }, [pointTaken])


    return ( 

        <i className={`icon-point ${isPoint}`}>

        </i>
     );
}
 
export default PointIcon;