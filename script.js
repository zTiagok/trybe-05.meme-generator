const text = document.querySelector('#text-input')
const file = document.querySelector('#meme-insert')
const paragraph = document.querySelector('#meme-text')
const fire = document.querySelector('#fire')
const water = document.querySelector('#water')
const earth = document.querySelector('#earth')
const container = document.querySelector('#meme-image-container')

function showText(origin)
{

  paragraph.innerHTML = origin.target.value
}

function showPreview(origin)
{

  let preview = document.querySelector('#image-preview')
  preview.src = URL.createObjectURL(origin.target.files[0])
  preview.onload = function ()
  {

    URL.revokeObjectURL(preview.src)
  }
}

function changeFireBorder()
{

  container.style.border = "3px dashed rgb(255,0,0)"
}

function changeWaterBorder()
{

  container.style.border = '5px double blue'
}

function changeEarthBorder()
{

  container.style.border = '6px groove green'
}

text.addEventListener('input', showText)
file.addEventListener('change', showPreview)
fire.addEventListener('click', changeFireBorder)
water.addEventListener('click', changeWaterBorder)
earth.addEventListener('click', changeEarthBorder)


// 

