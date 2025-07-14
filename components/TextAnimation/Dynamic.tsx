"use client";
import { ReactFitty } from "react-fitty";

const Dynamic = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <ReactFitty className={className}>{children}</ReactFitty>;
};

export default Dynamic;
