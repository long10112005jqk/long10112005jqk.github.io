document.addEventListener("DOMContentLoaded",function(){
    var menu = document.querySelector(".menu"),
        vongquay = document.querySelector(".vongquay");
        muc1 = document.querySelector(".muc1");
        muc2 = document.querySelector(".muc2");
        muc3 = document.querySelector(".muc3");
        nut = document.querySelector(".nut");
        menuan = document.querySelector(".menuan");
        nenden = document.querySelector(".nenden");
    window.addEventListener("scroll",function(){

        if (window.pageYOffset > vongquay.offsetTop) 
        {
            menu.classList.add("nenmenu");
        }
        else
        {
            menu.classList.remove("nenmenu");
        }
        if (window.pageYOffset > muc1.offsetTop-400) 
        {
            muc1.classList.add("cdmuc1");
        }
        if (window.pageYOffset > muc1.offsetTop+300) 
        {
            muc2.classList.add("cdmuc2");
        }
         if (window.pageYOffset > muc1.offsetTop+600) 
        {
            muc3.classList.add("cdmuc3");
        }
    })
    nut.addEventListener("click",function(){
        nenden.classList.add("hiennenden");
        menuan.classList.add("hienmenuan");
    })
    nenden.addEventListener("click",function() {
        nenden.classList.remove("hiennenden");
        menuan.classList.remove("hienmenuan");
    })
},false)