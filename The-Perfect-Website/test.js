 let activeIndex = 0

 let slide = document.getElementsByTagName('article')
 function handleLeftClick() {
    
    let nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slide.length - 1

    const currentslide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)

    currentslide.dataset.status = 'after';

    nextSlide.dataset.status= 'becoming-active-from-before';

  setTimeout(()=>{
    nextSlide.dataset.status= 'active'
    activeIndex = nextIndex 
  })
   

 }
 function handleRightClick() {
    
    let nextIndex = activeIndex + 2 <= slide.length ? activeIndex + 1 : 0
console.log(nextIndex);
    const currentslide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)

    currentslide.dataset.status = 'before';

    nextSlide.dataset.status= 'becoming-before-from-active';

  setTimeout(()=>{
    nextSlide.dataset.status= 'active'
    activeIndex = nextIndex 
  })
   

 }