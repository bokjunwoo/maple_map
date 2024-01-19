import { TextField } from '@mui/material';

type TextFieldCellUIProps = {
  value: number;
  onChange: (value: number) => void;
};

const TextFieldCellUI = ({ value, onChange }: TextFieldCellUIProps) => (
  <TextField
    type="text"
    variant="outlined"
    size="small"
    value={value + 10}
    onChange={(e) => onChange(Number(e.target.value))}
    style={{ textAlign: 'center' }}
    inputProps={{
      sx: {
        width: '22px',
        height: '22px',
        p: 1,
        textAlign: 'center',
        m: 0,
      },
    }}
  />
);

export default TextFieldCellUI;
