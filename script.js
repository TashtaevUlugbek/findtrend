
let swith_btn = document.querySelector('.switch-btn')
function sbtn(e){
    let monthly = document.querySelector(".monthly")
    let yearly = document.querySelector(".yearly")
    swith_btn.classList.toggle("swith-on")
    monthly.classList.toggle("active")
    yearly.classList.toggle("active")
}


let log = document.querySelector(".log")
let reg = document.querySelector(".reg")

log.addEventListener("click",()=>{
    log.classList.add("reg")
    log.classList.add("btn")
    log.classList.remove("log")
    reg.classList.remove("reg")
    reg.classList.remove("btn")
    reg.classList.add("log")
})
reg.addEventListener("click",()=>{
    reg.classList.remove("log")
    reg.classList.add("btn")
    reg.classList.add("reg")
    log.classList.remove("reg")
    log.classList.remove("btn")
    log.classList.add("log")
})
let platform = document.querySelectorAll(".platforms")
let arr = []
for (let i=0;i< platform.length ; i++) {
    platform[i].setAttribute("id",i)
    arr.push(i)
}
function platforms (e){
    // platform[1].classList.remove("clicked")
    for (const i of arr) {
        if(i==e.id){
            platform[i].style.cssText = " background-color: #A8FF35;"
        }
        else{
            platform[i].style.cssText = " background-color: #FFFFFF;"
        }
    }
}