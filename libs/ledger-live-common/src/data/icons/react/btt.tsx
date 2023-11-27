
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function btt({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M20.7707 10.2C20.652 9.62383 20.4767 9.06084 20.2472 8.51923C20.021 7.98576 19.7442 7.47518 19.4207 6.99448C19.0998 6.51957 18.7339 6.07676 18.3279 5.67223C17.9231 5.26621 17.4801 4.90026 17.0049 4.57948C16.5235 4.25757 16.0133 3.98089 15.4809 3.75298C14.3799 3.286 13.1961 3.04535 12.0002 3.04535C10.8042 3.04535 9.62045 3.286 8.51941 3.75298C7.45475 4.20205 6.48775 4.8542 5.67241 5.67298C5.26647 6.07727 4.90052 6.51983 4.57966 6.99448C4.25771 7.47614 3.98103 7.98657 3.75316 8.51923C3.28619 9.62027 3.04553 10.804 3.04553 12C3.04553 13.196 3.28619 14.3797 3.75316 15.4807C3.97366 16.0132 4.25866 16.518 4.57966 17.0047C4.9005 17.4799 5.26645 17.9229 5.67241 18.3277C6.07718 18.7338 6.52024 19.0997 6.99541 19.4205C7.47241 19.7415 7.98691 20.0175 8.51941 20.247C9.62045 20.714 10.8042 20.9546 12.0002 20.9546C13.1961 20.9546 14.3799 20.714 15.4809 20.247C16.0134 20.0265 16.5182 19.7415 17.0049 19.4205C17.4801 19.0997 17.9231 18.7338 18.3279 18.3277C18.7339 17.923 19.0999 17.4799 19.4207 17.0047C19.7417 16.5277 20.0177 16.0132 20.2472 15.4807C20.9537 13.8144 21.1363 11.9726 20.7707 10.2ZM12.0084 19.8337C7.68316 19.8337 4.18441 16.3252 4.18441 12.009C4.18441 7.69273 7.69291 4.18423 12.0084 4.18423C16.3247 4.18423 19.8332 7.69273 19.8332 12.009C19.8332 16.3252 16.3254 19.8337 12.0084 19.8337Z" fill={color} /><path d="M12.1471 19.1542H12.3586C12.3954 19.1542 12.4314 19.1542 12.4681 19.1445H12.4779C12.5146 19.1445 12.5416 19.1445 12.5784 19.1355H12.6061C12.6339 19.1355 12.6616 19.1355 12.6886 19.1265H12.7164C12.7441 19.1265 12.7719 19.1175 12.8086 19.1175H12.8266C12.8634 19.1175 12.9001 19.1077 12.9369 19.1077C12.9736 19.1077 13.0014 19.0987 13.0381 19.0897H13.0561C13.0839 19.0897 13.1116 19.0807 13.1386 19.0807H13.1574C13.1941 19.071 13.2219 19.071 13.2586 19.062C13.3314 19.053 13.4049 19.0342 13.4694 19.0162H13.4881C13.5151 19.0072 13.5519 19.0072 13.5796 18.9975H13.5886C13.6621 18.9795 13.7266 18.9607 13.8001 18.9427C13.1123 18.9646 12.4244 18.8998 11.7526 18.75C10.7416 18.5295 9.77788 18.135 8.96038 17.4547C8.3159 16.9184 7.79868 16.2455 7.44613 15.4848C7.09358 14.724 6.91451 13.8944 6.92188 13.056C6.9285 11.8052 7.37358 10.5963 8.17963 9.63975C9.22663 8.4 10.7146 7.7475 12.2386 7.71075H12.4501V6.48975H12.2116C11.748 6.49824 11.2864 6.55352 10.8339 6.65475C10.3785 6.75772 9.93529 6.90856 9.51163 7.10475C9.07963 7.30725 8.67538 7.55475 8.29888 7.83975C7.90982 8.13549 7.55556 8.47441 7.24288 8.85C6.94848 9.1976 6.69296 9.57635 6.48088 9.9795C6.27107 10.3681 6.10169 10.7773 5.97538 11.2005C5.85149 11.6172 5.7686 12.045 5.72788 12.4777L5.70013 12.8812V13.1197C5.70913 13.5885 5.76463 14.0475 5.86513 14.4975C5.96638 14.9572 6.12238 15.3975 6.31513 15.8205C6.54538 16.3252 6.95863 17.0692 7.57363 17.6295C8.82936 18.6194 10.3824 19.1566 11.9814 19.1542H12.1471Z" fill={color} /><path d="M14.149 17.9782C13.696 17.962 13.2448 17.9129 12.799 17.8312C10.9075 17.4915 9.28146 16.3342 8.68521 14.5897C7.95921 12.468 9.07071 10.1722 11.1827 9.47472C11.5852 9.33984 12.007 9.27144 12.4315 9.27222C12.9737 9.27222 13.5152 9.38247 14.0117 9.58422L14.5255 8.49147C14.371 8.42952 14.2149 8.3715 14.0575 8.31747C13.5313 8.15232 12.9829 8.0686 12.4315 8.06922C11.8789 8.07025 11.3302 8.16015 10.8062 8.33547C10.1375 8.55603 9.52159 8.9125 8.99721 9.38247C8.74432 9.60775 8.51375 9.8569 8.30871 10.1265C8.10602 10.393 7.93064 10.6791 7.78521 10.9807C7.48908 11.587 7.3143 12.2454 7.27071 12.9187C7.22496 13.6162 7.31646 14.3137 7.54596 14.9752C7.7798 15.6557 8.15561 16.2787 8.64846 16.803C9.09846 17.2897 9.62196 17.6572 10.255 17.997C10.9165 18.3457 11.734 18.5295 12.5875 18.6495C13.1387 18.7222 13.8737 18.741 14.305 18.741C14.6815 18.603 14.8375 18.5385 15.04 18.456C15.2147 18.3735 15.3887 18.291 15.5635 18.1897C15.7382 18.0885 15.766 18.0697 16.0592 17.8777C16.0853 17.8615 16.1099 17.8429 16.1327 17.8222C15.1225 17.997 14.8652 17.9872 14.149 17.9782Z" fill={color} /><path d="M16.4087 16.6102C16.1237 16.6282 15.7194 16.6552 15.2604 16.6552C14.4429 16.6552 13.4417 16.5825 12.5882 16.2975C11.2652 15.8572 10.0164 14.7277 10.0164 13.3312C10.0161 13.0007 10.081 12.6734 10.2073 12.368C10.3337 12.0625 10.519 11.785 10.7527 11.5513C10.9864 11.3176 11.264 11.1323 11.5694 11.0059C11.8748 10.8796 12.2021 10.8147 12.5327 10.815C13.4784 10.815 14.2959 11.3385 14.7279 12.1005L15.8207 11.559C15.6493 11.2364 15.4292 10.9422 15.1682 10.6867C14.8222 10.3402 14.4113 10.0653 13.9591 9.87772C13.5068 9.69015 13.0219 9.5936 12.5323 9.5936C12.0426 9.5936 11.5578 9.69015 11.1055 9.87772C10.6532 10.0653 10.2423 10.3402 9.8964 10.6867C9.54999 11.0327 9.27517 11.4435 9.08766 11.8957C8.90016 12.3479 8.80365 12.8327 8.80365 13.3222C8.8061 13.8353 8.91596 14.3422 9.12615 14.8102C9.31815 15.2325 9.58515 15.6277 9.9249 15.9952C10.5219 16.6372 11.3386 17.1517 12.2117 17.4457C13.0472 17.721 14.2779 17.8222 15.4719 17.7397C15.8019 17.712 16.0502 17.6842 16.4724 17.5927C16.8799 17.2712 17.2497 16.9046 17.5749 16.5C17.2899 16.5277 16.7664 16.5825 16.4087 16.6102Z" fill={color} /></svg>;
}
export default btt;