const hbg = document.getElementById('hbg');

hbg.addEventListener("click",()=>{
    if(!document.getElementById("navbar").parentNode.classList.contains("active")){
        document.getElementById("navbar").parentNode.classList.add("active");
        document.getElementById("hbg").src = 'images/icon-close.svg';
      }else{
        document.getElementById("navbar").parentNode.classList.remove("active");
        document.getElementById("hbg").src = 'images/icon-hamburger.svg';
      }
})