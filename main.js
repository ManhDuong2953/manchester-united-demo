const pointer = document.querySelector(".nav_mobile");
const listall = document.querySelector(".header-item--1");
const main = document.querySelector("#main");
const ullist = document.querySelector(".list");

pointer.onclick = (e)=>{
    listall.classList.add("nav")
    e.stopPropagation()

}
main.onclick = (e)=>{
    listall.classList.remove("nav");
    e.stopPropagation()
}


ullist.onclick = (e) =>{

    e.stopPropagation()
}







































//     function showlist(){
//         listall.classList.add("nav")
//     }
//     pointer.addEventListener("click", showlist)

// function hidelist(){
//     listall.classList.remove("nav")
// }
// pointer.addEventListener("click", showlist)

