import React from 'react'

type Props = {
    boldText?: string;
    text?: string;
    color: string;
    type: "button" | "submit" | "reset" | undefined;
}

export default function Button({boldText, text, color, type}: Props) {
  return (
    <button className={color} type={type}>
      {boldText ? <b>{boldText}</b> : null}
      {text}
    </button>
  );
}
