import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface DropdownProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  items: string[];
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, value, onChange, items, className }) => {
  return (
    <FormControl className={className}>
      <InputLabel htmlFor={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        id={`${label}-select`}
        label={label}
        value={value}
        onChange={onChange}
      >
        {items.map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
