import React from "react";
import styles, {
  flexLayout,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";
import { searchCategoryColllections } from "../../../utils/binauData";

const HomeNavbarBottom = () => {
  const { flexRowCenter } = flexLayout;
  const { mainText } = textStyles;
  const { borderR, transitionLight } = styles;
  return (
    <>
      <div className={`${flexRowCenter} space-x-2`}>
        {[...searchCategoryColllections]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((text) => {
            const { id, name, link } = text;
            return (
              <>
                <p
                  className={`${mainText} cursor-pointer hover:text-darkRed ${transitionLight}`}
                  key={id}
                >
                  {name}
                </p>
                <div className={`${borderR}`} />
              </>
            );
          })}
      </div>
    </>
  );
};

export default HomeNavbarBottom;
