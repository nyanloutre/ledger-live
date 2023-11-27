
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function uni({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9.19588 4.3253C8.98213 4.2923 8.97313 4.2878 9.07363 4.2728C9.26638 4.2428 9.72238 4.28405 10.0366 4.3583C10.7694 4.53305 11.4361 4.9793 12.1486 5.77205L12.3376 5.98205L12.6076 5.9393C13.7476 5.75555 14.9079 5.9018 15.8776 6.34955C16.1446 6.47255 16.5654 6.7178 16.6179 6.78155C16.6351 6.80105 16.6659 6.9308 16.6861 7.0688C16.7581 7.54655 16.7221 7.91255 16.5766 8.1863C16.4971 8.3348 16.4926 8.3813 16.5459 8.5088C16.5712 8.56147 16.6107 8.60598 16.66 8.63727C16.7093 8.66856 16.7665 8.68538 16.8249 8.6858C17.0664 8.6858 17.3259 8.2958 17.4459 7.75355L17.4939 7.5383L17.5884 7.64555C18.1074 8.23355 18.5146 9.0353 18.5844 9.6053L18.6031 9.75455L18.5154 9.61955C18.3654 9.38705 18.2154 9.22805 18.0219 9.0998C17.6739 8.86955 17.3056 8.79155 16.3306 8.7398C15.4501 8.6933 14.9514 8.6183 14.4579 8.45705C13.6171 8.1833 13.1934 7.81805 12.1944 6.5078C11.7511 5.9258 11.4766 5.60405 11.2044 5.3453C10.5841 4.7558 9.97513 4.4468 9.19588 4.3253Z" fill={color} /><path d="M16.8166 5.62505C16.8391 5.23505 16.8916 4.9778 16.9981 4.74305C17.0401 4.65005 17.0799 4.57355 17.0859 4.57355C17.0792 4.62619 17.0653 4.67768 17.0446 4.72655C16.9674 4.95455 16.9546 5.26655 17.0079 5.6288C17.0754 6.0893 17.1144 6.1553 17.6004 6.65255C17.8291 6.8858 18.0946 7.1798 18.1906 7.30655L18.3654 7.53605L18.1906 7.3718C17.9769 7.17155 17.4849 6.7793 17.3761 6.7238C17.3034 6.6863 17.2921 6.68705 17.2471 6.7313C17.2059 6.7733 17.1969 6.8348 17.1916 7.12805C17.1826 7.58405 17.1204 7.87805 16.9696 8.17055C16.8886 8.32805 16.8759 8.29505 16.9494 8.1158C17.0041 7.9823 17.0094 7.9238 17.0094 7.48205C17.0094 6.59405 16.9036 6.38105 16.2849 6.01505C16.0987 5.90701 15.9075 5.8079 15.7119 5.71805C15.6152 5.67928 15.5215 5.63367 15.4314 5.58155C15.4486 5.5643 16.0516 5.7398 16.2939 5.83355C16.6554 5.9723 16.7146 5.9903 16.7589 5.97305C16.7881 5.9618 16.8024 5.8763 16.8166 5.62505ZM9.61137 7.1438C9.17712 6.54605 8.90862 5.6288 8.96637 4.9433L8.98437 4.73105L9.08337 4.74905C9.26937 4.7828 9.58962 4.90205 9.73962 4.99355C10.1506 5.2433 10.3291 5.57255 10.5099 6.41705C10.5631 6.66455 10.6329 6.9443 10.6651 7.03955C10.7161 7.1918 10.9111 7.54805 11.0701 7.7798C11.1841 7.9463 11.1076 8.02505 10.8556 8.00255C10.4701 7.9673 9.94812 7.6073 9.61137 7.1438ZM16.2901 11.595C14.2599 10.7775 13.5451 10.068 13.5451 8.87105C13.5451 8.6948 13.5511 8.5508 13.5579 8.5508C13.5654 8.5508 13.6441 8.60855 13.7326 8.6798C14.1444 9.0098 14.6056 9.1508 15.8814 9.3368C16.6321 9.44705 17.0551 9.53555 17.4451 9.66455C18.6841 10.0755 19.4506 10.9095 19.6336 12.045C19.6861 12.375 19.6554 12.9938 19.5691 13.32C19.5016 13.578 19.2939 14.0423 19.2391 14.0603C19.2241 14.0648 19.2091 14.007 19.2046 13.9268C19.1836 13.5008 18.9684 13.0853 18.6061 12.774C18.1944 12.4208 17.6416 12.1388 16.2894 11.595H16.2901ZM14.8651 11.934C14.8411 11.7892 14.8083 11.6459 14.7669 11.505L14.7144 11.3505L14.8111 11.4585C14.9439 11.6085 15.0496 11.799 15.1381 12.054C15.2064 12.2483 15.2139 12.306 15.2131 12.6218C15.2131 12.9323 15.2049 12.9968 15.1419 13.1723C15.0543 13.4296 14.9076 13.6629 14.7136 13.8533C14.3424 14.2313 13.8661 14.4398 13.1776 14.5268C13.0576 14.5418 12.7096 14.5673 12.4029 14.583C11.6304 14.6235 11.1226 14.706 10.6659 14.8665C10.6247 14.885 10.5804 14.8957 10.5354 14.898C10.5174 14.8793 10.8279 14.694 11.0851 14.5703C11.4474 14.3955 11.8074 14.3003 12.6151 14.166C13.0141 14.0993 13.4266 14.019 13.5309 13.9868C14.5194 13.6838 15.0271 12.9023 14.8644 11.934H14.8651Z" fill={color} /><path d="M15.7951 13.587C15.5251 13.0073 15.4636 12.447 15.6113 11.925C15.6271 11.8695 15.6526 11.8238 15.6676 11.8238C15.7184 11.8422 15.7661 11.8679 15.8093 11.9003C15.9338 11.9843 16.1828 12.1253 16.8466 12.4868C17.6753 12.939 18.1478 13.2893 18.4696 13.6883C18.7508 14.0385 18.9248 14.4375 19.0088 14.9235C19.0561 15.1988 19.0283 15.861 18.9578 16.1385C18.7351 17.013 18.2168 17.7 17.4788 18.1005C17.4092 18.1408 17.337 18.1767 17.2628 18.2078C17.2523 18.2078 17.2913 18.108 17.3506 17.985C17.5981 17.466 17.6273 16.9605 17.4391 16.398C17.3243 16.0538 17.0896 15.633 16.6163 14.9235C16.0658 14.0985 15.9308 13.878 15.7951 13.587ZM8.16984 16.7153C8.92359 16.0793 9.86034 15.6278 10.7146 15.489C11.0821 15.429 11.6956 15.453 12.0361 15.54C12.5821 15.6795 13.0711 15.993 13.3253 16.3658C13.5728 16.7303 13.6801 17.0483 13.7903 17.7548C13.8353 18.0338 13.8826 18.3135 13.8968 18.3773C13.9793 18.7433 14.1421 19.0365 14.3431 19.1835C14.6618 19.4168 15.2116 19.431 15.7516 19.221C15.808 19.1951 15.8675 19.1765 15.9286 19.1655C15.9481 19.185 15.6766 19.3673 15.4846 19.4633C15.258 19.5845 15.0043 19.646 14.7473 19.6418C14.2523 19.6418 13.8413 19.3905 13.4986 18.8768C13.4311 18.7755 13.2796 18.4733 13.1611 18.204C12.7996 17.379 12.6211 17.127 12.2011 16.8518C11.8343 16.6118 11.3626 16.569 11.0078 16.743C10.5413 16.9718 10.4116 17.568 10.7453 17.9453C10.8781 18.0953 11.1256 18.225 11.3281 18.2498C11.4164 18.2615 11.5062 18.2541 11.5915 18.2281C11.6767 18.2021 11.7554 18.1581 11.8221 18.0991C11.8889 18.0401 11.9422 17.9674 11.9785 17.886C12.0147 17.8046 12.0331 17.7164 12.0323 17.6273C12.0323 17.3783 11.9363 17.2373 11.6963 17.1285C11.3686 16.9808 11.0161 17.1533 11.0176 17.4615C11.0183 17.5928 11.0753 17.6753 11.2073 17.7353C11.2921 17.7728 11.2936 17.7765 11.2246 17.7623C10.9238 17.6993 10.8533 17.337 11.0956 17.0963C11.3858 16.8068 11.9866 16.9343 12.1928 17.3288C12.2798 17.4945 12.2896 17.8253 12.2138 18.0248C12.0451 18.471 11.5516 18.705 11.0513 18.5775C10.7108 18.4905 10.5721 18.3968 10.1618 17.9738C9.44859 17.2388 9.17184 17.0963 8.14284 16.9358L7.94559 16.905L8.17059 16.7153H8.16984Z" fill={color} /><path fillRule="evenodd" clipRule="evenodd" d="M4.64709 2.51253L4.71909 2.60028C7.50009 6.00528 8.9371 7.77228 9.0286 7.89828C9.1786 8.10678 9.12235 8.29353 8.86435 8.44053C8.7211 8.52228 8.4256 8.60478 8.2786 8.60478C8.11135 8.60478 7.92309 8.52453 7.78584 8.39478C7.68909 8.30253 7.29834 7.71903 6.39609 6.31878C5.97359 5.65697 5.54557 4.9987 5.11209 4.34403C5.07534 4.30953 5.07609 4.31028 6.32559 6.54603C7.1101 7.95003 7.37559 8.44578 7.37559 8.51253C7.37559 8.64753 7.3381 8.71803 7.1716 8.90403C6.8941 9.21378 6.77034 9.56178 6.68034 10.2818C6.57984 11.0895 6.29785 11.6595 5.51484 12.6353C5.05734 13.2068 4.98234 13.3118 4.86609 13.542C4.72059 13.8315 4.68084 13.9943 4.66434 14.3603C4.64709 14.7473 4.68084 14.9978 4.79934 15.3675C4.90284 15.6915 5.01084 15.906 5.28684 16.3335C5.52534 16.7033 5.66259 16.9778 5.66259 17.085C5.66259 17.1705 5.67909 17.1705 6.04884 17.0873C6.93309 16.8878 7.65085 16.536 8.05509 16.1055C8.30485 15.8393 8.36335 15.6923 8.3656 15.327C8.36635 15.0885 8.35809 15.0383 8.29359 14.901C8.18859 14.6775 7.99734 14.4915 7.57585 14.2035C7.02309 13.8255 6.7876 13.521 6.72235 13.1033C6.66835 12.7605 6.73059 12.5183 7.0366 11.8778C7.35234 11.2148 7.4311 10.9328 7.48435 10.2645C7.5181 9.83253 7.56535 9.66228 7.68985 9.52578C7.81885 9.38328 7.93585 9.33453 8.2561 9.29103C8.7781 9.21978 9.11035 9.08478 9.38335 8.83353C9.62035 8.61453 9.71935 8.40378 9.73435 8.08728L9.74635 7.84728L9.6136 7.69278C9.4231 7.47078 7.84735 5.73228 4.88559 2.47578L4.80609 2.38953L4.64709 2.51328V2.51253ZM5.93259 14.799C5.98492 14.7064 6.00054 14.5975 5.97638 14.4938C5.95221 14.3902 5.89001 14.2995 5.80209 14.2395C5.63109 14.1255 5.36484 14.1795 5.36484 14.328C5.36484 14.373 5.38959 14.406 5.44584 14.4353C5.54109 14.484 5.54784 14.5395 5.47359 14.6513C5.39784 14.7653 5.40384 14.8658 5.49084 14.934C5.63034 15.0435 5.82834 14.9828 5.93334 14.799H5.93259ZM10.0756 9.41703C9.83035 9.49203 9.5926 9.75228 9.51835 10.0245C9.47335 10.1903 9.49885 10.482 9.56635 10.572C9.6751 10.7175 9.78085 10.7558 10.0658 10.7535C10.6238 10.7498 11.1083 10.5105 11.1653 10.2113C11.2118 9.96603 10.9981 9.62628 10.7048 9.47628C10.5533 9.39978 10.2316 9.36903 10.0756 9.41703ZM10.7281 9.92703C10.8143 9.80478 10.7761 9.67203 10.6306 9.58353C10.3516 9.41328 9.9301 9.55353 9.9301 9.81753C9.9301 9.94803 10.1498 10.0913 10.3508 10.0913C10.4858 10.0913 10.6688 10.011 10.7281 9.92703Z" fill={color} /><path d="M9.04265 5.30956C8.8289 5.27656 8.8199 5.27206 8.9204 5.25706C9.11315 5.22706 9.56915 5.26831 9.8834 5.34256C10.6162 5.51731 11.2829 5.96356 11.9954 6.75631L12.1844 6.96631L12.4544 6.92356C13.5944 6.73981 14.7547 6.88606 15.7244 7.33381C15.9914 7.45681 16.4121 7.70206 16.4646 7.76581C16.4819 7.78531 16.5126 7.91506 16.5329 8.05306C16.6049 8.53081 16.5689 8.89681 16.4234 9.17056C16.3439 9.31906 16.3394 9.36556 16.3927 9.49306C16.4179 9.54572 16.4575 9.59023 16.5068 9.62152C16.5561 9.65281 16.6132 9.66963 16.6717 9.67006C16.9132 9.67006 17.1726 9.28006 17.2926 8.73781L17.3407 8.52256L17.4352 8.62981C17.9542 9.21781 18.3614 10.0196 18.4311 10.5896L18.4499 10.7388L18.3622 10.6038C18.2121 10.3713 18.0621 10.2123 17.8686 10.0841C17.5206 9.85381 17.1524 9.77581 16.1774 9.72406C15.2969 9.67756 14.7982 9.60256 14.3047 9.44131C13.4639 9.16756 13.0402 8.80231 12.0412 7.49206C11.5979 6.91006 11.3234 6.58831 11.0512 6.32956C10.4309 5.74006 9.8219 5.43106 9.04265 5.30956Z" fill={color} /><path d="M16.6634 6.6093C16.6859 6.2193 16.7384 5.96205 16.8449 5.7273C16.8869 5.6343 16.9266 5.5578 16.9326 5.5578C16.926 5.61045 16.9121 5.66193 16.8914 5.7108C16.8141 5.9388 16.8014 6.2508 16.8546 6.61305C16.9221 7.07355 16.9611 7.13955 17.4471 7.6368C17.6759 7.87005 17.9414 8.16405 18.0374 8.2908L18.2121 8.5203L18.0374 8.35605C17.8236 8.1558 17.3316 7.76355 17.2229 7.70805C17.1501 7.67055 17.1389 7.6713 17.0939 7.71555C17.0526 7.75755 17.0436 7.81905 17.0384 8.1123C17.0294 8.5683 16.9671 8.8623 16.8164 9.1548C16.7354 9.3123 16.7226 9.2793 16.7961 9.10005C16.8509 8.96655 16.8561 8.90805 16.8561 8.4663C16.8561 7.5783 16.7504 7.3653 16.1316 6.9993C15.9455 6.89127 15.7542 6.79215 15.5586 6.7023C15.462 6.66354 15.3683 6.61792 15.2781 6.5658C15.2954 6.54855 15.8984 6.72405 16.1406 6.8178C16.5021 6.95655 16.5614 6.97455 16.6056 6.9573C16.6349 6.94605 16.6491 6.86055 16.6634 6.6093ZM9.45814 8.12805C9.02389 7.5303 8.75539 6.61305 8.81314 5.92755L8.83114 5.7153L8.93014 5.7333C9.11614 5.76705 9.43639 5.8863 9.58639 5.9778C9.99739 6.22755 10.1759 6.5568 10.3566 7.4013C10.4099 7.6488 10.4796 7.92855 10.5119 8.0238C10.5629 8.17605 10.7579 8.5323 10.9169 8.76405C11.0309 8.93055 10.9544 9.0093 10.7024 8.9868C10.3169 8.95155 9.79489 8.59155 9.45814 8.12805ZM16.1369 12.5793C14.1066 11.7618 13.3919 11.0523 13.3919 9.8553C13.3919 9.67905 13.3979 9.53505 13.4046 9.53505C13.4121 9.53505 13.4909 9.5928 13.5794 9.66405C13.9911 9.99405 14.4524 10.1351 15.7281 10.3211C16.4789 10.4313 16.9019 10.5198 17.2919 10.6488C18.5309 11.0598 19.2974 11.8938 19.4804 13.0293C19.5329 13.3593 19.5021 13.9781 19.4159 14.3043C19.3484 14.5623 19.1406 15.0266 19.0859 15.0446C19.0709 15.0491 19.0559 14.9913 19.0514 14.9111C19.0304 14.4851 18.8151 14.0696 18.4529 13.7583C18.0411 13.4051 17.4884 13.1231 16.1361 12.5793H16.1369ZM14.7119 12.9183C14.6879 12.7734 14.6551 12.6302 14.6136 12.4893L14.5611 12.3348L14.6579 12.4428C14.7906 12.5928 14.8964 12.7833 14.9849 13.0383C15.0531 13.2326 15.0606 13.2903 15.0599 13.6061C15.0599 13.9166 15.0516 13.9811 14.9886 14.1566C14.901 14.4139 14.7544 14.6471 14.5604 14.8376C14.1891 15.2156 13.7129 15.4241 13.0244 15.5111C12.9044 15.5261 12.5564 15.5516 12.2496 15.5673C11.4771 15.6078 10.9694 15.6903 10.5126 15.8508C10.4715 15.8693 10.4272 15.8799 10.3821 15.8823C10.3641 15.8636 10.6746 15.6783 10.9319 15.5546C11.2941 15.3798 11.6541 15.2846 12.4619 15.1503C12.8609 15.0836 13.2734 15.0033 13.3776 14.9711C14.3661 14.6681 14.8739 13.8865 14.7111 12.9183H14.7119Z" fill={color} /><path d="M15.6419 14.5713C15.3719 13.9915 15.3104 13.4313 15.4581 12.9093C15.4739 12.8538 15.4994 12.808 15.5144 12.808C15.5651 12.8264 15.6129 12.8522 15.6561 12.8845C15.7806 12.9685 16.0296 13.1095 16.6934 13.471C17.5221 13.9233 17.9946 14.2735 18.3164 14.6725C18.5976 15.0228 18.7716 15.4218 18.8556 15.9078C18.9029 16.183 18.8751 16.8453 18.8046 17.1228C18.5819 17.9973 18.0636 18.6843 17.3256 19.0848C17.256 19.1251 17.1838 19.1609 17.1096 19.192C17.0991 19.192 17.1381 19.0923 17.1974 18.9693C17.4449 18.4503 17.4741 17.9448 17.2859 17.3823C17.1711 17.038 16.9364 16.6173 16.4631 15.9078C15.9126 15.0828 15.7776 14.8623 15.6419 14.5713ZM8.01661 17.6995C8.77036 17.0635 9.70711 16.612 10.5614 16.4733C10.9289 16.4133 11.5424 16.4373 11.8829 16.5243C12.4289 16.6638 12.9179 16.9773 13.1721 17.35C13.4196 17.7145 13.5269 18.0325 13.6371 18.739C13.6821 19.018 13.7294 19.2978 13.7436 19.3615C13.8261 19.7275 13.9889 20.0208 14.1899 20.1678C14.5086 20.401 15.0584 20.4153 15.5984 20.2053C15.6548 20.1794 15.7143 20.1608 15.7754 20.1498C15.7949 20.1693 15.5234 20.3515 15.3314 20.4475C15.1048 20.5688 14.851 20.6302 14.5941 20.626C14.0991 20.626 13.6881 20.3748 13.3454 19.861C13.2779 19.7598 13.1264 19.4575 13.0079 19.1883C12.6464 18.3633 12.4679 18.1113 12.0479 17.836C11.6811 17.596 11.2094 17.5533 10.8546 17.7273C10.3881 17.956 10.2584 18.5523 10.5921 18.9295C10.7249 19.0795 10.9724 19.2093 11.1749 19.234C11.2632 19.2458 11.353 19.2384 11.4382 19.2124C11.5235 19.1864 11.6021 19.1424 11.6689 19.0834C11.7357 19.0243 11.789 18.9517 11.8252 18.8703C11.8615 18.7889 11.8799 18.7007 11.8791 18.6115C11.8791 18.3625 11.7831 18.2215 11.5431 18.1128C11.2154 17.965 10.8629 18.1375 10.8644 18.4458C10.8651 18.577 10.9221 18.6595 11.0541 18.7195C11.1389 18.757 11.1404 18.7608 11.0714 18.7465C10.7706 18.6835 10.7001 18.3213 10.9424 18.0805C11.2326 17.791 11.8334 17.9185 12.0396 18.313C12.1266 18.4788 12.1364 18.8095 12.0606 19.009C11.8919 19.4553 11.3984 19.6893 10.8981 19.5618C10.5576 19.4748 10.4189 19.381 10.0086 18.958C9.29536 18.223 9.01861 18.0805 7.98961 17.92L7.79236 17.8893L8.01736 17.6995H8.01661Z" fill={color} /><path fillRule="evenodd" clipRule="evenodd" d="M4.49387 3.49678L4.56587 3.58453C7.34687 6.98953 8.78387 8.75653 8.87537 8.88253C9.02537 9.09103 8.96912 9.27778 8.71112 9.42478C8.56787 9.50653 8.27237 9.58903 8.12537 9.58903C7.95812 9.58903 7.76987 9.50878 7.63262 9.37903C7.53587 9.28678 7.14512 8.70328 6.24287 7.30303C5.82036 6.64123 5.39234 5.98295 4.95887 5.32828C4.92212 5.29378 4.92287 5.29453 6.17237 7.53028C6.95687 8.93428 7.22237 9.43003 7.22237 9.49678C7.22237 9.63178 7.18487 9.70228 7.01837 9.88828C6.74087 10.198 6.61712 10.546 6.52712 11.266C6.42662 12.0738 6.14462 12.6438 5.36162 13.6195C4.90412 14.191 4.82912 14.296 4.71287 14.5263C4.56737 14.8158 4.52762 14.9785 4.51112 15.3445C4.49387 15.7315 4.52762 15.982 4.64612 16.3518C4.74962 16.6758 4.85762 16.8903 5.13362 17.3178C5.37212 17.6875 5.50937 17.962 5.50937 18.0693C5.50937 18.1548 5.52587 18.1548 5.89562 18.0715C6.77987 17.872 7.49762 17.5203 7.90187 17.0898C8.15162 16.8235 8.21012 16.6765 8.21237 16.3113C8.21312 16.0728 8.20487 16.0225 8.14037 15.8853C8.03537 15.6618 7.84412 15.4758 7.42262 15.1878C6.86987 14.8098 6.63437 14.5053 6.56912 14.0875C6.51512 13.7448 6.57737 13.5025 6.88337 12.862C7.19912 12.199 7.27787 11.917 7.33112 11.2488C7.36487 10.8168 7.41212 10.6465 7.53662 10.51C7.66562 10.3675 7.78262 10.3188 8.10287 10.2753C8.62487 10.204 8.95712 10.069 9.23012 9.81778C9.46712 9.59878 9.56612 9.38803 9.58112 9.07153L9.59312 8.83153L9.46037 8.67703C9.26987 8.45503 7.69412 6.71653 4.73237 3.46003L4.65287 3.37378L4.49387 3.49753V3.49678ZM5.77937 15.7833C5.83169 15.6906 5.84732 15.5817 5.82315 15.4781C5.79898 15.3745 5.73678 15.2837 5.64887 15.2238C5.47787 15.1098 5.21162 15.1638 5.21162 15.3123C5.21162 15.3573 5.23637 15.3903 5.29262 15.4195C5.38787 15.4683 5.39462 15.5238 5.32037 15.6355C5.24462 15.7495 5.25062 15.85 5.33762 15.9183C5.47712 16.0278 5.67512 15.967 5.78012 15.7833H5.77937ZM9.92237 10.4013C9.67712 10.4763 9.43937 10.7365 9.36512 11.0088C9.32012 11.1745 9.34562 11.4663 9.41312 11.5563C9.52187 11.7018 9.62762 11.74 9.91262 11.7378C10.4706 11.734 10.9551 11.4948 11.0121 11.1955C11.0586 10.9503 10.8449 10.6105 10.5516 10.4605C10.4001 10.384 10.0784 10.3533 9.92237 10.4013ZM10.5749 10.9113C10.6611 10.789 10.6229 10.6563 10.4774 10.5678C10.1984 10.3975 9.77687 10.5378 9.77687 10.8018C9.77687 10.9323 9.99662 11.0755 10.1976 11.0755C10.3326 11.0755 10.5156 10.9953 10.5749 10.9113Z" fill={color} /></svg>;
}
export default uni;