import firebase from 'firebase'

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAaSHbdruM1DnyZ1k4QLAlOs_Ho-rAVxUc',
  authDomain: 'ondetempico.firebaseapp.com',
  databaseURL: 'https://ondetempico.firebaseio.com'
})

export const firebaseAuth = firebaseApp.auth()
export const firebaseDb = firebaseApp.database()
