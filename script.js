document.getElementById('bcolor').addEventListener('click', BgColor)

document.getElementById('cimage').addEventListener('click', ChImage)

document.getElementById('ctext').addEventListener('click', ChText)

document.getElementById('hidetext').addEventListener('click', HText)

document.getElementById('showtext').addEventListener('click', SText)

function BgColor () {
  document.body.style.backgroundColor = 'yellow'
}

function ChImage () {
  document.getElementById('changing-image').src = 'Hand green thumb.png'
}

function ChText () {
  document.getElementById('ptext').innerHTML = 'This is now different Text'
}

function HText () {
  document.getElementById('ptext').style.display = 'none'
}

function SText () {
  document.getElementById('ptext').style.display = 'block'
}
