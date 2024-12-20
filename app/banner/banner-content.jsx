import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const BannerContent = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="banner__area-title">
          <h5>
            Make wise decision today
          </h5>
          <div className="banner__area-title-video">
            <div className="video__play">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
