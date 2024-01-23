export type MapType = {
  id: number;
  map_key:
    | '소멸의여로'
    | '리버스시티'
    | '츄츄아일랜드'
    | '얌얌아일랜드'
    | '레헬른'
    | '아르카나'
    | '모라스'
    | '에스페라'
    | '셀라스'
    | '문브릿지'
    | '고통의미궁'
    | '리멘'
    | '세르니움'
    | '불타는세르니움'
    | '아르크스'
    | '오디움'
    | '도원경'
    | '아르테리아'
    | '카르시온';
  map_name: string;
  symbols: number;
  monster: string;
  number_of_monster: number;
  monster_experience: number;
  monster_money: number;
  rune: boolean;
  burning_field: number;
};

export type MapDataType = {
  [key: string]: MapType[];
};

export type AraneRiverMapDataType = {
  소멸의여로: MapType[];
  리버스시티: MapType[];
  츄츄아일랜드: MapType[];
  얌얌아일랜드: MapType[];
  레헬른: MapType[];
  아르카나: MapType[];
  모라스: MapType[];
  에스페라: MapType[];
  셀라스: MapType[];
  문브릿지: MapType[];
  고통의미궁: MapType[];
  리멘: MapType[];
};

export type GrandisMapDataType = {
  세르니움: MapType[];
  불타는세르니움: MapType[];
  호텔아르크스: MapType[];
  오디움: MapType[];
  도원경: MapType[];
  아르테리아: MapType[];
  카르시온: MapType[];
};

export type HeadCell = {
  id: keyof MapType;
  label: string;
  disableSorting?: boolean;
};
