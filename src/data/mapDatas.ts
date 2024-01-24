import {
  AraneRiverMapDataType,
  GrandisMapDataType,
  HeadCell,
} from './mapTypes';

export const headCells: HeadCell[] = [
  { id: 'map_key', label: '지역' },
  { id: 'map_name', label: '사냥터' },
  { id: 'number_of_monster', label: '몬스터 젠수' },
  { id: 'burning_field', label: '버닝필드', disableSorting: true },
  {
    id: 'half_hour_number_of_monster',
    label: '30분당 최대 마릿수',
    disableSorting: true,
  },
  {
    id: 'half_hour_net_meso',
    label: '30분당 최대 순 메소',
    disableSorting: true,
  },
  {
    id: 'half_hour_maximum_monster_experience',
    label: '30분당 최대 경험치',
    disableSorting: true,
  },
];

export const AraneRiverMapData: AraneRiverMapDataType = {
  소멸의여로: [
    {
      id: 1,
      map_key: '소멸의여로',
      map_name: '소멸의여로임시1',
      symbols: 150,
      monster: '소멸의여로임시1',
      number_of_monster: 11,
      monster_experience: 180,
      monster_money: 1000,
      rune: false,
      burning_field: 0,
      half_hour_net_meso: 0,
      half_hour_number_of_monster: 0,
      half_hour_maximum_monster_experience: 0,
    },
    {
      id: 2,
      map_key: '소멸의여로',
      map_name: '소멸의여로임시2',
      symbols: 150,
      monster: '소멸의여로임시2',
      number_of_monster: 12,
      monster_experience: 160,
      monster_money: 1000,
      rune: false,
      burning_field: 0,
      half_hour_net_meso: 0,
      half_hour_number_of_monster: 0,
      half_hour_maximum_monster_experience: 0,
    },
    {
      id: 3,
      map_key: '소멸의여로',
      map_name: '소멸의여로임시3',
      symbols: 150,
      monster: '소멸의여로임시3',
      number_of_monster: 13,
      monster_experience: 130,
      monster_money: 1000,
      rune: false,
      burning_field: 0,
      half_hour_net_meso: 0,
      half_hour_number_of_monster: 0,
      half_hour_maximum_monster_experience: 0,
    },
    {
      id: 4,
      map_key: '소멸의여로',
      map_name: '소멸의여로임시4',
      symbols: 150,
      monster: '소멸의여로임시4',
      number_of_monster: 14,
      monster_experience: 140,
      monster_money: 1000,
      rune: false,
      burning_field: 0,
      half_hour_net_meso: 0,
      half_hour_number_of_monster: 0,
      half_hour_maximum_monster_experience: 0,
    },
    {
      id: 5,
      map_key: '소멸의여로',
      map_name: '소멸의여로임시5',
      symbols: 150,
      monster: '소멸의여로임시5',
      number_of_monster: 15,
      monster_experience: 150,
      monster_money: 1000,
      rune: false,
      burning_field: 0,
      half_hour_net_meso: 0,
      half_hour_number_of_monster: 0,
      half_hour_maximum_monster_experience: 0,
    },
  ],
  리버스시티: [
    {
      id: 1,
      map_key: '리버스시티',
      map_name: '리버스시티임시1',
      symbols: 150,
      monster: '리버스시티임시1',
      number_of_monster: 13,
      monster_experience: 200,
      monster_money: 1000,
      rune: false,
      burning_field: 0,
      half_hour_net_meso: 0,
      half_hour_number_of_monster: 0,
      half_hour_maximum_monster_experience: 0,
    },
    {
      id: 2,
      map_key: '리버스시티',
      map_name: '리버스시티임시2',
      symbols: 150,
      monster: '리버스시티임시2',
      number_of_monster: 15,
      monster_experience: 130,
      monster_money: 1000,
      rune: false,
      burning_field: 0,
      half_hour_net_meso: 0,
      half_hour_number_of_monster: 0,
      half_hour_maximum_monster_experience: 0,
    },
    {
      id: 3,
      map_key: '리버스시티',
      map_name: '리버스시티임시3',
      symbols: 150,
      monster: '리버스시티임시3',
      number_of_monster: 18,
      monster_experience: 110,
      monster_money: 1000,
      rune: false,
      burning_field: 0,
      half_hour_net_meso: 0,
      half_hour_number_of_monster: 0,
      half_hour_maximum_monster_experience: 0 + 10,
    },
  ],
  츄츄아일랜드: [],
  얌얌아일랜드: [],
  레헬른: [],
  아르카나: [],
  모라스: [],
  에스페라: [],
  셀라스: [],
  문브릿지: [],
  고통의미궁: [],
  리멘: [],
};

export const GrandisMapData: GrandisMapDataType = {
  세르니움: [],
  불타는세르니움: [],
  호텔아르크스: [],
  오디움: [],
  도원경: [],
  아르테리아: [],
  카르시온: [],
};
