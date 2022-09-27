import React from "react";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import {
  acceptedFeatureCategories,
  featuredCategoriesImages,
} from "../../../../../../utils/binauData";

const FeaturedCardOne = () => {
  const { flexCol, flexRow, flexRowCenter } = flexLayout;
  const { testContainer, imageCustom } = styles;
  const { mainTextCustom } = textStyles;
  return (
    <>
      <main
        className={`w-full h-full bg-gradient-to-r from-blue-300 via-white to-gray-300 ${flexCol}`}
      >
        <div className={`h-four w-full  ${flexRow}`}>
          <div className={`w-four h-full`}>
            <h3
              className={`${mainTextCustom} text-lg text-gry-700 font-bold text-center`}
            >
              Vehicles
            </h3>
          </div>
          <div className={`h-nine w-six`}>
            <img
              src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg?tr=w-375"
              alt=""
              className={`${imageCustom} backdrop-blur-lg`}
            />
          </div>
        </div>
        <div className={` h-six w-full px-2 pb-2`}>
          <div className={`w-full h-full ${flexRow} gap-x-px`}>
            <div className={` h-[100%] w-six`}>
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg?tr=w-375"
                alt=""
                className={`w-full max-w-full h-full rounded`}
              />
            </div>
            <div className={` h-[100%] w-four ${flexCol} gap-y-px`}>
              {featuredCategoriesImages
                .filter((value) => acceptedFeatureCategories.has(value.name))
                .sort((a, b) => a.image.localeCompare(b.image))
                .map((item) => (
                  <div className={`w-full h-five bg-bgcolor`} key={item.id}>
                    <img
                      src={item.image}
                      alt=""
                      className={`w-full max-w-full h-full bg-center object-cover rounded`}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FeaturedCardOne;
