import {ref} from "vue";

let darkMode = ref(false);

let backgroundColor = ref("bg-white");
let secondBackgroundColor = ref("bg-gray-200");
let textColor = ref("text-black");

function toggleColorTheme() {
    console.log("Toggle color theme")
    darkMode.value =!darkMode.value;

    if (darkMode.value){
        backgroundColor.value = "bg-black";
        textColor.value = "text-white";
        secondBackgroundColor = "bg-gray-500";
    }else{
        backgroundColor.value = "bg-white";
        textColor.value = "text-black";
        secondBackgroundColor = "bg-gray-200";
    }
}

export { darkMode, toggleColorTheme , backgroundColor, secondBackgroundColor, textColor};
