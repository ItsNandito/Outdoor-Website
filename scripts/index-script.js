const searchParkBtn = document.getElementById('parkSearchBtn')
const parkInfoBtn = document.getElementById('moreInfoBtn')

searchParkBtn.onclick = () => window.open("http://127.0.0.1:5500/html-files/searchPage.html", self);
parkInfoBtn.onclick = () => window.open("http://127.0.0.1:5500/html-files/infoPage.html", self);