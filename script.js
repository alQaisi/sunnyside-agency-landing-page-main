var menuIcon=document.querySelector('.menu-icon');
var mobileMenu=document.querySelector('.mobile-menu');
menuIcon.addEventListener('click',evt=>{
    mobileMenu.classList.contains('hidden')?toogleMenu('show'):toogleMenu('hide');
});
function toogleMenu(action){
    if(action=='show'){
        mobileMenu.classList.remove('hidden');
        mobileMenu.style.opacity="1";
        document.body.addEventListener('click',handleClick);
        window.addEventListener('resize',handleResize);
    }else{
        document.body.removeEventListener('click',handleClick,false);
        window.removeEventListener('resize',handleResize);
        mobileMenu.style.opacity="0";
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 310);
    }
}
function handleClick(evt){
    if(!mobileMenu.classList.contains('hidden') && evt.target!=menuIcon && evt.target!=mobileMenu)
        toogleMenu('hide');
}
function handleResize(evt){
    if(!mobileMenu.classList.contains('hidden') && innerWidth>720)
        toogleMenu('hide');
}