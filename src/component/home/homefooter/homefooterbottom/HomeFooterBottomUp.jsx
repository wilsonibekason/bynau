import React from "react";
import { useIcon } from "../../../../hooks/stateContext/IconContextProvider";
import { styles } from "../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../styles/bynauCustomStyles/bynauCustomStyles";

const HomeFooterBottomUp = () => {
  const { XBoxFull, YBoxFull, containerWrapper } = styles;
  const { mainHeader, mainText, mainTextCustom } = textStyles;
  const { flexCol, flexRowCenter, flexMainLayoutCustom } = flexLayout;
  const { AiFillAndroid, BsApple } = useIcon();
  return (
    <>
      <div className={`${XBoxFull} py-5`}>
        <div className={`${flexMainLayoutCustom} gap-x-4`}>
          <div className={`w-five h-56 `}>
            <div className={`${XBoxFull} ${YBoxFull}`}>
              <div className={`${flexCol} basis-full space-y-10`}>
                <div className={`h-five `}>
                  <div
                    className={`${XBoxFull} ${YBoxFull} ${flexCol} space-y-2`}
                  >
                    <h2 className={`${mainHeader}`}>Help</h2>
                    <p className={`${mainText}`}>
                      Help Center, Disputes & Reports, Buyer Protection, Report
                      IPR infringement
                    </p>
                  </div>
                </div>
                <div className={`h-five `}>
                  <div
                    className={`${XBoxFull} ${YBoxFull} ${flexCol} space-y-2`}
                  >
                    <h2 className={`${mainHeader}`}>Help</h2>
                    <p className={`${mainText} leading-5`}>
                      All Popular, Product, Promotion, Low Price, Great Value,
                      Reviews, Blog, Seller Portal, BLACK FRIDAY, AliExpress
                      Assistant
                    </p>
                    <div className={`${flexRowCenter} space-x-3`}>
                      <div
                        className={`${flexRowCenter} bg-bgLemonBlueDark space-x-1 p-1 rounded-lg`}
                      >
                        <AiFillAndroid size={25} />
                        <p
                          className={`${mainTextCustom} text-md font-semibold  text-white`}
                        >
                          Google Play
                        </p>
                      </div>
                      <div
                        className={`${flexRowCenter} bg-gray-500 space-x-1 p-1 rounded-lg`}
                      >
                        <BsApple size={25} />
                        <p
                          className={`${mainTextCustom} text-md font-semibold  text-white`}
                        >
                          Apple Store
                        </p>
                      </div>
                      {/*  */}
                      <div
                        className={`${flexRowCenter} bg-gradient-to-r from-gray-500 via-goldDeep to-blue-200 space-x-1 p-1 rounded-lg`}
                      >
                        <AiFillAndroid size={25} />
                        <p
                          className={`${mainTextCustom} text-md font-semibold  text-white`}
                        >
                          App Gallery
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`w-five h-56 `}>
            <div className={`${XBoxFull} ${YBoxFull}`}>
              <div className={`${flexCol} basis-full space-y-10`}>
                <div className={`h-five `}>
                  <div
                    className={`${XBoxFull} ${YBoxFull} ${flexCol} space-y-2`}
                  >
                    <h2 className={`${mainHeader}`}>
                      AliExpress Multi-Language
                    </h2>
                    <p className={`${mainText} leading-5`}>
                      Russian, Portuguese, Spanish, French, German, Italian,
                      Dutch, Turkish, Japanese, Korean, Thai, Vietnamese,
                      Arabic, Hebrew, Polish
                    </p>
                  </div>
                </div>
                <div className={`h-five `}>
                  <div
                    className={`${XBoxFull} ${YBoxFull} ${flexCol} space-y-2`}
                  >
                    <h2 className={`${mainHeader}`}>Alibaba Group</h2>
                    <p
                      className={`${mainText} leading-5
                    `}
                    >
                      Alibaba Group Website, AliExpress, Alimama, Alipay,
                      Fliggy, Alibaba Cloud, Alibaba International, AliTelecom,
                      DingTalk, Juhuasuan, Taobao Marketplace, Tmall, Taobao
                      Global, AliOS, 1688t
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFooterBottomUp;
