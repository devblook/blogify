import {createI18n} from "vue-i18n";

import enLanguage from "@/languages/en.json"
import esLanguage from "@/languages/es.json"

import {ref} from "vue";

let languageName = ref("en")

const languageSwitcher = createI18n({

    fallbackLocale: "en",
    locale: ["en", "es"],
    messages: {en: enLanguage, es: esLanguage}
});

 function changeLanguage(){
    languageName.value = languageName.value === "en" ? "es" : "en";
    languageSwitcher.global.locale = languageName.value
 }


export {
     languageName,
    languageSwitcher,
    changeLanguage
};