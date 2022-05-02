const text = document.querySelector('#text-input')
const file = document.querySelector('#meme-insert')
const paragraph = document.querySelector('#meme-text')

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



text.addEventListener('input', showText)
file.addEventListener('change', showPreview)




