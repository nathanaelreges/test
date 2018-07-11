require('./styles/global.scss')

// Rendering the arrow element
var jsArrowTemplate = document.querySelector('.js-arrow-template')
var arrayOfEles = document.querySelectorAll('.js-arrow')

for (var i = 0; i < arrayOfEles.length; i++) {
   var ele = arrayOfEles[i]
   var arrowEleClone = jsArrowTemplate.cloneNode(true)
   ele.classList.remove('js-arrow')
   arrowEleClone.setAttribute('class', ele.className)
   ele.parentElement.replaceChild(arrowEleClone, ele)
}
