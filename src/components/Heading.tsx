import { ReactNode } from "react";

const sizes = {
  "2xl": "text-3xl font-bold leading-[38px]",
  "3xl": "text-[35px] font-bold",
  "4xl": "text-xl md:text-[40px] font-bold md:leading-[51px]",
  "5xl": "text-[50px] font-bold",
  "6xl": "lg:text-7xl md:text-4xl text-2xl font-bold leading-[80px]",
  xs: "text-base",
  s: "text-[17px] font-semibold",
  md: "text-lg font-bold leading-[23px]",
  lg: "text-base md:text-xl font-semi-bold",
  xl: "text-[25px] font-bold leading-8",
};

interface Props {
  children: JSX.Element | string | ReactNode;
  size?: keyof typeof sizes;
  className?: string;
}

function Heading({ children, className = "", size = "md" }: Props) {
  return (
    <h3 className={`text-gray-900 ${className} ${sizes[size]}`}>{children}</h3>
  );
}

export default Heading;
