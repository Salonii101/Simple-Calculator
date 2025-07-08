let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click' , (e) => {
        const btnValue = e.target.innerText;

        if(btnValue === '='){
            string = eval(string).toString();
            input.value = string ;
        }else if(btnValue === 'AC'){
             string = "";
             input.value = string ;
        }else{
            string += btnValue ;
            input.value = string ;
        }
    });
});