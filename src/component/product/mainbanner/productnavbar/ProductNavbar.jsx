import React from "react";
import { logo } from "../../../../assets/homeassets";
import { useIcons } from "../../../../service/globalContext/IconContext";
import styles, {
  colorStyles,
  flexLayout,
  textStyles,
} from "../../../../styles/bynauCustomStyles/bynauCustomStyles";
const ProductNavbar = () => {
  const { mainText, mainText2, mainTextCustom } = textStyles;
  const { marginXlayout, XBoxFull, borderR3, borderR2, containerWrapper } =
    styles;
  const {
    flexRowBetween,
    flexRowCenter,
    flexColCenter,
    flexCol,
    flexCenter,
    flexRow,
  } = flexLayout;
  const {} = colorStyles;
  const { BiDownArrow, BsPlus, BsCart3, FiSearch } = useIcons();
  return (
    <>
      <div className={`${marginXlayout}`}>
        <div className={`${XBoxFull}`}>
          <div className={`${flexRowBetween}`}>
            <div className={`${flexRowCenter} py-5 space-x-3`}>
              <div className={`w-44 -my-6 -mx-2`}>
                <img
                  src={logo}
                  alt=""
                  className={`w-full h-full cursor-pointer`}
                  width={800}
                  height={400}
                />
              </div>
              <div className={`${borderR3} w-2 h-10`} />
              <div className={`${flexCol} space-y-2`}>
                <div className={`${flexRowCenter} space-x-1`}>
                  <p className={`${mainText2}  text-black `}>
                    Mega save case store
                  </p>
                  <BiDownArrow size={8} />
                </div>
                <div>
                  <p className={`${mainText}`}>
                    95% <span className="text-gray-300">positive feedback</span>
                  </p>
                </div>
              </div>
              <div className={`${flexColCenter} space-y-2`}>
                <a
                  className={`${flexRowCenter} w-16 py-1 bg-darkRed ${flexCenter} rounded-2xl `}
                >
                  <BsPlus className="text-white " />
                  <p
                    className={`${mainTextCustom} text-xss  font-normal text-white`}
                  >
                    {" "}
                    Follow
                  </p>
                </a>
                <div>
                  <p className={`${mainText} capitalize`}>177 followers</p>
                </div>
              </div>
            </div>
            <div className={`${flexRowCenter}`}>
              <div className={`relative w-[450px] `}>
                <div className={`${XBoxFull} ${flexRowCenter}`}>
                  <div className={`w-five max-w-five`}>
                    <input
                      type="text"
                      placeholder="I am shopping for"
                      className={`border-2 h-9 border-solid border-darkRed w-full shadow rounded-tl ${mainText} pl-3`}
                    />
                  </div>
                  <div className={`w-five max-w-five `}>
                    <div className={`${XBoxFull} ${flexRowCenter}`}>
                      <div className={`w-five max-w-five`}>
                        <div
                          className={`${XBoxFull} border-2 h-9 border-solid border-darkRed bg-darkRed shadow  ${mainText} pl-3 ${flexCenter}`}
                        >
                          <p className={`${mainText2} text-white`}>
                            On Aliexpress
                          </p>
                        </div>
                      </div>
                      <div className={`w-five max-w-five`}>
                        <div
                          className={`${XBoxFull} border h-9 border-solid border-darkRed shadow  ${mainText} pl-3 rounded-tr ${flexCenter}`}
                        >
                          <p className={`${mainText2} text-darkRed`}>
                            In this store
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
        </div>
      </div>
    </>
  );
};

export default ProductNavbar;
