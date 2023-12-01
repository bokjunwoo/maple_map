import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material';

type ExpCouponType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const ExpCoupon = ({ value, handleChange }: ExpCouponType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
      <InputLabel id="exp-coupon">경험치 쿠폰</InputLabel>
      <Select
        labelId="exp-coupon"
        id="exp-coupon"
        value={value}
        onChange={handleChange}
        label="경험치 쿠폰"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={150}>1.5배 쿠폰</MenuItem>
        <MenuItem value={200}>2배 쿠폰</MenuItem>
        <MenuItem value={300}>3배 쿠폰</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ExpCoupon;
