import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDQtlxc43KUGvrca6swlM_IZwF0tJE6Vj8",
    authDomain: "eisytech-app.firebaseapp.com",
    databaseURL: "https://eisytech-app-default-rtdb.firebaseio.com",
    projectId: "eisytech-app",
    storageBucket: "eisytech-app.firebasestorage.app",
    messagingSenderId: "317214801355",
    appId: "1:317214801355:web:c1131703e7cd7f1d3dca4e",
    measurementId: "G-2C2L2MKLRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
