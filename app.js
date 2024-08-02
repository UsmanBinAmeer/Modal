const parentContainer = document.querySelector(".readMoreContainer")
parentContainer.addEventListener("click", event=>{
    const current = event.target
    const isReadMoreBtn = current.className.includes("readMoreBtn")
    if(!isReadMoreBtn)return
    const currentText = event.target.parentNode.querySelector(".readMore")
    currentText.classList.toggle("readMore--show")
    current.textContent = current.textContent.includes("Read More") ? 
    "Read less..." : "Read more..."
})