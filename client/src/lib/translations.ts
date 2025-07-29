export interface Translation {
  nav: {
    home: string;
    about: string;
    projects: string;
    pricing: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    viewRooms: string;
    learnMore: string;
  };
  features: {
    title: string;
    subtitle: string;
    noBureaucracy: {
      title: string;
      description: string;
    };
    allInclusive: {
      title: string;
      description: string;
    };
    international: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    subtitle: string;
    flexible: {
      title: string;
      description: string;
    };
    legal: {
      title: string;
      description: string;
    };
    purposeBuilt: {
      title: string;
      description: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    amsterdam: {
      title: string;
      status: string;
      description: string;
      rooms: string;
      studios: string;
      features: {
        transport: string;
        shopping: string;
        internet: string;
      };
    };
    haarlem: {
      title: string;
      status: string;
      description: string;
      rooms: string;
      studios: string;
      features: {
        train: string;
        historic: string;
        bike: string;
      };
    };
    viewDetails: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    room: {
      title: string;
      subtitle: string;
      perMonth: string;
      annually: string;
      features: {
        privateRoom: string;
        sharedSpaces: string;
        internet: string;
        utilities: string;
        taxes: string;
      };
      apply: string;
    };
    studio: {
      title: string;
      subtitle: string;
      perMonth: string;
      annually: string;
      popular: string;
      features: {
        privateStudio: string;
        ownSpaces: string;
        internet: string;
        utilities: string;
        taxes: string;
      };
      apply: string;
    };
    whyAnnual: {
      title: string;
      noCredit: {
        title: string;
        description: string;
      };
      fairAccess: {
        title: string;
        description: string;
      };
      peace: {
        title: string;
        description: string;
      };
    };
  };
  faq: {
    title: string;
    subtitle: string;
    questions: {
      whoCanApply: {
        question: string;
        answer: string;
      };
      documents: {
        question: string;
        answer: string;
      };
      leaveBefore: {
        question: string;
        answer: string;
      };
      included: {
        question: string;
        answer: string;
      };
      legal: {
        question: string;
        answer: string;
      };
      registration: {
        question: string;
        answer: string;
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      location: string;
      roomType: string;
      currentStatus: string;
      movingDate: string;
      additionalInfo: string;
      placeholder: string;
      consent: string;
      submit: string;
      submitSuccess: string;
    };
    info: {
      title: string;
      email: string;
      emailResponse: string;
      phone: string;
      phoneHours: string;
      office: string;
      officeNote: string;
    };
    steps: {
      title: string;
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
      step4: {
        title: string;
        description: string;
      };
    };
    options: {
      amsterdam: string;
      haarlem: string;
      either: string;
      room: string;
      studio: string;
      student: string;
      graduate: string;
      jobSeeker: string;
      employed: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    legal: string;
    copyright: string;
  };
}

export const en: Translation = {
  nav: {
    home: "Home",
    about: "About", 
    projects: "Projects",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Contact",
  },
  hero: {
    title: "Housing for International Students",
    subtitle: "After Graduation",
    description: "No paperwork hassles. No bureaucracy. Just affordable, flexible housing for students and graduates who want to stay in the Netherlands.",
    viewRooms: "View Available Rooms",
    learnMore: "Learn More",
  },
  features: {
    title: "Why Choose ASH?",
    subtitle: "We remove the barriers that prevent international students from finding housing in the Netherlands.",
    noBureaucracy: {
      title: "No Bureaucracy",
      description: "No payslips, bank statements, BRP registration, or employer letters required. Just simple, straightforward housing.",
    },
    allInclusive: {
      title: "All-Inclusive",
      description: "Fully furnished rooms with utilities, internet, municipal taxes, and everything you need included in one price.",
    },
    international: {
      title: "International Friendly",
      description: "Specifically designed for international students and graduates aged 18-35 who want to build their future in the Netherlands.",
    },
  },
  about: {
    title: "About ASH — After Student Housing",
    description1: "International students contribute to the life and energy of Dutch cities. But when their studies come to an end, their housing options often disappear.",
    description2: "Student rooms must be vacated. Studios are temporary. And the regular housing market is a dead end: no permanent job contract, no Dutch paperwork, no long rental history.",
    subtitle: "ASH offers a real alternative.",
    flexible: {
      title: "Flexible & Creative",
      description: "Converting vacant buildings into quality housing solutions",
    },
    legal: {
      title: "Legally Sound",
      description: "Working with property owners and municipalities transparently",
    },
    purposeBuilt: {
      title: "Purpose-Built",
      description: "Specifically for international students and recent graduates",
    },
  },
  projects: {
    title: "Our Locations",
    subtitle: "We're launching in two vibrant Dutch cities with more locations coming soon.",
    amsterdam: {
      title: "Amsterdam East",
      status: "Opening Soon",
      description: "Former office building converted into modern rooms and studios. Located in vibrant Amsterdam-East with excellent transport connections.",
      rooms: "Rooms Available",
      studios: "Studios Available",
      features: {
        transport: "10 minutes to city center",
        shopping: "Supermarkets & cafes nearby",
        internet: "High-speed internet included",
      },
    },
    haarlem: {
      title: "Haarlem Center", 
      status: "Available Now",
      description: "Move-in ready building in the heart of historic Haarlem. Perfect for students and graduates who love charm and culture.",
      rooms: "Rooms Available",
      studios: "Studios Available",
      features: {
        train: "15 minutes to Amsterdam",
        historic: "Historic city center location",
        bike: "Bike-friendly neighborhood",
      },
    },
    viewDetails: "View Details",
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle: "All-inclusive pricing with no hidden costs. Pay for one year upfront and enjoy hassle-free living.",
    room: {
      title: "Room",
      subtitle: "Perfect for students and budget-conscious graduates",
      perMonth: "per month",
      annually: "paid annually",
      features: {
        privateRoom: "Fully furnished private room",
        sharedSpaces: "Shared kitchen & bathroom",
        internet: "High-speed internet",
        utilities: "All utilities included",
        taxes: "Municipal taxes covered",
      },
      apply: "Apply for Room",
    },
    studio: {
      title: "Studio",
      subtitle: "Complete independence with your own space",
      perMonth: "per month",
      annually: "paid annually",
      popular: "Most Popular",
      features: {
        privateStudio: "Private studio apartment",
        ownSpaces: "Own kitchen & bathroom",
        internet: "High-speed internet",
        utilities: "All utilities included", 
        taxes: "Municipal taxes covered",
      },
      apply: "Apply for Studio",
    },
    whyAnnual: {
      title: "Why Annual Payment?",
      noCredit: {
        title: "No Credit Checks",
        description: "Annual payment eliminates the need for credit history or guarantors",
      },
      fairAccess: {
        title: "Fair Access",
        description: "Equal opportunity housing regardless of employment status",
      },
      peace: {
        title: "Peace of Mind",
        description: "Secure your housing for a full year without monthly stress",
      },
    },
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about ASH housing",
    questions: {
      whoCanApply: {
        question: "Who can apply for ASH housing?",
        answer: "Anyone between 18 and 35 years old who is studying, recently graduated, or wants to stay in the Netherlands to build their future. International students are especially welcome, and we don't require Dutch residency or paperwork.",
      },
      documents: {
        question: "What documents do I need to apply?",
        answer: "We require minimal documentation: just a valid ID and proof of student status (if applicable). We don't need payslips, bank statements, BRP registration, employer letters, or credit checks. Our simplified process focuses on making housing accessible.",
      },
      leaveBefore: {
        question: "Can I leave before the year is up?",
        answer: "Yes, you can terminate your contract with 30 days notice. However, the annual payment model means we cannot provide refunds for unused months. We recommend this housing for people planning to stay in the Netherlands for at least 8-10 months.",
      },
      included: {
        question: "What's included in the rent?",
        answer: "Everything you need: gas, water, electricity, high-speed internet, complete furniture, municipal taxes, and basic household items. You just need to bring your personal belongings and move in.",
      },
      legal: {
        question: "Is ASH housing legal and safe?",
        answer: "Absolutely. We work directly with property owners and municipalities to ensure all our housing projects are fully legal and compliant. Our contracts are standard rental agreements, and all buildings meet Dutch safety and housing standards.",
      },
      registration: {
        question: "How do I register for municipal services?",
        answer: "You can use your ASH address for municipal registration (BRP), opening bank accounts, and other official purposes. We provide all necessary documentation to support your registration process with local authorities.",
      },
    },
  },
  contact: {
    title: "Ready to Apply?",
    subtitle: "Get in touch to secure your place in Amsterdam or Haarlem. We'll respond within 24 hours.",
    form: {
      title: "Apply Now",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      location: "Preferred Location",
      roomType: "Room Type",
      currentStatus: "Current Status",
      movingDate: "When do you need housing?",
      additionalInfo: "Additional Information",
      placeholder: "Tell us about yourself, your study program, future plans, or any questions...",
      consent: "I understand that ASH requires annual payment upfront and that I'm eligible for this housing as someone aged 18-35 who is studying, graduated, or building a future in the Netherlands.",
      submit: "Submit Application",
      submitSuccess: "Thank you for your application! We will contact you within 24 hours.",
    },
    info: {
      title: "Contact Information",
      email: "Email",
      emailResponse: "We respond within 24 hours",
      phone: "Phone",
      phoneHours: "Mon-Fri, 9:00-17:00",
      office: "Office",
      officeNote: "By appointment only",
    },
    steps: {
      title: "Next Steps",
      step1: {
        title: "Submit Application",
        description: "Fill out the form with your preferences",
      },
      step2: {
        title: "Quick Review", 
        description: "We'll contact you within 24 hours",
      },
      step3: {
        title: "Virtual Tour",
        description: "See your potential new home online",
      },
      step4: {
        title: "Move In",
        description: "Sign contract and start your new chapter",
      },
    },
    options: {
      amsterdam: "Amsterdam East",
      haarlem: "Haarlem Center",
      either: "Either location",
      room: "Room (€525/month)",
      studio: "Studio (€1,250/month)",
      student: "Current student",
      graduate: "Recent graduate",
      jobSeeker: "Looking for work",
      employed: "Already employed",
    },
  },
  footer: {
    description: "After Student Housing provides accessible, flexible housing solutions for international students and graduates in the Netherlands.",
    quickLinks: "Quick Links",
    legal: "Legal",
    copyright: "© 2024 ASH - After Student Housing. All rights reserved.",
  },
};

export const nl: Translation = {
  nav: {
    home: "Home",
    about: "Over Ons",
    projects: "Projecten", 
    pricing: "Prijzen",
    faq: "Veelgestelde Vragen",
    contact: "Contact",
  },
  hero: {
    title: "Huisvesting voor Internationale Studenten",
    subtitle: "Na Afstuderen",
    description: "Geen papierwerk gedoe. Geen bureaucratie. Gewoon betaalbare, flexibele huisvesting voor studenten en afgestudeerden die in Nederland willen blijven.",
    viewRooms: "Bekijk Beschikbare Kamers",
    learnMore: "Meer Informatie",
  },
  features: {
    title: "Waarom Kiezen voor ASH?",
    subtitle: "Wij wegnemen de barrières die internationale studenten belemmeren bij het vinden van huisvesting in Nederland.",
    noBureaucracy: {
      title: "Geen Bureaucratie",
      description: "Geen loonstroken, bankafschriften, BRP-registratie of werkgeversverklaringen vereist. Gewoon eenvoudige, duidelijke huisvesting.",
    },
    allInclusive: {
      title: "All-Inclusive",
      description: "Volledig gemeubileerde kamers met nutsvoorzieningen, internet, gemeentelijke belastingen en alles wat je nodig hebt voor één prijs.",
    },
    international: {
      title: "Internationaal Vriendelijk",
      description: "Speciaal ontworpen voor internationale studenten en afgestudeerden van 18-35 jaar die hun toekomst in Nederland willen opbouwen.",
    },
  },
  about: {
    title: "Over ASH — After Student Housing",
    description1: "Internationale studenten dragen bij aan het leven en de energie van Nederlandse steden. Maar wanneer hun studie eindigt, verdwijnen hun huisvestingsopties vaak.",
    description2: "Studentenkamers moeten worden ontruimd. Studio's zijn tijdelijk. En de reguliere woningmarkt is een doodlopende weg: geen permanent arbeidscontract, geen Nederlandse papieren, geen lange huurgeschiedenis.",
    subtitle: "ASH biedt een echt alternatief.",
    flexible: {
      title: "Flexibel & Creatief",
      description: "Leegstaande gebouwen omzetten naar kwaliteitswoningen",
    },
    legal: {
      title: "Juridisch Solide",
      description: "Transparant samenwerken met eigenaren en gemeenten",
    },
    purposeBuilt: {
      title: "Speciaal Gebouwd",
      description: "Specifiek voor internationale studenten en recent afgestudeerden",
    },
  },
  projects: {
    title: "Onze Locaties",
    subtitle: "We lanceren in twee levendige Nederlandse steden met meer locaties binnenkort.",
    amsterdam: {
      title: "Amsterdam Oost",
      status: "Binnenkort Open",
      description: "Voormalig kantoorgebouw omgebouwd tot moderne kamers en studio's. Gelegen in het levendige Amsterdam-Oost met uitstekende vervoersverbindingen.",
      rooms: "Kamers Beschikbaar",
      studios: "Studio's Beschikbaar",
      features: {
        transport: "10 minuten naar het centrum",
        shopping: "Supermarkten & cafés in de buurt",
        internet: "Hoge snelheid internet inbegrepen",
      },
    },
    haarlem: {
      title: "Haarlem Centrum",
      status: "Nu Beschikbaar",
      description: "Instapklaar gebouw in het hart van historisch Haarlem. Perfect voor studenten en afgestudeerden die houden van charme en cultuur.",
      rooms: "Kamers Beschikbaar",
      studios: "Studio's Beschikbaar",
      features: {
        train: "15 minuten naar Amsterdam",
        historic: "Historische binnenstadlocatie",
        bike: "Fietsvriendelijke buurt",
      },
    },
    viewDetails: "Bekijk Details",
  },
  pricing: {
    title: "Eenvoudige, Transparante Prijzen",
    subtitle: "All-inclusive prijzen zonder verborgen kosten. Betaal een jaar vooruit en geniet van zorgeloos wonen.",
    room: {
      title: "Kamer",
      subtitle: "Perfect voor studenten en budgetbewuste afgestudeerden",
      perMonth: "per maand",
      annually: "jaarlijks betaald",
      features: {
        privateRoom: "Volledig gemeubileerde privékamer",
        sharedSpaces: "Gedeelde keuken & badkamer",
        internet: "Hoge snelheid internet",
        utilities: "Alle nutsvoorzieningen inbegrepen",
        taxes: "Gemeentelijke belastingen gedekt",
      },
      apply: "Aanmelden voor Kamer",
    },
    studio: {
      title: "Studio",
      subtitle: "Volledige onafhankelijkheid met je eigen ruimte",
      perMonth: "per maand",
      annually: "jaarlijks betaald",
      popular: "Meest Populair",
      features: {
        privateStudio: "Privé studio appartement",
        ownSpaces: "Eigen keuken & badkamer",
        internet: "Hoge snelheid internet",
        utilities: "Alle nutsvoorzieningen inbegrepen",
        taxes: "Gemeentelijke belastingen gedekt",
      },
      apply: "Aanmelden voor Studio",
    },
    whyAnnual: {
      title: "Waarom Jaarlijkse Betaling?",
      noCredit: {
        title: "Geen Kredietcontroles",
        description: "Jaarlijkse betaling elimineert de behoefte aan kredietgeschiedenis of garanties",
      },
      fairAccess: {
        title: "Eerlijke Toegang", 
        description: "Gelijke kansen op huisvesting ongeacht arbeidsstatus",
      },
      peace: {
        title: "Gemoedsrust",
        description: "Beveilig je huisvesting voor een vol jaar zonder maandelijkse stress",
      },
    },
  },
  faq: {
    title: "Veelgestelde Vragen",
    subtitle: "Alles wat je moet weten over ASH huisvesting",
    questions: {
      whoCanApply: {
        question: "Wie kan zich aanmelden voor ASH huisvesting?",
        answer: "Iedereen tussen 18 en 35 jaar oud die studeert, recent is afgestudeerd, of in Nederland wil blijven om hun toekomst op te bouwen. Internationale studenten zijn speciaal welkom, en we vereisen geen Nederlandse verblijfsstatus of papierwerk.",
      },
      documents: {
        question: "Welke documenten heb ik nodig om aan te melden?",
        answer: "We vereisen minimale documentatie: alleen een geldig ID en bewijs van studentenstatus (indien van toepassing). We hebben geen loonstroken, bankafschriften, BRP-registratie, werkgeversverklaringen of kredietcontroles nodig. Ons vereenvoudigde proces richt zich op toegankelijke huisvesting.",
      },
      leaveBefore: {
        question: "Kan ik vertrekken voordat het jaar om is?",
        answer: "Ja, je kunt je contract opzeggen met 30 dagen opzegtermijn. Het jaarlijkse betalingsmodel betekent echter dat we geen terugbetaling kunnen bieden voor ongebruikte maanden. We raden deze huisvesting aan voor mensen die van plan zijn minstens 8-10 maanden in Nederland te blijven.",
      },
      included: {
        question: "Wat is inbegrepen in de huur?",
        answer: "Alles wat je nodig hebt: gas, water, elektriciteit, hoge snelheid internet, complete meubels, gemeentelijke belastingen en basis huishoudelijke artikelen. Je hoeft alleen je persoonlijke spullen mee te nemen en in te trekken.",
      },
      legal: {
        question: "Is ASH huisvesting legaal en veilig?",
        answer: "Absoluut. We werken direct samen met eigenaren en gemeenten om ervoor te zorgen dat al onze huisvestingsprojecten volledig legaal en compliant zijn. Onze contracten zijn standaard huurovereenkomsten, en alle gebouwen voldoen aan Nederlandse veiligheids- en huisvestingsnormen.",
      },
      registration: {
        question: "Hoe registreer ik me voor gemeentelijke diensten?",
        answer: "Je kunt je ASH-adres gebruiken voor gemeentelijke registratie (BRP), het openen van bankrekeningen en andere officiële doeleinden. We verstrekken alle benodigde documentatie om je registratieproces bij lokale autoriteiten te ondersteunen.",
      },
    },
  },
  contact: {
    title: "Klaar om je Aan te Melden?",
    subtitle: "Neem contact op om je plek in Amsterdam of Haarlem veilig te stellen. We reageren binnen 24 uur.",
    form: {
      title: "Meld je Nu Aan",
      firstName: "Voornaam",
      lastName: "Achternaam",
      email: "E-mailadres",
      phone: "Telefoonnummer",
      location: "Gewenste Locatie",
      roomType: "Kamertype",
      currentStatus: "Huidige Status",
      movingDate: "Wanneer heb je huisvesting nodig?",
      additionalInfo: "Aanvullende Informatie",
      placeholder: "Vertel ons over jezelf, je studieprogramma, toekomstplannen of eventuele vragen...",
      consent: "Ik begrijp dat ASH jaarlijkse vooruitbetaling vereist en dat ik geschikt ben voor deze huisvesting als iemand van 18-35 jaar die studeert, is afgestudeerd of een toekomst opbouwt in Nederland.",
      submit: "Aanmelding Versturen",
      submitSuccess: "Bedankt voor je aanmelding! We nemen binnen 24 uur contact met je op.",
    },
    info: {
      title: "Contactinformatie",
      email: "E-mail",
      emailResponse: "We reageren binnen 24 uur",
      phone: "Telefoon",
      phoneHours: "Ma-Vr, 9:00-17:00",
      office: "Kantoor",
      officeNote: "Alleen op afspraak",
    },
    steps: {
      title: "Volgende Stappen",
      step1: {
        title: "Aanmelding Versturen",
        description: "Vul het formulier in met je voorkeuren",
      },
      step2: {
        title: "Snelle Beoordeling",
        description: "We nemen binnen 24 uur contact met je op",
      },
      step3: {
        title: "Virtuele Rondleiding",
        description: "Bekijk je potentiële nieuwe thuis online",
      },
      step4: {
        title: "Intrekken",
        description: "Contract tekenen en je nieuwe hoofdstuk beginnen",
      },
    },
    options: {
      amsterdam: "Amsterdam Oost",
      haarlem: "Haarlem Centrum", 
      either: "Beide locaties",
      room: "Kamer (€525/maand)",
      studio: "Studio (€1.250/maand)",
      student: "Huidige student",
      graduate: "Recent afgestudeerd",
      jobSeeker: "Op zoek naar werk",
      employed: "Al werkzaam",
    },
  },
  footer: {
    description: "After Student Housing biedt toegankelijke, flexibele huisvestingsoplossingen voor internationale studenten en afgestudeerden in Nederland.",
    quickLinks: "Snelle Links",
    legal: "Juridisch",
    copyright: "© 2024 ASH - After Student Housing. Alle rechten voorbehouden.",
  },
};

export type Language = 'en' | 'nl';
export const translations = { en, nl };
