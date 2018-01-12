(function(){
	"use strict";
	console.log("SEAF Fired");
  const tab = window.matchMedia( "(min-width: 768px)" );

  if (matchMedia) {
    const mq = window.matchMedia("(min-width: 768px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
function WidthChange(mq) {
  if (mq.matches) {
    console.log("It's 768px or higher!")
  } else {
    // window width is less than 500px
      console.log("It's less than 768px!")
  }

}

 })();
