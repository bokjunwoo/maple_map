import { Avatar } from '@mui/material';

type ExpImageType = {
  src: string;
};

const ExpImage = ({ src }: ExpImageType) => {
  return <Avatar variant="rounded" src={`./images/${src}`} />;
};

export default ExpImage;
