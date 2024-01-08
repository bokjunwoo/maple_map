import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

const MapTypeRadio = () => {
  return (
    <FormControl>
      <FormLabel id="map_type_radio_label" sx={{ color: 'black' }}>
        사냥구역 선택
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="map_type_radio_label"
        name="map_type_radio_label"
      >
        <FormControlLabel
          value="아케인리버"
          control={<Radio />}
          label="아케인리버"
        />
        <FormControlLabel
          value="그란디스"
          control={<Radio />}
          label="그란디스"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default MapTypeRadio;
