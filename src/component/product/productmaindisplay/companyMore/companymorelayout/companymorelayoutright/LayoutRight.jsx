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
const LayoutChildTabs = ({ name, more, setPage, pageValue }) => {
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
              `relative  uppercase border-b-4 border-solid border-gray-700 py-3.5 `
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
                />
              ))}
            </ul>
          </div>
          {/* layout Body */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CompanyMoreLayoutRight;
