const heading = "heading";
const imgStyling = "images";
const element = (
  <div>
    <h1 className={heading}>Super Over League</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
      className={imgStyling}
    />
    <img
      src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
      className={imgStyling}
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
