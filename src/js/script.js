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


var modal1 = document.querySelector('.proj1');
var modal2 = document.querySelector('.proj2');
var modal3 = document.querySelector('.proj3');


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

