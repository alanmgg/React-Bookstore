import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

import MessagesEnglish from "../lang/en-US.json";
import MessagesSpanish from "../lang/es-MX.json";

const langContext = React.createContext();

const LangProvider = ({children}) => {
    let localeDefault;
    let messaggesDefault;
    const lang = localStorage.getItem('lang');

    if (lang) {
        localeDefault = lang;

        if (lang === 'es-MX') {
            messaggesDefault = MessagesSpanish;
        } else if (lang === 'en-US') {
            messaggesDefault = MessagesEnglish;
        } else {
            localeDefault = 'en-US';
            messaggesDefault = MessagesEnglish;
        }
    }
    const [messages, setMessages] = useState(messaggesDefault);
    const [locale, setLocale] = useState(localeDefault);

    const setLanguage = (language) => {
        switch (language) {
            case 'es-MX':
                setMessages(MessagesSpanish);
                setLocale('es-MX');
                localStorage.setItem('lang', 'es-MX');
                break;
            case 'en-US':
                setMessages(MessagesEnglish);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            default:
                setMessages(MessagesEnglish);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
        }
    }

    return (
        <langContext.Provider value={{setLanguage: setLanguage}}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export {LangProvider, langContext};