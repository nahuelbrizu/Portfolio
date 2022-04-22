import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "I'm interested in further learning to polish my skills",
          "I have my interest set on continuing improving my skills, constantly updating  my knowledg in the  Programming field ",
          "I { ❤ } programming",
          "Thanks for your time",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
