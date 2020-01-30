// Part 1

// Complete these steps to create a 'signin' prototype:


// 1. "Listen" for when the user `click`s the `#signin` button, `display` the `#modal` window
let signinBtnClicked = document.querySelector('.signin'); 
let displaySignin = document.querySelectorAll('.modal');

signinBtnClicked.addEventListener('click', (event) =>
{
    modal.style.display = `block`;
})

// ************************************************************
// 2. "Listen" for when the user `click`s the `#close` button, `display` (or fade out) out the `#modal` window
let closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', (event) =>
{
    modal.style.display = `none`;
})

// ************************************************************
// 3. "Listen" for when the user `click`s the `#submit` button, add an `.error` class to both `input.field` elements

// - Easy: First add the `.error` class to each individually using `getElementById()` or `querySelector()`

// let submitBtn = document.querySelector('.submit');
// let userField = document.querySelector('#user');
// let passField = document.querySelector('#pass');
// submitBtn.addEventListener ('click', (event) =>
// {
//     userField.classList.add(`error`);
//     passField.classList.add(`error`);
// })

// - Advanced: Once successful, try applying to both `input.field` using `querySelectorAll()` and a `forEach()` (or another type of traversal loop)
let submitBtn = document.querySelector('.submit');
const allInputField = document.querySelectorAll('.field');
// allInputField.forEach( input => {
//     submitBtn.addEventListener ('click', (event) => {
//         input.classList.add(`error`);
//     })
//     // 4- Advanced: Then do this by writing only ONE event listener/handler for all input elements and applying it using a traversal loop */
//     input.addEventListener('focus', (event) =>
//     {
//         input.classList.remove(`error`);
//     })
// });

// ************************************************************
// 4. Remove the `.error` class from any individual `<input>` when the cursor gives it `focus`
//    4- Easy: First try writing one event listener/handler per input element

// let userField = document.querySelector('#user');
// let passField = document.querySelector('#pass');
// userField.addEventListener ('focus', (event) =>
// {
//     userField.classList.remove(`error`);
// })
// passField.addEventListener ('focus', (event) =>
// {
//     passField.classList.remove(`error`);
// })

//    4- Advanced: Then do this by writing only ONE event listener/handler for all input elements and applying it using a traversal loop */
// >>>>>>Added to step 3-advance<<<<<<

// Done Part 1




/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// ## Part 2

// 1. Modify the `#submit` element from `type="button"` to `type="submit"`. When the user triggers a `submit`, event, _prevent_ the form from proceeding with it's _default_ behavior.

submitBtn.setAttribute(`type`,`submit`);
submitBtn.addEventListener ("click", (event) => 
    {
        event.preventDefault();
        });
// ************************************************************
// 2. On submit, only add the `.error` class to the elements that have a `value` of "" (blank, meaning any text will prevent an error)
//    - What happens if the user just adding spaces to the field? Find a function that will trim off the white spaces in a field to validate it.

function inputValidation(input) {
    var inp = input.value.trim();
    if (inp == "" ) {
    input.classList.add(`error`);   
    } 
}

allInputField.forEach( input => {
    submitBtn.addEventListener ('click', (event) => {
        inputValidation(input);
    })
    input.addEventListener('focus', (event) =>
    {
        input.classList.remove(`error`);
    })
// part2 -step4-%%%%
    if (input.value == "" ){
        input.addEventListener ('blur', (event) => {
             
                input.classList.add(`error`);   
        })
        }
});

// ************************************************************
// 3. Prototype a validation by checking the two fields on `submit`. If both are "valid" (not blank), close the `#modal`, remove the `#signin` and append `textContent` to the `#hello` heading so it reads "Welcome, [USERNAME]", in a font that's half the current size
//    - Consider the various ways we could validate both fields, including the use of a boolean `var` as a switch


submitBtn.addEventListener ("click", (event) => 
    {
        var userName = document.querySelector('#user').value;
        var password = document.querySelector('#pass').value;
        if(password !== "" && userName !== "" ){
            modal.style.display = `none`;
            let welcomeUser = document.querySelector('.signin');
            let helloUser = document.querySelector('.hello');
            helloUser.innerHTML = `Welcome, ${userName}!`;
            welcomeUser.style.display = `none`;
        }
    });

// ************************************************************
// 4. Try validating a field by adding/removing `.error` immediately after the cursor leaves one of the individual `<input>` (rather than on submit)
//    - Consider this can be added individually to elements, but do so by writing one event listener/callback function using a loop

// let userField = document.querySelector('#user');
// let passField = document.querySelector('#pass');
// passField.addEventListener ('blur', (event) => {
//     if (passField.value == "" ) {
//         passField.classList.add(`error`);   
//         }
// })
// userField.addEventListener ('blur', (event) => {
//     if (userField.value == "" ) {
//         userField.classList.add(`error`);   
//         }
// })


// part2 -step4-%%%% added to step2

// ************************************************************
// 5. Allow the user to click the `#modal` to close itself
//    - Consider what happens when two elements that are overlapping are both waiting for a click: Click events will "bubble" (propagate) up the DOM tree. How could we stop an event from triggering on it's parents?
//    - This will likely require a bit of web searching to solve
