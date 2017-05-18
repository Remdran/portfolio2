var currentModal = '';
var closeBtn = Array.from(document.querySelectorAll('.modal_close'));

closeBtn.forEach(function (close) {
    close.addEventListener('click', function() {
        currentModal.style.display = 'none';    
    });
});


var proj1 = document.getElementById('proj1');
var proj2 = document.getElementById('proj2');
var proj3 = document.getElementById('proj3');
var proj4 = document.getElementById('proj4');
var proj5 = document.getElementById('proj5');
var proj6 = document.getElementById('proj6');

var modal1 = document.querySelector('.proj1');
var modal2 = document.querySelector('.proj2');
var modal3 = document.querySelector('.proj3');
var modal4 = document.querySelector('.proj4');
var modal5 = document.querySelector('.proj5');
var modal6 = document.querySelector('.proj6');


proj1.addEventListener('click', function() {       
       modal1.style.display = 'block';
       currentModal = modal1;
});

proj2.addEventListener('click', function() {    
       modal2.style.display = 'block';
       currentModal = modal2;
});

proj3.addEventListener('click', function() {    
       modal3.style.display = 'block';
       currentModal = modal3;
});

proj4.addEventListener('click', function() {    
       modal4.style.display = 'block';
       currentModal = modal4;
});

proj5.addEventListener('click', function() {    
       modal5.style.display = 'block';
       currentModal = modal5;
});

proj6.addEventListener('click', function() {    
       modal6.style.display = 'block';
       currentModal = modal6;
});