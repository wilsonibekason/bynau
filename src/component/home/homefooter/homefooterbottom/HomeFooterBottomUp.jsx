import React from "react";
import { styles } from "../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../styles/bynauCustomStyles/bynauCustomStyles";

const HomeFooterBottomUp = () => {
  const { XBoxFull, YBoxFull, containerWrapper } = styles;
  const { mainHeader, mainText } = textStyles;
  const { flexCol, flexRowCenter, flexMainLayoutCustom } = flexLayout;
  return (
    <>
      <div className={`${XBoxFull} py-10`}>
        <div className={`${flexMainLayoutCustom} gap-x-4`}>
          <div className={`w-five h-56 ${containerWrapper}`}>
            <div className={`${XBoxFull} ${YBoxFull}`}>
              <div className={`${flexCol} basis-full gap-y-5`}>
                <div className={`h-five ${containerWrapper}`}>
                  <div className={`${XBoxFull} ${YBoxFull} ${flexCol}`}>
                    <h2 className={`${mainHeader}`}>Help</h2>
                    <p className={`${mainText}`}>
                      Help Center, Disputes & Reports, Buyer Protection, Report
                      IPR infringement
                    </p>
                  </div>
                </div>
                <div className={`h-five ${containerWrapper}`}>
                  <div className={`${XBoxFull} ${YBoxFull} ${flexCol}`}>
                    <h2 className={`${mainHeader}`}>Help</h2>
                    <p className={`${mainText} leading-5`}>
                      All Popular, Product, Promotion, Low Price, Great Value,
                      Reviews, Blog, Seller Portal, BLACK FRIDAY, AliExpress
                      Assistant
                    </p>
                    <div className={`${flexRowCenter}`}>
                      <div className={`${flexRowCenter}`}></div>
                      <div className={`${flexRowCenter}`}></div>
                      <div className={`${flexRowCenter}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`w-five h-56 ${containerWrapper}`}></div>
        </div>
      </div>
    </>
  );
};

export default HomeFooterBottomUp;
