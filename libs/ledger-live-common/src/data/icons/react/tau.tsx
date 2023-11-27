
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function tau({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M6.0705 10.2585L7.653 11.841H4.5L6.0705 10.2585ZM7.653 12.171L6.0705 13.7415L4.5 12.171H7.653ZM9.792 10.0312L8.2095 11.6017V8.4495L9.792 10.0312ZM7.8795 11.6017L6.30975 10.0312L7.88025 8.44875L7.8795 11.6017ZM10.02 9.792L8.4495 8.2215H11.6017L10.02 9.792ZM10.02 6.30975L11.6017 7.8915H8.4495L10.02 6.30975ZM13.7415 6.08175L12.159 7.65225V4.5L13.7415 6.08175ZM11.829 7.65225L10.2585 6.0825L11.829 4.5V7.65225ZM9.792 13.98L8.2095 15.5505V12.3983L9.792 13.98ZM6.30975 13.98L7.88025 12.3983V15.5505L6.30975 13.98ZM13.9688 9.792L12.3983 8.2215H15.5505L13.9688 9.792ZM12.3983 7.8915L13.9688 6.309L15.5513 7.8915H12.3983ZM11.6025 16.1198L10.02 17.6903L8.45025 16.1198H11.6025ZM10.02 14.2073L11.6025 15.7897H8.45025L10.02 14.2073ZM17.691 10.0312L16.1093 11.6017V8.4495L17.691 10.0312ZM14.2087 10.0312L15.7792 8.44875V11.6017L14.2087 10.0312ZM10.2592 17.9288L11.8298 16.3478V19.5L10.2592 17.9288ZM12.1597 16.3478L13.7423 17.9295L12.159 19.5L12.1597 16.3478ZM13.9695 17.6903L12.399 16.1198H15.5513L13.9695 17.6903ZM13.9695 14.208L15.552 15.7905H12.3975L13.9695 14.208ZM16.1093 12.3983L17.6918 13.9808L16.1093 15.5505V12.3983ZM14.2087 13.9808L15.7792 12.3983V15.5505L14.2087 13.9808ZM17.919 13.7407L16.3485 12.171H19.5L17.919 13.7407ZM17.919 10.2585L19.5 11.841H16.3478L17.919 10.2585Z" fill={color} /></svg>;
}
export default tau;