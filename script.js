const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');

buttons.forEach(function (button){
        console.log(button);
        button.addEventListener('click', function (khush){
            console.log(khush)
            console.log(khush.targer)
            if (khush.target.id == 'red'){
                body.style.backgroundColor = khush.target.id
            }
            if (khush.target.id == 'blue'){
                body.style.backgroundColor = khush.target.id
            }
            if (khush.target.id == 'green'){
                body.style.backgroundColor = khush.target.id
            }
            if (khush.target.id == 'yellow'){
                body.style.backgroundColor = khush.target.id
            }
            
        });
});