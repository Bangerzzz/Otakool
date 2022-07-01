import {ref} from "vue";
import axios from "axios";

const user = ref(null);

//récupérer l'user
if (localStorage.getItem("user")) {
    user.value = (localStorage.getItem("user"));
}

//systeme de conenxion
function connexion(userObj) {
    const userExist = localStorage.getItem("user");
    
    const userObjCopy = {...userObj};
    delete userObjCopy.mdp;

    if (!userExist) {
        axios.post("http://localhost:5000/user/login", {
            email: userObj.email,
            password: userObj.mdp
        })
        .then((res) => {
            localStorage.setItem("user", userObjCopy);
            localStorage.setItem("token", res.data);
            user.value = userObjCopy;
            console.log("Connecté");
        })
    }

}

//deconnexion
const deconnexion = () => {
    user.value = null;
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}

//export du user et des fonctions de connexion deco
export function useUserStore() {
    return {
        user,
        connexion,
        deconnexion
    };
}