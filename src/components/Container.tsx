import { type ElementType } from "react";

type ContainerProps = {
  as: ElementType; //valid identifier of a component (button)
};

export default function Container({ as }: ContainerProps) {
  const Component = as;
  return <Component />;
}
