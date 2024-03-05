import React from "react";
import { Img } from "./..";

export default function MacBookPro16TwoRowTwentyseven({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end w-full p-2 border-pink-900 border border-solid bg-gray-50 shadow-sm rounded-[5px]">
        <div className="flex flex-row justify-start w-full mt-[5px] gap-[3px] mx-auto max-w-[193px]">
          <Img src="images/img_image_230.png" alt="image230_one" className="w-[21%] object-cover" />
          <Img src="images/img_mask_group_51x150.png" alt="image_twentyone" className="w-[78%] object-cover" />
        </div>
      </div>
    </div>
  );
}
