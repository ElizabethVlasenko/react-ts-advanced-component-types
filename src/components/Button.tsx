import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & { href?: never };

type AnchorProps = ComponentPropsWithoutRef<"a"> & { href?: string };

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  //typescript accepts props from both types, so that's why we need to specify href prop for button be type never and for link to be string, that way you can't assign button props to the a, but it's still possible to assign link props to the button, as href absence can't guarantee that it's a button.
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
