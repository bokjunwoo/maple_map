import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { ChangeEvent } from 'react';

type MapDetailsCheckboxType = {
  mapKeys: string[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const MapDetailsCheckbox = ({
  mapKeys,
  handleChange,
}: MapDetailsCheckboxType) => {
  return (
    <FormGroup row>
      {mapKeys.map((map) => {
        return (
          <FormControlLabel
            key={map}
            control={<Checkbox onChange={handleChange} />}
            label={map}
            value={map}
          />
        );
      })}
    </FormGroup>
  );
};

export default MapDetailsCheckbox;
