


//

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgH39vhftEs6HP9aSYrutd_r1ggaPEpf4",
    authDomain: "vue-chat-room-8438b.firebaseapp.com",
    databaseURL: "https://vue-chat-room-8438b.firebaseio.com",
    projectId: "vue-chat-room-8438b",
    storageBucket: "vue-chat-room-8438b.appspot.com",
    messagingSenderId: "471224096136",
    appId: "1:471224096136:web:f5c5db9812aa338678563d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref('who/an/I').set('Alex');


database.ref('message').on('value',  snapshot =>  console.log(snapshot.val()));
//do somrtin






new Vue({
    el: "#chat",
    data: {
        messages: [],
        age:'',
        messageText: '',
        nickname: 'hootlex'
    },
    methods: {
        storeMessage () {
            database.ref('messages').push({text: this.messageText, nickname:this.nickname, age:this.age});
            this.messageText = ''
        }
    },
    created () {
        database.ref('messages').on('child_added', snapshot => this.messages.push(snapshot.val()))
    }
});




