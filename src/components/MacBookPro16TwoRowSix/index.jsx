import React from "react";
import { Img } from "./..";

export default function MacBookPro16TwoRowSix({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full">
        <div className="h-[689px] w-full relative">
          <Img
            src="images/img_rectangle_4410.png"
            alt="image_five"
            className="justify-center h-[689px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <div className="justify-center h-[688px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-black-900_33 absolute" />
        </div>
      </div>
    </div>
  );
}
