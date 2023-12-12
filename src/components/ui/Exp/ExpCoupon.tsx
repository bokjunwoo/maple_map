import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type ExpCouponType = {
  value: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
};

const ExpCoupon = ({ value, handleChange }: ExpCouponType) => {
  return (
    <>
      <InputLabel id="exp-coupon">경험치 쿠폰</InputLabel>
      <Select
        labelId="exp-coupon"
        id="exp-coupon"
        value={value}
        onChange={handleChange}
        label="경험치 쿠폰"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={150}>1.5배 쿠폰 (150%)</MenuItem>
        <MenuItem value={200}>2배 쿠폰 (200%)</MenuItem>
        <MenuItem value={300}>3배 쿠폰 (300%)</MenuItem>
      </Select>
    </>
  );
};

export default ExpCoupon;
