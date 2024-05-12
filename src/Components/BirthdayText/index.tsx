import React, { Component } from "react";
import "./styles.scss";

export class BirthdayText extends Component {
  static happy = "HAPPY".split("");
  static birthday = "BIRTHDAY".split("");

  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <div className="birthday-text">
        <h1 id="happy">
          {BirthdayText.happy.map((letter, i) => {
            return (
              <div className="text-letter" key={`${letter}-${i}`}>
                {letter}
              </div>
            );
          })}
        </h1>
        <h1 id="birthday">
          {BirthdayText.birthday.map((letter, i) => {
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
