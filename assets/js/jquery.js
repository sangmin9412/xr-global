NodeList.prototype.forEach = Array.prototype.forEach;

var path = "/global";

var preMain = {
  slide: function () {
    var slide = new Swiper(".pre-content .swiper-container", {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      loop: true,
			pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // pagination: true,
      // breakpoints: {

      // },
    });

  },
	dday: function (){
		var day = new Date().getDate();
		day = 21 - day;
		if (day > 0) {
			document.querySelector(".d-day").innerText = "D-"+day;
		} else {
			document.querySelector(".d-day").innerText = "TODAY";			
		}
		
	},
  init: function () {
    this.slide();
		this.dday();
  }
};

var intro = {
  slide: function () {
    var slide = new Swiper(".main-content .swiper-container", {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      loop: true,
			pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // pagination: true,
      // breakpoints: {

      // },
    });

  },
	dday: function (){
		var now = new Date();
		var dday = new Date("2021-07-11");
		var gap = now.getTime() - dday.getTime();
		var result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;

		var day01 = "0";
		var day02 = "";

		if (result.toString().length >= 2) {
			day01 = result.toString()[0];
			day02 = result.toString()[1];
		} else {
			day02 = result;
		}

		document.querySelector(".d-day-01").innerText = day01;
		document.querySelector(".d-day-02").innerText = day02;
		
	},
  init: function () {
		this.dday();
    this.slide();
  }
};

var modal = function (el) {
  this.el = document.querySelector("[data-modal=" + el + "]") || null;
	this.callback = null; // 팝업 닫긴 후 실행시킬 함수
  var _this = this;
  var _html = document.querySelector("html");

  var _closeBtn = document.createElement("button");
	_closeBtn.classList.add("modal-btn-close");

	if (this.el.querySelector(".modal-body").classList.contains("scroll-body")) {
		_closeBtn.style.right = getScrollWidth() + "px";
	}

  if (this.el === null) {
    return false;
  }

  this.open = function () {
    _html.classList.add("is-opened");
    this.el.classList.add("active");

    this.el.style.zIndex = modal.prototype.num;
    modal.prototype.num++;
  }

  this.close = function () {
		var modalArr = document.querySelectorAll("[data-modal]");
		var stat = false;

		this.el.classList.remove("active");
		this.el.removeAttribute("style");

		if (this.callback !== null && typeof this.callback === "function") {
			this.callback();
		}

		modalArr.forEach(function(v){
			if (v.classList.contains("active")) {
				stat = true;
				return false;
			}
		});
		
		if (!stat) {
			_html.classList.remove("is-opened");
		}
  }

  this.bind = function () {
		this.el.addEventListener("click", function(e){
			if (e.target === this) {
				_this.close();
			}

			return false;
		});

	 if (_closeBtn !== null) {
		_closeBtn.addEventListener("click", function(){
			_this.close();

			return false;
		});
	 }
  }

	this.el.querySelector(".modal-body").append(_closeBtn);
  this.bind();
  return this;
};

modal.prototype.num = 100;
modal.prototype.setText = function (text) {
	if (!text) {
		return false;
	}
	this.el.querySelector(".text").innerText = text;
}
modal.prototype.setHtml = function (text) {
	if (!text) {
		return false;
	}
	this.el.querySelector(".text").innerHTML = text;
}

var count = function (sec) {
  this.sec = sec;
  var stv = null;

  this.start = function () {
    var _this = this;
    stv = setInterval(function () {
      var min = Math.floor(_this.sec / 60);
      var sec = _this.sec - Math.floor(_this.sec / 60) * 60;

      console.log(min + "분", sec + "초");

      if (_this.sec <= 0) {
        console.log("카운트 종료");
        _this.stop();
      }

      _this.sec--;
    }, 1000);

  }

  this.stop = function () {
    if (stv !== null) {
      clearInterval(stv);
    }
  }

  return this;
};

function getScrollWidth() {
	var scrWidth = window.innerWidth - document.body.clientWidth;
	return scrWidth;
}

//	Cookie
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));

	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

$(function () {
	//$(document).bind('keydown',function(e){ 
		//if ( e.keyCode == 123 /* F12 */) { 
			//e.preventDefault(); 
			//e.returnValue = false; 
		//} 
	//});

	var body = $("body");

	$(".wrap").css("height", window.innerHeight+"px");
	if ($("#content").length > 0) {
		if (document.querySelector(".wrap").clientHeight < document.querySelector("#content").clientHeight) {
			$("html").css("overflow-y", "scroll");
			$(".wrap").removeAttr("style");
		}
	}
	$(window).resize(function(){
		$(".wrap").css("height", window.innerHeight+"px");
	});

	if (body.hasClass("gallery")) {
		gallery.init();

	} else if (body.hasClass("pre")) {
		$("html").css("overflow", "auto");
		$(".wrap").removeAttr("style");
		preMain.init();

	} else if (body.hasClass("intro")) {
		intro.init();
		// setCookie("saveVideo", "", 0);

	} else if (body.hasClass("photocard")) {
		photocard.init();
	}
});