import Confetti from "canvas-confetti";
import React, { Component } from "react";
import "./styles.scss";

export class BirthdayText extends Component {
  private node?: HTMLElement;
  static happy = "HAPPY".split("");
  static birthday = "BIRTHDAY".split("");

  componentDidMount() {
    const nodes = document.querySelectorAll(
      "#birthday > .text-letter:first-of-type",
    );
    const node = nodes[0];
    if (node) {
      this.node = node as HTMLElement;
      this.node.addEventListener("transitionend", this.confetti);
    }
  }

  override shouldComponentUpdate() {
    return false;
  }

  override componentWillUnmount() {
    if (this.node) {
      this.node.removeEventListener("transitionend", this.confetti);
    }
  }

  private confetti = () => {
    void Confetti({
      particleCount: 100,
      spread: window.innerWidth / 4,
      origin: { y: 0.5 },
    });
  };

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
