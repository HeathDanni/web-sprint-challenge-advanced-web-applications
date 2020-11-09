import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {getColors} from "../api/getColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect( () => { 
      getColors()
        .then(res => {
          setColorList(res.data);
        })
        .catch(err => {
          console.log(err)
        })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
