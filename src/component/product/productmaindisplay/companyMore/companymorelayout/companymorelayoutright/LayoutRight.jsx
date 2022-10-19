import classNames from "classnames";
import React from "react";
import { useIcon } from "../../../../../../hooks/stateContext/IconContextProvider";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  fontStyles,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { CompanyMoreRightLayoutTabs } from "../../../../../../utils/binauData";
import CompanyMoreDescription from "../../companymoredescription/CompanyMoreDesc";
import CompanyMoreReviews from "../../companymorereviews/CompanyMoreReviews";
import CompanySpecifications from "../../companymorespecifications/CompanySpecifications";
const LayoutChildTabs = ({ name, more, setPage, pageValue, page }) => {
  const { mainText2 } = textStyles;
  return (
    <>
      <li className={`inline-block`}>
        <div
          className={classNames(`inline-block ${mainText2} pt-2 pr-3 `)}
          onClick={(e) => {
            e.preventDefault();
            setPage(pageValue);
          }}
        >
          <span
            className={classNames(
              `relative  uppercase  py-3.5 `,
              `${
                page === pageValue && "border-b-4 border-solid border-gray-700"
              }`
            )}
          >
            {name} {more}
          </span>
        </div>
      </li>
    </>
  );
};
const CompanyMoreLayoutRight = () => {
  const {} = styles;
  const {} = flexLayout;
  const { mainText2 } = textStyles;
  const {} = fontStyles;
  const { page, setPage } = useIcon();

  const DisplayPages = () => {
    if (page === 1) {
      return <CompanyMoreDescription />;
    } else if (page === 2) {
      return <CompanyMoreReviews />;
    } else {
      return <CompanySpecifications />;
    }
  };
  return (
    <>
      <div className={classNames(`w-full rounded-md bg-white`)}>
        <div className={classNames(`max-w-[984px] w-full`)}>
          {/* layout Header Tabs */}
          <div>
            <ul
              className={classNames(
                `border-b border-solid border-[#d8d8d8]`,
                `select-none list-none h-11`
              )}
            >
              {/* ACTIVE HAVE A FONT WEIGHT OF 700 */}
              {CompanyMoreRightLayoutTabs.map((item, id) => (
                <LayoutChildTabs
                  {...item}
                  key={item.id + id}
                  setPage={setPage}
                  page={page}
                />
              ))}
            </ul>
          </div>
          {/* layout Body */}
          <div>{DisplayPages()}</div>
        </div>
      </div>
    </>
  );
};

export default CompanyMoreLayoutRight;
