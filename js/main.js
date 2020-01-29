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
allInputField.forEach( input => {
    submitBtn.addEventListener ('click', (event) => {
        input.classList.add(`error`);
    })
    // 4- Advanced: Then do this by writing only ONE event listener/handler for all input elements and applying it using a traversal loop */
    input.addEventListener('focus', (event) =>
    {
        input.classList.remove(`error`);
    })
});

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
// >>>>>>Added to part 3 advance<<<<<<

// Done Part 1