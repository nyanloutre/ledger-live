
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function ok({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M20.9843 10.4954V10.5434C19.944 11.1944 18.8963 11.8379 17.8515 12.4874C17.8317 12.5018 17.8162 12.5212 17.8065 12.5437C18.0855 12.6187 18.3743 12.6749 18.639 12.7964C18.8835 12.9052 19.134 13.0469 19.272 13.2847C19.404 13.5262 19.437 13.8097 19.3635 14.0744C19.3238 14.2724 19.2405 14.4584 19.1655 14.6467C18.852 15.3982 18.537 16.1474 18.2258 16.9019C18.2107 16.9393 18.1905 16.9743 18.1658 17.0062C18.063 17.0039 17.9648 16.9664 17.8643 16.9432C17.3573 16.8179 16.8473 16.6949 16.3403 16.5682C16.1753 16.5217 16.0058 16.4947 15.843 16.4407C15.8475 16.3379 15.906 16.2502 15.9405 16.1579L16.6365 14.4922C16.689 14.3767 16.7198 14.2327 16.6448 14.1202C16.551 13.9597 16.3628 13.8989 16.1963 13.8532C15.5843 13.6957 14.9678 13.5502 14.3543 13.3979C14.2665 13.3792 14.181 13.3394 14.0888 13.3514C14.0348 13.4459 14.0033 13.5524 13.9598 13.6544C13.6988 14.2664 13.4483 14.8822 13.1888 15.4942C13.1513 15.5797 13.1288 15.6742 13.0718 15.7492C12.9698 15.7492 12.8738 15.7094 12.7755 15.6862C12.2513 15.5572 11.727 15.4252 11.2005 15.2977C11.0528 15.2579 10.8983 15.2332 10.752 15.1829C10.7538 15.1414 10.763 15.1005 10.779 15.0622L13.4288 8.70967C13.438 8.68838 13.4524 8.66979 13.4708 8.65567C13.563 8.66167 13.6508 8.69917 13.7408 8.72017C14.187 8.82667 14.634 8.94142 15.081 9.05017C15.3128 9.11017 15.5505 9.15667 15.7808 9.22567C15.7928 9.26917 15.7718 9.31342 15.7553 9.35467C15.5753 9.76417 15.4103 10.1797 15.2355 10.5892L14.6948 11.8882C14.634 12.0404 14.5545 12.1867 14.5125 12.3472C14.5905 12.3202 14.6573 12.2744 14.7255 12.2279L18.255 10.0154C18.3195 9.97492 18.378 9.92092 18.4515 9.90217C18.5595 9.89392 18.6615 9.93517 18.7643 9.95842C19.1243 10.0357 19.4783 10.1384 19.8353 10.2209C20.2223 10.3072 20.6018 10.4137 20.9843 10.4954ZM12.6563 9.22117C12.675 9.59917 12.531 9.95842 12.3833 10.2967C11.9843 11.2552 11.5808 12.2114 11.184 13.1699C11.04 13.5082 10.9148 13.8614 10.6935 14.1599C10.536 14.3819 10.317 14.5529 10.0635 14.6504C9.744 14.7504 9.40562 14.7747 9.07505 14.7217C8.50505 14.6504 7.95005 14.4967 7.39205 14.3624C6.63455 14.1727 5.8718 13.9889 5.1143 13.7984C4.61105 13.6777 4.1033 13.5479 3.6353 13.3184C3.43336 13.2205 3.26177 13.0697 3.1388 12.8819C3.04382 12.727 3.00196 12.5453 3.01955 12.3644C3.0593 12.0322 3.1823 11.7164 3.3158 11.4119L4.5383 8.47567C4.6358 8.25067 4.7213 8.01817 4.84655 7.80592C4.9537 7.60961 5.09607 7.4347 5.26655 7.28992C5.46755 7.13692 5.7038 7.03867 5.95355 7.00342C6.1373 6.98692 6.32105 6.99592 6.5048 6.99967C7.07304 7.08367 7.63578 7.20137 8.19005 7.35217C8.96705 7.53967 9.7418 7.73692 10.518 7.92442C10.875 8.01217 11.2305 8.10217 11.5793 8.22142C11.8125 8.30692 12.051 8.39392 12.2558 8.54242C12.4883 8.69317 12.6368 8.94442 12.6563 9.22117ZM9.9413 9.88942C9.9563 9.77917 9.87755 9.68467 9.7853 9.63667C9.5978 9.53467 9.38405 9.49717 9.18005 9.44467C8.63855 9.30967 8.09705 9.17617 7.55255 9.04417C7.39825 8.99895 7.23581 8.9887 7.07705 9.01417C6.8933 9.06667 6.80105 9.25267 6.7388 9.41542C6.4313 10.1467 6.1313 10.8794 5.8223 11.6084C5.78855 11.6939 5.7548 11.7794 5.7473 11.8709C5.7473 11.9759 5.82005 12.0674 5.9093 12.1109C6.04355 12.1799 6.1898 12.2182 6.33155 12.2557L8.0228 12.6712C8.2193 12.7169 8.42555 12.7672 8.62655 12.7237C8.7953 12.6689 8.88155 12.4957 8.9438 12.3434L9.77255 10.3552C9.8378 10.2052 9.92105 10.0567 9.94205 9.89017L9.9413 9.88942Z" fill={color} /></svg>;
}
export default ok;