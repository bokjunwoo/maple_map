import { Box, SelectChangeEvent } from '@mui/material';
import MapDetailsCheckbox from './Checkbox/MapDetailsCheckbox';
import MapTypeRadio from './Radio/MapTypeRadio';
import { SetStateAction, useEffect, useState } from 'react';
import { AraneRiverMapData, GrandisMapData } from '../data/mapDatas';
import MapTable from './MapTable';
import { MapDataType, MapType } from '../data/mapTypes';

type MapSeletType = {
  level: number;
};

const MapSelect = ({ level }: MapSeletType) => {
  const [mapRegion, setMapRegion] = useState<'아케인리버' | '그란디스'>(
    level >= 260 ? '그란디스' : '아케인리버'
  );
  const [mapDetailsName, setMapDetailsName] = useState<string[]>([]);
  const [selectMapData, setSelectMapData] = useState<MapType[]>([]);

  const handleMapRegionSelect = (e: SelectChangeEvent) => {
    setMapRegion(e.target.value as '아케인리버' | '그란디스');
    setMapDetailsName([]);
    setSelectMapData([]);
  };

  const handleMapDetailNameSelect = (selectedValue: string) => {
    const isSelected = mapDetailsName.includes(selectedValue);
    setMapDetailsName((prevDetailsName) => {
      if (isSelected) {
        return prevDetailsName.filter((value) => value !== selectedValue);
      } else {
        return [...prevDetailsName, selectedValue];
      }
    });
  };

  const handleUpdate = (updatedData: SetStateAction<MapType[]>) => {
    setSelectMapData(updatedData);
  };

  const selectedMap: MapDataType =
    mapRegion === '아케인리버' ? AraneRiverMapData : GrandisMapData;

  const mapKeys = Object.keys(selectedMap);

  useEffect(() => {
    setSelectMapData(() =>
      mapDetailsName.flatMap((region) => selectedMap[region])
    );
  }, [mapDetailsName, selectedMap]);

  useEffect(() => {
    setMapRegion(level >= 260 ? '그란디스' : '아케인리버');
  }, [level]);

  return (
    <Box>
      <MapTypeRadio
        mapRegion={mapRegion}
        handleChange={handleMapRegionSelect}
      />
      <MapDetailsCheckbox
        mapKeys={mapKeys}
        mapDetailsName={mapDetailsName}
        handleChange={handleMapDetailNameSelect}
      />
      <MapTable data={selectMapData} onUpdate={handleUpdate} />
    </Box>
  );
};

export default MapSelect;
