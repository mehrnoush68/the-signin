/*## Part 1

Complete these steps to create a 'signin' prototype:

1. "Listen" for when the user `click`s the `#signin` button, `display` the `#modal` window
2. "Listen" for when the user `click`s the `#close` button, `display` (or fade out) out the `#modal` window
3. "Listen" for when the user `click`s the `#submit` button, add an `.error` class to both `input.field` elements
   - Easy: First add the `.error` class to each individually using `getElementById()` or `querySelector()`
   - Advanced: Once successful, try applying to both `input.field` using `querySelectorAll()` and a `forEach()` (or another type of traversal loop)
4. Remove the `.error` class from any individual `<input>` when the cursor gives it `focus`
   - Easy: First try writing one event listener/handler per input element
   - Advanced: Then do this by writing only ONE event listener/handler for all input elements and applying it using a traversal loop */




//1.
let signinBtnClicked = document.querySelector('.signin'); 
let displaySignin = document.querySelectorAll('.modal');

signinBtnClicked.addEventListener('click', (event) =>
{
    modal.style.display = `block`;
})


//2.
let closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', (event) =>
{
    modal.style.display = `none`;
})

//3.
let submitBtn = document.querySelector('.submit');
let userField = document.querySelector('#user');
let passField = document.querySelector('#pass');
submitBtn.addEventListener ('click', (event) =>
{
    userField.classList.add(`error`);
    passField.classList.add(`error`);
})