import React from "react";
import { Img } from "./..";

export default function MacBookPro16TwoRowTwo({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end w-full bg-black-900_33">
        <div className="flex flex-row justify-end w-full bg-black-900_33">
          <Img src="images/img_rectangle_4412.png" alt="image" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
