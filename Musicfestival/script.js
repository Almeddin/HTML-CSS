let form =document.getElementById("form-send")
let maps = document.getElementById("maps-send") 
let color = document.getElementById("form-js")
let changecolor = document.getElementById("maps-js")
window.addEventListener('scroll', function(){
    const header = document.getElementById('sticky-header')
    if(this.scrollY > 50){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
})
function goToMaps(){
    form.style.display = "none"
    maps.style.display ="block"
    changecolor.classList.add('contact-form')
    color.classList.remove("contact-form")

}
function goToForm(){
   maps.style.display = "none"
   form.style.display ="block"
   color.classList.add("contact-form")
   changecolor.classList.remove("contact-form")
}