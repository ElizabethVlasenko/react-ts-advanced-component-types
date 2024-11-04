import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "link";
} & ComponentPropsWithoutRef<"a">;

export default function Button(props: ButtonProps | AnchorProps) {
  if (props.el === "link") {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
