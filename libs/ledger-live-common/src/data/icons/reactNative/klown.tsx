
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function klown({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M15.7155 11.673C15.6675 11.6445 15.6113 11.6205 15.588 11.6205C15.564 11.6205 15.45 11.7428 15.3338 11.8913C15.2126 12.0465 15.0708 12.2296 14.7888 12.5939C14.5857 12.8563 14.3097 13.2128 13.9163 13.7205L13.2083 14.634V17.121L13.2765 17.2058C13.335 17.2748 13.353 17.283 13.383 17.2538C13.4145 17.2223 13.491 16.8698 13.56 16.425C13.5915 16.2158 13.629 16.1655 13.6635 16.2848C13.7108 16.4543 13.6658 17.1473 13.5893 17.4548C13.5758 17.5133 13.5863 17.529 13.695 17.5823C13.761 17.6138 13.8195 17.6348 13.8278 17.6273C13.833 17.622 13.9178 17.4128 14.0153 17.166C14.2005 16.695 14.2328 16.6313 14.2725 16.671C14.304 16.7033 14.2613 16.878 14.1 17.3595C13.9785 17.7248 13.968 17.7728 13.9965 17.8523C14.034 17.9498 14.0393 18.027 14.01 18.027C13.9965 18.027 13.8593 17.9603 13.698 17.8815C13.3328 17.6985 13.179 17.6565 13.0838 17.709C13.0013 17.757 12.981 17.7908 12.9435 17.937C12.9135 18.0223 12.8677 18.1012 12.8085 18.1695C12.7478 18.2385 12.7028 18.297 12.708 18.3023C12.7613 18.3252 12.8151 18.3469 12.8693 18.3675C13.0508 18.441 13.2773 18.5895 13.503 18.78L13.6155 18.879L13.8405 19.0853L13.9545 18.9983C14.3438 18.7043 14.709 18.474 14.9685 18.3578C15.5243 18.1088 15.8813 17.8733 16.2255 17.5238C16.5383 17.2058 16.6575 16.9733 16.7528 16.5023C16.7843 16.3433 16.8713 16.1843 16.9478 16.1445C16.9958 16.1183 16.9988 16.1205 16.9853 16.1895C16.9823 16.2016 16.9791 16.2151 16.9758 16.229C16.9674 16.2645 16.9583 16.3028 16.9508 16.3275C16.9373 16.377 16.9433 16.383 16.9823 16.3695C17.2103 16.2878 17.3348 16.0148 17.2898 15.6863C17.2395 15.3083 17.1255 15.1943 16.8585 15.258C16.779 15.276 16.641 15.324 16.548 15.366C16.458 15.4058 16.3763 15.432 16.368 15.4245C16.3605 15.4163 16.3763 15.3398 16.4055 15.255C16.5353 14.8793 16.5533 14.445 16.4483 14.3025C16.353 14.1728 16.1783 14.1908 15.9053 14.355L15.7958 14.4195C15.6645 14.4945 15.6713 14.469 15.7493 14.3415C15.8843 14.1113 16.0193 13.8383 16.0695 13.6883C16.1573 13.4363 16.1175 13.185 15.9848 13.1423C15.8865 13.1108 15.6698 13.2488 15.3608 13.5398C15.1958 13.6958 15.0608 13.8173 15.0608 13.8098C15.0608 13.7835 15.156 13.611 15.3555 13.2825C15.471 13.0898 15.6405 12.783 15.7305 12.6C15.8633 12.33 15.8955 12.24 15.903 12.108C15.9158 11.9145 15.8475 11.7533 15.7155 11.673Z" fill={color} /><Path d="M10.8285 15.2475C10.7415 15.1253 10.6853 15.1463 10.434 15.3855C10.3343 15.4819 10.231 15.5737 10.1243 15.6623C9.94428 15.7898 9.54978 15.9698 9.25578 16.0598C9.08403 16.113 8.95428 16.1655 8.96478 16.176C9.01203 16.2188 9.28728 16.2533 9.59178 16.2533C9.76878 16.2533 9.92628 16.2615 9.93378 16.269C9.94353 16.2795 9.92853 16.3193 9.89853 16.359C9.77853 16.5263 9.84303 16.5773 10.1985 16.5623L10.2863 16.5578L10.6088 16.539L10.6538 16.608C10.677 16.6448 10.6905 16.695 10.6823 16.7213C10.659 16.7903 10.4633 16.9913 10.296 17.1188C9.89703 17.4203 9.91503 17.4525 10.482 17.4713C10.8203 17.481 10.9133 17.4923 10.932 17.5238C10.971 17.5875 10.9635 17.643 10.8945 17.7375C10.6665 18.0525 10.5585 18.225 10.566 18.2625C10.5818 18.3548 10.7543 18.402 11.043 18.3945C11.5215 18.381 11.6565 18.387 11.7705 18.423C11.7978 18.433 11.8259 18.4405 11.8545 18.4455L11.8845 18.4478L11.901 18.4448C11.9138 18.429 11.8133 18.2258 11.3235 17.2883C11.2515 17.1503 11.2253 17.0708 11.2358 17.0288C11.268 16.9013 11.2515 16.5255 11.2118 16.4273C11.196 16.3898 11.1518 16.3223 11.103 16.2623L11.0535 16.2053L10.9313 16.0755V15.8378C10.9313 15.549 10.8945 15.3375 10.8285 15.2475Z" fill={color} /><Path d="M11.487 13.6328C11.4555 13.3493 11.4263 13.113 11.4143 13.1055H11.421C11.4135 13.1003 11.4083 13.1108 11.4083 13.1318C11.4083 13.1828 11.2283 14.8815 11.2095 15.0165C11.2013 15.078 11.2043 15.1148 11.22 15.1095C11.2358 15.1065 11.3415 15.0143 11.4578 14.9085C11.5748 14.8028 11.6753 14.7285 11.6828 14.7413C11.694 14.7548 11.7308 15.1095 11.7653 15.5303C11.799 15.9105 11.8328 16.263 11.8448 16.3605L11.847 16.383L11.8605 16.473L12.027 16.29C12.0964 16.2146 12.1652 16.1386 12.2333 16.062L12.2633 16.0283L12.3345 15.9488L12.3825 16.0043C12.3917 16.0168 12.4202 16.0534 12.4607 16.1057C12.5224 16.1852 12.6122 16.301 12.705 16.4228C12.9593 16.7505 13.023 16.8195 13.023 16.761C13.0253 16.719 12.297 14.6115 12.2813 14.6115C12.2708 14.6115 12.2288 14.76 12.186 14.943C12.1463 15.1253 12.1035 15.2738 12.096 15.2738C12.0885 15.2738 12.054 14.9903 12.0188 14.6438C11.9483 13.8915 11.9348 13.791 11.9138 13.791C11.9063 13.791 11.829 13.8998 11.7413 14.0295C11.6565 14.1615 11.577 14.268 11.5643 14.268C11.5508 14.268 11.5403 14.241 11.5403 14.2065C11.5403 14.175 11.517 13.9155 11.487 13.6328Z" fill={color} /><Path d="M8.78478 11.6918C8.60178 11.6415 8.20728 11.6205 8.01678 11.6445C7.50603 11.7158 6.94728 12.0203 6.63228 12.4043C6.23553 12.8858 6.06903 13.392 6.09528 14.0295C6.11403 14.424 6.17703 14.6993 6.32253 14.9963C6.43368 15.2312 6.59562 15.4385 6.79667 15.6032C6.99771 15.768 7.23282 15.886 7.48503 15.9488C7.76853 16.0208 7.78653 15.9983 7.55628 15.8633C7.14903 15.6285 6.84678 15.3503 6.65928 15.0383C6.02628 13.998 6.63753 12.4598 7.84728 12.0495C8.03853 11.9858 8.09628 11.9783 8.43003 11.9783L8.53803 11.979C8.76678 11.9805 8.85078 11.9925 8.99928 12.039C9.29712 12.1408 9.57743 12.2881 9.83028 12.4755C10.0295 12.6271 10.0943 12.6792 10.1023 12.6717C10.1071 12.6671 10.0909 12.6405 10.071 12.6008C10.005 12.468 9.56853 12.0465 9.39078 11.9408C9.21078 11.838 8.98578 11.742 8.78478 11.6918Z" fill={color} /><Path d="M7.18878 13.8735C7.08753 13.593 7.08228 13.5848 7.04253 13.707C7.01703 13.7813 7.01403 13.8758 7.02453 14.0183C7.08528 14.7045 7.36878 15.1733 7.85028 15.3983C8.04903 15.4883 8.25753 15.5408 8.25753 15.498C8.25753 15.4883 8.18103 15.4005 8.08878 15.303C7.69647 14.8913 7.39046 14.4053 7.18878 13.8735Z" fill={color} /><Path d="M9.39603 9.81002C9.61353 9.70952 9.59703 9.70427 9.26403 9.75452C8.68428 9.84152 7.88178 10.1648 7.33428 10.53C7.02085 10.7455 6.73078 10.9931 6.46878 11.2688C6.27528 11.4885 6.05253 11.7975 6.06603 11.835C6.07128 11.8508 6.13728 11.814 6.21978 11.748C6.39978 11.6018 6.63228 11.4353 6.65103 11.4353C6.72938 11.3963 6.8055 11.353 6.87903 11.3055C7.17475 11.1343 7.49811 11.016 7.83453 10.956C8.06778 10.9245 8.43228 10.938 8.61528 10.9883C8.87503 11.0684 9.12664 11.1729 9.36678 11.3003C9.47553 11.361 9.56853 11.409 9.57378 11.409C9.58953 11.409 9.87828 11.6048 10.0973 11.7638C10.479 12.036 11.04 12.5415 11.289 12.8333C11.3768 12.936 11.4638 13.0208 11.4818 13.0208C11.5005 13.0238 11.5245 13.0448 11.532 13.0688C11.5995 13.1803 11.672 13.2887 11.7495 13.3935C12.0533 13.8122 12.3369 14.2452 12.5993 14.691C12.9441 15.2772 12.9442 15.2772 12.9667 15.2623C12.9676 15.2616 12.9687 15.2609 12.9698 15.2603C12.9833 15.2513 12.993 15.1313 12.996 14.9753V14.5455L12.6675 14.2358C12.3075 13.8945 11.9775 13.524 11.67 13.116C11.4293 12.7958 11.3288 12.6315 10.659 11.475C10.41 11.043 10.344 10.959 10.2195 10.893C9.90228 10.734 9.44403 10.6095 8.97228 10.554C8.81928 10.5353 8.69478 10.509 8.69478 10.4955C8.69478 10.4453 8.99403 10.3215 9.20028 10.284C9.36774 10.2598 9.5366 10.2465 9.70578 10.2443C9.99978 10.2443 10.005 10.2443 10.0208 10.1805C10.0613 10.0215 10.0583 10.0193 9.57378 10.0058C9.19278 9.99377 9.08253 9.97727 9.14253 9.93377L9.16353 9.92102C9.17795 9.9102 9.24868 9.87773 9.33215 9.83941C9.35288 9.82989 9.3744 9.82001 9.39603 9.81002Z" fill={color} /><Path d="M7.48503 12.8378C7.36053 12.7665 7.35828 12.7883 7.45578 13.0553C7.61478 13.4895 7.87953 13.884 8.25753 14.268C8.55678 14.5688 8.95428 14.8913 9.08178 14.9438L9.10653 14.9513L9.12078 14.9483C9.13953 14.9295 9.06003 14.7045 8.94603 14.4638C8.66689 13.8897 8.25378 13.3912 7.74153 13.0103C7.6581 12.9497 7.57255 12.8922 7.48503 12.8378Z" fill={color} /><Path d="M8.78703 12.4598C8.62053 12.3833 8.33703 12.309 8.33703 12.3405C8.42223 12.4378 8.51053 12.5324 8.60178 12.624C8.92014 12.9553 9.18392 13.335 9.38328 13.749C9.48319 13.9731 9.52207 14.0606 9.54189 14.0565C9.55509 14.0537 9.55983 14.0103 9.56853 13.9395C9.59478 13.7408 9.57378 13.548 9.49953 13.2938C9.38853 12.9173 9.13428 12.6158 8.78703 12.4598Z" fill={color} /><Path d="M12.8079 7.89873C12.787 7.88849 12.7567 7.89749 12.6788 7.92002C11.6918 8.20877 10.6958 8.66627 10.302 9.01127L10.2353 9.07427L10.1318 9.18002L10.2143 9.48152C10.4964 10.5648 10.9854 11.5832 11.6543 12.4808C11.8868 12.7883 12.5408 13.431 12.8295 13.6328C13.0913 13.815 13.3613 13.9763 13.4093 13.9763C13.4565 13.9763 14.238 13.0635 14.2088 13.0365C14.2058 13.0343 14.0708 12.9863 13.9118 12.9338C13.38 12.756 12.9135 12.4995 12.591 12.2033C12.3263 11.9618 12.099 11.61 12.348 11.8298C12.5648 12.0203 13.3665 12.3563 13.83 12.4515C13.8418 12.4536 13.8533 12.4557 13.8645 12.4578C13.9517 12.4736 14.0186 12.4858 14.0213 12.4838C14.0213 12.4838 13.965 12.4043 13.8938 12.309C13.7243 12.087 13.5255 11.7 13.4168 11.382C13.3298 11.1233 13.2368 10.9905 13.0935 10.914C13.0335 10.8848 12.9615 10.8795 12.7635 10.893C12.072 10.938 11.4735 10.6335 11.151 10.0718C10.974 9.76202 10.7093 9.24077 10.722 9.22727C10.7303 9.21977 11.172 9.39677 11.7068 9.62177C12.6983 10.0373 12.8475 10.0935 13.0305 10.1235L13.0598 10.128L13.1888 10.146L13.1738 9.63227C13.1633 9.29402 13.1393 9.01052 13.1048 8.80427C13.0493 8.48927 12.9195 8.05727 12.8483 7.94627C12.8315 7.92082 12.8218 7.90553 12.8079 7.89873Z" fill={color} /><Path d="M16.0403 10.983C15.9743 10.9718 15.7703 10.9163 15.588 10.8555C15.246 10.7445 15.183 10.731 15.1988 10.7708C15.3388 10.909 15.4826 11.0433 15.63 11.1735C15.8173 11.3397 16.0018 11.509 16.1835 11.6813C16.2525 11.7503 16.3155 11.8035 16.3208 11.7983C16.329 11.793 16.2945 11.61 16.2473 11.3933L16.1595 10.998L16.0403 10.983Z" fill={color} /><Path d="M15.6668 8.82527C15.5925 8.49152 15.5205 8.20877 15.5078 8.19527C15.4973 8.18177 15.4808 8.20577 15.4703 8.24852C15.444 8.38877 14.922 9.96377 14.8695 10.0665C14.8403 10.125 14.8223 10.1753 14.8298 10.1805C14.8403 10.194 15.627 9.60602 15.7298 9.50552L15.804 9.43427L15.6668 8.82527Z" fill={color} /><Path fillRule="evenodd" clipRule="evenodd" d="M16.9013 7.07777C16.8506 7.04883 16.7944 7.03094 16.7363 7.02527C16.6328 7.01477 13.7535 7.68977 13.6395 7.75052C13.5511 7.80774 13.487 7.89563 13.4595 7.99727C13.446 8.05202 13.5915 8.73527 13.9628 10.3448C14.2508 11.592 14.4915 12.624 14.5028 12.6345C14.5133 12.645 14.7353 12.381 14.9948 12.0435C15.4448 11.4615 15.471 11.436 15.5558 11.436C15.7013 11.436 15.9263 11.571 16.0133 11.7135C16.1408 11.9175 16.1333 12.2025 15.9983 12.51C15.9718 12.5599 15.9531 12.6135 15.9428 12.669C15.9525 12.6788 17.8403 12.2693 17.9625 12.2288C18.0206 12.2037 18.0735 12.1681 18.1185 12.1238C18.1357 12.1057 18.151 12.0902 18.1633 12.0727C18.2538 11.9448 18.1907 11.7082 17.6318 9.52127C17.3138 8.27402 17.0333 7.22102 17.0093 7.18652C16.98 7.1442 16.9434 7.10739 16.9013 7.07777ZM16.9613 10.2023C17.073 10.0958 17.1683 10.0193 17.1735 10.0298C17.181 10.0508 16.416 11.8905 16.3875 11.9198C16.3763 11.9303 16.2788 11.8583 16.17 11.7608C16.062 11.6603 15.7148 11.3483 15.3945 11.0648C15.0765 10.7813 14.8283 10.5458 14.8388 10.5435C15.0644 10.6031 15.2878 10.6709 15.5085 10.7468L16.1565 10.956L16.4588 10.6733C16.623 10.5173 16.8503 10.305 16.9613 10.2023ZM14.7953 10.146C14.7953 10.1145 15.2723 8.63702 15.4703 8.05202C15.489 8.00177 15.5288 8.01527 15.5843 8.08652C15.8491 8.37402 16.1173 8.65829 16.389 8.93927C16.7993 9.36827 17.1383 9.73577 17.1383 9.75452C17.1383 9.80177 16.1558 10.7205 16.1033 10.7205C16.0793 10.7205 15.7643 10.623 15.402 10.506C14.7825 10.302 14.6843 10.257 14.769 10.2045C14.7848 10.1963 14.7953 10.17 14.7953 10.146Z" fill={color} /><Path d="M9.73953 7.46177C9.73953 7.41677 9.56253 7.44377 9.11778 7.55477C8.69529 7.6626 8.27977 7.79609 7.87353 7.95452C7.34103 8.16377 6.44403 8.64527 6.51303 8.68202C6.57671 8.70207 6.64232 8.71539 6.70878 8.72177C7.22178 8.78102 8.08203 8.99252 8.49228 9.15602L8.58603 9.19577L8.77353 9.28352L8.66703 9.30152C7.97403 9.42602 7.32003 9.71177 6.82203 10.1063C6.59178 10.2915 6.21378 10.6838 6.08928 10.8638C6.04678 10.9244 6.02173 10.9602 6.02733 10.9659C6.03536 10.9741 6.10651 10.9204 6.27978 10.7895C6.72978 10.4505 7.46553 10.0568 8.04528 9.83927C8.51928 9.66452 9.18378 9.50027 9.58878 9.46052C9.68628 9.45002 9.76578 9.43127 9.76578 9.42077C9.76578 9.37877 9.45903 9.16952 9.21753 9.04502C8.88753 8.87327 8.19303 8.61152 7.81503 8.51102L7.70103 8.48402L7.60878 8.46227L7.71453 8.37227C7.86003 8.24552 8.24628 8.02052 8.54853 7.88852C8.82603 7.76627 9.38478 7.57052 9.60153 7.51727C9.67578 7.50152 9.73953 7.47527 9.73953 7.46177Z" fill={color} /><Path d="M11.9264 10.2C11.9199 10.2077 11.9265 10.2264 11.9393 10.263C11.9738 10.3688 12.09 10.4295 12.2543 10.4295C12.429 10.4295 12.4208 10.3868 12.228 10.2945C12.1478 10.2548 12.0428 10.215 11.9978 10.2045C11.9544 10.1961 11.9332 10.1919 11.9264 10.2Z" fill={color} /><Path d="M9.65478 7.97252L9.67578 7.78277H9.60978C9.50403 7.78502 9.18903 7.89377 8.93778 8.01527C8.74128 8.11052 8.41578 8.35952 8.41578 8.41502C8.41578 8.42327 8.50878 8.46527 8.62278 8.50727C8.93626 8.62828 9.23906 8.77529 9.52803 8.94677C9.65178 9.01877 9.76353 9.07427 9.77928 9.07202C9.81078 9.05852 9.80028 8.75927 9.75528 8.45702C9.73428 8.30102 9.71628 8.24552 9.68628 8.24552C9.64053 8.24552 9.63078 8.20727 9.64653 8.04827L9.65478 7.97252Z" fill={color} /><Path d="M15.0083 6.40577C14.844 6.32102 14.6505 6.33677 13.7243 6.51152C12.7823 6.68852 12.075 6.86102 11.3685 7.08602C10.9841 7.21513 10.6068 7.36459 10.2383 7.53377C10.0815 7.61252 10.0583 7.63427 10.0155 7.74527C9.97053 7.86452 9.97053 7.88852 10.0155 8.29577C10.0548 8.66616 10.0628 8.79425 10.1046 8.80648C10.1307 8.81411 10.17 8.77664 10.2383 8.72477C10.4646 8.5606 10.7056 8.41774 10.9583 8.29802C11.9985 7.77677 13.3643 7.38302 15.0293 7.12052C15.2565 7.08302 15.405 7.04927 15.405 7.03052C15.405 6.98852 15.2303 6.62552 15.1643 6.53552C15.1358 6.49352 15.0638 6.43502 15.0083 6.40577Z" fill={color} /><Path d="M11.1753 4.72427H11.1833C11.1983 4.72427 11.2463 4.79927 11.2943 4.88627C11.5193 5.29652 11.9745 6.56477 11.919 6.62027C11.8823 6.64177 11.8414 6.65531 11.799 6.66002L11.7068 6.67577L11.5718 6.38552C11.3018 5.82302 10.8173 5.05652 10.7595 5.11127C10.752 5.11877 10.77 5.19602 10.7993 5.28377C10.9343 5.67002 11.1165 6.53552 11.1165 6.78152C11.1165 6.85577 11.1038 6.87902 11.0505 6.90377C11.0181 6.92023 10.9831 6.93089 10.947 6.93527C10.932 6.93527 10.8443 6.84002 10.7595 6.72377C10.6748 6.60677 10.5953 6.51977 10.5848 6.53027C10.5773 6.54377 10.5503 6.67577 10.5263 6.82652C10.4865 7.09952 10.4468 7.19402 10.4048 7.12652C10.3943 7.10702 10.3703 6.84002 10.3523 6.53027C10.3432 6.31814 10.3282 6.1063 10.3073 5.89502C10.299 5.85527 10.3043 5.82377 10.317 5.82377C10.3305 5.82377 10.434 5.91077 10.545 6.01877C10.656 6.12527 10.7513 6.20702 10.7565 6.19652C10.7783 6.15677 10.4918 5.30177 10.3118 4.86752C10.2968 4.83077 10.3223 4.81727 10.4738 4.79402C10.6486 4.76309 11.0965 4.72043 11.1753 4.72427Z" fill={color} /><Path d="M9.51228 5.15927C9.39378 5.11127 9.21378 5.15627 9.00153 5.29127C8.93867 5.32912 8.73432 5.44589 8.53813 5.558L8.50878 5.57477C7.82628 5.95577 7.21728 6.39002 7.23378 6.48527C7.23828 6.50627 7.25703 6.52202 7.27578 6.51677C7.29127 6.51491 7.39835 6.48747 7.5294 6.45388C7.55701 6.4468 7.58568 6.43946 7.61478 6.43202C8.0098 6.32404 8.41807 6.27228 8.82753 6.27827L9.02853 6.28127L9.52053 6.29402L9.53928 6.10652C9.54983 5.92044 9.55608 5.73414 9.55803 5.54777V5.37902C9.55728 5.19677 9.54828 5.17202 9.51228 5.15927Z" fill={color} /><Path d="M11.8238 4.98152L11.664 4.71152H11.535C11.466 4.71152 11.4083 4.71752 11.4083 4.72502C11.4675 4.83969 11.5303 4.95249 11.5965 5.06327C11.8305 5.48353 12.0457 5.91395 12.2415 6.35327C12.2603 6.40269 12.2834 6.45037 12.3105 6.49577C12.342 6.53252 12.5198 6.48752 12.5198 6.44252C12.5198 6.33902 12.1455 5.54552 11.8763 5.07152L11.8238 4.98152Z" fill={color} /><Path d="M12.8588 4.77752C12.5918 4.75652 12.2918 4.73777 12.1943 4.73777C12.1044 4.73777 12.0522 4.73316 12.0375 4.75448C12.017 4.78406 12.0687 4.86355 12.192 5.07452C12.366 5.37677 12.7845 6.23627 12.7845 6.29177C12.7845 6.36902 12.8528 6.36902 13.1978 6.29702C13.5151 6.23381 13.8336 6.1773 14.1533 6.12752C14.1713 6.11477 13.9913 5.64077 13.8698 5.37377C13.6845 4.97702 13.6215 4.87577 13.539 4.85702L13.4063 4.83077C13.3688 4.82252 13.1235 4.79927 12.8588 4.77752Z" fill={color} /><Path fillRule="evenodd" clipRule="evenodd" d="M16.2203 4.98153C14.3762 3.87064 12.1678 3.53366 10.0763 4.04403C8.82154 4.34553 7.59604 4.97853 6.65104 5.81253C6.33604 6.09003 5.82229 6.62253 5.59729 6.90303C4.13929 8.71578 3.51979 11.112 3.91879 13.3883C4.29004 15.5033 5.46529 17.3693 7.24129 18.6563C8.75029 19.752 10.7783 20.3213 12.6128 20.1623C14.3355 20.0168 15.8468 19.413 17.1518 18.357C17.6792 17.9117 18.1593 17.413 18.5843 16.869C19.0999 16.1704 19.5044 15.3963 19.7835 14.574C20.0775 13.6928 20.202 12.9195 20.1998 11.9588C20.1998 10.545 19.8473 9.22728 19.1273 7.95378C18.4628 6.77328 17.3903 5.67753 16.2203 4.98153ZM10.1033 4.69278C10.8834 4.49361 11.6899 4.4177 12.4935 4.46778C13.2668 4.52553 13.8593 4.64478 14.4653 4.86153C15.36 5.18478 15.9563 5.51328 16.7363 6.11103C17.0408 6.35214 17.325 6.61778 17.586 6.90528C17.5972 6.91836 17.6124 6.93632 17.6302 6.95742C17.6809 7.01735 17.753 7.10258 17.814 7.17303C18.6638 8.15778 19.2623 9.49203 19.5 10.9343C19.569 11.3393 19.566 12.5888 19.497 13.0463C19.3073 14.328 18.8595 15.405 18.0495 16.5413C17.6153 17.1473 16.7475 17.949 16.0695 18.3675C14.6003 19.2758 13.044 19.662 11.382 19.5293C10.4153 19.4528 9.40954 19.1618 8.50954 18.6983C7.12271 17.9844 5.99495 16.8533 5.28529 15.4643C4.70029 14.3198 4.44604 13.269 4.44604 12.0143C4.44604 10.4528 4.87729 9.05553 5.77729 7.71303C6.05554 7.29753 6.79429 6.48753 7.13329 6.22503L7.41079 6.00528C8.09329 5.46003 9.16879 4.93578 10.1033 4.69278Z" fill={color} /></Svg>;
}
export default klown;