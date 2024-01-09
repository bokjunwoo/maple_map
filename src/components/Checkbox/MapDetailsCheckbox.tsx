import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const MapDetailsCheckbox = () => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Checkbox />} label="소멸의여로" />
      <FormControlLabel control={<Checkbox />} label="리버스시티" />
    </FormGroup>
  );
};

export default MapDetailsCheckbox;
