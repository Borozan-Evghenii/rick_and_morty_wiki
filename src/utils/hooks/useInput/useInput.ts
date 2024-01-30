import React from 'react';

export const useInput = (initialState: string) => {
  const [value, setValue] = React.useState<string>(initialState || '');

  const onChangeValue = (value: string) => {
    setValue(value);
  };

  return { value, onChangeValue };
};