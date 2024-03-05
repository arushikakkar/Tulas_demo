import React from "react";
import { Img, Text } from "./..";

export default function MacBookPro16TwoRowvirtualtour({ virtualtour = "VIRTUAL TOUR", ...props }) {
  return (
    <div {...props}>
      <div className="h-[69px] w-full py-6 border-pink-900 border-2 border-solid bg-pink-900 shadow-xs relative">
        <Text
          as="p"
          className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !font-medium text-shadow-ts absolute"
        >
          {virtualtour}
        </Text>
        <Img
          src="images/defaultNoData.png"
          alt="image"
          className="justify-center h-px left-0 bottom-0 right-0 top-0 m-auto absolute"
        />
      </div>
    </div>
  );
}
