import { Box, SelectChangeEvent } from '@mui/material';
import MapDetailsCheckbox from './Checkbox/MapDetailsCheckbox';
import MapTypeRadio from './Radio/MapTypeRadio';
import { useState } from 'react';
import { AraneRiverMapData, GrandisMapData } from '../data/mapDatas';

const MapSelect = () => {
  const [mapRegion, setMapRegion] = useState<'아케인리버' | '그란디스'>(
    '아케인리버'
  );

  const handleMapRegionSelect = (e: SelectChangeEvent) => {
    setMapRegion(e.target.value as '아케인리버' | '그란디스');
  };

  const selectedMap =
    mapRegion === '아케인리버' ? AraneRiverMapData : GrandisMapData;

  const mapKeys = Object.keys(selectedMap);

  return (
    <Box>
      <MapTypeRadio
        mapRegion={mapRegion}
        handleChange={handleMapRegionSelect}
      />
      <MapDetailsCheckbox mapKeys={mapKeys} />
    </Box>
  );
};

export default MapSelect;
