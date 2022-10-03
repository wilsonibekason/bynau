import React from "react";
import { useIcon } from "../../../../hooks/stateContext/IconContextProvider";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../styles/bynauCustomStyles/bynauCustomStyles";
const ContainerCard = () => {
  const { containerWrapper, XBoxFull } = styles;
  const { flexCol, flexCenter } = flexLayout;
  const { mainText, mainTextCustom } = textStyles;
  const { AiOutlineCreditCard } = useIcon();
  return (
    <>
      <div className={`w-[16%] max-w-[16%] ${containerWrapper} h-40`}>
        <div className={`${flexCol}  ${XBoxFull} space-y-3`}>
          <div className={`${flexCenter}`}>
            <AiOutlineCreditCard size={25} />
          </div>
          <div className="">
            <p
              className={`${mainTextCustom} text-sm  font-semibold text-gray-800 text-center`}
            >
              WorldWide shipping
            </p>
          </div>
          <div className={`${flexCenter}`}>
            <p className={`${mainText} leading-5 text-center`}>
              We ship to over 200 countries and regions, and our site comes in
              12 languages.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const HomeFooterTopUp = () => {
  const { flexMainLayoutCustom } = flexLayout;
  const { containerWrapper } = styles;
  return (
    <>
      <div className={`${flexMainLayoutCustom} gap-x-3`}>
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
      </div>
    </>
  );
};

export default HomeFooterTopUp;
