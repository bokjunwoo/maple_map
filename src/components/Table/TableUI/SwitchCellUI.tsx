import { Switch } from '@mui/material';

type SwitchCellUIProps = {
  checked: boolean;
  onChange: (isChecked: boolean) => void;
};

const SwitchCellUI = ({ checked, onChange }: SwitchCellUIProps) => (
  <Switch checked={checked} onChange={(e) => onChange(e.target.checked)} />
);

export default SwitchCellUI;
