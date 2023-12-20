import { SelectChangeEvent } from '@mui/material';

export type HandleCouponValueChangeParams = {
  event: SelectChangeEvent<string>;
  currentValue: number;
  setExpIncrease: React.Dispatch<React.SetStateAction<number>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
