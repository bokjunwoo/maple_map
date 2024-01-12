import { Box, SelectChangeEvent } from '@mui/material';
import MapDetailsCheckbox from './Checkbox/MapDetailsCheckbox';
import MapTypeRadio from './Radio/MapTypeRadio';
import { ChangeEvent, useState } from 'react';
import { AraneRiverMapData, GrandisMapData } from '../data/mapDatas';
import MapTable from './MapTable';
import { MapDataType } from '../data/mapTypes';

const MapSelect = () => {
  const [mapRegion, setMapRegion] = useState<'아케인리버' | '그란디스'>(
    '아케인리버'
  );
  const [mapDetailsName, setMapDetailsName] = useState<string[]>([]);

  const handleMapRegionSelect = (e: SelectChangeEvent) => {
    setMapRegion(e.target.value as '아케인리버' | '그란디스');
    setMapDetailsName([]);
  };
  const handleMapDetailNameSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;

    const isSelected = mapDetailsName.includes(selectedValue);

    if (isSelected) {
      setMapDetailsName(
        mapDetailsName.filter((value) => value !== selectedValue)
      );
    } else {
      setMapDetailsName([...mapDetailsName, selectedValue]);
    }
  };

  const selectedMap: MapDataType =
    mapRegion === '아케인리버' ? AraneRiverMapData : GrandisMapData;

  const mapKeys = Object.keys(selectedMap);

  const selectMapData = mapDetailsName.flatMap((region) => selectedMap[region]);

  return (
    <Box>
      <MapTypeRadio
        mapRegion={mapRegion}
        handleChange={handleMapRegionSelect}
      />
      <MapDetailsCheckbox
        mapKeys={mapKeys}
        handleChange={handleMapDetailNameSelect}
      />
      <MapTable data={selectMapData} />
    </Box>
  );
};

export default MapSelect;
