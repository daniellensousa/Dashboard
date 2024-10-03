import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import PTBR from './pt/pt-br.json'
import EN from './en/en-us.json'

const resources = {
    'pt-BR': PTBR,
    'en': EN
}

i18n.use(initReactI18next).init({
    resources,
    en:{
        ...EN
    },
    pt:{
        ...PTBR
    },
    lng: 'pt-BR',
    interpolation: {
        escapeValue: false
    }
})

export default i18n;