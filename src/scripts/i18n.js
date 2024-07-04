import {createI18n} from "vue-i18n";

import enLanguage from "@/language/en.json"
import esLanguage from "@/language/es.json"
import {ref} from "vue";

let languageName = ref("en")

const i18n = createI18n({

    fallbackLocale: "en",
    locale: ["en", "es"],
    messages: {en: enLanguage, es: esLanguage}
});

 function changeLanguage(){
    languageName.value = languageName.value === "en" ? "es" : "en";
    i18n.global.locale = languageName.value
 }


export {
     languageName,
    i18n,
    changeLanguage
};