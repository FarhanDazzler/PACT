import React from "react";

export default function FooterComponent() {
  const svgDataUrl =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='60'%3E%3Cpath fill='%23e3af32' opacity='0.85' d='M-528,60 C161,-0 161,-0, 881,60z' /%3E %3Cpath fill='%23000' opacity='0.85' d='M72,60 C648,0 648,0, 1368,60z' /%3E %3Cpath fill='%23f4e00f' opacity='0.85' d='M672,60 C1248,0 1248,0, 1968,60z' /%3E %3C/svg%3E";
  return (
    <div className="w-full h-10 bg-cover font-medium text-sm text-gray-500 bg-svg-footer"></div>
  );
}
