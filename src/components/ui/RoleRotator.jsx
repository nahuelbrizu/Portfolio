import React, { useEffect, useState } from "react";

const TYPE_SPEED = 45;
const DELETE_SPEED = 25;
const HOLD_MS = 1600;

/**
 * Small dependency-free typewriter used in the hero — cycles through `words`
 * one character at a time. Replaces the old `typewriter-effect` package.
 */
export default function RoleRotator({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | holding | deleting

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("holding"), HOLD_MS);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), HOLD_MS);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED);
      } else {
        setIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, index, words]);

  return (
    <span className="font-mono text-sm sm:text-base text-ink-muted">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-primary animate-blink align-middle" />
    </span>
  );
}
