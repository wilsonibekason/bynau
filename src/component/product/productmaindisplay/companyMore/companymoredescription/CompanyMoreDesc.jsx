import classNames from "classnames";
import React from "react";
import {
  flexLayout,
  textStyles,
} from "../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { CompanyMoreDescData } from "../../../../../utils/binauData";

const CompanyMoreDescription = () => {
  const { flexCol } = flexLayout;
  const { mainTextCustom } = textStyles;
  return (
    <>
      <div className={classNames(`w-full rounded bg-white`)}>
        <div>
          <div className={`w-full p-5 rounded `}>
            <div className={`box-content`}>
              <div className={`box-center text-center ${flexCol}`}>
                <p className={`max-w-full`}>
                  <span className={`${mainTextCustom}`}>
                    <strong>
                      Original For Magsafe Magnetic Wireless Charging Case For
                      iPhone 13 12 11 Pro Max Metal Lens Ring Shockproof Clear
                      Acrylic Cover
                    </strong>
                  </span>
                </p>
                {[...CompanyMoreDescData]
                  .sort((a, b) => a.image.localeCompare(b.image))
                  .map((image) => (
                    <img
                      style={{
                        width: `1000px`,
                      }}
                      width="1000px"
                      src={image.image}
                      key={image.id}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>CompanyMoreDescription</div>
    </>
  );
};

export default CompanyMoreDescription;
