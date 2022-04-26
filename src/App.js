import { useState } from "react";
import "./App.css";
import ColorPicker from "./Color.js";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [copy, setCopy] = useState("");

  const copyOn = (copynow) => {
    setCopy(copynow);
    console.log(copynow)
  };

  return (
    <div className="container">
      <div className="top">
        <h3 className="tlhead">UIColorPicker</h3>
        <h3 className="tldes">About LCO</h3>
      </div>
      <div className="middle">
        <h3 className="mhead">Click to Copy</h3>
        <h3 className="mdes">Always Perfect Color</h3>
      </div>
      <div className="bottom">
        <div className="btop">
          <h3 className="bleft">Feeling Red</h3>
          <button className="btn">Gradient</button>
        </div>

        <div className="cardsdiv">
          {ColorPicker.map((item) => (
            <>
              <div className="bleft item" style={{ display: `${item.dis}` }}>
                <span>{item.heading}</span>
              </div>

              {item.coloritem.map((sub) => (
                <>
                  <div className="cards">
                    <CopyToClipboard text={`${sub.color}`}>
                      <div
                        className="carditem"
                        style={{ backgroundColor: `${sub.color}` }}
                        onClick={() => copyOn(sub.color)}
                      ></div>
                    </CopyToClipboard>
                    {copy === `${sub.color}` ? (
                      <div className="carddes card1">copied <input className="checked" type="checkbox"  checked="true"  /></div>
                    ) : (
                      <div className="carddes">{sub.color} </div>
                    )}
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
