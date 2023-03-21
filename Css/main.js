let modal = document.querySelector('.center')
document.getElementById('showModal').addEventListener('click',function(){
    modal.classList.toggle('showtotalmodal');
    console.log('success adding class');
})
let close = document.querySelector('.close')
close.addEventListener('click',function(){
    modal.classList.toggle('showtotalmodal');
})
// Problem

// let allclose = Array.from(close);
// allclose.forEach(function(item)){
//     item.addEventListener('click', function(){
//         modal.classList.remove('showtotalmodal');
//     })
// }