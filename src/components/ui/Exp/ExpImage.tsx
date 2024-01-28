import { Avatar } from '@mui/material';

type ExpImageType = {
  src: string;
};

const ExpImage = ({ src }: ExpImageType) => {
  return <Avatar variant="rounded" src={`./images/exp_icon/${src}.png`} />;
};

export default ExpImage;
