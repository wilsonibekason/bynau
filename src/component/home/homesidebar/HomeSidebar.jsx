import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { useIcon } from "../../../hooks/stateContext/IconContextProvider";
import styles, {
  flexLayout,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";
const SocialIcons = ({ icon }) => {
  const { flexCenter } = flexLayout;
  SocialIcons.propTypes = {
    icon: PropTypes.node,
  };
  return (
    <>
      <div
        className={classNames(
          `h-7 w-7 border rounded-full bg-lemonBlueDark`,
          `${flexCenter}`
        )}
      >
        {icon}
      </div>
    </>
  );
};
const HomeSidebar = () => {
  const {} = textStyles;
  const { flexCol, flexCenter } = flexLayout;
  const { boxFull } = styles;
  const {
    GrFacebookOption,
    BsWhatsapp,
    FcGoogle,
    BsTwitter,
    FaFacebookF,
    RiWhatsappFill,
    BsInstagram,
  } = useIcon();
  return (
    <>
      <div
        className={classNames(`${boxFull} ${flexCol} ${flexCenter} space-y-2`)}
      >
        <SocialIcons icon={<FaFacebookF className={`text-white`} />} />
        <SocialIcons icon={<BsTwitter className={`text-white`} />} />
        <SocialIcons icon={<FcGoogle className={`text-white`} />} />
        <SocialIcons icon={<BsWhatsapp className={`text-white`} />} />
        <SocialIcons icon={<BsInstagram className={`text-white`} />} />
      </div>
    </>
  );
};

export default HomeSidebar;
