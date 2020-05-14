import React, { FC } from "react";

interface HelloWorldProps{
  name:string
}

const HelloWorld:FC<HelloWorldProps> = ({name}) => {
  return <div>
    <h1>Jellou, {name}</h1>
  </div>
}

export default HelloWorld;
