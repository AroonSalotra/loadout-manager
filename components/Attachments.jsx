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
              <button className="attachment btn">
                <p>{attachmentName}</p>
              </button>
            );
          })
        : null}
    </>
  );
};

export default Attachments;
