const ranks = [
  'Iron 1',
  'Iron 2',
  'Iron 3',
  'Silver 1',
  'Silver 2',
  'Silver 3',
  'Gold 1',
  'Gold 2',
  'Gold 3',
  'Platinum 1',
  'Platinum 2',
  'Platinum 3',
  'Diamond 1',
  'Diamond 2',
  'Diamond 3',
  'Ascendant 1',
  'Ascendant 2',
  'Ascendant 3',
  'Immortal 1',
  'Immortal 2',
  'Immortal 3',
  'Radiant',
];

const regions = [
  'NA',
  'EU',
  'TR',
  'MENA',
  'CIS',
  'KR',
  'JP',
  'OCE',
  'SEA',
  'LATAM',
  'BR',
];

const rolesArr = ['Sentinel', 'Controller', 'Initiator', 'Duelist'];

const initialFormState = {
  name: '',
  rank: 'Iron 1',
  region: 'NA',
  microphone: 'No',
  roles: [],
  description: '',
  lookingFrom: 'Iron 1',
  lookingTo: 'Iron 1',
  lookingRegion: 'NA',
  discord: '',
  riot: '',
};

export { ranks, regions, rolesArr, initialFormState };
