import React, { Suspense } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import HomeProductMainCard from "./HomeProductMainCard";
const HomeProductMain = () => {
  const { flexRow, flexMainLayoutCustom } = flexLayout;
  const { containerWrapper, boxFull } = styles;
  const {} = textStyles;

  return (
    <>
      <div
        className={`${flexMainLayoutCustom} flex-wrap flex-shrink-0 gap-x-2 `}
      >
        <HomeProductMainCard />
        <HomeProductMainCard />
        <HomeProductMainCard />
        <HomeProductMainCard />
        <HomeProductMainCard />
        <HomeProductMainCard />
        <HomeProductMainCard />
      </div>
    </>
  );
};

export default HomeProductMain;
// import React, { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// const style = {
//   height: 30,
//   border: "1px solid green",
//   margin: 6,
//   padding: 8,
// };

// function HomeProductMain() {
//   const [item, setItems] = useState(Array.from({ length: 20 }));
//   const fetchMoreData = () => {
//     // a fake async api call like which sends
//     // 20 more records in 1.5 secs
//     setTimeout(() => {
//       setItems(item.concat(Array.from({ length: 20 })));
//     }, 5000);
//   };

//   return (
//     <div>
//       <h1>demo: react-infinite-scroll-component</h1>
//       <hr />
//       <InfiniteScroll
//         dataLength={item.length}
//         next={fetchMoreData}
//         hasMore={true}
//         loader={<h4>Loading...</h4>}
//       >
//         {item.map((i, index) => (
//           <div style={style} key={index}>
//             div - #{index}
//           </div>
//         ))}
//       </InfiniteScroll>
//     </div>
//   );
// }

// export default HomeProductMain;
