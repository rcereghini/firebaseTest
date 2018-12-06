var config = {
    apiKey: "AIzaSyDhxypSiLc2YIWZKVfmKDbgnIM73tFBKsM",
    authDomain: "cya2018-6942c.firebaseapp.com",
    databaseURL: "https://cya2018-6942c.firebaseio.com",
    projectId: "cya2018-6942c",
    storageBucket: "cya2018-6942c.appspot.com",
    messagingSenderId: "590960767250"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();


// const docRef = firestore.collection('samples').doc('sandwichData')
const docRef = firestore.doc('samples/sandwichData');
const outputHeader = document.querySelector('#output');
const textBoxArea = document.querySelector('#textBox');
const inputText = document.querySelector('#inputText');
const nameInput = document.querySelector('#fullNameInput');
const passwordInput = document.querySelector('#passwordInput')
const saveButton = document.querySelector('#saveButton');
const loadButton = document.querySelector('#loadButton');
const submitButton = document.querySelector('#submitButton')
const nameInputTest = document.querySelector('#fullNameInputTest');
const passwordInputTest = document.querySelector('#passwordInputTest')
const submitButtonTest = document.querySelector('#submitButtonTest')

var usersRef = firestore.collection("users");
var bookRef = firestore.collection('Book')


const getPage = (pageNumber) => {
    bookRef.where('page.pageNumber', '==', pageNumber).get().then(function(data){
        console.log(data.docs[0].data())
    })
}
    
getPage(0)


    
//     bookRef.get().then(function(data){
//     data.forEach(function(doc){
//         console.log('Book? ==>', doc.data())
//         var pageQuery = bookRef.where
//         textBoxArea.innerText = doc.data().page.text
//     })
// })

// Create a query against the collection.
// submitButtonTest.addEventListener('click', function(){
//     var query = usersRef.where("name", "==", nameInputTest.value)
//     query.get().then(function(data){
 
//             data.forEach(function(doc){
//             console.log('HERE IS THE DATA ==>', doc, doc.data())
        
//         console.log(doc.exists)
//         if(doc.exists){
//             alert(`An account was found matching that username.`)}else{alert('No matching account found.')}
//     })}else{alert('No account found.')}
// }).catch(
//         console.log('hi')
//     )
    
// })

submitButton.addEventListener('click', function(){
    const theName = nameInput.value;
    const thePassword = passwordInput.value;
    firestore.doc('users/user' + Math.random()).set({
        name: theName,
        password: thePassword
    })
    firestore.collection('users').get().then(function(doc){console.log(doc)})
})

saveButton.addEventListener('click', function(){
    const textToSave = inputText.value
    console.log('Saving...', textToSave)
    docRef.set({
        hotDogStatus: textToSave
    }).then(()=>console.log('Saved!'))
})


    docRef.get().then(function(doc){
        if(doc && doc.exists){
            console.log('DOC ==>', doc)
            const myData = doc.data();
            outputHeader.innerText = 'Status: ' + myData.hotDogStatus;
        }
    })


getRealtimeUpdates = function(){
    docRef.onSnapshot(function(doc){
        const myData = doc.data();
        outputHeader.innerText = 'Current Feeling: ' + myData.hotDogStatus
    })
}

getRealtimeUpdates();