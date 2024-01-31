import React from 'react';

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="overflow-hidden p-2.5">{children}</main>
);
