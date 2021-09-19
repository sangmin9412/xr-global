import { path } from '/config/config';

const data = [
  {
    idx: 1,
    thumb_src_off: path + '/images/photocard_item01.png',
    thumb_src_on: path + '/images/photocard_item01_on.png',
    download_thumb_src: [
      path + '/images/download_item_1_1.jpg',
      path + '/images/download_item_1_2.jpg',
      path + '/images/download_item_1_3.jpg',
    ],
    download_src: [
      path + '/download/exo_photo_no_1_1.jpg',
      path + '/download/exo_photo_no_1_2.jpg',
      path + '/download/exo_photo_no_1_3.jpg',
    ],
    name: '시우민',
  },
  {
    idx: 2,
    thumb_src_off: path + '/images/photocard_item02.png',
    thumb_src_on: path + '/images/photocard_item02_on.png',
    download_thumb_src: [
      path + '/images/download_item_2_1.jpg',
      path + '/images/download_item_2_2.jpg',
      path + '/images/download_item_2_3.jpg',
    ],
    download_src: [
      path + '/download/exo_photo_no_2_1.jpg',
      path + '/download/exo_photo_no_2_2.jpg',
      path + '/download/exo_photo_no_2_3.jpg',
    ],
    name: '디오',
  },
  {
    idx: 3,
    thumb_src_off: path + '/images/photocard_item03.png',
    thumb_src_on: path + '/images/photocard_item03_on.png',
    download_thumb_src: [
      path + '/images/download_item_3_1.jpg',
      path + '/images/download_item_3_2.jpg',
      path + '/images/download_item_3_3.jpg',
    ],
    download_src: [
      path + '/download/exo_photo_no_3_1.jpg',
      path + '/download/exo_photo_no_3_2.jpg',
      path + '/download/exo_photo_no_3_3.jpg',
    ],
    name: '백현',
  },
  {
    idx: 4,
    thumb_src_off: path + '/images/photocard_item04.png',
    thumb_src_on: path + '/images/photocard_item04_on.png',
    download_thumb_src: [
      path + '/images/download_item_4_1.jpg',
      path + '/images/download_item_4_2.jpg',
      path + '/images/download_item_4_3.jpg',
    ],
    download_src: [
      path + '/download/exo_photo_no_4_1.jpg',
      path + '/download/exo_photo_no_4_2.jpg',
      path + '/download/exo_photo_no_4_3.jpg',
    ],
    name: '찬열',
  },
  {
    idx: 5,
    thumb_src_off: path + '/images/photocard_item05.png',
    thumb_src_on: path + '/images/photocard_item05_on.png',
    download_thumb_src: [
      path + '/images/download_item_5_1.jpg',
      path + '/images/download_item_5_2.jpg',
      path + '/images/download_item_5_3.jpg',
    ],
    download_src: [
      path + '/download/exo_photo_no_5_1.jpg',
      path + '/download/exo_photo_no_5_2.jpg',
      path + '/download/exo_photo_no_5_3.jpg',
    ],
    name: '카이',
  },
  {
    idx: 6,
    thumb_src_off: path + '/images/photocard_item06.png',
    thumb_src_on: path + '/images/photocard_item06_on.png',
    download_thumb_src: [
      path + '/images/download_item_6_1.jpg',
      path + '/images/download_item_6_2.jpg',
      path + '/images/download_item_6_3.jpg',
    ],
    download_src: [
      path + '/download/exo_photo_no_6_1.jpg',
      path + '/download/exo_photo_no_6_2.jpg',
      path + '/download/exo_photo_no_6_3.jpg',
    ],
    name: '세훈',
  },
  {
    idx: 7,
    thumb_src_off: path + '/images/photocard_item07.png',
    thumb_src_on: path + '/images/photocard_item07_on.png',
    download_thumb_src: [
      path + '/images/download_item_7_1.jpg',
      path + '/images/download_item_7_2.jpg',
      path + '/images/download_item_7_3.jpg',
    ],
    download_src: [
      path + '/download/exo_photo_no_7_1.jpg',
      path + '/download/exo_photo_no_7_2.jpg',
      path + '/download/exo_photo_no_7_3.jpg',
    ],
    name: '단체 1',
  },
  {
    idx: 8,
    thumb_src_off: path + '/images/photocard_item08.png',
    thumb_src_on: path + '/images/photocard_item08_on.png',
    download_thumb_src: [
      path + '/images/download_item_8_1.jpg',
      path + '/images/download_item_8_2.jpg',
      path + '/images/download_item_8_3.jpg',
    ],
    download_src: [
      path + '/download/exo_photo_no_8_1.jpg',
      path + '/download/exo_photo_no_8_2.jpg',
      path + '/download/exo_photo_no_8_3.jpg',
    ],
    name: '단체 2',
  },
  {
    idx: 9,
    thumb_src_off: path + '/images/photocard_item09.png',
    thumb_src_on: path + '/images/photocard_item09_on.png',
    download_thumb_src: [
      path + '/images/download_item_9_1.jpg',
      path + '/images/download_item_9_2.jpg',
      path + '/images/download_item_9_3.jpg',
    ],
    download_src: [
      path + '/download/exo_photo_no_9_1.jpg',
      path + '/download/exo_photo_no_9_2.jpg',
      path + '/download/exo_photo_no_9_3.jpg',
    ],
    name: '단체 3',
  },
]

export const PhotoCardData = function (idx) {
  if (idx !== undefined) {
    return data.filter(v => v.idx == idx ? v : null);
  } else {
    return data;
  }
}