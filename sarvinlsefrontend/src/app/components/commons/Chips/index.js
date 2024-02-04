"use client";

import React from "react";

const Chips = ({ text }) => {
  return (
    <div>
      <div
        data-te-chip-init
        data-te-ripple-init
        class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-500 dark:text-neutral-200"
        data-te-close="true"
      >
        {text}
      </div>
    </div>
  );
};

export default Chips;
