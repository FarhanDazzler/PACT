import React from "react";

export default function FooterComponent() {
  return (
    <div class="fixed bottom-0 left-0 w-full bg-cover bg-no-repeat font-medium text-sm  text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="60">
        <path fill="#000" opacity="0.85" d="M72,60 C0,0 0,0 648,60z" />
        <path
          fill="#e3af32"
          opacity="0.85"
          d="M-528,60 C161,-0 161,-0, 881,60z"
        />
        <path fill="#000" opacity="0.85" d="M672,60 C1248,0 1248,0, 1968,60z" />
      </svg>
    </div>
  );
}
