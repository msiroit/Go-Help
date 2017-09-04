import firebase from 'firebase'
import config from '../config/firebase'
var firebaseService = firebase.initializeApp(config);
export default firebaseService;

