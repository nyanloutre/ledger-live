
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function qrl({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M19.221 16.2817C19.2961 16.2833 19.3675 16.3145 19.4197 16.3684C19.472 16.4223 19.5008 16.4947 19.5 16.5697V18H14.7908L14.7728 16.755C14.773 16.7144 14.7821 16.6743 14.7993 16.6376C14.8165 16.6008 14.8415 16.5682 14.8725 16.542C14.8911 16.5181 14.9122 16.4962 14.9355 16.4767C17.0108 15.0293 17.808 12.273 16.842 9.88875C15.8753 7.5045 13.413 6.15525 10.9568 6.66375C8.50125 7.1715 6.7335 9.39675 6.73275 11.9813C6.73125 13.7475 7.57275 15.4013 8.9835 16.4025C9.01422 16.4197 9.03925 16.4455 9.0555 16.4767C9.10675 16.5007 9.15011 16.5387 9.18053 16.5864C9.21094 16.6341 9.22715 16.6894 9.22725 16.746L9.20925 17.991H4.5V16.56C4.5 16.401 4.62525 16.272 4.779 16.272C4.93275 16.272 5.058 16.401 5.058 16.56V17.424H8.6595L8.6685 16.8855H8.6595C6.58875 15.384 5.7 12.672 6.462 10.182C7.22625 7.692 9.465 6 11.9963 6C14.5275 6 16.7663 7.692 17.529 10.182C18.2918 12.672 17.403 15.384 15.3315 16.8855L15.3413 17.433H18.9428V16.5697C18.9419 16.4947 18.9708 16.4223 19.023 16.3684C19.0753 16.3145 19.1467 16.2833 19.2218 16.2817H19.221ZM15.5025 12.3998C16.1235 13.1895 16.3125 13.8952 16.0425 14.3595C15.8355 14.7218 15.3945 14.9167 14.7548 14.9167C14.353 14.907 13.954 14.8478 13.5668 14.7405C13.2158 15.9667 12.648 16.7565 12 16.7565C11.352 16.7565 10.785 15.9667 10.4423 14.7405C10.055 14.8478 9.65598 14.907 9.25425 14.9167C8.6145 14.9167 8.1735 14.7218 7.9665 14.3595C7.6335 13.7835 8.0115 12.8828 8.8755 11.9633C8.74485 11.8275 8.62167 11.6848 8.5065 11.5357C7.8855 10.746 7.6965 10.0493 7.9665 9.56625C8.1735 9.204 8.6145 9.009 9.25425 9.009C9.65601 9.01903 10.055 9.07848 10.4423 9.186C10.7933 7.95975 11.361 7.17 12.009 7.17C12.657 7.17 13.224 7.95975 13.5668 9.195C13.954 9.08773 14.353 9.02854 14.7548 9.01875C15.3945 9.01875 15.8355 9.21375 16.0425 9.576C16.3125 10.059 16.1235 10.7558 15.5025 11.5455C15.3872 11.6945 15.264 11.8372 15.1335 11.973C15.264 12.108 15.387 12.2505 15.5025 12.3998ZM14.7638 9.36225C14.3901 9.37401 14.0189 9.42682 13.6568 9.51975C13.7535 9.96075 13.8218 10.4078 13.8638 10.8577C14.2193 11.1203 14.559 11.406 14.8815 11.7127C15.0075 11.5822 15.1245 11.4427 15.2325 11.313C15.7455 10.653 15.9345 10.0868 15.7455 9.74325C15.5745 9.4275 15.1155 9.36225 14.7638 9.36225ZM12.7838 13.3657C13.0448 13.2082 13.2968 13.041 13.5308 12.8738C13.5578 12.576 13.5668 12.279 13.5668 11.9633C13.5668 11.6475 13.5488 11.3408 13.5308 11.0528C13.2877 10.8824 13.0383 10.7212 12.783 10.5698C12.5259 10.4233 12.2648 10.284 12 10.152C11.7315 10.2765 11.4705 10.416 11.217 10.5698C10.947 10.7273 10.7033 10.8855 10.4693 11.0528C10.4423 11.3408 10.4333 11.6475 10.4333 11.9633C10.4333 12.2783 10.4513 12.5858 10.4693 12.8738C10.9558 13.2153 11.4675 13.5194 12 13.7835C12.2685 13.659 12.5295 13.5195 12.783 13.3657H12.7838ZM13.4948 13.338C13.3148 13.449 13.1438 13.5607 12.9638 13.6725C12.7838 13.7835 12.6038 13.8863 12.4238 13.9785C12.7193 14.112 13.023 14.2268 13.3328 14.3228C13.3958 14.016 13.4498 13.6905 13.4948 13.338ZM11.595 13.9785L11.055 13.6725C10.875 13.5607 10.695 13.449 10.5233 13.338C10.5555 13.6695 10.6095 13.998 10.6853 14.3228C10.9943 14.2253 11.298 14.1105 11.595 13.9785ZM10.1183 12.6038C10.1075 12.3904 10.1015 12.1769 10.1003 11.9633C10.1003 11.7405 10.1093 11.5357 10.1183 11.322C9.8565 11.52 9.60675 11.7338 9.37125 11.9633C9.60825 12.1905 9.858 12.405 10.1183 12.6038ZM10.5233 10.6072C10.6924 10.4884 10.8666 10.3768 11.0453 10.2727C11.235 10.161 11.415 10.059 11.595 9.966C11.2988 9.8325 10.995 9.7185 10.6853 9.6225C10.6223 9.9285 10.5683 10.254 10.5233 10.6072ZM12.414 9.966C12.594 10.059 12.774 10.161 12.954 10.2727C13.134 10.3837 13.314 10.4955 13.4858 10.6072C13.4538 10.2757 13.3997 9.94676 13.3238 9.6225C13.0148 9.72 12.711 9.834 12.414 9.966ZM13.8998 11.331C13.9088 11.5455 13.9178 11.7495 13.9178 11.9722C13.9178 12.195 13.9088 12.4088 13.8998 12.6135C14.1608 12.3998 14.4128 12.186 14.6378 11.9722C14.4063 11.7426 14.1597 11.5286 13.8998 11.3317V11.331ZM12.009 7.52325C11.55 7.52325 11.082 8.1735 10.7753 9.27825C11.1968 9.411 11.6085 9.57225 12.009 9.7605C12.409 9.57253 12.8212 9.41166 13.2428 9.279C12.936 8.1735 12.459 7.52325 12.009 7.52325ZM8.2725 9.74325C8.0745 10.0868 8.2635 10.6628 8.7855 11.3033C8.8935 11.442 9.0105 11.5717 9.1365 11.7112C9.4575 11.4037 9.7965 11.1188 10.1543 10.8577C10.1955 10.4078 10.2645 9.96075 10.3613 9.5205C9.99975 9.423 9.62775 9.3705 9.25425 9.36225C8.9025 9.36225 8.4525 9.4275 8.2725 9.74325ZM9.25425 14.5732C9.6285 14.5658 10.0005 14.5095 10.3613 14.4053C10.2647 13.9645 10.1956 13.5181 10.1543 13.0687C9.792 12.8107 9.44925 12.525 9.1275 12.2137C8.3535 13.041 8.0475 13.7835 8.2725 14.1923C8.4435 14.508 8.9025 14.5732 9.25425 14.5732ZM12.009 16.4122C12.459 16.4122 12.936 15.762 13.2428 14.6572C12.8211 14.5241 12.409 14.3627 12.009 14.1742C11.6089 14.3624 11.1967 14.5237 10.7753 14.6572C11.082 15.762 11.559 16.4122 12.009 16.4122ZM15.7455 14.1923C15.9345 13.8578 15.7455 13.2825 15.2325 12.6225C15.1206 12.4851 15.0035 12.352 14.8815 12.2235C14.5605 12.531 14.2215 12.816 13.8638 13.0785C13.8225 13.5281 13.7534 13.9747 13.6568 14.4158C14.0183 14.5125 14.3903 14.5658 14.7638 14.5732C15.1155 14.5732 15.5655 14.508 15.7455 14.1923ZM12.009 10.6072C12.7365 10.6072 13.3275 11.2125 13.3328 11.9633C13.3328 12.711 12.7455 13.3178 12.021 13.3193C11.2965 13.3208 10.707 12.717 10.7033 11.9692C10.7003 11.2215 11.2845 10.6117 12.009 10.6072ZM12.009 12.9758C12.5445 12.9713 12.9773 12.525 12.9818 11.9722C12.9818 11.418 12.5468 10.9695 12.009 10.9695C11.4713 10.9695 11.0363 11.418 11.0363 11.9722C11.0363 12.5265 11.472 12.9758 12.009 12.9758Z" fill={color} /></svg>;
}
export default qrl;