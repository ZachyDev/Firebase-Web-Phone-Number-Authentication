const signUser = () => {    
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    const phoneNumber = document.getElementsByClassName('phone')[0].value;
    let code = document.getElementsByClassName('code')[0].value;

    firebase.auth().signInWithPhoneNumber(phoneNumber,recaptchaVerifier)
        .then(confirmationResult => {
            window.alert('code sent');
            window.confirmationResult = confirmationResult;

            confirmationResult.confirm(code)
            .then(() => {
                alert('User signed in successfully');
            })
            .catch(err => alert(err.message))
        })
        .catch(err => window.alert(err.message))



     
}

