import React, { FC } from "react";

import {CajitaConEstilo} from './styles';


interface HelloWorldProps{
  name:string
}

const HelloWorld:FC<HelloWorldProps> = ({name}) => {
  return <div>
    <CajitaConEstilo>Jellou, {name}</CajitaConEstilo>
  </div>
}

export default HelloWorld;
