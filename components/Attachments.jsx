import WeaponAttachments from "../data/attachments.json";
import { useEffect, useState } from "react";

const Attachments = () => {
  const [getAttachments, setGetAttachments] = useState(null);

  useEffect(() => {
    if (!getAttachments) setGetAttachments(WeaponAttachments);
  }, []);
  return (
    <>
      {getAttachments
        ? getAttachments.map(({ attachmentName }) => {
            return (
              <div className="wrapper-attachments">
                <p>{attachmentName}</p>
              </div>
            );
          })
        : null}
    </>
  );
};

export default Attachments;
