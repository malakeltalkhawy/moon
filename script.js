let stars=document.getElementById('stars');
let moon =document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let malak=document.querySelector('.malak');
window.onscroll = function(){
    let value = scrollY;
    // console.log(value);
    stars.style.left =value + 'px';
    moon.style.top =value *4 + 'px';
    mountains3.style.top =value *2 + 'px';
    mountains4.style.top =value *1.5 + 'px';
    river.style.top =value  + 'px';
    boat.style.left =value*3  + 'px';
    malak.style.fontSize=value + 'px';
    if(scrollY >= 110){
        malak.style.fontSize=110 + 'px';
        malak.style.position= 'fixed';
        if(scrollY >= 427){
            malak.style.display= 'none';
        }    else{
        malak.style.display= 'block';

        }
        if(scrollY >=117){
            document.querySelector('.main').style.background =' linear-gradient(#376281,#10001f)'
        } else{
            document.querySelector('.main').style.background =' linear-gradient(#200016,#10001f)'

        }
    }

}