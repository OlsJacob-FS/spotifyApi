import React from "react";

export default function Card(props) {
  return (
    <div>
      <ul>
        <img src={props.img} alt="" />
        <ol>{props.title}</ol>
        <ol>{props.artist}</ol>
        <ol>{props.tracks}</ol>
      </ul>
    </div>
  );
}
