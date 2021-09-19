import { path } from '/config/config';

const views = [1000, 1250, 1300, 1080, 1080, 1000, 1000, 100000, 100000, 100000, 100000, 100000];

export const GalleryData = function (arr = views) {
  arr = arr.map(function(v) {
    return numberWithCommas(v);
  });

  return [
    {
			activate: true,
			version: 2,
			type: 'video',
			title: '2 Hall',
			desc: 'Discover EXO members who crash-landed into different planets.',
			src: path+'/video/video_7.mp4',
			thumb_src: path+'/images/thumb_Hall2_2.jpg',
			views: arr[7],
			idx: 7,
		},
		{
			activate: true,
			version: 2,
			type: 'video',
			title: '3 Hall',
			desc: 'In the spaceship, check out behind the scenes of the music video and EXO members’ photos.',
			src: path+'/video/video_8.mp4',
			thumb_src: path+'/images/thumb_Hall3_2.jpg',
			views: arr[8],
			idx: 8,
		},
		{
			activate: true,
			version: 2,
			type: 'video',
			title: '4 Hall',
			desc: 'Find 7 EXO members in space.',
			src: path+'/video/video_9.mp4',
			thumb_src: path+'/images/thumb_Hall4_2.jpg',
			views: arr[9],
			idx: 9,
		},
		{
			activate: true,
			version: 2,
			type: 'video',
			title: '5 Hall',
			desc: 'Check out EXO’s photos and videos hanging all over the room.',
			src: path+'/video/video_10.mp4',
			thumb_src: path+'/images/thumb_Hall5_2.jpg',
			views: arr[10],
			idx: 10,
		},
		{
			activate: true,
			version: 2,
			type: 'video',
			title: '6 Hall',
			desc: 'Check out EXO member photos with member’s autographs especially for EXO-Ls!',
			src: path+'/video/video_11.mp4',
			thumb_src: path+'/images/thumb_Hall6_2.jpg',
			views: arr[11],
			idx: 11,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: 'Lobby',
			desc: 'Starting point of the journey through the EXO XR Gallery You may find EXO Greetings at the end of the video.',
			src: path+'/video/video_lobby.mp4',
			thumb_src: path+'/images/thumb_lobby.jpg',
			views: arr[0],
			idx: 0,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: '1 Hall',
			desc: 'In a quiet space, meteors falling in front of us.',
			src: path+'/video/video_hall1.mp4',
			thumb_src: path+'/images/thumb_Hall1.jpg',
			views: arr[1],
			idx: 1,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: '2 Hall',
			desc: 'Discover EXO members who crash-landed into different planets.',
			src: path+'/video/video_hall2.mp4',
			thumb_src: path+'/images/thumb_Hall2.jpg',
			views: arr[2],
			idx: 2,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: '3 Hall',
			desc: 'In the spaceship, check out behind the scenes of the music video and EXO members’ photos.',
			src: path+'/video/video_hall3.mp4',
			thumb_src: path+'/images/thumb_Hall3.jpg',
			views: arr[3],
			idx: 3,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: '4 Hall',
			desc: 'Find 7 EXO members in space.',
			src: path+'/video/video_hall4.mp4',
			thumb_src: path+'/images/thumb_Hall4.jpg',
			views: arr[4],
			idx: 4,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: '5 Hall',
			desc: 'Check out EXO’s photos and videos hanging all over the room.',
			src: path+'/video/video_hall5.mp4',
			thumb_src: path+'/images/thumb_Hall5.jpg',
			views: arr[5],
			idx: 5,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: '6 Hall',
			desc: 'Check out EXO member photos with member’s autographs especially for EXO-Ls!',
			src: path+'/video/video_hall6.mp4',
			thumb_src: path+'/images/thumb_Hall6.jpg',
			views: arr[6],
			idx: 6,
		},
  ]
}

export const galleryDataFilter = (ver) => {
  if (ver !== 0) return GalleryData().filter(v => v.version == ver);
  return GalleryData();
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}