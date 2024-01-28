import React from 'react';

export const FooterInput: React.FC = () => {
  return (
    <div
      className={'p-1 border border-light-primary dark:border-dark-primary rounded-full max-w-[400px] w-full flex items-center justify-between'}>

        <input placeholder={'Enter message'} type="text" className={'w-full bg-transparent outline-0 ml-[10px] h-full placeholder:text-light-secondary dark:placeholder:text-dark-secondary'} />

      <button className={'bg-light-accent dark:bg-dark-accent px-[23px] py-[11px] rounded-full'}>Send</button>
    </div>
  );
};
