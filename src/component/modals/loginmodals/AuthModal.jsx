import React from "react";
import { useIcon } from "../../../hooks/stateContext/IconContextProvider";
import { styles } from "../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";

const AuthModal = () => {
  const { containerWrapper } = styles;
  const { flexCol, flexCenter, flexRowCenter, flexBetween } = flexLayout;
  const { mainTextCustom, mainText } = textStyles;
  const { FcGoogle, BsTwitter, FaFacebookF, AiOutlineClose } = useIcon();
  return (
    <div className={`block z-[1000000]`}>
      <div
        className={`fixed right-[72px] bottom-[72px] w-[420px] p-2 z-[999] font-helvetica rounded-2xl transition`}
      >
        <div className={`bg-white shadow-lg rounded-2xl h-full ${flexCol} p-4`}>
          <div className={`${flexBetween}`}>
            <div
              className={`w-[324px] mb-4 opacity-90 text-2xl font-semibold text-ellipsis overflow-hidden whitespace-nowrap tracking-wide font-arial`}
            >
              Welcome to AliExpress
            </div>
            <AiOutlineClose size={25} className={`text-gray-500`} />
          </div>

          <div
            className={`w-[372px] mb-4 opacity-90 text-xl overflow-hidden text-ellipsis line-clamp-2 cursor-vertical-text font-arial`}
          >
            Sign in to get 1000 coupon for our new member entry
          </div>
          <div className={`flex text-center justify-between`}>
            <div
              className={`${flexCenter} h-8 w-56 rounded-2xl  bg-darkRed ${mainTextCustom} text-sm  text-white`}
            >
              Sign in
            </div>
            <div className={`${flexRowCenter} space-x-3`}>
              <div className={`${mainText}`}>or</div>
              <div className={`${flexRowCenter} space-x-2`}>
                <div
                  className={`h-6 w-6 bg-blue-500 text-white ${flexCenter} rounded-full`}
                >
                  <FaFacebookF />
                </div>
                <div>
                  <FcGoogle size={25} />
                </div>
                <div
                  className={`h-6 w-6 bg-blue-500 text-white ${flexCenter} rounded-full`}
                >
                  <BsTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
