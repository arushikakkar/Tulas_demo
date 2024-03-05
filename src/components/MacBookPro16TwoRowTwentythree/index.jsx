import React from "react";
import { Img } from "./..";

export default function MacBookPro16TwoRowTwentythree({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full p-2 border-pink-900 border border-solid bg-gray-50 shadow-sm rounded-[5px]">
        <div className="flex flex-row justify-start items-center w-full gap-[5px] max-w-[172px]">
          <Img src="images/img_image_233.png" alt="image233_one" className="w-[40%] object-cover" />
          <Img src="images/img_mask_group_27x99.png" alt="image_twenty" className="w-[58%] object-cover" />
        </div>
      </div>
    </div>
  );
}
