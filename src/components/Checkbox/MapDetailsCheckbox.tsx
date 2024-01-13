import { FormGroup } from '@mui/material';
import CheckboxMapDetail from './CheckboxMapDetail';

type MapDetailsCheckboxType = {
  mapKeys: string[];
  mapDetailsName: string[];
  handleChange: (selectedValue: string) => void;
};

const MapDetailsCheckbox = ({
  mapKeys,
  mapDetailsName,
  handleChange,
}: MapDetailsCheckboxType) => {
  return (
    <FormGroup row>
      {mapKeys.map((map) => {
        return (
          <CheckboxMapDetail
            key={map}
            name={map}
            isSelected={mapDetailsName.includes(map)}
            onToggle={handleChange}
          />
        );
      })}
    </FormGroup>
  );
};

export default MapDetailsCheckbox;
