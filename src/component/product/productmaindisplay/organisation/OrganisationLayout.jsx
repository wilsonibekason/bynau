import React from "react";
import classNames from "classnames";
import { styles } from "../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../styles/bynauCustomStyles/bynauCustomStyles";

const OrganisationLayout = () => {
  const { containerWrapper, XBoxFull, boxFull, YBoxFull } = styles;
  const { flexCol, flexColCenter, flexCente, flexRow, flexCenter } = flexLayout;
  const { mainTextCustom } = textStyles;
  return (
    <>
      <div className={`${XBoxFull} bg-white`}>
        <div
          className={classNames(
            "h-[250px] ",
            `${containerWrapper} w-tablet md:w-tablet lg:w-laptop`,
            `${flexCol}`
          )}
        >
          <div className={classNames(`${flexCol} ${boxFull} space-y-3`)}>
            {/* header top */}
            <div className={`h-[50px] ${containerWrapper}`}>
              <div className={classNames(`${YBoxFull} ${flexCenter}`)}>
                <h1
                  className={`${mainTextCustom} text-2xl text-ellipsis font-semibold overflow-hidden`}
                >
                  Store Name
                </h1>
              </div>
            </div>
            {/* header content */}
            <div className={classNames(`h-[200px] ${containerWrapper}`)}>
              <div
                className={classNames(
                  `${YBoxFull} w-full ${flexRow} space-x-4`
                )}
              >
                <div
                  className={classNames(
                    `w-[25%] h-full overflow-hidden antialiased`,
                    `${containerWrapper}`
                  )}
                ></div>
                <div
                  className={classNames(
                    `w-[75%] h-full  `,
                    `${containerWrapper}`
                  )}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganisationLayout;
//https://picca.co/smfest2022
