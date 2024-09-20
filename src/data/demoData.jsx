import {
  IoConstruct,
  IoBrush,
  IoHammer,
  IoFlash,
  IoCar,
  IoHome,
} from 'react-icons/io5';

export const demoData = [
  {
    category: 'Plumbing',
    serviceName: 'Pipe Fixing',
    name: 'John Doe',
    address: '123 Main St, Springfield',
    photoUrl:
      'https://img.freepik.com/free-photo/man-installs-heating-system-house-checks-pipes-with-wrench_169016-55834.jpg?t=st=1726681319~exp=1726684919~hmac=ffb678b7e10b35311e4b00034d9e85a92b86e521da1c68199b9931e0740fdcee&w=1480',
  },
  {
    category: 'Electric',
    serviceName: 'Wiring',
    name: 'Tom Smith',
    address: '456 Elm St, Springfield',
    photoUrl:
      'https://img.freepik.com/free-photo/electrician-is-mounting-electric-sockets-white-wall-indoors_169016-17794.jpg?t=st=1726681340~exp=1726684940~hmac=d124ac11d7bc4404281b941e9629104aa6c0f88f6e35ca76df281857d516b6db&w=1480',
  },
  {
    category: 'Cleaning',
    serviceName: 'House Cleaning',
    name: 'Emily Johnson',
    address: '789 Oak St, Springfield',
    photoUrl:
      'https://img.freepik.com/free-photo/side-view-woman-cleaning-kitchen-cabinets_23-2148465040.jpg?t=st=1726681387~exp=1726684987~hmac=47845960d8226b74ba9535c6bbed91f588541c8a708b14e910b855021ac76e1e&w=1480',
  },
  {
    category: 'Painting',
    serviceName: 'Lawn Mowing',
    name: 'Michael Brown',
    address: '101 Pine St, Springfield',
    photoUrl:
      'https://img.freepik.com/free-photo/man-cutting-grass-with-lawn-mover-back-yard-male-black-apron_1157-41429.jpg?t=st=1726681408~exp=1726685008~hmac=6adee900c2eabe7a0b4b519e539d7f4f7e39f01a5331356ad1772f7b01ae964d&w=1480',
  },
  {
    category: 'Painting',
    serviceName: 'Wall Painting',
    name: 'Sarah Davis',
    address: '202 Maple St, Springfield',
    photoUrl:
      'https://img.freepik.com/free-photo/paint-concept-with-woman-ladder_23-2147703584.jpg?t=st=1726681460~exp=1726685060~hmac=fa67a1b45d9e7bea49b6225462f5bebfde4cfaf3d234e06ac61943580928e51c&w=1480',
  },
  {
    category: 'Repair',
    serviceName: 'Furniture Repair',
    name: 'David Wilson',
    address: '303 Birch St, Springfield',
    photoUrl:
      'https://img.freepik.com/free-photo/woman-assembling-diy-chair-from-scratch_53876-127259.jpg?t=st=1726681491~exp=1726685091~hmac=6213ded953a25b7347ece71426db8837aa476eeaafec92f9f056c98831b7261d&w=1480',
  },
  {
    category: 'Reipair',
    serviceName: 'Air Conditioning Repair',
    name: 'Jakob Martinez',
    address: '404 Cedar St, Springfield',
    photoUrl:
      'https://img.freepik.com/free-photo/repairman-doing-air-conditioner-service_1303-26541.jpg?t=st=1726681518~exp=1726685118~hmac=2f84645517e0db4350e449d5dbc40c5cd01bbcebea04372a0f0b192b7667f92d&w=1480',
  },
  {
    category: 'Repair',
    serviceName: 'Roof Repair',
    name: 'James Anderson',
    address: '505 Walnut St, Springfield',
    photoUrl:
      'https://img.freepik.com/free-photo/sideways-man-working-roof-with-drill_23-2148748771.jpg?t=st=1726683039~exp=1726686639~hmac=1d81e16a870a64ab1de5b7c0f44e7d84d4b36b74dd3991bd3bad2cd96aee8946&w=1480',
  },
  {
    category: 'Painting',
    serviceName: 'Garden Design',
    name: 'Patricia Thomas',
    address: '606 Chestnut St, Springfield',
    photoUrl:
      'https://img.freepik.com/free-photo/long-shot-young-woman-taking-care-plants_23-2148509881.jpg?t=st=1726683081~exp=1726686681~hmac=3b998a73fc0b6f93681c2c5393577519f5ff81be63b0aa70b527c62766eb8b86&w=1480',
  },
  {
    category: 'Cleaning',
    serviceName: 'Termite Treatment',
    name: 'Robert Jackson',
    address: '707 Willow St, Springfield',
    photoUrl:
      'https://img.freepik.com/free-photo/full-shot-man-with-suit-disinfecting-stairs_23-2148563394.jpg?t=st=1726683119~exp=1726686719~hmac=c21d205f33062381d9b32b774b49def073bac04a1859e9ec4eff7ac20648feab&w=740',
  },
  {
    category: 'Shifting',
    serviceName: 'Furniture Moving',
    name: 'Tyus White',
    address: '808 Ash St, Springfield',
    photoUrl:
      'https://img.freepik.com/free-photo/black-man-moving-furniture_53876-146186.jpg?t=st=1726683162~exp=1726686762~hmac=848adc04d9727b8278d533e5a957eed35b232d76de1fb1b273d963b97ab9a65e&w=1480',
  },
  {
    category: 'Electric',
    serviceName: 'Home Security Installation',
    name: 'Barbara Harris',
    address: '909 Poplar St, Springfield',
    photoUrl:
      'https://img.freepik.com/free-photo/man-changing-light-bulb_53876-13506.jpg?t=st=1726683476~exp=1726687076~hmac=014439601db7371b4f8078239f4ad4fc41f9e59a03d31fa4d18e8fba9ed7b9a0&w=1060',
  },
];

const categories = [
  { name: 'Cleaning', icon: <IoHome />, color: '#a72ee0' },
  { name: 'Repair', icon: <IoConstruct />, color: '#e1b953' },
  { name: 'Painting', icon: <IoBrush />, color: '#469c98' },
  { name: 'Shifting', icon: <IoCar />, color: '#d04d45' },
  { name: 'Plumbing', icon: <IoHammer />, color: '#d8953d' },
  { name: 'Electric', icon: <IoFlash />, color: '#295fb7' },
];

export default categories;
