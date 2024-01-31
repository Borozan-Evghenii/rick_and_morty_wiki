import React from 'react';

export const FooterInput: React.FC = () => (
  <div className="flex w-full max-w-[400px] items-center justify-between rounded-full border border-light-primary p-1 dark:border-dark-primary">
    <input
      className="ml-[10px] h-full w-full bg-transparent outline-0 placeholder:text-light-secondary dark:placeholder:text-dark-secondary"
      placeholder="Enter message"
      type="text"
    />

    {/* eslint-disable-next-line react/button-has-type */}
    <button className="rounded-full bg-light-accent px-[23px] py-[11px] dark:bg-dark-accent">
      Send
    </button>
  </div>
);
