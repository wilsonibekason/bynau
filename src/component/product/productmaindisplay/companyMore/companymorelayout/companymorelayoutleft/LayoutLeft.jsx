import classNames from "classnames";
import React from "react";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const CompanyMoreLayoutLeft = () => {
  const {} = textStyles;
  const { boxFull, link, containerWrapper } = styles;
  const { flexCol, flexRowBetween } = flexLayout;
  return (
    <>
      <div
        className={classNames(
          `w-full bg-white rounded-md pt-4 p-2 pl-3`,
          `${flexCol} space-y-3`
        )}
      >
        <div
          className={classNames(
            `antialiased break-words overflow-hidden whitespace-nowrap`
          )}
        >
          Top Selling
        </div>
        <div className={classNames(`${boxFull}`)}>
          <div
            className={classNames(
              ` h-[176px] w-[176px] border border-solid border-[#f2f2f2] relative rounded`
            )}
          >
            <a
              className={`${link} text-lemonBlueDark `}
              href="//www.aliexpress.com/item/1005004496777159.html?gps-id=pcDetailLeftTopSell&amp;scm=1007.13482.271138.0&amp;scm_id=1007.13482.271138.0&amp;scm-url=1007.13482.271138.0&amp;pvid=b9ace07f-7cb4-4c5f-a0af-fd88ac9c2df1&amp;_t=gps-id:pcDetailLeftTopSell,scm-url:1007.13482.271138.0,pvid:b9ace07f-7cb4-4c5f-a0af-fd88ac9c2df1,tpp_buckets:668%232846%238112%231997&amp;pdp_ext_f=%7B%22sku_id%22%3A%2212000029370301132%22%2C%22sceneId%22%3A%223482%22%7D&amp;pdp_npi=2%40dis%21NGN%211743.8%214.36%21%21%21%21%21%40211b446516661548015282849e0324%2112000029370301132%21rec"
              clk_trigger=""
              ae_page_type="detail_page"
              ae_page_area="{item_id=1005004496777159,1}"
              ae_button_type="Top_Selling"
              ae_object_type="product"
              ae_object_value="item_id=1005004496777159"
              st_page_id="cfgghnxbocawlxis183ee90998e6f3d093aba318ec"
              data-aplus-clk="x23_2e870585"
              data-spm-anchor-id="a2g0o.detail.100009.1"
            >
              <img
                className={`absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] max-w-full max-h-full align-middle`}
                src="//ae01.alicdn.com/kf/S70e50bbc915947ad82071ef2b1235d53B/Original-Clear-For-Magsafe-Magnetic-Wireless-Charging-Animation-Case-For-iPhone-14-13-12-11-Plus.jpg_480x480q90.jpg_.webp"
                alt="Original Clear For Magsafe Magnetic Wireless Charging Animation Case For iPhone 14 13 12 11 Plus Mini Pro Max X XS XR 7 8 Cover"
              />
            </a>
          </div>
          <div
            className={classNames(`pt-2 my-0 mr-auto text-left`, `${flexCol}`)}
          >
            <div>fjjff</div>
            <div className={classNames(`${flexRowBetween}`)}>
              <div>helo</div>
              <div>helo</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompanyMoreLayoutLeft;
