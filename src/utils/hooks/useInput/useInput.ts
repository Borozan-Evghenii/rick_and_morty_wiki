import React from 'react';

export const useInput = (initialState: string) => {
  const [value, setValue] = React.useState<string>(initialState || '');

  const onChangeValue = (value: string | undefined) => {
    setValue(value!);
  };

  return { onChangeValue, value };
};
