import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type SelectCellUIProps = {
  value: number;
  onChange: (event: SelectChangeEvent<number>) => void;
};

const SelectCellUI = ({ value, onChange }: SelectCellUIProps) => (
  <FormControl size="small" variant="standard">
    <Select value={value} onChange={onChange}>
      {[...Array(11).keys()].map((num) => (
        <MenuItem key={num} value={num}>
          {num}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectCellUI;
