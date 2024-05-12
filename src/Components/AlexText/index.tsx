import React, { Component } from "react";
import "./styles.scss";

export class AlexText extends Component {
  static love = "LOVE".split("");
  static alex = "ALEX".split("");

  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <div className="alex-text">
        <h1 id="love">
          {AlexText.love.map((letter, i) => {
            return (
              <div className="text-letter" key={`${letter}-${i}`}>
                {letter}
              </div>
            );
          })}
        </h1>
        <h1 id="alex">
          {AlexText.alex.map((letter, i) => {
            return (
              <div className="text-letter" key={`${letter}-${i}`}>
                {letter}
              </div>
            );
          })}
        </h1>
      </div>
    );
  }
}
