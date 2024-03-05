import React from "react";

const sizes = {
  "5xl": "text-[55px] font-normal",
  xs: "text-[15px] font-normal",
  lg: "text-[21px] font-normal",
  "6xl": "text-[80px] font-normal",
  s: "text-base font-normal",
  "2xl": "text-3xl font-light",
  "3xl": "text-[40px] font-normal",
  "4xl": "text-[50px] font-normal",
  xl: "text-[25px] font-normal",
  md: "text-xl font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-ttchocolatestrl ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
