<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAVUIIwFXEsOmOS96lifn_aEccV3I35bWU",
  authDomain: "dream-donators.firebaseapp.com",
  projectId: "dream-donators",
  storageBucket: "dream-donators.firebasestorage.app",
  messagingSenderId: "943510265596",
  appId: "1:943510265596:web:25e49411973c046bf50179",
  measurementId: "G-KJ1WWR3TJH"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// EXPORT
window.firebaseAuth = auth;
window.firebaseSignIn = signInWithEmailAndPassword;
window.firebaseDB = db;
window.firebaseRef = ref;
window.firebasePush = push;
</script>