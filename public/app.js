document.addEventListener('DOMContentLoaded', function() {

    let app = firebase.app();


    const sendText = firebase.functions().httpsCallable('sendText');

    sendText({ message: 'Hello World!' })
});