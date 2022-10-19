export const fontLayout = {
  span: "break-words text-ellipsis antialiased whitespace-nowarp",
  p: "",
  href: "",
  button: "",
  ul: "list-none",
  li: "cursor-pointer",
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
  mainText2: "text-sm font-arial tracking-normal text-italic text-ellipsis",
  mainHeader: "text-md font-arial text-gray-800 font-semibold tracking-wider ",
  textLayout: "overflow-hidden whitespace-nowrap ",
  mainTextCustom: " tracking-wider font-arial",
};

const { headingfive, headingfour, mainText, mainTextCustom } = textStyles;
const styles = {
  NavPadX: "mx-36",
  NavPadY: "my-4",
  homeMainMX: "ml-40 mr-16",
  marginXlayout: "mx-24",
  marginYlayout: "py-10",
  bannerBTN:
    "py-1.5 px-3 bg-bgLemonBlueDark rounded-lg text-sm font-arial font-semibold text-gray-100",
  XBoxFull: "min-w-full w-full max-w-full",
  YBoxFull: "min-h-full h-full max-h-full",
  borderAroundLight: "border border-gray-300 ",
  borderR: "border-r border-solid border-gray-200 w-2 h-4",
  borderR2: "border-r border-solid border-gray-400 w-2 h-8",
  borderR3: "border-r border-solid border-gray-400 w-2",
  borderMain: "border-t border-gray-300 w-28 h-1",
  transition: "transition-all ease-in-out duration-600 delay-300",
  transitionLight: "transition-all ease-in-out duration-300 delay-100",
  transitionLinear: "transition ease-linear duration-300 dalay-100",
  imageCustom: "w-full h-full object-contain ",
  buttonCustom: `${mainTextCustom} shadow font-semibold text-sm`,
  testContainer: "border-2 border-solid border-red-500 h-20 rounded",
  boxFull: "w-full h-full min-w-full max-w-full",
  HorizontalScrollMain:
    "relative flex flex-row basis-full overflow-x-scroll scrollbar-thin overflow-y-hidden snap-proximity snap-x gap-x-2",
  HorizontalScrollCustom:
    "relative flex flex-row basis-full overflow-x-scroll scrollbar-thin overflow-y-hidden snap-proximity snap-x ",
  timerTextBox: `flex justify-center items-center rounded-lg bg-black w-6 h-6`,
  containerWrapper:
    " bg-white p-2  rounded-lg shadow-sm hover:shadow-lg border-2 ",
  link: "bg-transparent cursor-pointer touch-manipulation",
};
export const flexLayout = {
  flexStart: "flex justify-start ",
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
  flexColBetween: "flex flex-col justify-between",
  flexColStart: "flex flex-col  items-start ",
  flexMainLayoutOne: "flex flex-row basis-full gap-x-4",
  flexMainLayoutCustom: "flex flex-row basis-full ",
  flexMainChildOne: "min-w-two w-two max-w-two",
  flexMainChildTwo: "min-w-[55%] w-[55%] max-w-[55%]",
  flexMainChildThree: "min-w-two w-two max-w-two",
  flexMainChildOneMain: "min-w-[23.5%] w-[23.5%] max-w-[23.5%]",
  flexMainChildThreeMain: "min-w-[23.5%] w-[23.5%] max-w-[23.5%]",
  flexMainChildTwoMain: "min-w-[50%] w-[50%] max-w-[50%]",
  //
  flexCompanyLayout: `w-laptop`,
  flexCompanySectionOne: "w-full max-w-[200px] ",
  flexCompanySectionTwo:
    "w-full max-w-[784px]  md:max-w-[784px] lg:max-w-[1084px]",
};
export const gridLayout = {
  homeMainLayoutOne: " grid grid-cols-1 lg:grid-cols-12 gap-12",
  homeMainChildOne: "col-span-6",
  homeMainChildTwo: "col-span-3",
  homeMainChildThree: "col-span-3",
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
