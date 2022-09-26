import React from "react";
import { useIcon } from "../../../../../../hooks/stateContext/IconContextProvider";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { mainViewCategory } from "../../../../../../utils/binauData";

const ViewCategory = () => {
  const { flexRowCenter, flexColStart, flexCol } = flexLayout;
  const { FiSearch, AiOutlineMenuFold } = useIcon();
  const { mainText, mainTextCustom } = textStyles;
  const {} = styles;
  return (
    <>
      <div className={`bg-white  rounded-lg shadow py-3 pl-3`}>
        <div className={` ${flexColStart} `}>
          <div className={`${flexRowCenter} space-x-2`}>
            <AiOutlineMenuFold className={`font-semibold text-gray-700`} />
            <p
              className={`${mainTextCustom} text-gray-700 text-sm font-semibold capitalize`}
            >
              categories
            </p>
          </div>
          <ul className={`${flexCol} mt-6 space-y-4`}>
            {mainViewCategory.map((item) =>
              item.collections
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((text, index) => {
                  const { id, link, name } = text;
                  return (
                    <>
                      <li
                        className={`${flexRowCenter} space-x-3`}
                        key={id + index}
                      >
                        <FiSearch className={`text-deepGray`} />
                        <span className={`${mainText} cursor-pointer`}>
                          {name}
                        </span>
                      </li>
                    </>
                  );
                })
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ViewCategory;
