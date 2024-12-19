const BannerCta = () => {
  return (
    <div className="row">
      <form action="#">
        <div className="check__area">
          <div className="check__area-item">
            <p>
              Project name
              <input id="date" type="text" />
            </p>
          </div>
          <div className="check__area-item">
            <p>
              Project developer
              <input id="date2" type="text" />
            </p>
          </div>
          <div className="check__area-item">
            <div className="check__area-item-room">
              <p>Market Segment</p>
              <select className="select" name="select">
                <option value="1">RCR</option>
                <option value="2">OCR</option>
                <option value="3">CCR</option>
           
              </select>
            </div>
          </div>
          <div className="check__area-item button">
            <button className="theme-btn" type="submit">
              FILTER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BannerCta;
