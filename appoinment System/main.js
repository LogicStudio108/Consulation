var firebaseConfig = {
    apiKey: "AIzaSyA77K98RCKxqAHnyXx3nzRrwBm1puLfBKM",
    authDomain: "doctor-form-9685c.firebaseapp.com",
    projectId: "doctor-form-9685c",
    storageBucket: "doctor-form-9685c.appspot.com",
    messagingSenderId: "1074640751288",
    appId: "1:1074640751288:web:c5dbd7702af2c5b16c024d",
    measurementId: "G-4Y1HDGDFTP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Referance message Collection
  var messagesRef =  firebase.database().ref('messages')


document.getElementById('contactForm').addEventListener('submit',
submitForm);


function submitForm(e){
    e.preventDefault();

    console.log('boi')

    var name = getInputVal('name')
    var company = getInputVal('company')
    var email = getInputVal('email')
    var phone = getInputVal('phone')
    var message = getInputVal('message')

    //save messgae
    saveMessage(name, company, email, phone, message);

    
}

// Function to get from values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save the message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone:phone,
        message:message
    });
}