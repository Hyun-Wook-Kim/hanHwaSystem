"use strict";

let liIndex = 0;
let slideAllow = true;

$(".listBtn>ul>li").on("click", (event) => {
  slideAnimation(liIndex, event);
});

$(".listBtn>ul>li").on("click", (event) => {
  clickList(event);
  slideAnimation(liIndex);
});

function clickList(event) {
  let index = $(event.target).index();
  if ($(event.target).hasClass("on")) {
    return false;
  }
  liIndex = index;
  console.log(liIndex);
}

function slideAnimation(liIndex) {
  $(".listBtn>ul>li").eq(liIndex).addClass("on");
  $(".listBtn>ul>li").eq(liIndex).siblings().removeClass("on");
  $(".gallery>ul>li").eq(liIndex).addClass("show");
  $(".gallery>ul>li>.buttonCon>.button").css({
    opacity: "0",
    transform: "translateY(30%)",
  });

  $(".gallery>ul>li").eq(liIndex).siblings().removeClass("show");
  setTimeout(() => {
    $(".gallery>ul>li>.buttonCon>.button").css({
      opacity: "1",
      transform: "translateY(0%)",
    });
  }, 1500);
  //   console.log(liIndex);
}

let timer = setInterval(autoGallery, 8000);

$(".slideBtn.play").on("click", (event) => {
  if ($(event.target).hasClass("play")) {
    $(event.target).removeClass("play");
    $(event.target).addClass("pause");
    clearInterval(timer);
    slideAllow = false;
  } else {
    $(event.target).removeClass("pause");
    $(event.target).addClass("play");
    timer = setInterval(autoGallery, 8000);
    slideAllow = true;
  }
});

function autoGallery() {
  if (slideAllow) {
    liIndex++;
    if (liIndex > 3) {
      liIndex = 0;
    }
    console.log(liIndex);
    slideAnimation(liIndex);
  }
}

$(".controllBox").on("mouseover", () => {
  clearInterval(timer);
});

$(".controllBox").on("mouseout", () => {
  if (slideAllow) {
    timer = setInterval(autoGallery, 8000);
  }
});

$(".gnb>ul>li").on("mouseover", (event) => {
  let gnbIndex = $(event.target).parent().index();
  let height = $(".hideUlCon>ul").eq(gnbIndex).innerHeight();
  console.log(height);
  $(".hideUl").css({ visibility: "visible" });
  $(".hideUlCon").css({ height: height });
  $(".hideUlCon>ul").eq(gnbIndex).css({ visibility: "visible" });
  $(".hideUlCon>ul").eq(gnbIndex).siblings().css({ visibility: "hidden" });
});

$(".hideUl").on("mouseleave", () => {
  $(".hideUlCon>ul").css({ visibility: "hidden" });
  $(".hideUlCon").css({ height: 0 });
  $(".hideUl").css({ visibility: "hidden" });
});

$(".imgBoard>ul>li>a").on("mouseover", () => {});

let sliderIndex = 0;
let sliderAllow = true;

$("span.arrow.right").on("click", () => {
  if (sliderIndex !== 5 && sliderAllow == true) {
    sliderIndex++;
    if (sliderIndex == 5) {
      $("span.arrow.right").eq(0).css({ color: "gray" });
    } else {
      $("span.arrow.left").eq(0).css({ color: "black" });
    }
    sliderAllow = false;
    let moveWidth = -990 * sliderIndex + "px";
    $(".imgSlider>ul").css({ transform: `translateX(${moveWidth})` });
    setTimeout(() => {
      sliderAllow = true;
    }, 1000);
  }
});

$("span.arrow.left").on("click", () => {
  if (sliderIndex !== 0 && sliderAllow == true) {
    sliderIndex--;
    if (sliderIndex == 0) {
      $("span.arrow.left").eq(0).css({ color: "gray" });
    } else {
      $("span.arrow.right").eq(0).css({ color: "black" });
    }
    sliderAllow = false;
    let moveWidth = -990 * sliderIndex + "px";
    $(".imgSlider>ul").css({ transform: `translateX(${moveWidth})` });
    setTimeout(() => {
      sliderAllow = true;
    }, 1000);
  }
});

const arrayBg = [
  "url(img/visual_main0.jpg) no-repeat 50% / cover",
  "url(img/visual_main1.jpg) no-repeat 50% / cover",
  "url(img/visual_main2.jpg) no-repeat 50% / cover",
  "url(img/visual_main3.jpg) no-repeat 50% / cover",
];

$(".section.sec4Bg>ul>li").eq(0).css({ background: arrayBg[0] });

$(".section.sec4>ul>li>a").on("mouseover", (event) => {
  let bgIndex = $(event.target).parent().index();
  console.log(bgIndex);
  $(".section.sec4Bg>ul>li").eq(bgIndex).addClass("imgShow");
  $(".section.sec4Bg>ul>li").eq(bgIndex).siblings().removeClass("imgShow");
});

$(".section.sec4>ul>li>a").on("mouseout", (event) => {
  $(".section.sec4Bg>ul>li").removeClass("imgShow");
});

$(".footerCon>.button").on("click", (event) => {
  if ($(".footerCon>.button>.plusBtn").hasClass("outerSiteOn")) {
    $(".footerCon>.button>.plusBtn").removeClass("outerSiteOn");
    $(".outerSite").css({
      visibility: "hidden",
      opacity: "0",
      transform: "translate(0,10%)",
    });
  } else {
    $(".outerSite").css({
      visibility: "visible",
      opacity: "1",
      transform: "translate(0,0)",
    });
    $(".footerCon>.button>.plusBtn").addClass("outerSiteOn");
  }
});

/////////이거 맞아?

$(".headerXBtnSet").on("click", (event) => {
  $(".headerXBtn").css("visibility", "hidden");
  $(".headerXChange").css({ visibility: "visible" });
  $(".leftslash").css({
    visibility: "visible",
    transform: "rotate(45deg)",
    transition: "all 0.3s",
  });
  $(".rightslash").css({
    visibility: "visible",
    transform: "rotate(-45deg)",
    transition: "all 0.3s",
  });

  $("main").css({ display: "none" });
  $("footer").css({ display: "none" });
  $(".hiddenHeader").css({ display: "block" });
});

$(".headerXChange").on("click", () => {
  //   $(".headerXBtn").css("visibility", "visible");
  $(".headerXChange").css({ visibility: "hidden" });
  $(".leftslash").css({
    visibility: "hidden",
    transform: "rotate(0deg)",
    transition: "none",
  });
  $(".rightslash").css({
    visibility: "hidden",
    transform: "rotate(0deg)",
    transition: "none",
  });
  $(".headerXBtn").css("visibility", "visible");
  $("main").css({ display: "block" });
  $("footer").css({ display: "block" });
  $(".hiddenHeader").css({ display: "none" });
});
