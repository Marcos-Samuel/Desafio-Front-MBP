import React from "react";

type CustomSVGProps = {
    color: string;
  };
  
const CustomSVG: React.FC <CustomSVGProps>= ({ color }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width='18' height='18' viewBox="0 0 18 18" fill="none">
        <path d="M4.98292 7.55078V13.1289" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.73023 4.88113V13.1294" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.416 10.4985V13.1292" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.717651 9.03069C0.717651 2.9456 2.72124 0.916656 8.73026 0.916656C14.7393 0.916656 16.7429 2.9456 16.7429 9.03069C16.7429 15.1158 14.7393 17.1447 8.73026 17.1447C2.72124 17.1447 0.717651 15.1158 0.717651 9.03069Z"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };
  
  export default CustomSVG;