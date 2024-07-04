import {ref} from "vue";

let darkMode = ref(false);

let backgroundColor = ref("");
let secondBackgroundColor = ref("");
let textColor = ref("");

function initDarkMode(){

    if (localStorage.getItem("dark-mode") === null){
        localStorage.setItem("dark-mode", "false");
    }

    toggleColorTheme(Boolean(localStorage.getItem("dark-mode")));

}

function toggleColorTheme(colorStatus) {

    darkMode.value = colorStatus;
    localStorage.setItem("dark-mode", darkMode.value);

    if (darkMode.value){
        backgroundColor.value = "bg-black";
        textColor.value = "text-white";
        secondBackgroundColor.value = "bg-gray-500";
    }else{
        backgroundColor.value = "bg-white";
        textColor.value = "text-black";
        secondBackgroundColor.value = "bg-gray-200";
    }

}


export { initDarkMode, darkMode, toggleColorTheme , backgroundColor, secondBackgroundColor, textColor};
