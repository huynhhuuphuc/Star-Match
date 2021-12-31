import React from "react";

const PlayNumber = (props) => (
  <button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

// Color Theme
const colors = {
  available: "lightgray", // so mac dinh
  used: "lightgreen", // so da su dung
  wrong: "lightcoral", // so bi sai
  candidate: "deepskyblue", // so dang chon
};

export default PlayNumber;
