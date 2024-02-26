function login() {
    localStorage.setItem("loggedIn", true);
    window.location.href = 'index.html'
}



function checkLocalStorage() {
    // if loggedIn true, update the client side
    const loggedOutItems = document.querySelectorAll('.logged-out');
    const loggedInItems = document.querySelectorAll('.logged-in');
    console.log(localStorage.getItem("loggedIn"))
    if (localStorage.getItem("loggedIn")) {
        console.log('DETECTED TO E LOGGED IN')
        loggedOutItems.forEach(item => item.classList.add('d-none'));
        loggedInItems.forEach(item => item.classList.remove('d-none'));
    } else {
        console.log('logged otu');
        loggedOutItems.forEach(item => item.classList.remove('d-none'));
        loggedInItems.forEach(item => item.classList.add('d-none'));
    }
}


// absoltuely terribnle way of handling this
// but i can't think of any other way without a proper server rendering the 
// prototype moment?
const observer = new MutationObserver((mutations, mutationInstance) => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        checkLocalStorage();
        $("#logout").on('click', () => {
            localStorage.removeItem("loggedIn");
            window.location.href = 'index.html'
            console.log('test');
        });
        mutationInstance.disconnect();
    }
});


observer.observe(document, {
    childList: true,
    subtree:   true
});