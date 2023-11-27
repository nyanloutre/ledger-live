
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function chips({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M10.9112 19.0554C11.5452 18.2362 12.1792 17.4169 12.8132 16.5977C13.525 16.7087 14.2262 16.6457 14.8967 16.3547C15.139 16.2497 15.3557 16.0862 15.5837 15.9482C15.616 15.9287 15.646 15.9032 15.6707 15.8844L17.9747 18.1629C17.7835 18.2904 17.5937 18.4284 17.392 18.5469C16.6114 18.9994 15.751 19.2974 14.8577 19.4244C14.3306 19.4983 13.7974 19.5184 13.2662 19.4844C12.4655 19.4477 11.6734 19.3034 10.9112 19.0554ZM10.1867 18.7734C9.9307 18.659 9.68131 18.5303 9.43972 18.3879C8.20506 17.6725 7.23043 16.5822 6.65722 15.2754C6.35467 14.5938 6.15572 13.8709 6.06697 13.1304C5.99733 12.5562 5.98176 11.9766 6.02047 11.3994C6.11272 9.91818 6.56347 8.55693 7.47172 7.35918C8.31022 6.25368 9.41122 5.49693 10.714 5.01168C11.332 4.77711 11.9793 4.62823 12.6377 4.56918C13.135 4.52643 13.6375 4.48368 14.1347 4.50543C14.4422 4.51818 14.7445 4.54818 15.0422 4.59543C14.3992 5.52893 13.7562 6.46243 13.1132 7.39593C12.4699 7.44984 11.8495 7.65991 11.3057 8.00793C10.3082 8.64093 9.71122 9.55293 9.43072 10.6779C9.3117 11.1519 9.25721 11.6398 9.26872 12.1284C9.27547 12.3849 9.29722 12.6362 9.33547 12.8814L9.10447 13.2167C8.91847 13.4867 9.14722 13.8437 9.47797 13.8002L9.56197 13.7897C9.75547 14.3364 10.0487 14.8472 10.4545 15.3159C10.7065 15.6054 10.9877 15.8484 11.2975 16.0434L10.2137 18.6617C10.1988 18.6975 10.1897 18.7355 10.1867 18.7742V18.7734ZM15.769 4.74993C16.4367 4.92783 17.0696 5.21714 17.641 5.60568C17.7445 5.67618 17.839 5.75943 17.938 5.83668C17.9567 5.85093 17.9762 5.86368 18.0002 5.88018C17.9687 5.91618 17.9507 5.94018 17.929 5.96118C17.2457 6.63468 16.561 7.30593 15.88 7.98168C15.805 8.05668 15.7577 8.06868 15.667 8.00418C15.3921 7.80879 15.0881 7.65793 14.7662 7.55718L15.7285 5.02593L15.754 4.96068C15.7796 4.89343 15.7848 4.82013 15.769 4.74993ZM12.991 12.9609L9.42622 13.4267L15.3572 4.81443L15.3902 4.82943L13.099 10.8527L17.2802 10.1927L10.606 18.8252L10.5737 18.8027L12.991 12.9609Z" fill={color} /></svg>;
}
export default chips;