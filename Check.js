let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');


window.onload = function(){
    if(window.navigator.onLine){
        online()
    }else{
        offline()
    }
}
window.addEventListener("online", function(){
    online();
});
window.addEventListener("offline", function(){
    offline();
});


function online(){
    title.innerHTML = 'Online Now';
    title.style.color = 'green';
    // ul.classList.add('hide');
    // reload.classList.add('hide');
    ul.style.display = 'none';
    reload.style.display = 'none';

}

function offline(){
    title.innerHTML = 'Offline Now';
    title.style.color = '#555';
    // ul.classList.remove('hide');
    // reload.classList.remove('hide');
    ul.style.display = 'block';
    reload.style.display = 'block';
}