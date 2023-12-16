import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

type MvpCouponType = {
  name: string;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const MvpCoupon = ({ name, value, handleChange }: MvpCouponType) => {
  return (
    <>
      <InputLabel id={name}>뿌리기 / MVP 쿠폰</InputLabel>
      <Select
        labelId={name}
        id={name}
        value={value}
        onChange={handleChange}
        label="뿌리기 / MVP 쿠폰"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={150}>사용 (50%)</MenuItem>
      </Select>
    </>
  );
};

export default MvpCoupon;
