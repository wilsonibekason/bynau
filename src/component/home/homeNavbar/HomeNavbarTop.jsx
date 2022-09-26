import React from "react";
import { logo } from "../../../assets/homeassets";
import { useIcons } from "../../../service/globalContext/IconContext";
import styles, {
  flexLayout,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";

const HomeNavbarTop = () => {
  const { flexRowCenterBetween, flexRow, flexCenter, flexRowCenter } =
    flexLayout;
  const { borderR2 } = styles;
  const { BsCart3, FiSearch, BiDownArrow } = useIcons();
  const { mainText } = textStyles;
  return (
    <>
      <div className={`${flexRowCenterBetween} `}>
        <div className={`w-44 -my-5`}>
          <img
            src={logo}
            alt=""
            className={`w-full h-full cursor-pointer`}
            width={800}
            height={400}
          />
        </div>
        <div
          className={`relative w-six max-w-eight ${flexCenter} cursor-pointer`}
        >
          <div className={`absolute right-0  ${flexRow} `}>
            <div className={`${flexRowCenter}`}>
              <div className={`${borderR2}`} />
              <div className={`max-w-28 w-24 px-2 `}>
                <p
                  className={`${mainText} overflow-x-hidden whitespace-nowrap capitalize py-3`}
                >
                  all categoriesdhj to meet
                </p>
              </div>
              <div className={`${flexCenter} px-2 shadow-sm py-3`}>
                <BiDownArrow size={10} />
              </div>
            </div>
            <div className={`${flexCenter} bg-darkRed py-2 px-3 rounded`}>
              <FiSearch className={`text-gray-100`} size={20} />
            </div>
          </div>
          <input
            type="text"
            placeholder="MacOs lite"
            className={`border-2 h-9 border-solid border-darkRed w-full shadow rounded ${mainText} pl-3`}
          />
        </div>
        <div className={`${flexCenter}`}>
          <div className={`relative px-2.5 py-1 cursor-pointer`}>
            <BsCart3 size={30} />
            <div
              className={`absolute top-0 bg-darkRed w-3 h-3 ${flexCenter} right-0 p-2.5 rounded-full`}
            >
              <span className={`${mainText} text-white`}>0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNavbarTop;
