import React from 'react';

export const Characters: React.FC = () => {
  return (
    <main className=''>
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
