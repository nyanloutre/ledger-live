
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function miota({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M16.6928 5.07713C16.6928 5.60288 16.2653 6.02963 15.7373 6.02963C15.612 6.02983 15.4879 6.00535 15.3721 5.95759C15.2563 5.90983 15.151 5.83972 15.0623 5.75127C14.9735 5.66283 14.9031 5.55777 14.855 5.4421C14.8068 5.32643 14.782 5.20241 14.7818 5.07713C14.7818 4.55063 15.2093 4.12463 15.7373 4.12463C16.2653 4.12463 16.6928 4.55063 16.6928 5.07713ZM16.0043 8.39513C15.5573 8.39513 15.1943 8.03363 15.1943 7.58813C15.1943 7.14263 15.5573 6.78188 16.0043 6.78188C16.4513 6.78188 16.8135 7.14263 16.8135 7.58813C16.8135 8.03363 16.4513 8.39513 16.0035 8.39513H16.0043ZM15.753 10.3849C15.6633 10.3851 15.5744 10.3676 15.4914 10.3334C15.4084 10.2992 15.333 10.2489 15.2695 10.1855C15.2059 10.1221 15.1555 10.0468 15.1211 9.96391C15.0867 9.88101 15.069 9.79214 15.069 9.70238C15.0691 9.61269 15.0869 9.5239 15.1213 9.44109C15.1558 9.35827 15.2062 9.28305 15.2697 9.21974C15.3332 9.15642 15.4086 9.10625 15.4916 9.07208C15.5745 9.03792 15.6633 9.02044 15.753 9.02063C15.8428 9.02044 15.9317 9.03794 16.0147 9.07215C16.0976 9.10637 16.1731 9.15661 16.2366 9.22C16.3001 9.2834 16.3505 9.3587 16.3849 9.44161C16.4193 9.52451 16.437 9.61338 16.437 9.70313C16.4369 9.79282 16.4191 9.88162 16.3847 9.96443C16.3503 10.0472 16.2999 10.1225 16.2363 10.1858C16.1728 10.2491 16.0974 10.2993 16.0145 10.3334C15.9316 10.3676 15.8427 10.3851 15.753 10.3849ZM15.7125 11.4139C15.7125 11.569 15.6509 11.7178 15.5412 11.8275C15.4315 11.9373 15.2827 11.9989 15.1275 11.9989C14.9724 11.9989 14.8236 11.9373 14.7139 11.8275C14.6042 11.7178 14.5425 11.569 14.5425 11.4139C14.5425 11.2587 14.6042 11.1099 14.7139 11.0002C14.8236 10.8905 14.9724 10.8289 15.1275 10.8289C15.2827 10.8289 15.4315 10.8905 15.5412 11.0002C15.6509 11.1099 15.7125 11.2587 15.7125 11.4139ZM14.787 12.7069C14.787 12.9844 14.562 13.2071 14.2853 13.2071C14.1862 13.2068 14.0895 13.1772 14.0073 13.1219C13.9251 13.0667 13.8611 12.9883 13.8234 12.8966C13.7857 12.805 13.7761 12.7043 13.7956 12.6072C13.8152 12.5101 13.8631 12.421 13.9333 12.3511C14.0035 12.2812 14.0928 12.2337 14.19 12.2146C14.2872 12.1954 14.3879 12.2056 14.4794 12.2436C14.5708 12.2817 14.6489 12.346 14.7038 12.4285C14.7587 12.511 14.7879 12.6078 14.7878 12.7069H14.787ZM13.7745 13.6241C13.7745 13.7383 13.7292 13.8478 13.6484 13.9285C13.5677 14.0093 13.4582 14.0546 13.344 14.0546C13.2298 14.0546 13.1203 14.0093 13.0396 13.9285C12.9589 13.8478 12.9135 13.7383 12.9135 13.6241C12.9135 13.51 12.9589 13.4005 13.0396 13.3197C13.1203 13.239 13.2298 13.1936 13.344 13.1936C13.4582 13.1936 13.5677 13.239 13.6484 13.3197C13.7292 13.4005 13.7745 13.51 13.7745 13.6241ZM18.93 8.06738C18.8745 8.27009 18.7426 8.44342 18.5621 8.55101C18.3815 8.6586 18.1663 8.69208 17.9616 8.64445C17.7569 8.59682 17.5786 8.47176 17.4641 8.29551C17.3496 8.11927 17.3078 7.90553 17.3475 7.69913C17.3964 7.48928 17.5266 7.30742 17.7095 7.19356C17.8924 7.07971 18.113 7.04318 18.3229 7.09201C18.5327 7.14084 18.7146 7.27104 18.8285 7.45396C18.9423 7.63688 18.9789 7.85753 18.93 8.06738ZM18.5415 10.1696C18.5 10.3473 18.3897 10.5011 18.2348 10.5974C18.0799 10.6937 17.893 10.7245 17.7154 10.683C17.5378 10.6415 17.3839 10.5312 17.2876 10.3763C17.1913 10.2213 17.1605 10.0345 17.202 9.85688C17.2435 9.67926 17.3538 9.52538 17.5088 9.4291C17.6637 9.33282 17.8505 9.30204 18.0281 9.34351C18.2058 9.38498 18.3597 9.49532 18.4559 9.65025C18.5522 9.80518 18.583 9.99201 18.5415 10.1696ZM17.8185 11.8474C17.7835 11.9976 17.6903 12.1277 17.5593 12.2091C17.4284 12.2906 17.2704 12.3166 17.1203 12.2816C16.9701 12.2466 16.84 12.1534 16.7585 12.0224C16.6771 11.8915 16.651 11.7336 16.686 11.5834C16.7265 11.439 16.8211 11.3159 16.9501 11.2395C17.0791 11.1632 17.2326 11.1396 17.3786 11.1736C17.5246 11.2077 17.6518 11.2967 17.7337 11.4222C17.8157 11.5477 17.8461 11.7 17.8185 11.8474ZM16.887 13.1246C16.8521 13.2474 16.7712 13.3521 16.6612 13.4169C16.5512 13.4818 16.4205 13.5018 16.2961 13.4729C16.1718 13.4439 16.0633 13.3683 15.9932 13.2616C15.9231 13.1549 15.8967 13.0253 15.9195 12.8996C15.9344 12.8362 15.9615 12.7763 15.9995 12.7233C16.0375 12.6704 16.0856 12.6255 16.141 12.5911C16.1964 12.5568 16.258 12.5337 16.3223 12.5232C16.3866 12.5127 16.4523 12.515 16.5158 12.5299C16.5792 12.5445 16.6392 12.5714 16.6923 12.6092C16.7453 12.647 16.7904 12.695 16.8248 12.7502C16.8593 12.8055 16.8826 12.867 16.8932 12.9312C16.9039 12.9955 16.9018 13.0612 16.887 13.1246ZM15.8693 14.0164C15.8565 14.0709 15.833 14.1225 15.8003 14.168C15.7676 14.2135 15.7263 14.2521 15.6786 14.2816C15.631 14.3112 15.578 14.331 15.5227 14.3401C15.4674 14.3491 15.4108 14.3472 15.3563 14.3344C15.3017 14.3216 15.2502 14.2982 15.2047 14.2654C15.1592 14.2327 15.1206 14.1914 15.091 14.1437C15.0615 14.0961 15.0416 14.0431 15.0326 13.9878C15.0235 13.9325 15.0255 13.8759 15.0383 13.8214C15.0641 13.7112 15.1327 13.6158 15.2289 13.5561C15.3251 13.4965 15.4411 13.4775 15.5513 13.5034C15.6615 13.5292 15.7569 13.5978 15.8165 13.694C15.8762 13.7902 15.8951 13.9062 15.8693 14.0164ZM14.853 14.5796C14.8256 14.6684 14.7654 14.7436 14.6848 14.7898C14.6042 14.8361 14.509 14.8501 14.4185 14.8289C14.3279 14.8078 14.2488 14.7532 14.1969 14.676C14.1451 14.5989 14.1244 14.5049 14.139 14.4131C14.1665 14.3243 14.2266 14.2492 14.3072 14.203C14.3879 14.1567 14.483 14.1427 14.5736 14.1638C14.6641 14.1849 14.7433 14.2396 14.7951 14.3167C14.847 14.3939 14.8677 14.4878 14.853 14.5796ZM20.181 10.9376C20.1008 11.1025 19.9585 11.2288 19.7852 11.2888C19.612 11.3489 19.4221 11.3377 19.257 11.2579C19.1752 11.2187 19.1019 11.1637 19.0415 11.0961C18.981 11.0284 18.9345 10.9495 18.9047 10.8638C18.8748 10.7781 18.8622 10.6874 18.8676 10.5968C18.873 10.5063 18.8962 10.4177 18.936 10.3361C19.0162 10.1715 19.1584 10.0453 19.3315 9.98529C19.5045 9.92526 19.6943 9.93626 19.8593 10.0159C19.941 10.0552 20.0141 10.1103 20.0745 10.178C20.1348 10.2456 20.1813 10.3245 20.2112 10.4101C20.2411 10.4957 20.2538 10.5863 20.2486 10.6769C20.2434 10.7674 20.2205 10.856 20.181 10.9376ZM19.4603 12.5989C19.3886 12.7326 19.268 12.8335 19.1237 12.8805C18.9794 12.9275 18.8225 12.9169 18.6858 12.851C18.5491 12.7852 18.4431 12.669 18.3899 12.5269C18.3368 12.3847 18.3406 12.2276 18.4005 12.0881C18.4691 11.9482 18.5901 11.841 18.7373 11.7899C18.8845 11.7387 19.046 11.7478 19.1865 11.8151C19.2561 11.8484 19.3185 11.8951 19.37 11.9526C19.4215 12.0101 19.4611 12.0772 19.4865 12.15C19.512 12.2229 19.5227 12.3 19.5182 12.3771C19.5137 12.4541 19.494 12.5295 19.4603 12.5989ZM18.5543 13.8589C18.4951 13.9799 18.3904 14.0727 18.2631 14.1168C18.1358 14.1609 17.9962 14.1529 17.8748 14.0944C17.8148 14.0655 17.7611 14.0251 17.7168 13.9755C17.6725 13.9258 17.6384 13.8679 17.6165 13.805C17.5946 13.7422 17.5854 13.6756 17.5893 13.6092C17.5932 13.5428 17.6102 13.4777 17.6393 13.4179C17.7013 13.3024 17.8055 13.2154 17.9302 13.1749C18.0548 13.1344 18.1903 13.1436 18.3083 13.2006C18.4264 13.2576 18.5178 13.3579 18.5637 13.4807C18.6095 13.6035 18.6061 13.7393 18.5543 13.8596V13.8589ZM17.5448 14.7499C17.4934 14.8547 17.4027 14.9349 17.2924 14.9731C17.1821 15.0113 17.0612 15.0044 16.956 14.9539C16.9024 14.9297 16.8542 14.8949 16.8143 14.8518C16.7743 14.8086 16.7434 14.7579 16.7234 14.7026C16.7034 14.6473 16.6947 14.5886 16.6977 14.5298C16.7008 14.4711 16.7156 14.4136 16.7412 14.3607C16.7669 14.3077 16.8029 14.2605 16.8471 14.2217C16.8913 14.1829 16.9429 14.1534 16.9987 14.1349C17.0545 14.1164 17.1135 14.1092 17.1721 14.1138C17.2307 14.1185 17.2878 14.1348 17.34 14.1619C17.3921 14.187 17.4387 14.2222 17.4771 14.2654C17.5156 14.3086 17.5452 14.3589 17.5642 14.4135C17.5832 14.4681 17.5913 14.5259 17.5879 14.5836C17.5846 14.6413 17.5699 14.6978 17.5448 14.7499ZM16.5285 15.2989C16.4824 15.3844 16.4051 15.4487 16.3127 15.4787C16.2203 15.5086 16.1199 15.5017 16.0325 15.4595C15.945 15.4172 15.8772 15.3429 15.8432 15.2519C15.8092 15.161 15.8115 15.0604 15.8498 14.9711C15.8977 14.8889 15.9748 14.8277 16.0659 14.7999C16.1569 14.772 16.2551 14.7795 16.3408 14.8209C16.4265 14.8623 16.4935 14.9345 16.5283 15.0231C16.5631 15.1117 16.5632 15.2102 16.5285 15.2989ZM15.5738 15.5756C15.5366 15.6518 15.4707 15.7102 15.3906 15.738C15.3105 15.7659 15.2227 15.7609 15.1463 15.7241C15.1085 15.7058 15.0748 15.6802 15.047 15.6489C15.0191 15.6175 14.9977 15.581 14.984 15.5414C14.9703 15.5017 14.9645 15.4598 14.967 15.4179C14.9695 15.3761 14.9802 15.3351 14.9985 15.2974C15.0168 15.2597 15.0424 15.2259 15.0738 15.1981C15.1051 15.1702 15.1417 15.1488 15.1813 15.1351C15.2209 15.1214 15.2629 15.1156 15.3047 15.1181C15.3466 15.1206 15.3875 15.1313 15.4253 15.1496C15.463 15.1678 15.4968 15.1933 15.5247 15.2246C15.5526 15.2558 15.5741 15.2923 15.5878 15.3318C15.6016 15.3714 15.6075 15.4133 15.6051 15.4551C15.6027 15.497 15.592 15.5379 15.5738 15.5756ZM16.3508 19.2176C16.2421 19.1555 16.1468 19.0725 16.0703 18.9734C15.9938 18.8744 15.9376 18.7612 15.905 18.6403C15.8724 18.5195 15.864 18.3934 15.8802 18.2693C15.8965 18.1452 15.9371 18.0255 15.9998 17.9171C16.1269 17.6982 16.3356 17.5386 16.5801 17.4731C16.8247 17.4076 17.0852 17.4416 17.3048 17.5676C17.7623 17.8301 17.9198 18.4129 17.6565 18.8681C17.5295 19.0872 17.3208 19.247 17.0762 19.3125C16.8316 19.378 16.571 19.3439 16.3515 19.2176H16.3508ZM14.1083 18.0686C14.0162 18.0161 13.9355 17.9458 13.8707 17.862C13.806 17.7781 13.7584 17.6822 13.7308 17.5799C13.7032 17.4776 13.6961 17.3708 13.7099 17.2657C13.7237 17.1607 13.7582 17.0593 13.8113 16.9676C13.9189 16.7822 14.0955 16.647 14.3025 16.5915C14.5095 16.536 14.7301 16.5647 14.916 16.6714C15.303 16.8934 15.4358 17.3869 15.213 17.7724C15.1056 17.9579 14.929 18.0933 14.7219 18.1488C14.5148 18.2044 14.2941 18.1755 14.1083 18.0686ZM12.4568 16.6886C12.3789 16.6441 12.3106 16.5846 12.2558 16.5136C12.201 16.4425 12.1607 16.3614 12.1374 16.2747C12.114 16.1881 12.108 16.0977 12.1197 16.0088C12.1314 15.9198 12.1606 15.834 12.2055 15.7564C12.2966 15.5997 12.4461 15.4854 12.6212 15.4386C12.7963 15.3918 12.9829 15.4162 13.14 15.5066C13.2177 15.5511 13.2858 15.6105 13.3405 15.6813C13.3951 15.7522 13.4353 15.8331 13.4586 15.9195C13.482 16.0059 13.488 16.096 13.4765 16.1848C13.4649 16.2735 13.436 16.3591 13.3913 16.4366C13.3007 16.5939 13.1514 16.7088 12.9762 16.756C12.8009 16.8033 12.6141 16.779 12.4568 16.6886ZM11.331 15.2081C11.2647 15.1698 11.2067 15.1187 11.1601 15.0579C11.1135 14.9971 11.0794 14.9277 11.0597 14.8537C11.0399 14.7797 11.0349 14.7026 11.045 14.6267C11.0551 14.5507 11.08 14.4775 11.1184 14.4113C11.1568 14.345 11.2078 14.2869 11.2686 14.2403C11.3294 14.1938 11.3988 14.1597 11.4728 14.1399C11.5468 14.1202 11.624 14.1152 11.6999 14.1253C11.7758 14.1353 11.849 14.1603 11.9153 14.1986C12.1943 14.3591 12.2903 14.7154 12.129 14.9936C12.0515 15.1278 11.924 15.2257 11.7744 15.2659C11.6248 15.3061 11.4653 15.2853 11.331 15.2081ZM10.6688 13.7636C10.6117 13.731 10.5616 13.6874 10.5215 13.6353C10.4813 13.5833 10.4518 13.5238 10.4346 13.4603C10.4175 13.3968 10.4131 13.3306 10.4216 13.2654C10.4301 13.2002 10.4514 13.1373 10.4843 13.0804C10.5511 12.9652 10.6608 12.8812 10.7894 12.8467C10.9181 12.8123 11.0551 12.8302 11.1705 12.8966C11.4105 13.0346 11.493 13.3406 11.355 13.5791C11.2885 13.6946 11.1788 13.7789 11.0501 13.8135C10.9214 13.8481 10.7842 13.8302 10.6688 13.7636ZM10.377 12.4309C10.328 12.4028 10.2851 12.3652 10.2506 12.3205C10.2162 12.2757 10.1909 12.2245 10.1763 12.17C10.1616 12.1154 10.1579 12.0585 10.1653 12.0025C10.1728 11.9465 10.1912 11.8925 10.2195 11.8436C10.2769 11.7451 10.3709 11.6732 10.4811 11.6437C10.5912 11.6142 10.7086 11.6295 10.8075 11.6861C10.8564 11.7144 10.8993 11.752 10.9336 11.7969C10.968 11.8417 10.9932 11.8928 11.0078 11.9474C11.0224 12.002 11.0261 12.0589 11.0187 12.1149C11.0113 12.1709 10.9929 12.2249 10.9646 12.2738C10.9364 12.3227 10.8988 12.3655 10.8539 12.3999C10.8091 12.4342 10.7579 12.4594 10.7034 12.474C10.6488 12.4886 10.5919 12.4923 10.5359 12.4849C10.4799 12.4775 10.4259 12.4592 10.377 12.4309ZM13.1895 19.8754C13.083 19.8756 12.9775 19.8548 12.879 19.8142C12.7805 19.7736 12.691 19.7139 12.6155 19.6387C12.5401 19.5635 12.4802 19.4741 12.4393 19.3758C12.3985 19.2774 12.3774 19.1719 12.3773 19.0654C12.3774 18.9589 12.3985 18.8535 12.4394 18.7551C12.4802 18.6568 12.5401 18.5675 12.6156 18.4923C12.691 18.4171 12.7805 18.3576 12.879 18.3171C12.9775 18.2765 13.083 18.2558 13.1895 18.2561C13.638 18.2561 14.0018 18.6184 14.0018 19.0661C14.0018 19.5131 13.638 19.8754 13.1895 19.8754ZM11.001 18.2719C10.9351 18.2105 10.8819 18.1367 10.8446 18.0547C10.8073 17.9727 10.7866 17.8841 10.7836 17.7941C10.7806 17.704 10.7954 17.6143 10.8272 17.53C10.8589 17.4457 10.9071 17.3685 10.9688 17.3029C11.0938 17.1701 11.2664 17.0923 11.4486 17.0864C11.6309 17.0805 11.8081 17.147 11.9415 17.2714C12.219 17.5301 12.2325 17.9636 11.973 18.2404C11.848 18.3729 11.6756 18.4506 11.4935 18.4565C11.3114 18.4624 11.1344 18.396 11.001 18.2719ZM9.90227 16.8109C9.84661 16.7588 9.80177 16.6963 9.77031 16.6269C9.73886 16.5575 9.72141 16.4826 9.71898 16.4065C9.71654 16.3303 9.72915 16.2544 9.7561 16.1831C9.78305 16.1119 9.8238 16.0466 9.87602 15.9911C9.98161 15.8788 10.1274 15.8129 10.2814 15.8079C10.4355 15.8028 10.5853 15.859 10.698 15.9641C10.7539 16.016 10.799 16.0784 10.8306 16.1478C10.8622 16.2172 10.8798 16.2922 10.8823 16.3684C10.8848 16.4446 10.8722 16.5206 10.8452 16.5919C10.8182 16.6632 10.7774 16.7284 10.725 16.7839C10.6193 16.8962 10.4734 16.9621 10.3192 16.9672C10.165 16.9723 10.0151 16.9161 9.90227 16.8109ZM9.25802 15.3679C9.21041 15.3235 9.17205 15.2702 9.14514 15.2109C9.11822 15.1517 9.10329 15.0877 9.1012 15.0227C9.09911 14.9577 9.1099 14.8928 9.13295 14.832C9.156 14.7711 9.19086 14.7155 9.23552 14.6681C9.32571 14.5723 9.45018 14.516 9.58172 14.5117C9.71327 14.5073 9.84118 14.5552 9.93752 14.6449C9.98511 14.6893 10.0235 14.7427 10.0504 14.802C10.0773 14.8612 10.0923 14.9252 10.0945 14.9903C10.0966 15.0554 10.0859 15.1202 10.063 15.1812C10.04 15.2421 10.0053 15.2979 9.96077 15.3454C9.87045 15.4414 9.74577 15.4976 9.61404 15.5018C9.48232 15.5061 9.35429 15.4579 9.25802 15.3679ZM8.99102 14.0449C8.95023 14.0068 8.91737 13.961 8.89431 13.9101C8.87125 13.8593 8.85845 13.8044 8.85664 13.7486C8.85482 13.6927 8.86404 13.6371 8.88375 13.5849C8.90347 13.5327 8.93329 13.4848 8.97152 13.4441C9.04894 13.3615 9.15601 13.3129 9.26921 13.3091C9.3824 13.3053 9.49248 13.3466 9.57527 13.4239C9.74777 13.5844 9.75527 13.8536 9.59477 14.0254C9.51724 14.1079 9.41013 14.1564 9.29693 14.16C9.18373 14.1637 9.07371 14.1223 8.99102 14.0449ZM9.00902 12.8854C8.97385 12.8527 8.94549 12.8134 8.92558 12.7698C8.90566 12.7261 8.89458 12.6789 8.89298 12.631C8.89137 12.583 8.89928 12.5352 8.91623 12.4903C8.93319 12.4454 8.95886 12.4043 8.99177 12.3694C9.05842 12.2987 9.15037 12.2572 9.24749 12.2542C9.34461 12.2511 9.439 12.2866 9.51002 12.3529C9.57187 12.4212 9.60571 12.5104 9.60482 12.6025C9.60392 12.6947 9.56836 12.7831 9.5052 12.8503C9.44204 12.9174 9.35591 12.9583 9.26397 12.9648C9.17203 12.9713 9.081 12.943 9.00902 12.8854ZM9.51527 19.3054C9.46427 19.2305 9.42855 19.1463 9.41014 19.0576C9.39174 18.969 9.39101 18.8775 9.40801 18.7885C9.42501 18.6996 9.4594 18.6148 9.50921 18.5392C9.55902 18.4635 9.62326 18.3984 9.69827 18.3476C9.85002 18.2446 10.0365 18.2059 10.2167 18.24C10.3969 18.2742 10.5563 18.3784 10.6598 18.5299C10.7108 18.6047 10.7466 18.6888 10.7651 18.7774C10.7835 18.8661 10.7843 18.9575 10.7673 19.0464C10.7503 19.1354 10.7158 19.2201 10.666 19.2957C10.6161 19.3712 10.5518 19.4362 10.4768 19.4869C10.325 19.5898 10.1387 19.6285 9.95857 19.5945C9.7784 19.5605 9.61903 19.4566 9.51527 19.3054ZM8.43077 17.8534C8.3872 17.7897 8.35664 17.7181 8.34085 17.6426C8.32507 17.5671 8.32437 17.4892 8.3388 17.4135C8.35323 17.3377 8.3825 17.2655 8.42493 17.2011C8.46736 17.1367 8.5221 17.0813 8.58602 17.0381C8.71508 16.9507 8.87346 16.9179 9.02662 16.9469C9.17977 16.9758 9.31526 17.0642 9.40352 17.1926C9.44709 17.2563 9.47765 17.3279 9.49343 17.4034C9.50922 17.4789 9.50992 17.5568 9.49549 17.6326C9.48106 17.7083 9.45179 17.7805 9.40936 17.8449C9.36693 17.9093 9.31219 17.9647 9.24827 18.0079C9.11928 18.0955 8.96083 18.1284 8.80761 18.0995C8.6544 18.0705 8.5189 17.982 8.43077 17.8534ZM7.78727 16.4411C7.74977 16.3862 7.7235 16.3243 7.70995 16.2592C7.6964 16.194 7.69584 16.1269 7.70832 16.0615C7.72079 15.9961 7.74604 15.9339 7.78263 15.8783C7.81922 15.8227 7.86642 15.7749 7.92152 15.7376C8.03304 15.6621 8.16993 15.6337 8.3023 15.6587C8.43467 15.6837 8.55176 15.7601 8.62802 15.8711C8.66572 15.9262 8.69214 15.9882 8.70576 16.0535C8.71938 16.1188 8.71993 16.1862 8.70738 16.2518C8.69483 16.3173 8.66942 16.3797 8.63263 16.4354C8.59584 16.4911 8.54839 16.5389 8.49302 16.5761C8.38138 16.6513 8.24454 16.6793 8.11233 16.654C7.98013 16.6287 7.86329 16.5522 7.78727 16.4411ZM7.51727 15.1256C7.48471 15.0779 7.46188 15.0242 7.4501 14.9676C7.43832 14.911 7.43781 14.8527 7.44861 14.7959C7.45941 14.7391 7.4813 14.685 7.51303 14.6367C7.54476 14.5884 7.5857 14.5468 7.63352 14.5144C7.73037 14.4487 7.8493 14.4241 7.96427 14.4458C8.07925 14.4676 8.18091 14.5341 8.24702 14.6306C8.27974 14.6784 8.30268 14.7321 8.31452 14.7887C8.32635 14.8454 8.32684 14.9038 8.31596 14.9607C8.30508 15.0175 8.28305 15.0716 8.25113 15.1199C8.21922 15.1681 8.17805 15.2096 8.13002 15.2419C8.03323 15.3073 7.91448 15.3318 7.79968 15.3101C7.68489 15.2883 7.58337 15.222 7.51727 15.1256ZM7.54727 13.9736C7.51941 13.9329 7.49986 13.887 7.48975 13.8387C7.47965 13.7904 7.47918 13.7406 7.48838 13.6921C7.49758 13.6436 7.51626 13.5974 7.54335 13.5561C7.57045 13.5149 7.60542 13.4793 7.64627 13.4516C7.72898 13.3954 7.83059 13.3743 7.92884 13.3929C8.0271 13.4114 8.114 13.4681 8.17052 13.5506C8.21989 13.6333 8.2358 13.7317 8.21497 13.8257C8.19415 13.9197 8.13817 14.0022 8.05851 14.0562C7.97884 14.1103 7.88152 14.1319 7.78647 14.1165C7.69143 14.1012 7.60585 14.05 7.54727 13.9736ZM7.78277 13.0114C7.75784 12.9767 7.74011 12.9373 7.73063 12.8956C7.72115 12.8539 7.72011 12.8108 7.72757 12.7687C7.73503 12.7266 7.75084 12.6864 7.77408 12.6505C7.79731 12.6147 7.82749 12.5838 7.86284 12.5598C7.89819 12.5357 7.938 12.519 7.97991 12.5106C8.02182 12.5022 8.06499 12.5023 8.10688 12.5108C8.14876 12.5193 8.18852 12.5362 8.22379 12.5603C8.25907 12.5845 8.28915 12.6154 8.31227 12.6514C8.35744 12.7216 8.37338 12.8067 8.3567 12.8886C8.34001 12.9704 8.29202 13.0425 8.22296 13.0894C8.1539 13.1364 8.06922 13.1545 7.98699 13.1399C7.90476 13.1253 7.83148 13.0792 7.78277 13.0114ZM4.22777 11.8549C4.44728 11.7286 4.70787 11.6945 4.95247 11.76C5.19707 11.8255 5.40574 11.9853 5.53277 12.2044C5.59534 12.3127 5.63592 12.4324 5.65219 12.5564C5.66845 12.6805 5.66007 12.8065 5.62753 12.9273C5.595 13.0481 5.53894 13.1613 5.46258 13.2604C5.38621 13.3596 5.29104 13.4426 5.18252 13.5049C4.72502 13.7674 4.14152 13.6106 3.87827 13.1561C3.81555 13.0478 3.77483 12.9282 3.75845 12.8041C3.74207 12.6799 3.75036 12.5538 3.78283 12.4329C3.8153 12.312 3.87132 12.1987 3.94767 12.0996C4.02402 12.0004 4.11921 11.9172 4.22777 11.8549ZM6.35027 10.4974C6.53602 10.3901 6.75672 10.3609 6.96396 10.4162C7.1712 10.4715 7.34807 10.6066 7.45577 10.7921C7.67852 11.1784 7.54577 11.6711 7.15877 11.8939C6.97291 12.0004 6.75246 12.0292 6.5455 11.9738C6.33854 11.9184 6.16187 11.7835 6.05402 11.5984C6.00087 11.5067 5.96636 11.4053 5.95249 11.3002C5.93861 11.1951 5.94564 11.0883 5.97317 10.9859C6.0007 10.8836 6.04818 10.7876 6.1129 10.7037C6.17761 10.6197 6.25828 10.5493 6.35027 10.4966V10.4974ZM8.37602 9.76463C8.5332 9.67444 8.71968 9.65008 8.89475 9.69687C9.06983 9.74366 9.21929 9.8578 9.31052 10.0144C9.3553 10.092 9.38433 10.1778 9.39598 10.2666C9.40762 10.3555 9.40164 10.4458 9.37838 10.5324C9.35512 10.619 9.31503 10.7001 9.2604 10.7712C9.20578 10.8423 9.13769 10.9019 9.06002 10.9466C8.90275 11.0368 8.7162 11.061 8.54112 11.0141C8.36603 10.9671 8.21662 10.8528 8.12552 10.6961C8.08066 10.6186 8.05156 10.5329 8.03987 10.444C8.02819 10.3552 8.03415 10.2649 8.05742 10.1784C8.08069 10.0919 8.12081 10.0108 8.17549 9.93976C8.23016 9.86876 8.2983 9.80925 8.37602 9.76463ZM10.2263 9.53513C10.3605 9.45788 10.5199 9.437 10.6695 9.47707C10.819 9.51714 10.9466 9.61489 11.0243 9.74888C11.0626 9.81509 11.0874 9.8882 11.0974 9.96402C11.1073 10.0398 11.1022 10.1169 11.0824 10.1907C11.0625 10.2646 11.0283 10.3338 10.9816 10.3944C10.935 10.455 10.8768 10.5058 10.8105 10.5439C10.744 10.5824 10.6705 10.6074 10.5943 10.6175C10.5182 10.6275 10.4407 10.6225 10.3665 10.6027C10.2922 10.5828 10.2226 10.5485 10.1616 10.5018C10.1006 10.455 10.0495 10.3967 10.011 10.3301C9.9728 10.2638 9.94805 10.1906 9.93819 10.1148C9.92832 10.0389 9.93354 9.96179 9.95354 9.88793C9.97354 9.81407 10.0079 9.74488 10.0547 9.68434C10.1015 9.6238 10.1598 9.57309 10.2263 9.53513ZM11.8118 9.68813C11.9271 9.62178 12.064 9.60386 12.1925 9.6383C12.321 9.67275 12.4306 9.75675 12.4973 9.87188C12.5553 9.98666 12.5672 10.1193 12.5304 10.2426C12.4936 10.3658 12.4109 10.4703 12.2994 10.5344C12.1879 10.5985 12.056 10.6174 11.931 10.5872C11.8059 10.5571 11.6972 10.4801 11.6273 10.3721C11.5943 10.3152 11.5729 10.2522 11.5643 10.1869C11.5557 10.1217 11.5601 10.0553 11.5773 9.99177C11.5944 9.9282 11.624 9.86865 11.6642 9.81654C11.7045 9.76443 11.7546 9.72079 11.8118 9.68813ZM13.1153 10.1036C13.2143 10.0469 13.3318 10.0317 13.4421 10.0612C13.5523 10.0907 13.6465 10.1625 13.704 10.2611C13.7325 10.31 13.751 10.364 13.7584 10.42C13.7659 10.476 13.7622 10.533 13.7476 10.5876C13.7329 10.6422 13.7076 10.6933 13.6731 10.7381C13.6386 10.7828 13.5956 10.8203 13.5465 10.8484C13.4976 10.8767 13.4436 10.8951 13.3876 10.9026C13.3316 10.91 13.2747 10.9063 13.2201 10.8918C13.1655 10.8772 13.1143 10.8521 13.0694 10.8177C13.0245 10.7834 12.9868 10.7405 12.9585 10.6916C12.9302 10.6427 12.9118 10.5887 12.9044 10.5327C12.8969 10.4767 12.9006 10.4198 12.9151 10.3652C12.9297 10.3106 12.9548 10.2594 12.9892 10.2145C13.0235 10.1696 13.0664 10.132 13.1153 10.1036ZM5.71052 8.42963C5.91659 8.36748 6.1389 8.38958 6.3287 8.49109C6.51851 8.5926 6.66031 8.76523 6.72302 8.97113C6.77222 9.17331 6.74204 9.38665 6.63868 9.56723C6.53532 9.74782 6.36666 9.8819 6.16741 9.94188C5.96817 10.0019 5.75352 9.98315 5.56765 9.88963C5.38178 9.7961 5.23884 9.63487 5.16827 9.43913C5.13724 9.33725 5.12667 9.23024 5.13716 9.12425C5.14765 9.01827 5.17899 8.9154 5.22939 8.82158C5.27979 8.72776 5.34824 8.64483 5.43081 8.57756C5.51338 8.51029 5.60844 8.46002 5.71052 8.42963ZM7.73102 7.71488C7.90254 7.67044 8.08461 7.69406 8.23912 7.78081C8.39362 7.86755 8.50858 8.0107 8.55994 8.18028C8.6113 8.34986 8.59508 8.53274 8.51466 8.69063C8.43425 8.84852 8.29588 8.96919 8.12852 9.02738C8.04234 9.05348 7.95186 9.06235 7.86225 9.05349C7.77265 9.04462 7.68566 9.01819 7.60627 8.97571C7.44592 8.88991 7.32623 8.74393 7.27352 8.56988C7.22081 8.39584 7.2394 8.20798 7.32519 8.04763C7.41099 7.88729 7.55697 7.7676 7.73102 7.71488ZM9.55052 7.49963C9.69772 7.45518 9.85654 7.47101 9.99206 7.54366C10.1276 7.61631 10.2287 7.73981 10.2731 7.88701C10.3176 8.0342 10.3018 8.19303 10.2291 8.32855C10.1565 8.46407 10.033 8.56518 9.88577 8.60963C9.81289 8.63165 9.73638 8.63909 9.66062 8.63153C9.58486 8.62398 9.51133 8.60158 9.44423 8.56561C9.37713 8.52964 9.31777 8.4808 9.26954 8.42189C9.22131 8.36298 9.18516 8.29514 9.16315 8.22226C9.14113 8.14937 9.13369 8.07287 9.14124 7.99711C9.1488 7.92135 9.1712 7.84782 9.20717 7.78072C9.24314 7.71362 9.29198 7.65426 9.35089 7.60603C9.4098 7.5578 9.47764 7.52165 9.55052 7.49963ZM11.1255 7.66688C11.2513 7.62889 11.3871 7.64243 11.5029 7.70453C11.6187 7.76663 11.7052 7.8722 11.7431 7.99801C11.7811 8.12382 11.7676 8.25957 11.7055 8.3754C11.6434 8.49123 11.5378 8.57764 11.412 8.61563C11.286 8.65348 11.1501 8.63984 11.0342 8.57771C10.9182 8.51557 10.8316 8.41001 10.7933 8.28413C10.7745 8.22174 10.7682 8.15625 10.7748 8.09143C10.7813 8.0266 10.8007 7.96371 10.8316 7.90636C10.8625 7.84901 10.9045 7.79834 10.9551 7.75724C11.0056 7.71615 11.0638 7.68544 11.1263 7.66688H11.1255ZM12.408 8.09963C12.514 8.07358 12.6259 8.08919 12.7207 8.14324C12.8155 8.1973 12.886 8.28567 12.9175 8.39015C12.9491 8.49462 12.9393 8.60721 12.8903 8.70471C12.8413 8.80221 12.7567 8.87717 12.654 8.91413C12.6005 8.93029 12.5444 8.93575 12.4888 8.9302C12.4332 8.92466 12.3793 8.90822 12.33 8.88183C12.2808 8.85543 12.2372 8.8196 12.2018 8.77637C12.1665 8.73314 12.1399 8.68336 12.1238 8.62988C12.1076 8.5764 12.1022 8.52026 12.1077 8.46467C12.1132 8.40908 12.1297 8.35513 12.1561 8.30589C12.1825 8.25665 12.2183 8.21309 12.2615 8.1777C12.3048 8.14231 12.3545 8.11579 12.408 8.09963ZM13.4055 8.69588C13.4514 8.68195 13.4996 8.67719 13.5473 8.68188C13.5951 8.68656 13.6414 8.70061 13.6837 8.72321C13.726 8.74581 13.7635 8.77652 13.7939 8.81359C13.8244 8.85066 13.8472 8.89336 13.8611 8.93926C13.8751 8.98516 13.8798 9.03335 13.8752 9.08109C13.8705 9.12882 13.8564 9.17517 13.8338 9.21748C13.8112 9.25978 13.7805 9.29723 13.7434 9.32767C13.7064 9.35811 13.6637 9.38095 13.6178 9.39488C13.5251 9.42303 13.425 9.4132 13.3396 9.36756C13.2541 9.32192 13.1903 9.2442 13.1621 9.15151C13.134 9.05882 13.1438 8.95874 13.1895 8.87329C13.2351 8.78785 13.3128 8.72403 13.4055 8.69588ZM7.57802 5.91563C7.66857 5.90868 7.75959 5.91966 7.84588 5.94796C7.93218 5.97626 8.01203 6.02132 8.08087 6.08054C8.14971 6.13977 8.20619 6.212 8.24705 6.2931C8.28792 6.3742 8.31238 6.46256 8.31902 6.55313C8.33235 6.73613 8.27243 6.91693 8.15246 7.05576C8.03248 7.19458 7.86227 7.28006 7.67927 7.29338C7.49627 7.30671 7.31547 7.2468 7.17665 7.12682C7.03782 7.00684 6.95235 6.83663 6.93902 6.65363C6.93248 6.56315 6.94386 6.47227 6.97248 6.38619C7.00111 6.30011 7.04643 6.22051 7.10585 6.15197C7.16528 6.08342 7.23763 6.02726 7.31878 5.98671C7.39993 5.94616 7.48828 5.922 7.57877 5.91563H7.57802ZM9.38327 5.70713C9.53396 5.70369 9.6802 5.75831 9.79173 5.8597C9.90326 5.96108 9.97153 6.10147 9.98242 6.2518C9.99331 6.40213 9.94598 6.5509 9.85023 6.6673C9.75447 6.7837 9.61763 6.85883 9.46802 6.87713C9.38905 6.8868 9.30893 6.88031 9.23254 6.85807C9.15615 6.83583 9.08508 6.7983 9.02364 6.74775C8.96219 6.69721 8.91166 6.6347 8.8751 6.56404C8.83855 6.49337 8.81674 6.41601 8.81099 6.33666C8.80524 6.2573 8.81568 6.17761 8.84167 6.10241C8.86765 6.02721 8.90865 5.95808 8.96217 5.89921C9.01569 5.84034 9.08061 5.79295 9.153 5.75994C9.22539 5.72692 9.30373 5.70895 9.38327 5.70713ZM10.9313 5.86013C11.0606 5.85852 11.1858 5.90635 11.2811 5.99387C11.3764 6.08139 11.4346 6.20198 11.444 6.33103C11.4534 6.46007 11.4132 6.58783 11.3315 6.68821C11.2499 6.78859 11.133 6.85402 11.0048 6.87113C10.8727 6.87734 10.7434 6.83172 10.6445 6.74398C10.5456 6.65624 10.4849 6.53333 10.4753 6.40146C10.4657 6.26958 10.508 6.13919 10.5932 6.03806C10.6784 5.93694 10.7997 5.87309 10.9313 5.86013ZM12.2085 6.28613C12.3222 6.28238 12.4329 6.32278 12.5175 6.39886C12.6021 6.47493 12.6539 6.58079 12.6621 6.69424C12.6704 6.8077 12.6344 6.91993 12.5617 7.00744C12.489 7.09494 12.3853 7.15092 12.2723 7.16363C12.2134 7.17026 12.1537 7.16492 12.0969 7.14794C12.0401 7.13096 11.9874 7.10269 11.9418 7.06481C11.8962 7.02693 11.8587 6.98024 11.8316 6.92753C11.8044 6.87481 11.7883 6.81717 11.784 6.75804C11.7797 6.69892 11.7873 6.63954 11.8066 6.58346C11.8258 6.52738 11.8561 6.47576 11.8958 6.43169C11.9354 6.38762 11.9835 6.35201 12.0373 6.327C12.091 6.30199 12.1493 6.28809 12.2085 6.28613Z" fill={color} /></svg>;
}
export default miota;