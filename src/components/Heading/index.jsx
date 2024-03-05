import React from "react";

const sizes = {
  "3xl": "text-[55px] font-semibold",
  "2xl": "text-[34px] font-semibold",
  xl: "text-3xl font-semibold",
  "4xl": "text-6xl font-semibold",
  s: "text-[22px] font-semibold",
  md: "text-2xl font-semibold",
  xs: "text-xl font-semibold",
  lg: "text-[25px] font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-700 font-goudyoldstyle ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
