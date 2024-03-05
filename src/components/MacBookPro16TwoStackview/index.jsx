import React from "react";
import { Img } from "./..";

export default function MacBookPro16TwoStackview({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto bg-black-900_33 absolute">
        <Img src="images/img_rectangle_4413.png" alt="image" className="w-full object-cover" />
      </div>
      <div className="justify-center h-[336px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-black-900_33 absolute" />
    </div>
  );
}
