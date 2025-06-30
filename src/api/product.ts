import { BASEURL } from './utils';

interface PInfo {
  id: number;
  name: string;
  desc: string;
  color: string;
  fish: Fish;
  showTickets: boolean;
  boatId: number;
  type: string;
  stripeId?: string;
  boatOverride: boolean;
}

export enum Fish {
  BlueFish = 'bluefish',
  Cod = 'codfish',
  CodFlounder = 'cod-flounder',
  SeaBass = 'seabass',
  Fluke = 'fluke',
  StriperSea = 'new-striped-bass',
  SeaBassFluke = 'seabassfluke',
  Striper = 'striper',
  StriperBlack = 'striperblack',
  OvernightTile = 'overnighttile',
  OvernightCod = 'overnightcod',
  SeaBass22Hr = 'seabass22hours',
  SeaBassCod = 'seabasscod',
  SeaBassPorgie = 'seabassporgies',
  SeaBassLing = 'seabassling',
  Fourth = 'fourth',
  BlackFish = 'tautog',
  StriperBlackFish = 'striperblackfish',
  Ling = 'ling-hake-red',
  FlukeStriper = 'flukestripe',
  Bonito = 'bonito',
  StriperBonito = 'striperbonito',
  FlukeBonito = 'flukebonito'
}

const lauraleeDisplay: {[key in Fish]: string} = {
  'bluefish': 'Tuna',
  'codfish': 'CodFish',
  'cod-flounder': 'Cod Flounder',
  'seabass': 'Seabass',
  'fluke': 'Fluke',
  'new-striped-bass': 'Striper Sea',
  'seabassfluke': 'SeaBassFluke',
  'striper': 'Striper',
  'striperblack': 'Black Striper',
  'overnighttile': 'Overnight Tile',
  'overnightcod': 'Overnight Cod',
  'seabass22hours': 'Sea Bass 22hr',
  'seabasscod': 'SeaBass Cod',
  'seabassporgies': 'SeaBass Porgie',
  'fourth': '4th Of July',
  'tautog': 'BlackFish',
  'striperblackfish': 'StriperBlackFish',
  'ling-hake-red': 'Ling',
  'flukestripe': 'Fluke/Striper',
  'seabassling': 'SeaBass Ling',
  'bonito': 'Bonito',
  'striperbonito': 'StriperBonito',
  'flukebonito': 'FlukeBonito',
};

const princessDisplay: {[key in Fish]: string} = {
  'bluefish': 'Tuna',
  'codfish': 'CodFish',
  'cod-flounder': 'Cod Flounder',
  'seabass': 'Seabass',
  'fluke': 'Fluke',
  'new-striped-bass': 'Striper Sea',
  'seabassfluke': 'SeaBassFluke',
  'striper': 'Striper',
  'overnighttile': 'SeaBass Blues',
  'overnightcod': 'Overnight Cod',
  'striperblack': 'Black Striper',
  'seabass22hours': 'Tuna',
  'seabasscod': 'Fluke Sea',
  'seabassporgies': 'SeaBass Porgie',
  'fourth': '4th Of July',
  'tautog': 'BlackFish',
  'striperblackfish': 'StriperBlackFish',
  'ling-hake-red': 'Ling',
  'flukestripe': 'Fluke/Striper',
  'seabassling': 'SeaBass Ling',
  'bonito': 'Bonito',
  'striperbonito': 'StriperBonito',
  'flukebonito': 'FlukeBonito',
};

const lauralee: {[key in Fish]: {img: string, height: number, width: number}} = {
  'bluefish': { img: 'bluefish.png', width: 90, height: 50 },
  'codfish': { img: 'codfish.png', width: 90, height: 36 },
  'cod-flounder': { img: 'cod-flounder.png', width: 86, height: 44 },
  'seabass': { img: 'sea-bass.png', width: 80, height: 45 },
  'fluke': { img: 'fluke.png', width: 65, height: 39 },
  'new-striped-bass': { img: 'striper-seabass.png', width: 65, height: 33 },
  'seabassfluke': { img: 'fluke-seabass-combo.png', width: 80, height: 45 },
  'striper': { img: 'stripers.png', width: 90, height: 43 },
  'overnighttile': { img: 'overnight-tile.png', width: 90, height: 60 },
  'overnightcod': { img: 'overnight-cod.png', width: 90, height: 39 },
  'seabass22hours': { img: 'seabass-22hours.png', width: 90, height: 50 },
  'seabasscod': { img: 'seabass-cod.png', width: 90, height: 39 },
  'seabassporgies': { img: 'seabass-porgies.png', width: 90, height: 50 },
  'fourth': { img: '4th-stretched.png', width: 90, height: 50 },
  'tautog': { img: 'tautog.png', width: 80, height: 42 },
  'striperblack': {img: 'striperblack.png', width: 80, height: 43},
  'striperblackfish': {img: 'striperblackfish.png', width: 90, height: 41},
  'ling-hake-red': {img: '640x427-Hake-Red.png', width: 90, height: 60},
  'flukestripe': {img: 'flukestripe.png', width: 90, height: 42},
  'seabassling': {img: 'sealingt.png', width: 90, height: 51},
  'striperbonito': {img: 'new-fish/striperbonito.png', width: 90, height: 33},
  'bonito': {img: 'new-fish/bonito.png', width: 90, height: 33},
  'flukebonito': {img: 'new-fish/flukebonito.png', width: 90, height: 33}
};

const princess: {[key in Fish]: {img: string, height: number, width: number}} = {
  'bluefish': { img: 'bluefish.png', width: 90, height: 50 },
  'codfish': { img: 'codfish.png', width: 90, height: 36 },
  'cod-flounder': { img: 'cod-flounder.png', width: 86, height: 44 },
  'seabass': { img: 'sea-bass.png', width: 80, height: 45 },
  'fluke': { img: 'fluke.png', width: 65, height: 39 },
  'new-striped-bass': { img: 'striper-seabass.png', width: 65, height: 33 },
  'seabassfluke': { img: 'fluke-seabass-combo.png', width: 80, height: 45 },
  'striper': { img: 'stripers.png', width: 90, height: 43 },
  'overnighttile': { img: 'overnight-tile.png', width: 90, height: 60 },
  'overnightcod': { img: 'overnight-cod.png', width: 90, height: 39 },
  'seabass22hours': { img: 'seabass-22hours.png', width: 90, height: 50 },
  'seabasscod': { img: 'seabass-cod.png', width: 90, height: 39 },
  'seabassporgies': { img: 'seabass-porgies.png', width: 90, height: 50 },
  'fourth': { img: '4th-stretched.png', width: 90, height: 50 },
  'tautog': { img: 'tautog.png', width: 80, height: 42 },
  'striperblack': {img: 'striperblack.png', width: 80, height: 43},
  'striperblackfish': {img: 'striperblackfish.png', width: 90, height: 41},
  'ling-hake-red': {img: '640x427-Hake-Red.png', width: 90, height: 60},
  'flukestripe': {img: 'flukestripe.png', width: 90, height: 42},
  'seabassling': {img: 'sealingt.png', width: 90, height: 51},
  'striperbonito': {img: 'new-fish/striperbonito.png', width: 90, height: 33},
  'bonito': {img: 'new-fish/bonito.png', width: 90, height: 33},
  'flukebonito': {img: 'new-fish/flukebonito.png', width: 90, height: 33}
};

export const FishToImg = (process.env.VUE_APP_FISHES === 'lauralee') ? lauralee : princess;
export const FishDisplay = (process.env.VUE_APP_FISHES === 'lauralee') ? lauraleeDisplay : princessDisplay;
export interface ScheduleTime {
  startTime: string;
  endTime: string;
  price: string;
  avail?: number;
}

export interface Schedule {
  ticketsAvail: number;
  timeArray: ScheduleTime[];
  notAvailArray: string[];
  start: string;
  end: string;
  selectedDays: number[];
  showAll: boolean;
}

interface PData {
  publish: boolean;
  schedList: Schedule[];
}

type Product = PInfo & PData;
export default Product;

type Event = PInfo & ScheduleTime;
export interface EventInfo extends Event {
  start: string;
  end: string;
  stock: number;
  cancelled?: boolean;
}

export interface Boat {
  id: number;
  name: string;
  color: string;
}

export interface StripePrice {
  id: string;
  product: string;
  name: string;
  amount: number;
}

export interface StripeSched {
  days: number[];
  notAvail: string[] | null;
  start: string;
  end: string;
  price: string;
  minimum: number;
  times: string[];
}


interface WithStripe {
  prices: StripePrice[];
  schedules: StripeSched[];
}

export type StripeProduct = Product & WithStripe;

export interface DepositEvent {
  product: StripeProduct;
  price: StripePrice;  
  date: moment.Moment;
  start: string;
  times: string[];
  type: 'stripe';
  minimum: number;
  label: string;
  firstOfDay: moment.Moment | null;
}

export function getBoatsReq(): Request {
  return new Request(BASEURL + '/boats');
}

export function putBoatReq(boat: Boat): Request {
  return new Request(BASEURL + '/boats', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(boat),
    mode: 'cors',
  });
}

export function createBoatReq(boat: Boat): Request {
  return new Request(BASEURL + '/boats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(boat),
    mode: 'cors',
  });
}

export function deleteBoatReq(boat: Boat): Request {
  return new Request(BASEURL + '/boats', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(boat),
    mode: 'cors',
  });
}

export function getProdInfoReq(id: number): Request {
  return new Request(BASEURL + `/product/${id}`);
}

export function getProductsReq(): Request {
  return new Request(BASEURL + '/');
}

import moment from 'moment';

export function putProduct(p: Product): Request {
  if (p.id === -1) {
    p.id = 0;
  }
  for (const s of p.schedList) {
    s.start = moment(s.start).format('YYYY-MM-DD');
    s.end = moment(s.end).format('YYYY-MM-DD');
    s.notAvailArray = s.notAvailArray.map((n) => moment(n).format('YYYY-MM-DD'));
  }
  return new Request(BASEURL + '/product', {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(p),
  });
}

export function deleteProduct(p: Product): Request {
  return new Request(BASEURL + `/product/${p.id}`, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
  });
}
