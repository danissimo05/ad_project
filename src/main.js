import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
vuetify,
render: h => h(App),
router:router,
store,
  created(){
const firebaseConfig = {        
        apiKey: "AIzaSyByv8YXingoj59CQQNEI8IMk6fHQt2s8h8",
  authDomain: "adproject-f89e4.firebaseapp.com",
  databaseURL: "https://adproject-f89e4-default-rtdb.firebaseio.com",
  projectId: "adproject-f89e4",
  storageBucket: "adproject-f89e4.appspot.com",
  messagingSenderId: "424807203787",
  appId: "1:424807203787:web:eedf1d0bd3c2cb6697ac4e"
      };
  // Initialize Firebase
  fb.initializeApp(firebaseConfig);
  fb.analytics();
  }

}).$mount('#app')