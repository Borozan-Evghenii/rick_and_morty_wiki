import React from 'react';

export const Characters: React.FC = () => {
  return (
    <main className='bg-white dark:bg-gray-700 text-slate-800 dark:text-slate-200 h-[100vh] transition'>
      <div className="appContainer">
        <div className="grid grid-cols-3">
          <div>Filter</div>
          <div>Characters List</div>
          <div>Character Info</div>
        </div>
      </div>
    </main>
  );
};
