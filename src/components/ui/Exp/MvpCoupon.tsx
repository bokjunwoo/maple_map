import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material';

type MvpCouponType = {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

const MvpCoupon = ({ value, handleChange }: MvpCouponType) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
      <InputLabel id="mvp-coupon">뿌리기 / MVP 쿠폰</InputLabel>
      <Select
        labelId="mvp-coupon"
        id="mvp-coupon"
        value={value}
        onChange={handleChange}
        label="뿌리기 / MVP 쿠폰"
      >
        <MenuItem value={0}>없음</MenuItem>
        <MenuItem value={150}>사용</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MvpCoupon;
