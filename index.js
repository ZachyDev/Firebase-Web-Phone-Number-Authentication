const signUser = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    const phoneNumber = document.getElementsByClassName('phone')[0].value;

    firebase.auth().signInWithPhoneNumber(phoneNumber,window.recaptchaVerifier)
        .then(res => {
            window.alert('code sent')
        })
        .catch(err => window.alert(err.message))
}