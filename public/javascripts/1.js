document.addEventListener("DOMContentLoaded",function(){
    var banner = document.getElementsByClassName('anhbanner'),
        nutphai = document.getElementsByClassName('nutphai'),
        nuttrai = document.getElementsByClassName('nuttrai'),
        nutphai = nutphai[0],
        nuttrai = nuttrai[0],
        i = 0,
        khoi2 = document.getElementsByClassName('khoi2');
    nutphai.addEventListener('click',function() {
        if (i == banner.length-1) 
        {
            for (var k = 0; k < banner.length; k++) {
                banner[k].classList.remove('action1');
                banner[k].classList.remove('action');
                banner[k].classList.remove('hien');
            }
            banner[banner.length-1].classList.add('action1');
            banner[0].classList.add('action');
            banner[0].classList.add('hien');
            i = 0;
        }
        else {
            for (var k = 0; k < banner.length; k++) {
                banner[k].classList.remove('action');
                banner[k].classList.remove('action1');
                banner[k].classList.remove('hien');
            }
            banner[i+1].classList.add('action');
            banner[i+1].classList.add('hien');
            banner[i].classList.add('action1');
            i = i + 1; 
        }   
    })
    nuttrai.addEventListener('click',function() {
        if (i == 0) 
        {
            for (var k = 0; k < banner.length; k++) {
                banner[k].classList.remove('action1');
                banner[k].classList.remove('action');
                banner[k].classList.remove('hien');
            }
            banner[0].classList.add('action1');
            banner[banner.length-1].classList.add('action');
            banner[banner.length-1].classList.add('hien');
            i = banner.length-1;
        }
        else {
            for (var k = 0; k < banner.length; k++) {
                banner[k].classList.remove('action');
                banner[k].classList.remove('action1');
                banner[k].classList.remove('hien');
            }
            banner[i-1].classList.add('action');
            banner[i-1].classList.add('hien');
            banner[i].classList.add('action1');
            i = i - 1; 
        }   
    }) 
    // xong slide   

},false)
