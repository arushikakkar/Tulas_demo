import React from "react";
import { Img, Text } from "./..";

export default function MacBookPro16TwoRowFortyeight({ campus = "CAMPUS", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end items-center w-[74%] overflow-auto">
        <div className="flex flex-row justify-start items-center w-full">
          <div className="h-[559px] w-[47%] z-[1] shadow-xs relative">
            <Img
              src="images/img_rectangle_4373.png"
              alt="image_thirtytwo"
              className="justify-center h-[558px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-row justify-center w-full h-max left-0 bottom-0 right-0 top-0 p-2 m-auto bg-cyan-800_bf absolute">
              <div className="h-[535px] w-full my-[3px] border-white-A700 border border-solid" />
            </div>
          </div>
          <div className="flex flex-row justify-start w-[96%] ml-[-144px] p-[21px] bg-white-A700">
            <div className="flex flex-col items-center justify-start w-[66%] mt-[27px] ml-[252px] gap-[75px]">
              <div className="h-[720px] w-full shadow-md relative">
                <Img
                  src="images/img_rectangle_4373_720x1046.png"
                  alt="image"
                  className="justify-center h-[720px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="justify-center h-[690px] w-[98%] left-0 bottom-0 right-0 top-0 m-auto border-pink-900 border border-solid absolute" />
              </div>
              <div className="h-[59px] w-[70%] relative">
                <Img
                  src="images/img_group_71.png"
                  alt="image"
                  className="justify-center h-[59px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="justify-center h-[53px] w-[32%] left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Img
                    src="images/img_group_8.svg"
                    alt="image"
                    className="justify-center h-[53px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <Text
                    as="p"
                    className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-cyan-800 tracking-[-0.60px] text-center absolute"
                  >
                    {campus}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end w-[47%] ml-[-281px] z-[1]">
          <div className="h-[558px] w-full shadow-xs relative">
            <Img
              src="images/img_rectangle_4373_558x811.png"
              alt="image_thirtysix"
              className="justify-center h-[558px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-2 m-auto bg-cyan-800_bf absolute">
              <div className="h-[535px] w-full my-[3px] border-white-A700 border border-solid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
