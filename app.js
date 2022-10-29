const questions = document.querySelectorAll('.question');

questions.forEach(function(question){

    const active = question.querySelector('.question-heading');
    
    active.addEventListener('click', function(){  

        question.classList.toggle('text-active');

        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('text-active');
            };
        });
    });
});
    
