let language = localStorage.getItem("chimp_lang");
if (language === null) {
  language = "/en";
}
$('[featureNum="1"]').click();
var lang = {
  de: {
    NAV_LINK__FEATURES: "Features",
    NAV_LINK__IMPRINT: "Impressum",
    NAV_LINK__GET_CHIMP: "Chimp herunterladen",
    HERO__OPENING_WORD: "Alle deine Aufgaben, Projekte und Kontakte",
    HERO__SUBTITLE: "an einem Ort.",
    HERO__MEET_CHIMP: "Das ist Chimp.",
    HERO__CTA_BTN: "Hol dir Chimp für deine Geräte",
    HERO__PRESS_F:
      'Drücke <span class="kbd">F</span> um alle Features zu sehen oder <b>scrolle runter</b>',
    HERO__PRESS_F_MOBILE: "Scrolle runter um alle Features zu sehen",

    //Mac screen
    MAC_SCREEN__GM: "Guten Morgen, Sean",
    MAC_SCREEN__OVERVIEW: "Übersicht",
    MAC_SCREEN__PROJECTS: "Projekte",
    MAC_SCREEN__CONTACTS: "Kontake",
    MAC_SCREEN__TAGS: "Tags",
    MAC_SCREEN__SETTINGS: "Einstellungen",
    MAC_SCREEN__YOUR_CONTACTS:
      '<span class="bold">Deine</span> <span class="light">Kontakte</span>',
    MAC_SCREEN__SEND_EMAIL: "Email senden",
    MAC_SCREEN__CALL: "Max anrufen",

    // feature menu

    FEATURE_MENU__FEATURES: "Features",

    FEATURE_MENU__CCM: "Kontakte & Kundenmanagement", // contacts company management
    FEATURE_MENU__EC: "Kurzbefehle", // exec.command,
    FEATURE_MENU__TTIC: "Zeiterfassung & Projektmanagement", // time tracking &invoice generation

    //feature
    FEATURE_SUBTITLE__CCM: "leicht gemacht.", // time tracking &invoice generation
    FEATURE_SUBTITLE__EC: "Einfache aber starke Kurzbefehle",
    FEATURE_SUBTITLE_TTIC: "ohne Probleme.",

    //contacts

    CONTACT__OPENING_TEXT:
      '<span class="light">Hast du Lust Chimp</span> <span class="bold">zu testen?</span>',
    CONTACT__CONTENT_TEXT:
      '<span class="bold">Die Chimp Beta Version erscheint März 2021</span> <span class="light">für MacOS, und iOS</span> <span class="bold">folgt kurz danach!</span>',
    CONTACT__CONTENT_TEXT_2:
      '<span class="light">Registriere dich</span> <span class="bold">und gehöre zu den ersten Nutzern!</span>',

    //cookies

    COOKIES__TEXT: "Wir benutzen Cookies auf unserer Website",
    COOKIES__YES: "Okay, kein Problem!",
    COOKIES__NO: "Nein, danke!",
  },
  en: {
    NAV_LINK__FEATURES: "Features",
    NAV_LINK__IMPRINT: "Imprint",
    NAV_LINK__GET_CHIMP: "Get Chimp",
    HERO__OPENING_WORD: "All your tasks, projects and contacts",
    HERO__SUBTITLE: "in one place.",
    HERO__MEET_CHIMP: "Meet Chimp",
    HERO__CTA_BTN: "Get Chimp for Your Devices",
    HERO__PRESS_F:
      'Press <span class="kbd">F</span> to see all of our features or <b>scroll down</b>',
    HERO__PRESS_F_MOBILE: "Scroll down to see our features",

    //Mac screen
    MAC_SCREEN__GM: "Good morning, Sean",
    MAC_SCREEN__OVERVIEW: "Overview",
    MAC_SCREEN__PROJECTS: "Projects",
    MAC_SCREEN__CONTACTS: "Contacts",
    MAC_SCREEN__TAGS: "Tags",
    MAC_SCREEN__SETTINGS: "Settings",
    MAC_SCREEN__YOUR_CONTACTS:
      '<span class="bold">Your </span><span class="light">Contacts</span>',
    MAC_SCREEN__SEND_EMAIL: "Send Email",
    MAC_SCREEN__CALL: "Give Max a call",

    // feature menu

    FEATURE_MENU__FEATURES: "Features",

    FEATURE_MENU__CCM: "Contacts & Companies Management", // contacts company management
    FEATURE_MENU__EC: "Executable Commands", // exec.command,
    FEATURE_MENU__TTIC: "Time Tracking & Project Management", // time tracking &invoice generation

    //feature
    FEATURE_SUBTITLE__CCM: "without hassle.", // time tracking &invoice generation
    FEATURE_SUBTITLE__EC: "Simple, memorable, yet <br />powerful commands.",
    FEATURE_SUBTITLE_TTIC: "with ease.",

    //contacts

    CONTACT__OPENING_TEXT:
      '<span class="light">Keen to </span><span class="bold">Try?</span>',
    CONTACT__CONTENT_TEXT:
      ' <span class="bold">Chimp Beta Version is rolling out March 2021</span><span class="light"> to MacOS devices, and iOS devices</span> <span class="bold">soon after!</span>',
    CONTACT__CONTENT_TEXT_2:
      ' <span class="light">Shoot us your e-mail below </span><span class="bold">and be first to try!</span>',

    //cookies

    COOKIES__TEXT: "We use cookies to understand how people use our website",
    COOKIES__YES: "Okay, sure...",
    COOKIES__NO: "Not for me!",
  },
};
if (language == "de") {
  toGerman();
} else if (language == "en") {
  toEnglish();
}

$(".lang_link").on("click", function () {
  localStorage.removeItem("chimp_lang");
  if ($(this).html().toLowerCase() === "de") {
    localStorage.setItem("chimp_lang", "de");
    window.history.pushState({}, null, `/de`);
    toGerman();
  } else if ($(this).html().toLowerCase() === "en") {
    localStorage.setItem("chimp_lang", "en");
    window.history.pushState({}, null, `/en`);
    toEnglish();
  }

  $(".lang_link").each(function () {
    if ("/" + $(this).html().toLowerCase() === $(location).attr("pathname")) {
      $(this).css("font-weight", "800");
      $(this).css("color", "#1b07f2");
    } else {
      $(this).css("font-weight", "400");
      $(this).css("color", "#747374");
    }
  });
  initialLaunch = 0;
  $('[featureNum="1"]').click();
});

function toGerman() {
  document.title = "Chimp - Das Produktivitätstool für Freelancer";

  //navbar
  $('[multi_lang="NAV_LINK__FEATURES"]').html(lang.de.NAV_LINK__FEATURES);
  $('[multi_lang="NAV_LINK__IMPRINT"]').html(lang.de.NAV_LINK__IMPRINT);
  $('[multi_lang="NAV_LINK__GET_CHIMP"]').html(lang.de.NAV_LINK__GET_CHIMP);

  //hero section
  $('[multi_lang="HERO__OPENING_WORD"]').html(lang.de.HERO__OPENING_WORD);
  $('[multi_lang="HERO__SUBTITLE"]').html(lang.de.HERO__SUBTITLE);
  $('[multi_lang="HERO__MEET_CHIMP"]').html(lang.de.HERO__MEET_CHIMP);

  //Mac screen
  $('[multi_lang="MAC_SCREEN__GM"]').html(lang.de.MAC_SCREEN__GM);
  $('[multi_lang="MAC_SCREEN__OVERVIEW"]').html(lang.de.MAC_SCREEN__OVERVIEW);
  $('[multi_lang="MAC_SCREEN__PROJECTS"]').html(lang.de.MAC_SCREEN__PROJECTS);
  $('[multi_lang="MAC_SCREEN__CONTACTS"]').html(lang.de.MAC_SCREEN__CONTACTS);
  $('[multi_lang="MAC_SCREEN__TAGS"]').html(lang.de.MAC_SCREEN__TAGS);
  $('[multi_lang="MAC_SCREEN__SETTINGS"]').html(lang.de.MAC_SCREEN__SETTINGS);
  $('[multi_lang="MAC_SCREEN__YOUR_CONTACTS"]').html(
    lang.de.MAC_SCREEN__YOUR_CONTACTS
  );
  $('[multi_lang="MAC_SCREEN__SEND_EMAIL"]').html(
    lang.de.MAC_SCREEN__SEND_EMAIL
  );
  $('[multi_lang="MAC_SCREEN__CALL"]').html(lang.de.MAC_SCREEN__CALL);
  $('[multi_lang="HERO__CTA_BTN"]').html(lang.de.HERO__CTA_BTN);
  $('[multi_lang="HERO__PRESS_F"]').html(lang.de.HERO__PRESS_F);
  $('[multi_lang="HERO__PRESS_F_MOBILE"]').html(lang.de.HERO__PRESS_F_MOBILE);

  //features
  $('[multi_lang="FEATURE_MENU__FEATURES"]').html(
    lang.de.FEATURE_MENU__FEATURES
  );
  $('[multi_lang="FEATURE_MENU__CCM"]').html(lang.de.FEATURE_MENU__CCM);
  $('[multi_lang="FEATURE_MENU__EC"]').html(lang.de.FEATURE_MENU__EC);
  $('[multi_lang="FEATURE_MENU__TTIC"]').html(lang.de.FEATURE_MENU__TTIC);
  $('[multi_lang="FEATURE_SUBTITLE__CCM"]').html(lang.de.FEATURE_SUBTITLE__CCM);
  $('[multi_lang="FEATURE_SUBTITLE__EC"]').html(lang.de.FEATURE_SUBTITLE__EC);
  $('[multi_lang="FEATURE_SUBTITLE_TTIC"]').html(lang.de.FEATURE_SUBTITLE_TTIC);

  $('[multi_lang="CONTACT__OPENING_TEXT"]').html(lang.de.CONTACT__OPENING_TEXT);
  $('[multi_lang="CONTACT__CONTENT_TEXT"]').html(lang.de.CONTACT__CONTENT_TEXT);
  $('[multi_lang="CONTACT__CONTENT_TEXT_2"]').html(
    lang.de.CONTACT__CONTENT_TEXT_2
  );

  $('[multi_lang="COOKIES__TEXT"]').html(lang.de.COOKIES__TEXT);
  $('[multi_lang="COOKIES__YES"]').html(lang.de.COOKIES__YES);
  $('[multi_lang="COOKIES__NO"]').html(lang.de.COOKIES__NO);
}

function toEnglish() {
  document.title = "Chimp - Freelancers' Productivity Tool";

  //navbar
  $('[multi_lang="NAV_LINK__FEATURES"]').html(lang.en.NAV_LINK__FEATURES);
  $('[multi_lang="NAV_LINK__IMPRINT"]').html(lang.en.NAV_LINK__IMPRINT);
  $('[multi_lang="NAV_LINK__GET_CHIMP"]').html(lang.en.NAV_LINK__GET_CHIMP);

  //hero section
  $('[multi_lang="HERO__OPENING_WORD"]').html(lang.en.HERO__OPENING_WORD);
  $('[multi_lang="HERO__SUBTITLE"]').html(lang.en.HERO__SUBTITLE);
  $('[multi_lang="HERO__MEET_CHIMP"]').html(lang.en.HERO__MEET_CHIMP);

  //Mac screen
  $('[multi_lang="MAC_SCREEN__GM"]').html(lang.en.MAC_SCREEN__GM);
  $('[multi_lang="MAC_SCREEN__OVERVIEW"]').html(lang.en.MAC_SCREEN__OVERVIEW);
  $('[multi_lang="MAC_SCREEN__PROJECTS"]').html(lang.en.MAC_SCREEN__PROJECTS);
  $('[multi_lang="MAC_SCREEN__CONTACTS"]').html(lang.en.MAC_SCREEN__CONTACTS);
  $('[multi_lang="MAC_SCREEN__TAGS"]').html(lang.en.MAC_SCREEN__TAGS);
  $('[multi_lang="MAC_SCREEN__SETTINGS"]').html(lang.en.MAC_SCREEN__SETTINGS);
  $('[multi_lang="MAC_SCREEN__YOUR_CONTACTS"]').html(
    lang.en.MAC_SCREEN__YOUR_CONTACTS
  );
  $('[multi_lang="MAC_SCREEN__SEND_EMAIL"]').html(
    lang.en.MAC_SCREEN__SEND_EMAIL
  );
  $('[multi_lang="MAC_SCREEN__CALL"]').html(lang.en.MAC_SCREEN__CALL);
  $('[multi_lang="HERO__CTA_BTN"]').html(lang.en.HERO__CTA_BTN);
  $('[multi_lang="HERO__PRESS_F"]').html(lang.en.HERO__PRESS_F);
  $('[multi_lang="HERO__PRESS_F_MOBILE"]').html(lang.en.HERO__PRESS_F_MOBILE);
  //features
  $('[multi_lang="FEATURE_MENU__FEATURES"]').html(
    lang.en.FEATURE_MENU__FEATURES
  );
  $('[multi_lang="FEATURE_MENU__CCM"]').html(lang.en.FEATURE_MENU__CCM);
  $('[multi_lang="FEATURE_MENU__EC"]').html(lang.en.FEATURE_MENU__EC);
  $('[multi_lang="FEATURE_MENU__TTIC"]').html(lang.en.FEATURE_MENU__TTIC);
  $('[multi_lang="FEATURE_SUBTITLE__CCM"]').html(lang.en.FEATURE_SUBTITLE__CCM);
  $('[multi_lang="FEATURE_SUBTITLE__EC"]').html(lang.en.FEATURE_SUBTITLE__EC);
  $('[multi_lang="FEATURE_SUBTITLE_TTIC"]').html(lang.en.FEATURE_SUBTITLE_TTIC);

  $('[multi_lang="CONTACT__OPENING_TEXT"]').html(lang.en.CONTACT__OPENING_TEXT);
  $('[multi_lang="CONTACT__CONTENT_TEXT"]').html(lang.en.CONTACT__CONTENT_TEXT);
  $('[multi_lang="CONTACT__CONTENT_TEXT_2"]').html(
    lang.en.CONTACT__CONTENT_TEXT_2
  );

  $('[multi_lang="COOKIES__TEXT"]').html(lang.en.COOKIES__TEXT);
  $('[multi_lang="COOKIES__YES"]').html(lang.en.COOKIES__YES);
  $('[multi_lang="COOKIES__NO"]').html(lang.en.COOKIES__NO);
}
