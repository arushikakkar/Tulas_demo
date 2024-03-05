import React from "react";
import { Heading, Img, Text, Button } from "./..";

export default function MacBookPro16TwoRowvector507({
  i = "I",
  ndustry = "ndustry supported Center for Innovation, Research & Entrepreneurship ( CIRE )",
  groupfortytwo = "1",
  price = "CENTER FOR INNOVATION, RESEARCH AND ENTREPRENEURSHIP",
  two = "2",
  p2000highly = "2000+ HIGHLY CITED RESEARCH PAPERS",
  three = "3",
  price1 = "APPROVED BY MSME AND GOVT OF INDIA",
  four = "4",
  p24x7on = "24 X 7 ON CAMPUS MEDICAL ASSISTANCE",
  five = "5",
  wellequipped = "WELL EQUIPPED LIBRARY WITH 70000+ BOOKS",
  six = "6",
  price2 = "NSS UNIT AT TULAS LED BY MINISTRY OF YOUTH AFFAIRS AND SPORTS",
  seven = "7",
  price3 = "NCC BATTALION AT TULAS LED BY MINISTRY OF DEFENCE",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full p-5 bg-white-A700">
        <div className="h-[133px] w-px bg-cyan-800" />
        <div className="flex flex-row justify-center w-full mb-[59px] max-w-[1496px]">
          <div className="flex flex-row justify-start items-center w-full gap-px">
            <div className="flex flex-row justify-start w-[53%]">
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[550px] w-full relative">
                      <Img
                        src="images/img_rectangle_4369.png"
                        alt="image_six"
                        className="justify-center h-[550px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="justify-center h-[548px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Img
                          src="images/img_group_3.svg"
                          alt="image_seven"
                          className="justify-center h-[548px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <Img
                          src="images/defaultNoData.png"
                          alt="image_eight"
                          className="h-[28px] w-[28px] top-[23%] right-0 left-0 m-auto object-cover absolute"
                        />
                      </div>
                      <div className="justify-center h-[550px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Img
                          src="images/img_rectangle_4369.png"
                          alt="image_nine"
                          className="justify-center h-[550px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="justify-center h-[548px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <Img
                            src="images/img_group_3.svg"
                            alt="image_ten"
                            className="justify-center h-[548px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <div className="flex flex-row justify-start items-start w-[79%] gap-3 bottom-[1%] right-0 left-0 m-auto absolute">
                            <div className="flex flex-col items-center justify-start h-[82px] w-[82px]">
                              <div className="flex flex-col items-center justify-start h-[82px] w-[82px]">
                                <Button size="lg" variant="outline" className="min-w-[82px]">
                                  {i}
                                </Button>
                              </div>
                            </div>
                            <Heading size="xl" as="h1" className="w-[85%] mt-1 !text-white-A700">
                              {ndustry}
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[48%] gap-[27px]">
              <div className="flex flex-row justify-start items-start w-full gap-4">
                <div className="flex flex-row justify-start items-center w-[15%] mt-1.5">
                  <div className="h-px w-[64%] rotate-[-90deg] bg-cyan-800" />
                  <div className="flex flex-col items-center justify-start h-[37px] w-[37px]">
                    <Text
                      size="xl"
                      as="p"
                      className="flex justify-center items-center h-[37px] w-[37px] border-cyan-800 border border-solid bg-cyan-800 text-center"
                    >
                      {groupfortytwo}
                    </Text>
                  </div>
                </div>
                <Heading size="s" as="h2" className="w-[84%] !text-cyan-800 tracking-[1.10px]">
                  {price}
                </Heading>
              </div>
              <div className="flex flex-col w-[93%] gap-[41px]">
                <div className="flex flex-row justify-start items-center w-[88%] mr-20 gap-4">
                  <div className="h-[37px] w-[18%] relative">
                    <Text size="xl" as="p" className="w-max right-[12%] bottom-0 top-0 m-auto !text-cyan-800 absolute">
                      {two}
                    </Text>
                    <Img
                      src="images/img_group_27.svg"
                      alt="image"
                      className="justify-center h-[37px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                  </div>
                  <Heading size="s" as="h3" className="!text-gray-800_01 tracking-[1.10px]">
                    {p2000highly}
                  </Heading>
                </div>
                <div className="flex flex-row justify-start items-center w-[92%] mr-[54px] gap-[15px]">
                  <div className="h-[37px] w-[17%] relative">
                    <Text size="xl" as="p" className="w-max right-[12%] bottom-0 top-0 m-auto !text-cyan-800 absolute">
                      {three}
                    </Text>
                    <Img
                      src="images/img_group_27_cyan_800.svg"
                      alt="image"
                      className="justify-center h-[37px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                  </div>
                  <Heading size="s" as="h4" className="!text-gray-800_01 tracking-[1.10px]">
                    {price1}
                  </Heading>
                </div>
                <div className="flex flex-row justify-start items-center w-[91%] mr-16 gap-4">
                  <div className="h-[37px] w-[18%] relative">
                    <Text size="xl" as="p" className="w-max right-[12%] bottom-0 top-0 m-auto !text-cyan-800 absolute">
                      {four}
                    </Text>
                    <Img
                      src="images/img_group_27_cyan_800.svg"
                      alt="image"
                      className="justify-center h-[37px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                  </div>
                  <Heading size="s" as="h5" className="!text-gray-800_01 tracking-[1.10px]">
                    {p24x7on}
                  </Heading>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                  <div className="h-[37px] w-[16%] relative">
                    <Text size="xl" as="p" className="w-max right-[12%] bottom-0 top-0 m-auto !text-cyan-800 absolute">
                      {five}
                    </Text>
                    <Img
                      src="images/img_group_27_cyan_800.svg"
                      alt="image"
                      className="justify-center h-[37px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                  </div>
                  <Heading size="s" as="h6" className="!text-gray-800_01 tracking-[1.10px]">
                    {wellequipped}
                  </Heading>
                </div>
                <div className="flex flex-row justify-start items-start w-[92%] mr-14 gap-4">
                  <div className="h-[37px] w-[17%] mt-[5px] relative">
                    <Text size="xl" as="p" className="w-max right-[12%] bottom-0 top-0 m-auto !text-cyan-800 absolute">
                      {six}
                    </Text>
                    <Img
                      src="images/img_group_27_cyan_800.svg"
                      alt="image"
                      className="justify-center h-[37px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                  </div>
                  <Heading size="s" as="h5" className="w-[81%] !text-gray-800_01 tracking-[1.10px]">
                    {price2}
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-start items-start w-[93%] gap-3.5">
                <div className="h-[37px] w-[17%] mt-[5px] relative">
                  <Text size="xl" as="p" className="w-max right-[14%] bottom-0 top-0 m-auto !text-cyan-800 absolute">
                    {seven}
                  </Text>
                  <Img
                    src="images/img_group_27_cyan_800.svg"
                    alt="image_eleven"
                    className="justify-center h-[37px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                </div>
                <Heading size="s" as="h5" className="w-[81%] !text-gray-800_01 tracking-[1.10px]">
                  {price3}
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
