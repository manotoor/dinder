import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyANfNAqtsvWTjklNIBbKPu6M8pbJpWgsvU",
    authDomain: "dinder-b1a75.firebaseapp.com",
    databaseURL: "https://dinder-b1a75.firebaseio.com",
    projectId: "dinder-b1a75",
    storageBucket: "dinder-b1a75.appspot.com",
    messagingSenderId: "435763392139"
};

export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config);
    this.splashTime = 1000
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }
  get SplashImg() {
    return this.splashImg
  }
  get SplashTime() {
    return this.splashTime
  }
  get LoginBG(){
    return this.loginBG
  }
}