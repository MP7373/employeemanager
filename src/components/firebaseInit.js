import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCO15WW1OGZIh6K_g9CdqFcfETS6Em8Gvw',
  authDomain: 'funprojectyay1234superduperhay.firebaseapp.com',
  databaseURL: 'https://funprojectyay1234superduperhay.firebaseio.com',
  projectId: 'funprojectyay1234superduperhay',
  storageBucket: 'funprojectyay1234superduperhay.appspot.com',
  messagingSenderId: '1094413138035'
}

const firebaseApp = firebase.initializeApp(config)
export default firebaseApp.firestore()
