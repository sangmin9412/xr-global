var views = [1000, 1250, 1300, 1080, 1080, 1000, 1000, 100000, 100000, 100000, 100000, 100000];

var path = "/global";
var galleryData = function (arr) {

	arr = arr.map(function(v){
		return numberWithCommas(v);
	});

	//var test3 = test1.map(function(v){
		//var obj = test2.filter(function(c){
			//return v.title === c.title;
		//});
		//return {
			//title: v.title,
			//value: v.value,
			//count: obj[0].count,
		//}
	//});

	return [
		{
			activate: true,
			version: 2,
			type: 'video',
			title: '2 Hall 2',
			desc: 'Discover EXO members who crash-landed into different planets.',
			src: path+'/assets/video/video_7.mp4',
			thumb_src: path+'/assets/images/thumb_Hall2_2.jpg',
			views: arr[7],
			idx: 7,
		},
		{
			activate: true,
			version: 2,
			type: 'video',
			title: '3 Hall 2',
			desc: 'In the spaceship, check out behind the scenes of the music video and EXO members’ photos.',
			src: path+'/assets/video/video_8.mp4',
			thumb_src: path+'/assets/images/thumb_Hall3_2.jpg',
			views: arr[8],
			idx: 8,
		},
		{
			activate: true,
			version: 2,
			type: 'video',
			title: '4 Hall 2',
			desc: 'Find 7 EXO members in space.',
			src: path+'/assets/video/video_9.mp4',
			thumb_src: path+'/assets/images/thumb_Hall4_2.jpg',
			views: arr[9],
			idx: 9,
		},
		{
			activate: true,
			version: 2,
			type: 'video',
			title: '5 Hall 2',
			desc: 'Check out EXO’s photos and videos hanging all over the room.',
			src: path+'/assets/video/video_10.mp4',
			thumb_src: path+'/assets/images/thumb_Hall5_2.jpg',
			views: arr[10],
			idx: 10,
		},
		{
			activate: true,
			version: 2,
			type: 'video',
			title: '6 Hall 2',
			desc: 'Check out EXO member photos with member’s autographs especially for EXO-Ls!',
			src: path+'/assets/video/video_11.mp4',
			thumb_src: path+'/assets/images/thumb_Hall6_2.jpg',
			views: arr[11],
			idx: 11,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: 'Lobby 1',
			desc: 'Starting point of the journey through the EXO XR Gallery You may find EXO Greetings at the end of the video.',
			src: path+'/assets/video/video_lobby.mp4',
			thumb_src: path+'/assets/images/thumb_lobby.jpg',
			views: arr[0],
			idx: 0,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: '1 Hall 1',
			desc: 'In a quiet space, meteors falling in front of us.',
			src: path+'/assets/video/video_hall1.mp4',
			thumb_src: path+'/assets/images/thumb_Hall1.jpg',
			views: arr[1],
			idx: 1,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: '2 Hall 1',
			desc: 'Discover EXO members who crash-landed into different planets.',
			src: path+'/assets/video/video_hall2.mp4',
			thumb_src: path+'/assets/images/thumb_Hall2.jpg',
			views: arr[2],
			idx: 2,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: '3 Hall 1',
			desc: 'In the spaceship, check out behind the scenes of the music video and EXO members’ photos.',
			src: path+'/assets/video/video_hall3.mp4',
			thumb_src: path+'/assets/images/thumb_Hall3.jpg',
			views: arr[3],
			idx: 3,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: '4 Hall 1',
			desc: 'Find 7 EXO members in space.',
			src: path+'/assets/video/video_hall4.mp4',
			thumb_src: path+'/assets/images/thumb_Hall4.jpg',
			views: arr[4],
			idx: 4,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: '5 Hall 1',
			desc: 'Check out EXO’s photos and videos hanging all over the room.',
			src: path+'/assets/video/video_hall5.mp4',
			thumb_src: path+'/assets/images/thumb_Hall5.jpg',
			views: arr[5],
			idx: 5,
		},
		{
			activate: false,
			version: 1,
			type: 'video',
			title: '6 Hall 1',
			desc: 'Check out EXO member photos with member’s autographs especially for EXO-Ls!',
			src: path+'/assets/video/video_hall6.mp4',
			thumb_src: path+'/assets/images/thumb_Hall6.jpg',
			views: arr[6],
			idx: 6,
		},
	]
}

var gallery = {
	data: [],
	activeData: [],
	watchVideos: [],
	setList: function (ver) {
		var _this = this;
		var data = this.data;

		if (ver !== undefined) {
			data = this.data.filter(function (v) {
				return ver == v.version ? v : null;
			});
		}

		var list = data.reduce(function(prev, v, i){
			var item = prev + `
				<li class="list-item ${v.activate ? '' : 'disabled'}" data-video-title="${v.title}">
					<div class="inner">
						<button type="button" class="item-button">
							<div class="f-box">
								<div class="item-thumb"><img src="${v.thumb_src}" alt="" /></div>
								<div class="item-info">
									<div class="title">
										${v.activate ? '<span class="version">Ver. 2</span>' : ''}
										${v.title.substr(0, v.title.length-1)}
									</div>
									<div class="views">${v.views} views</div>
								</div>
							</div>
						</button>
					</div>
				</li>
			`;
			return item;
		}, "<ul>") + "</ul>";

		$(".gallery-list").html(list);

		this.watchVideos.forEach(function (v) {
			$(".gallery-list .list-item[data-video-title='"+v+"']").addClass("checked");
		});

		$(".gallery-content .item-button").click(function () {
			var vTitle = $(this).closest(".list-item").data("video-title");
			_this.setVideo(vTitle);
			return false;
		});

		$(".gallery-list .list-item[data-video-title='"+$(".video-wrap").attr("data-video-title")+"']").addClass("active");
	},
	setVideo: function (title) {
		if (!title || $(".video-wrap").attr("data-video-title") === title) return;
	
		var _this = this;
		var obj = this.getVideo(title);

		var title = `<strong>Now playing :</strong> ${obj.video.title.substr(0, obj.video.title.length-1)}`;
		var views = obj.video.views + " views";
		var desc = obj.video.desc;
		var video = $("<video />", {
			id: 'video',
			src: obj.video.src,
			type: 'video/mp4',
			controls: true,
			controlsList: ["nodownload"],
			autoplay: true,
			playsinline: "",
		});
		var flag = true;

		video.bind("play", function(e){
			if (flag) {
				// console.log(' - play - ');
				flag = false;
				setTimeout(function(){
					flag = true;
				}, 5000);
			}
		});

		video.bind("ended", function(e){
			// console.log(' - ended - ');

			// 시청한 영상 배열에 담기
			_this.setWatchVideo(obj.video.title);
			// ga
			var gaTitlt = `${obj.video.title} 영상 시청`;
			gtag('event',gaTitlt, { 'event_category' : 'Gallery 페이지', 'event_label' : '영상 Views'});
			// 시청한 영상 쿠키에 저장
			setCookie("saveVideo", _this.watchVideos.toString(), 1);
			// 영상 전부 시청한 경우 다음 페이지 링크 세팅
			_this.setNextPageLink();
			// 다음 영상 세팅
			var next = _this.nextVideo(obj.idx);

			$(".gallery-list .list-item").eq(obj.idx).addClass("checked");

			// if (!next) {
				// 마지막영상 종료 후 포토카드 페이지 이동

				// location.href = "http://xr-gallery.com/global/photocard.html";	
			// }
		});

		$(".video-wrap").attr("data-video-title", obj.video.title);
		$(".video-wrap").html(video);
		$(".video-info .views").html(views);
		$(".video-info .desc").html(desc);

		$(".gallery-list .list-item").removeClass("active");
		$(".gallery-list .list-item[data-video-title='"+obj.video.title+"']").addClass("active");

		if (obj.video.activate) {
			$(".video-info .title").html(title + " (Ver.2)");
			$(".header.landscape .title").html(obj.video.title.substr(0, obj.video.title.length-1) + " (Ver.2)");

		} else {
			$(".video-info .title").html(title);
			$(".header.landscape .title").html(obj.video.title.substr(0, obj.video.title.length-1));

		}

		if (obj.prevTitle) {
			if (this.data[obj.idx-1].activate) {
				$(".header.landscape .btn-prev").html("< "+obj.prevTitle.substr(0, obj.prevTitle.length-1) + " (Ver.2)").attr("onclick", "gallery.setVideo('"+obj.prevTitle+"')");
			} else {
				$(".header.landscape .btn-prev").html(obj.prevTitle.substr(0, obj.prevTitle.length-1)).attr("onclick", "gallery.setVideo('"+obj.prevTitle+"')");
			}
		} else {
			$(".header.landscape .btn-prev").html("");
		}

		if (obj.nextTitle) {
			if (this.data[obj.idx+1].activate) {
				$(".header.landscape .btn-next").html(obj.nextTitle.substr(0, obj.nextTitle.length-1)+" (Ver.2) >").attr("onclick", "gallery.setVideo('"+obj.nextTitle+"')");
			} else {
				$(".header.landscape .btn-next").html(obj.nextTitle.substr(0, obj.nextTitle.length-1)+" >").attr("onclick", "gallery.setVideo('"+obj.nextTitle+"')");
			}
			
		} else {
			$(".header.landscape .btn-next").html("").removeAttr();
			_this.setNextPageLink();
		}

	
	},
	setWatchVideo: function (title) {
		if (this.watchVideos.includes(title)) {
			// 중복값이 있는 경우
			var idx = this.watchVideos.indexOf(title);
			this.watchVideos.splice(idx, 1);
			this.watchVideos.push(title);
		} else {
			// 중복값이 없는 경우
			this.watchVideos.push(title);
		}
	},
	setNextPageLink: function () {
		if (!this.getCompleted()) return;
		$(".btn-next-page").addClass("active");
		if ($(".video-wrap").attr("data-video-title") === this.data[this.data.length-1].title) {
			$(".header.landscape .btn-next").html("next >").attr("onclick", "location.href='photocard.html'");
		}
	},
	getVideo: function (title) {
		var idx;
		var obj = this.data.filter(function(v, i){
			if (v.title === title) {
				idx = i;
				return v;
			}
		});

		return {
			video: obj[0],
			prevTitle: this.data[idx-1] ? this.data[idx-1].title : "",
			nextTitle: this.data[idx+1] ? this.data[idx+1].title : "",
			idx: idx,
		};
	},
	getCompleted: function () {
		var result = null;

		for	(var i = 0; i < this.activeData.length; i++) {

			for (var j = 0; j < this.watchVideos.length; j++) {
					if (this.activeData[i].title == this.watchVideos[j]) {
						result = true;
						break;
					} else {
						result = false;
					}
			}
			
			if (result == false) {
				break;
			}
			
		}

		return result;
	},
	nextVideo: function (idx) {
		if (this.data[idx+1]) {
			if (!this.getCompleted()) {
				this.setVideo(this.data[idx+1].title);
				return true;
			}
		}
		return false;
	},
	bind: function () {
		var _this = this;

		if (window.innerWidth <= 1024) {
			$(".video-info").click(function(){
				$(this).toggleClass("active");
			});
		}

		$(".gallery-content .tab-btn").click(function () {
			var ver = $(this).attr("data-version-num");
			if (ver == 0) {
				_this.setList();
			} else {
				_this.setList(ver);
			}
			
			$(this).siblings().removeClass("active");
			$(this).addClass("active");

			return false;
		});
	},
	init: function () {
		var _this = this;
		this.data = galleryData(views);
		this.activeData = this.data.filter(function (v) {
			if (v.activate) {
				return v;
			};
		});
		this.setList();
		

		if (getCookie("saveVideo").length > 0) {
			// 쿠키에 영상값이 있으면 시청하던 영상 세팅
			var value = getCookie("saveVideo").split(",");
			value.forEach(function(v){
				_this.watchVideos.push(v);
			});

			var initTitle = value[value.length - 1];
			this.setVideo(initTitle);

			$(".gallery-list .list-item").each(function(i){
				var el = $(this);
				var title = $(this).data("video-title");
				value.forEach(function(v){
					if (title == v) {
						el.not(".disabled").addClass("checked");
					}
				});
			});
			
			this.setNextPageLink();
		} else {
			// 쿠키에 영상값이 없으면 처음 영상 세팅
			this.setVideo("2 Hall 2");
		}
		
		this.bind();
	}
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
