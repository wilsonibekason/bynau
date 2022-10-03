import React from "react";
import { textStyles } from "../../../../styles/bynauCustomStyles/bynauCustomStyles";

const HomeFooterBottomDown = () => {
  const { mainTextCustom } = textStyles;
  return (
    <>
      <div className={`max-w-nine py-4`}>
        <h2
          className={`${mainTextCustom} text-sm text-gray-600 font-medium text-center `}
        >
          Intellectual Property Protection - Privacy Policy - Sitemap - Terms of
          Use - Information for EU consumers - Transaction Services Agreement
          for non-EU/UK Consumers - Terms and Conditions for EU/EEA/UK Consumers
          (Transactions) - User Information Legal Enquiry Guide ©️2010-2022
          AliExpress.com. All rights reserved. 增值电信业务经营许可证
          浙B2-20120091-8 浙公网安备 33010802002248号
        </h2>
      </div>
    </>
  );
};

export default HomeFooterBottomDown;
