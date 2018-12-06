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


var usersRef = firestore.collection("users");
var bookRef = firestore.collection('Book')
const theTitle = document.getElementById('title')
const theText = document.getElementById('bodyText')
const opOne = document.getElementById('optionOne')
const opTwo = document.getElementById('optionTwo')
const opThree = document.getElementById('optionThree')


const getPage = (pageNumber) => {
    bookRef.where('page.pageNumber', '==', pageNumber).get().then(function(data){
        console.log(data.docs[0].data())
        let page = data.docs[0].data()
        theTitle.innerText = page.page.title 
        theText.innerText = page.page.text 
        opOne.innerText = page.page.options[0].one
        opTwo.innerText = page.page.options[0].two
        opThree.innerText = page.page.options[0].three
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

// submitButton.addEventListener('click', function(){
//     const theName = nameInput.value;
//     const thePassword = passwordInput.value;
//     firestore.doc('users/user' + Math.random()).set({
//         name: theName,
//         password: thePassword
//     })
//     firestore.collection('users').get().then(function(doc){console.log(doc)})
// })

// saveButton.addEventListener('click', function(){
//     const textToSave = inputText.value
//     console.log('Saving...', textToSave)
//     docRef.set({
//         hotDogStatus: textToSave
//     }).then(()=>console.log('Saved!'))
// })


//     docRef.get().then(function(doc){
//         if(doc && doc.exists){
//             console.log('DOC ==>', doc)
//             const myData = doc.data();
//             outputHeader.innerText = 'Status: ' + myData.hotDogStatus;
//         }
//     })


// getRealtimeUpdates = function(){
//     docRef.onSnapshot(function(doc){
//         const myData = doc.data();
//         outputHeader.innerText = 'Current Feeling: ' + myData.hotDogStatus
//     })
// }

getRealtimeUpdates();