
// make all product divs active onclick
function openProducts(evt, page, hd) {
  var i, content, header, tab;

  content = document.getElementsByClassName("prodDisplay");
  header = document.getElementsByClassName("prodHeader");

  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
    header[i].style.display = "none";
  }

  tab = document.getElementsByClassName("tabs");

  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" active", "");
  }

  document.getElementById(page).style.display = "block";
  document.getElementById(hd).style.display = "block";
  evt.currentTarget.className += " active";
}

// make all-products active onload
function displayAll(evt, page, hd) {
  var i, content, header, tab;

  content = document.getElementsByClassName("displayAll");
  header = document.getElementsByClassName("displayHeader");

  for (var i = 0; i < x.length; i++) {
    content[i].classList.remove("active");
    header[i].classList.remove("active");
  }

  tab = document.getElementsByClassName("tabs");

  for (i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
  }

  evt.currentTarget.classList.add("active");
  document.getElementById(page).classList.add("active");
  document.getElementById(hd).classList.add("active");
}

// navigate through pages
function navPage(evt, page) {
  var i, content, count, arrow;

  content = document.getElementsByClassName("pageDisplay");

  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  arrow = document.getElementsByClassName("arrow");
  count = document.getElementsByClassName("pageNum");

  for (i = 0; i < arrow.length; i++) {
    arrow[i].className = arrow[i].className.replace(" active", "");
  }

  
  count = document.getElementsByClassName("pageNum");

  for (i = 0; i < count.length; i++) {
    count[i].className = count[i].className.replace(" active", "");
  }

  document.getElementById(page).style.display = "block";
  evt.currentTarget.className += " active";
  
}

// show content of chosen product
function gotopage(evt, page, cont, hd) {
  var i, content, header, pg;

  content = document.getElementsByClassName("prodDisplay");
  header = document.getElementsByClassName("prodHeader");

  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
    header[i].style.display = "none";
  }

  document.getElementById(pg).style.display = "block";
  document.getElementById(cont).style.display = "block";
  document.getElementById(hd).style.display = "block";
  evt.currentTarget.className += " active";
}