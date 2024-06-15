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
        ? getAttachments.map(({ attachmentName, attachmentCost }) => {
            return (
              <>
                <button className="btn btn-attachment">
                  <p className="attachment-text">{attachmentName}</p>
                  <p className="attachment-cost">{attachmentCost}</p>
                </button>
              </>
            );
          })
        : null}
    </>
  );
};

export default Attachments;
