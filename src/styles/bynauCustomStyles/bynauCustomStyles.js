const styles = {
  NavPadX: "mx-36",
  NavPadY: "my-4",
  marginXlayout: "mx-24",
  bannerBTN:
    "py-1.5 px-3 bg-bgLemonBlueDark rounded-lg text-sm font-arial font-semibold text-gray-100",
  borderAroundLight: "border border-gray-300 ",
  borderR: "border-r border-solid border-gray-200 w-2 h-4",
  borderR2: "border-r border-solid border-gray-400 w-2 h-8",
  transition: "transition-all ease-in-out duration-600 delay-300",
  transitionLight: "transition-all ease-in-out duration-300 delay-100",
};
export const flexLayout = {
  flexBetween: "flex justify-between ",
  flexRowBetween: "flex flex-row justify-between",
  flexRowCenterBetween: `flex flex-row justify-between items-center `,
  flexRow: "flex flex-row",
  flexRowReverse: "flex flex-row-reverse",
  flexRowCenter: "flex flex-row items-center",
  flexAround: "flex flex-row justify-around",
  flexEvenly: "flex flex-row justify-evenly",
  flexCenter: "flex justify-center items-center",
  flexCol: "flex flex-col",
  flexColCenter: "flex flex-col items-center",
  flexColStart: "flex flex-col  items-start ",
  flexMainLayoutOne: "flex flex-row basis-full gap-x-4",
  flexMainChildOne: "min-w-[20%] w-[20%] max-w-[20%]",
  flexMainChildTwo: "min-w-six w-six max-w-six",
  flexMainChildThree: "max-w-two w-two max-w-two",
};
export const gridLayout = {
  homeMainLayoutOne: " grid grid-cols-1 lg:grid-cols-12 gap-12",
  homeMainChildOne: "col-span-6",
  homeMainChildTwo: "col-span-3",
  homeMainChildThree: "col-span-3",
};
export const textStyles = {
  headingone: "text-3xl text-black font-raleway font-black tracking-tight",
  headingtwo: "text-3xl text-gray-700 font-roboto font-black tracking-wide",
  headingthree:
    "text-2xl text-gray-700 font-opensans font-normal tracking-normal",
  headingfour: "",
  headingfive: "",
  headingsix: "",
  mainText: "text-xss font-arial text-deepGray tracking-wide",
  mainTextCustom: " tracking-wider font-arial",
};
export const fontStyles = {};
export const colorStyles = {
  bgBlueDark: "bg-bgBlueDark",
  bgDarkWhite: "bg-bgcolor",
  GrayNormal: "text-gray-400",
};
export const hoverStyles = {
  redTextGroup: "group-hover:text-darkRed",
};
export default styles;
