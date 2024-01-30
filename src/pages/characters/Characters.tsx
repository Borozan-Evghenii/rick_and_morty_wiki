import React from 'react';
import { PageLayout } from '@layouts';

export const Characters: React.FC = () => {
  return (
    <PageLayout>
      <div className="appContainer">
        <div className="grid grid-cols-3">
          <div>Filter</div>
          <div>Characters List</div>
          <div>Character Info</div>
        </div>
      </div>
    </PageLayout>
  );
};
