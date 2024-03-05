import React from "react";
import { Img } from "./..";

export default function MacBookPro16TwoRowaerialviewon({ ...props }) {
  return (
    <div {...props}>
      <div className="h-[858px] w-full relative">
        <Img
          src="images/img_aerial_view_1.png"
          alt="aerialviewone"
          className="justify-center h-[858px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
        />
        <div className="justify-center h-[820px] w-[99%] left-0 bottom-0 right-0 top-0 m-auto border-cyan-800 border-[3px] border-solid absolute" />
      </div>
    </div>
  );
}
