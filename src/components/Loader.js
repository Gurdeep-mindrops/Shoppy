import React from "react";
import "../css/loader.css";
import { BarLoader } from "react-spinners";

function Loader() {
  return (
    <div className="loader">
      <BarLoader color={"#F593bc"} height={3} width={"100%"} loading />
    </div>
  );
}

export default Loader;
