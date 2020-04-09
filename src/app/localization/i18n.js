import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from '@translations/en';
import da from '@translations/da';
import AsyncStorage from '@react-native-community/async-storage';
const locales = RNLocalize.getLocales ();
console.log ('locales', locales);
if (Array.isArray (locales)) {
  I18n.locale = locales[0].languageTag;
}
I18n.fallbacks = true; // If an English translation is not available in en.js, it will look inside da.js
I18n.missingBehaviour = 'guess'; // It will convert HOME_noteTitle to "HOME note title" if the value of HOME_noteTitle doesn't exist in any of the translation files.
I18n.defaultLocale = 'da'; // If the current locale in device is not en or da
I18n.locale = 'da'; // If we do not want the framework to use the phone's locale by default

// (async () => {
//   const userlang = await AsyncStorage.getItem ('lang');
//   console.log ('userlang', userlang);
//   if (userlang !== null) {
//     if (userlang === 'en') {
//       I18n.locale = 'en';
//     } else if (userlang === 'da') {
//       I18n.locale = 'da';
//     }
//   }
// }) ();
I18n.translations = {
  en,
  da,
};

export default I18n;
