var panels;
var btnReadMore;
var btnSend;
var blockedState = false;

window.onload = function() {

  //LOGO ANIMATION - fade in

  setTimeout(function() {

    var opacBool = false;
    var opacVal = 1.0;
    var headImg1 = document.getElementById("headImg2");
    var headImg2 = document.getElementById("headImg1half");
    var headImg3 = document.getElementById("headImg1quarter");
    var headImg = [headImg1, headImg2, headImg3];
    var i = 0;

    var anim = setInterval(function() {
      if (opacVal <= 0) {
        headImg[i].display = "none";
        if (i == 0){
          i = 1;
          opacVal = 1.0;
        }
        else if (i == 1) {
          i = 2;
          opacVal = 1.0;
        }
        else if (i == 2) {
          clearInterval(anim);
        }
      }
      headImg[i].style.opacity = opacVal;
      opacVal -= 0.025;
    }, 20);
  }, 600);

  if(blockedState == false) {    //Making sure that when privacy policy popup happens, all other states are paused.

    //READ MORE BUTTON ANIMATION - hover and click

    btnReadMore = document.getElementById("btnRdMr");

    btnReadMore.onmouseover = btnHoverOn;
    btnReadMore.onmouseout = btnHoverOff;
    btnReadMore.onmousedown = btnClickDown;
    btnReadMore.onmouseup = btnClickUp;

    btnSend = document.getElementById("Send-Btn-image");

    btnSend.onmouseover = btnHoverOn;
    btnSend.onmouseout = btnHoverOff;
    btnSend.onmousedown = btnClickDown;
    btnSend.onmouseup = btnClickUp;

    //FEATURE PANELS ANIMATION - hover

    var paper = document.getElementById("pap");
    var safety = document.getElementById("safe");
    var design = document.getElementById("des");
    var quality = document.getElementById("qual");
    var flexibility = document.getElementById("flex");
    var health = document.getElementById("heal");
    var comfort = document.getElementById("comf");
    var efficiency = document.getElementById("eff");
    var ecoFriendly = document.getElementById("eco");
    panels = [paper, safety, design, quality, flexibility, health, comfort, efficiency, ecoFriendly];
    var hoverPnl = document.getElementById("hoverPnls");

    for (var num = 0; num < panels.length; num++) {
      panels[num].onclick = enterPanel;
    }
    hoverPnl.onmouseout = exitPanel;
    hoverPnl.onclick = exitPanel;
  }

  //PRIVACY POLICY POPUP

  var privPol = document.getElementById("priv-pol");
  var privPolX = document.getElementById("priv-pol-x");

  privPol.onclick = prvPopUpOpen;
  privPolX.onclick = prvPopUpClose;

  //DROP DOWN MENU NAV

  var navProducts = document.getElementById("products");
  var navDropBox = document.getElementById("drop-down-menu");

  navProducts.onmouseover = dropDownOn;
  navDropBox.onmouseover = dropDownOn;

  navProducts.onmouseout = dropDownOff;
  navDropBox.onmouseout = dropDownOff;
}

function btnHoverOn() {
  if (this == btnReadMore) {
    this.src = "images/btnRdMrHover.png";
  }
  else {
    this.src = "images/SendBtnHover.png";
  }
}

function btnHoverOff() {
  if (this == btnReadMore) {
    this.src = "images/btnReadMore.png";
  }
  else {
    this.src = "images/SendBtn.png";
  }
}

function btnClickDown() {
  if (this == btnReadMore) {
    this.src = "images/btnRdMrClick.png";
  }
  else {
    this.src = "images/SendBtnClick.png";
  }
}

function btnClickUp() {
  var contactForm = document.getElementById("contact-form");

  if (this == btnReadMore) {
    this.src = "images/btnRdMrHover.png";
  }
  else {
    this.src = "images/SendBtnHover.png";
    contactForm.submit();
  }
}

function enterPanel() {
  var hoverPnl = document.getElementById("hoverPnls");

  switch (panels.indexOf(this)) {
    case 0:
      hoverPnl.style.backgroundImage = 'url("images/PaperHover.png")';
      hoverPnl.style.display = "block";
      break;
    case 1:
      hoverPnl.style.backgroundImage = 'url("images/SafetyHover.png")';
      hoverPnl.style.display = "block";
      break;
    case 2:
      hoverPnl.style.backgroundImage = 'url("images/DesignHover.png")';
      hoverPnl.style.display = "block";
      break;
    case 3:
      hoverPnl.style.backgroundImage = 'url("images/QualityHover.png")';
      hoverPnl.style.display = "block";
      break;
    case 4:
      hoverPnl.style.backgroundImage = 'url("images/FlexibilityHover.png")';
      hoverPnl.style.display = "block";
      break;
    case 5:
      hoverPnl.style.backgroundImage = 'url("images/HealthHover.png")';
      hoverPnl.style.display = "block";
      break;
    case 6:
      hoverPnl.style.backgroundImage = 'url("images/ComfortHover.png")';
      hoverPnl.style.display = "block";
      break;
    case 7:
      hoverPnl.style.backgroundImage = 'url("images/EffHover.png")';
      hoverPnl.style.display = "block";
      break;
    case 8:
      hoverPnl.style.backgroundImage = 'url("images/EcoHover.png")';
      hoverPnl.style.display = "block";
      break;
  }
}

function exitPanel() {
  var hoverPnl = document.getElementById("hoverPnls");

  hoverPnl.style.backgroundImage = "url()";
  hoverPnl.style.display = "none";
}

function prvPopUpOpen() {
  var privPolPopup = document.getElementById("priv-pol-popup");
  var container = document.getElementById('container')

  privPolPopup.style.display = "block";
  blockedState = true;
}
function prvPopUpClose() {
  var privPolPopup = document.getElementById("priv-pol-popup");
  var container = document.getElementById('container')

  privPolPopup.style.display = "none";
  blockedState = false;
}
function dropDownOn() {
    var navDropBox = document.getElementById("drop-down-menu");
    var navConsumers = document.getElementById("prod-cons");
    var navManuf = document.getElementById("prod-manu");
    var navProducts = document.getElementById("products");

    navDropBox.style.display = "block";
    navConsumers.style.display = "block";
    navManuf.style.display = "block";
    if (this==navDropBox) {
      navProducts.style.borderTop = "solid 0.07em white";
      navProducts.style.marginTop = "-0.1vw";
    }
}
function dropDownOff() {
    var navDropBox = document.getElementById("drop-down-menu");
    var navConsumers = document.getElementById("prod-cons");
    var navManuf = document.getElementById("prod-manu");
    var navProducts = document.getElementById("products");

    navDropBox.style.display = "none";
    navConsumers.style.display = "none";
    navManuf.style.display = "none";
    if (this==navDropBox) {
      navProducts.style.borderTop = "";
      navProducts.style.marginTop = "0";
    }
}
