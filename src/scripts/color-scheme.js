import {ref} from "vue";

let darkMode = ref(false);

let backgroundColor = ref("bg-white");
let secondBackgroundColor = ref("bg-gray-200");
let textColor = ref("text-black");

function initDarkMode(){

    if (localStorage.getItem("dark-mode") === null){
        localStorage.setItem("dark-mode", "false");
    }else{
        toggleColorTheme(Boolean(localStorage.getItem("dark-mode")));
    }
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

initDarkMode()

export { darkMode, toggleColorTheme , backgroundColor, secondBackgroundColor, textColor};
