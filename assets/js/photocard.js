var paht = "/global";

var photocardList = [
	"시우민",
	"디오",
	"백현",
	"찬열",
	"카이",
	"세훈",
	"단체 1",
	"단체 2",
	"단체 3"
]

var photocard = {
	bgSound: new Audio(path + "/assets/sound/photocard_sound.mp3"),
	setList: function () {
		var url = path + "/photocard_list.html #content";
		$(".photocard-wrap")
			.load(url, function () {
				$(".btn-back").attr("onclick", "location.href='gallery.html';");
			});
	},
	setView: function (num, rNum) {
		var url = path + "/photocard_view.html?num="+num+"&rNum="+rNum+" #content";
		$(".photocard-wrap")
			.load(url, function () {
				$(".btn-back").attr("onclick", "photocard.setList();");
			});
	},
	bind: function () {
		var _this = this;

		$(".btn-sound").click(function(){
			$(this).toggleClass("active");
			if ($(this).hasClass("active")) {
				// 사운드 pause
				_this.bgSound.pause();
			} else {
				// 사운드 play
				_this.bgSound.play();
			}
		});

		$(".photocard-wrap").on("click", ".photocard-list .list-item", function () {
			var num = $(this).attr("data-num");
			var rNum;
			if (num <= 6) {
				rNum = Math.floor(Math.random() * 3 + 1);
			} else {
				rNum = Math.floor(Math.random() * 2 + 1);	
			}
			var itemName = photocardList[num-1];
			_this.setView(num, rNum);
			// ga
			var gaTitlt = `${itemName} 행성 선택`;
			gtag('event',gaTitlt, { 'event_category' : 'Photocard List 페이지', 'event_label' : '행성 선택'});

			return false;
		});

		$(".photocard-wrap").on("click", ".download-btn", function() {
			var num = $(this).attr("data-num");
			var itemName = photocardList[num-1];

			// ga
			var gaTitlt = `${itemName} 포토카드 다운로드`;
			gtag('event',gaTitlt, { 'event_category' : 'Photocard View 페이지', 'event_label' : '포토카드 다운로드'});
		});
	},
	init: function () {
		this.bgSound.loop = true;
		this.setList();
		this.bind();
	},
}