import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

type MapDetailsCheckboxType = {
  mapKeys: string[];
};

const MapDetailsCheckbox = ({ mapKeys }: MapDetailsCheckboxType) => {
  return (
    <FormGroup row>
      {mapKeys.map((map) => {
        return (
          <FormControlLabel
            key={map}
            control={<Checkbox />}
            label={map}
            value={map}
          />
        );
      })}
    </FormGroup>
  );
};

export default MapDetailsCheckbox;
