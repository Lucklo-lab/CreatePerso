import React from "react";
//import { reactSelectStyleCustom, reactSelectStyleDefault } from '~/helper/const'


const bouton = (props) =>{
    
  const btnCss =  `btn ${props.typeBtn} ${props.css}`;// eslint-disable-next-line
  return  <button className={btnCss} onClick={props.clic} >{props.children}</button>
};

export default bouton;