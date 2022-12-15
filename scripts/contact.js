// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.


const SubmitButton=document.getElementById('submit-button');
const ContactPage=document.getElementById('contact-page');
function OnSubmitButtonClick() {
    ContactPage.innerHTML="Thank you for your message!";
    ContactPage.classList.add('AfterContactPage');
}

SubmitButton.onclick = OnSubmitButtonClick;