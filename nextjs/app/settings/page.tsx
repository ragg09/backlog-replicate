'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { BACKENDLIST, BACKENDLIST_BASEURL } from '@/utils/constants';
import { SelectChangeEvent } from '@mui/material';
import { changeBackEnd } from '@/redux/features/backendSlice';
import Dropdown from '@/component/Inputs/Dropdown';

export default function Settings() {
  const dispatch = useAppDispatch();
  const { value, baseURL } = useAppSelector((state) => state.backend);

  console.log(`
value: ${value}
url : ${baseURL}
`);

  const handleChange = (event: SelectChangeEvent<string>) => {
    dispatch(changeBackEnd(event.target.value));
  };

  return (
    <Dropdown
      label="Backend Technology"
      value={value}
      onChange={handleChange}
      items={BACKENDLIST}
      className="w-[500px]"
    />
  );
}
