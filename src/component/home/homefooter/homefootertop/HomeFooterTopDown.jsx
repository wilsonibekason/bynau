import React from "react";
import PropTypes from "prop-types";
import { useIcon } from "../../../../hooks/stateContext/IconContextProvider";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { FooterContentCardData } from "../../../../utils/binauData";
const ContainerContact = () => {
  const { XBoxFull } = styles;
  const { flexCol, flexRowCenter } = flexLayout;
  const { mainTextCustom } = textStyles;
  const { FaFacebookF, RiWhatsappFill, BsInstagram, FcGoogle, BsTwitter } =
    useIcon();

  return (
    <>
      <div className={`${XBoxFull}`}>
        <div className={`${flexCol} space-y-6`}>
          <p className={`${mainTextCustom} text-lg text-gray-900 font-normal `}>
            Stay Connected
          </p>
          <div className={`${flexRowCenter} space-x-2`}>
            <FaFacebookF size={25} />
            <RiWhatsappFill size={25} />
            <BsInstagram size={25} />
            <FcGoogle size={25} />
            <BsTwitter size={25} />
          </div>
        </div>
      </div>
    </>
  );
};
const ContentsCards = ({ text, id, services }) => {
  const { flexCol } = flexLayout;
  const { containerWrapper, XBoxFull, YBoxFull } = styles;
  const { mainTextCustom, mainText } = textStyles;

  return (
    <>
      <div className={`w-[33%] h-full  `}>
        <div className={`${XBoxFull} `}>
          <div className={`${flexCol} space-y-6`}>
            <h2
              className={`${mainTextCustom} text-md font-normal text-gray-900`}
            >
              {text}
            </h2>
            <ul>
              {[...services]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={`${mainText} leading-5 whitespace-normal`}
                    >
                      {" "}
                      {item?.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
const ContainerContents = () => {
  const { XBoxFull, YBoxFull } = styles;
  const { flexMainLayoutCustom } = flexLayout;
  const { string } = PropTypes;
  ContainerContents.PropTypes = {
    FooterContentCardData: PropTypes.exact({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      services: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ).isRequired,
    }),
  };

  return (
    <>
      <div className={`${XBoxFull} ${YBoxFull}`}>
        <div className={`${flexMainLayoutCustom} space-x-2`}>
          {FooterContentCardData.map((item, index) => (
            <ContentsCards {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
const HomeFooterTopDown = () => {
  const {} = textStyles;
  const { flexMainLayoutCustom } = flexLayout;
  const { containerWrapper } = styles;
  return (
    <>
      <div className={`${flexMainLayoutCustom}`}>
        <div className={`w-[35%] max-w-[35%] h-40`}>
          <ContainerContact />
        </div>
        <div className={`w-[65%] max-w-[65%] h-40 `}>
          <ContainerContents />
        </div>
      </div>
    </>
  );
};

export default HomeFooterTopDown;
