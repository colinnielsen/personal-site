const getSections = document.getElementsByClassName('sections')
var menu = document.getElementById('menu')
var aboutbutton = document.getElementById('aboutmeb')
var l2lbutton = document.getElementById('learn2learnb')
var goalbutton = document.getElementById('goalsettingb')
var meetupbutton = document.getElementById('meetupsb')
var navbar = document.getElementById('nav')
var aboutsection = document.getElementById('aboutme')
var l2lsection = document.getElementById('learn2learn')
var goalsection = document.getElementById('goalsetting')
var meetupsection = document.getElementById('attendmeetups')

menu.addEventListener("click", function() {
  navbar.style.display = ((navbar.style.display != 'none') ? 'none' : 'flex');
});

aboutbutton.addEventListener("click", function() {
  aboutsection.style.display = ((aboutsection.style.display != 'none') ? 'none' : 'block')
  l2lsection.style.display = 'none'
  goalsection.style.display = 'none'
  attendmeetups.style.display = 'none'
})

l2lbutton.addEventListener("click", function() {
  l2lsection.style.display = ((l2lsection.style.display != 'none') ? 'none' : 'block')
  aboutsection.style.display = 'none'
  goalsection.style.display = 'none'
  attendmeetups.style.display = 'none'
})

goalbutton.addEventListener("click", function() {
  goalsection.style.display = ((goalsection.style.display != 'none') ? 'none' : 'block')
  aboutsection.style.display = 'none'
  l2lsection.style.display = 'none'
  attendmeetups.style.display = 'none'
})

meetupbutton.addEventListener("click", function() {
  attendmeetups.style.display = ((attendmeetups.style.display != 'none') ? 'none' : 'block')
  l2lsection.style.display = 'none'
  goalsection.style.display = 'none'
  aboutsection.style.display = 'none'
})


console.log(getSections);
