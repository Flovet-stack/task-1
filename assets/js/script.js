// Creating the hero tabs functionality 
let contents = document.getElementsByClassName('content-sub');
contents = Array.from(contents);
let tabs = document.getElementsByClassName('tab');
tabs = Array.from(tabs);
let contentReset = () => { //function to hide all the contents
    contents.forEach(content => {
        content.style.display = 'none';
    })
};
let showContent = (target, content) => { //function to show specific targeted content
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    contentReset(); //call the reset function to hide all the contents 
    target.classList.add('active');
    content.classList.add('fade-in');
    content.style.display = 'block';
};
// show specific content on click
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const content = document.getElementById(e.target.getAttribute('to'));
        showContent(e.target, content);
    });
});


// creating the pricing plan filter 
const plan = {
    basic: {},
    premium: {},
}