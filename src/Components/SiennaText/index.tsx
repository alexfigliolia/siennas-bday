import React, { Component } from "react";
import "./styles.scss";

export class SiennaText extends Component {
  static hi = "HI".split("");
  static sienna = "SIENNA".split("");

  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <div className="sienna-text">
        <h1 id="hi">
          {SiennaText.hi.map((letter, i) => {
            return (
              <div className="text-letter" key={`${letter}-${i}`}>
                {letter}
              </div>
            );
          })}
        </h1>
        <h1 id="sienna">
          {SiennaText.sienna.map((letter, i) => {
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
