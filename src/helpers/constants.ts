import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('screen');

export const API_URL =
  'https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20';
export const API_KEY =
  'KT9FHsa7VA82mwj6pQiutq6R9giPIBbNoHpDyE6cBqfoM2gbbjOtqrjg';
export const IMAGE_SIZE = 80;
export const SPACING = 10;
export const AVATAR_SIZE = 70;
export const ITEM_SIZE = AVATAR_SIZE + 20 * 3;
export const imageW = width * 0.7;
export const imageH = imageW * 1.54;
