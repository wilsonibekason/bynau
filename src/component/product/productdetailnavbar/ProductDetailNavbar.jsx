import React from "react";
import { styles } from "../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";
import { ProductDetailNavData } from "../../../utils/binauData";

const ProductDetailNavbar = () => {
  const { marginXlayout, XBoxFull, containerWrapper } = styles;
  const { mainText2 } = textStyles;
  const { flexRowBetween, flexCenter, flexRowCenter, flexRow } = flexLayout;
  const [hover, setHover] = React.useState(null);
  return (
    <>
      <div className={`bg-bgcolor border border-gray-200`}>
        <div className={`${marginXlayout}`}>
          <div className={`${XBoxFull}`}>
            <div className={`${flexRowBetween}`}>
              <div className={`w-[500px]  h-10  ${flexCenter} relative `}>
                <div className={`${XBoxFull} `}>
                  <div className={`${flexRow} space-x-10`}>
                    {ProductDetailNavData.sort((a, b) =>
                      a.name.localeCompare(b.name)
                    ).map((item, index) => {
                      const { icon, id, link, name } = item;

                      return (
                        <>
                          <a
                            href=""
                            key={id}
                            className={`${flexRowCenter} ${mainText2}  text-gray-500 `}
                            onMouseEnter={() => setHover(id)}
                            onMouseLeave={() => setHover(null)}
                          >
                            <p className="">{name}</p>
                            <icon />
                            <div
                              className={`px-7 h-px border border-darkRed absolute bottom-0 invisible ${
                                hover === id && "visible"
                              } `}
                            />
                          </a>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailNavbar;
