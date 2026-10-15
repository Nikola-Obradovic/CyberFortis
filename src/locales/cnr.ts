import type { hr } from './hr';

// Montenegrin (crnogorski), served on cyberfortis.me.
export const cnr: typeof hr = {
  nav: {
    home: 'Početna',
    services: 'Usluge',
    solutions: 'Naša rješenja',
    about: 'O nama',
    careers: 'Karijere',
    contact: 'Kontakt',
    assessment: 'NIS2 procjena',
    toggleMenu: 'Otvori meni',
    language: 'Jezik',
  },

  home: {
    seo: {
      title: 'CyberFortis | Sajber bezbjednost u Crnoj Gori',
      description:
        'CyberFortis - Vaš pouzdan partner u zaštiti digitalnih resursa. NIS2 usklađenost, penetraciono testiranje, SOC usluge i bezbjednosne procjene za kompanije u Crnoj Gori.',
    },
  },

  hero: {
    badge: 'Pouzdana zaštita za vaše poslovanje',
    title: 'Zaštitite svoje digitalne resurse',
    subtitle:
      'Proaktivna sajber bezbjednost i NIS2 usklađenost za vaše poslovanje. Naš tim stručnjaka štiti vaše digitalne resurse i obezbjeđuje regulatornu spremnost.',
    ctaPrimary: 'NIS2 procjena bezbjednosti',
    ctaSecondary: 'Saznajte više',
    statCompanies: 'Zaštićenih kompanija',
    statDetection: 'Uspješnost detekcije',
    statYears: 'Godina iskustva',
  },

  whyUs: {
    eyebrow: 'Zašto mi',
    title: 'Vaša bezbjednost je naša misija',
    subtitle: 'Evo šta nas razlikuje od drugih pružalaca bezbjednosnih usluga.',
    badge: 'Uspješnost u sprječavanju napada',
    imageAlt: 'Operacije sajber bezbjednosti',
    features: [
      {
        title: 'Sertifikovani stručnjaci',
        description:
          'Naš tim čine sertifikovani profesionalci sa CISSP, CEH, OSCP i drugim priznatim sertifikatima.',
      },
      {
        title: 'Proaktivan pristup',
        description:
          'Ne čekamo da se incident dogodi. Kontinuirano tražimo i neutrališemo prijetnje prije nego što nanesu štetu.',
      },
      {
        title: 'Brza podrška',
        description:
          'Naš tim je uvijek dostupan. U slučaju incidenta, reagujemo u roku od nekoliko minuta.',
      },
    ],
    benefits: [
      'Prilagođena rješenja za vašu industriju',
      'Transparentno izvještavanje i komunikacija',
      'Bez skrivenih troškova',
      'Partnerski odnos, ne samo usluga',
      'Kontinuirano praćenje novih prijetnji',
      'Brza implementacija zaštitnih mjera',
      'Stručnost za NIS2, DORA i GDPR usklađenost',
    ],
  },

  services: {
    eyebrow: 'Šta radimo',
    title: 'Sveobuhvatna zaštita za vaše digitalno poslovanje',
    subtitle:
      'Od procjene rizika do aktivne odbrane - pokrivamo sve aspekte sajber bezbjednosti.',
    viewAll: 'Pogledajte sve usluge',
    pageEyebrow: 'Usluge',
    pageTitle: 'Sveobuhvatne bezbjednosne usluge',
    pageSubtitle:
      'Od procjene rizika do aktivne odbrane - pokrivamo sve aspekte sajber bezbjednosti. Prilagođena rješenja za vaše specifične potrebe.',
    requestQuote: 'Zatražite ponudu',
    seo: {
      title: 'Usluge',
      description:
        'Sveobuhvatne usluge sajber bezbjednosti - penetraciono testiranje, SOC, NIS2 usklađenost, zaštita baza podataka, EDR i mrežna zaštita.',
    },
    items: {
      uskladjenost: {
        title: 'NIS2 i regulatorna usklađenost',
        description:
          'Gap analiza i procjena spremnosti za NIS2, DORA i GDPR. Izrada bezbjednosnih politika i kontinuirana podrška za regulatornu usklađenost.',
        features: [
          'NIS2 gap analiza',
          'DORA procjena spremnosti',
          'GDPR revizija i usklađenost',
          'Izrada bezbjednosnih politika i procedura',
          'Priprema za regulatorne revizije',
        ],
      },
      pentest: {
        title: 'Penetraciono testiranje',
        description:
          'Simulirani napadi na vaše sisteme kako bismo otkrili slabosti i testirali vašu odbranu u kontrolisanim uslovima.',
        features: [
          'Testiranje web aplikacija',
          'Testiranje mrežne infrastrukture',
          'Socijalni inženjering',
          'Testiranje bežičnih mreža',
          'Red team operacije',
        ],
      },
      soc: {
        title: 'SOC usluge',
        description:
          'Neprekidan nadzor vaše mreže i sistema. Naš Security Operations Center detektuje prijetnje i reaguje na njih u realnom vremenu.',
        features: [
          'Kontinuirani nadzor bezbjednosnih događaja',
          'SIEM implementacija i upravljanje',
          'Analiza prijetnji',
          'Automatizovana detekcija anomalija',
          'Redovno izvještavanje',
        ],
      },
      'baze-podataka': {
        title: 'Zaštita baza podataka',
        description:
          'Kompletan monitoring, blokiranje i zaštita strukturisanih podataka u vašim bazama podataka, brže vrijeme rješavanja revizije i usklađivanja (NIS2, DORA).',
        features: [
          'Monitoring baza podataka u realnom vremenu',
          'Blokiranje neovlašćenog pristupa',
          'Zaštita strukturisanih podataka',
          'Ubrzana revizija i usklađivanje',
          'Podrška za NIS2 i DORA regulativu',
        ],
      },
      pam: {
        title: 'Upravljanje privilegovanim pristupom (PAM)',
        description:
          'Zaštita administratorskih naloga, upravljanje lozinkama i kompletan monitoring.',
        features: [
          'Zaštita privilegovanih naloga',
          'Centralizovano upravljanje lozinkama',
          'Nadzor i snimanje sesija',
          'Just-in-time pristup',
          'Detaljni revizijski tragovi',
        ],
      },
      ranjivosti: {
        title: 'Upravljanje ranjivostima',
        description:
          'Rješenje za upravljanje ranjivostima i proaktivno instaliranje zakrpa na kritičnim sistemima.',
        features: [
          'Kontinuirano skeniranje ranjivosti',
          'Prioritizacija prema riziku',
          'Proaktivno instaliranje zakrpa',
          'Integracija sa ITSM alatima',
          'Izvještavanje i praćenje napretka',
        ],
      },
      edr: {
        title: 'Zaštita endpointa (EDR)',
        description:
          'Kompletno rješenje za upravljanje serverima i radnim stanicama. Proaktivna odbrana od sajber prijetnji.',
        features: [
          'Detekcija prijetnji u realnom vremenu',
          'Automatska izolacija zaraženih uređaja',
          'Forenzička analiza',
          'Centralizovano upravljanje',
          'Integracija sa SIEM sistemima',
        ],
      },
      'mrezna-zastita': {
        title: 'Mrežna zaštita',
        description:
          'U saradnji sa vodećim vendorima za zaštitu mrežne infrastrukture, možemo vam ponuditi najbolja rješenja.',
        features: [
          'Next-gen firewall rješenja',
          'Segmentacija mreže',
          'IDS/IPS implementacija',
          'Zaštita od DDoS napada',
          'VPN i bezbjedan udaljeni pristup',
        ],
      },
      incident: {
        title: 'Odgovor na incidente',
        description:
          'Brza i efikasna reakcija na bezbjednosne incidente. Minimizujemo štetu i pomažemo u oporavku vaših sistema.',
        features: [
          'Hitna reakcija na incidente',
          'Forenzička analiza',
          'Izolacija prijetnji',
          'Oporavak sistema',
          'Post-incident izvještavanje',
        ],
      },
      procjene: {
        title: 'Bezbjednosne procjene',
        description:
          'Detaljna analiza vaše IT infrastrukture radi identifikacije ranjivosti i bezbjednosnih propusta prije nego što ih napadači iskoriste.',
        features: [
          'Analiza mrežne infrastrukture',
          'Pregled bezbjednosnih politika',
          'Procjena ranjivosti sistema',
          'Analiza konfiguracija',
          'Detaljan izvještaj sa preporukama',
        ],
      },
    },
  },

  partners: {
    eyebrow: 'Partneri',
    title: 'Kompanije koje nam vjeruju',
    prev: 'Prethodni partner',
    next: 'Sljedeći partner',
    goTo: 'Idi na partnera',
  },

  process: {
    eyebrow: 'Naš proces',
    title: 'Kako radimo',
    subtitle: 'Strukturisan pristup koji obezbjeđuje temeljnu zaštitu vašeg poslovanja.',
    steps: [
      {
        title: 'Inicijalne konsultacije',
        description:
          'Analiziramo vaše poslovanje, identifikujemo kritične sisteme i definišemo prioritete zaštite.',
      },
      {
        title: 'Procjena bezbjednosti',
        description:
          'Sprovodimo detaljnu analizu vaše infrastrukture, tražeći ranjivosti i potencijalne prijetnje.',
      },
      {
        title: 'Implementacija zaštite',
        description:
          'Postavljamo bezbjednosne mjere, konfigurišemo sisteme i aktiviramo neprekidan nadzor.',
      },
      {
        title: 'Kontinuirano praćenje',
        description:
          'Redovno izvještavanje, optimizacija zaštite i prilagođavanje novim prijetnjama.',
      },
    ],
  },

  industries: {
    eyebrow: 'Industrije',
    title: 'Industrije koje štitimo',
    subtitle:
      'Specijalizovane bezbjednosne usluge prilagođene specifičnim zahtjevima vaše industrije.',
    names: {
      finance: 'Finansije i bankarstvo',
      healthcare: 'Zdravstvo',
      publicSector: 'Javni sektor',
      manufacturing: 'Proizvodnja',
      retail: 'Maloprodaja',
      transport: 'Transport i logistika',
    },
  },

  careersSection: {
    eyebrow: 'Karijera',
    title: 'Pridruži se našem timu',
    text: 'Tražimo motivisane stručnjake koji žele da rade na najizazovnijim bezbjednosnim projektima. Ako želiš da gradiš karijeru u sajber bezbjednosti, javi nam se.',
    openPositions: 'Otvorenih pozicija: 6',
    fullTime: 'Puno radno vrijeme',
    viewAll: 'Pogledaj sve pozicije',
    cards: {
      'junior-cyber-security': 'Junior Cyber Security Inženjer (m/ž)',
      'medior-cyber-security': 'Medior Cyber Security Inženjer (m/ž)',
    },
  },

  cta: {
    title: 'Spremni za bezbjednije poslovanje?',
    subtitle:
      'Zakažite besplatnu NIS2, DORA ili GDPR procjenu sa našim stručnjacima. Analiziraćemo vaše potrebe i predložićemo optimalno rješenje za usklađenost vaše organizacije.',
    button: 'Zakažite NIS2 procjenu',
    orCall: 'ili pozovite',
  },

  footer: {
    description:
      'Vaš pouzdan partner u zaštiti digitalnih resursa. Pružamo proaktivnu sajber bezbjednost za savremene prijetnje.',
    servicesHeading: 'Usluge',
    companyHeading: 'Kompanija',
    contactHeading: 'Kontakt',
    serviceLinks: {
      procjene: 'Bezbjednosne procjene',
      pentest: 'Penetraciono testiranje',
      soc: 'SOC usluge',
      incident: 'Odgovor na incidente',
      uskladjenost: 'NIS2 usklađenost',
    },
    address: 'Trnjanska cesta 59, 10000 Zagreb, Hrvatska',
    rights: 'Sva prava zadržana.',
  },

  about: {
    seo: {
      title: 'O nama',
      description:
        'CyberFortis - vaš partner za sajber bezbjednost u Crnoj Gori. Upoznajte naš stručni tim, vrijednosti i misiju zaštite digitalnih resursa.',
    },
    eyebrow: 'O nama',
    title: 'Predvodnici sajber bezbjednosti u Crnoj Gori',
    intro:
      'CyberFortis je kompanija za sajber bezbjednost. Osnovani smo sa misijom zaštite digitalnih resursa crnogorskih kompanija i institucija od sve sofisticiranijih prijetnji.',
    storyEyebrow: 'Naša priča',
    storyTitle:
      'Cyberfortis – kompanija koja spaja lokalno iskustvo iz industrije sa projektima sajber bezbjednosti u Crnoj Gori i regionu',
    storyParagraphs: [
      'Naš tim je podijeljen na defensive (plavi tim) i offensive (crveni tim) stručnjake za sajber bezbjednost, čime pokrivamo cijeli spektar zaštite - od prevencije i detekcije do simulacije napada.',
      'Naši inženjeri radili su na najsloženijim bezbjednosnim projektima u regionu, sarađujući sa vodećim bankama, energetskim kompanijama i institucijama u sektoru zdravstva. Posjedujemo najprestižnije sertifikate iz svijeta sajber bezbjednosti i bogato iskustvo u radu sa vodećim vendorima kao što su IBM, Check Point, Qualys i CrowdStrike.',
      'Naša vizija je stvaranje novog, crnogorskog tima specijalista za sajber bezbjednost koji će kroz znanje, iskustvo i posvećenost graditi bezbjedniju digitalnu budućnost Crne Gore.',
    ],
    teamImageAlt: 'CyberFortis tim',
    yearsBadge: 'Godina iskustva',
    valuesEyebrow: 'Naše vrijednosti',
    valuesTitle: 'Principi koji vode svaku našu odluku',
    values: [
      {
        title: 'Integritet',
        description:
          'Djelujemo etično i transparentno. Vaše povjerenje je temelj našeg poslovanja.',
      },
      {
        title: 'Izvrsnost',
        description:
          'Težimo savršenstvu u svemu što radimo. Kontinuirano se usavršavamo i pratimo najnovije trendove.',
      },
      {
        title: 'Proaktivnost',
        description:
          'Ne čekamo probleme - predviđamo ih i djelujemo preventivno kako bismo vas zaštitili.',
      },
      {
        title: 'Partnerstvo',
        description:
          'Vaš uspjeh je naš uspjeh. Gradimo dugoročne odnose zasnovane na uzajamnom povjerenju.',
      },
    ],
    teamEyebrow: 'Naš tim',
    teamTitle: 'Upoznajte stručnjake koji štite vaše poslovanje',
    team: [
      {
        role: 'Direktor i osnivač',
        bio: '20+ godina iskustva u sajber bezbjednosti. Bivši rukovodilac bezbjednosti u nacionalnoj banci.',
      },
      {
        role: 'Rukovoditeljka SOC tima',
        bio: 'CISSP sertifikovana stručnjakinja. Specijalizovana za detekciju i odgovor na napade.',
      },
      {
        role: 'Rukovodilac penetracionog testiranja',
        bio: 'OSCP, CEH sertifikati. Otkrio ranjivosti u sistemima Fortune 500 kompanija.',
      },
      {
        role: 'Rukovoditeljka za usklađenost',
        bio: 'Stručnjakinja za GDPR, NIS2 i ISO 27001. Pomaže kompanijama u regulatornoj usklađenosti.',
      },
    ],
  },

  contact: {
    seo: {
      title: 'Kontakt',
      description:
        'Kontaktirajte CyberFortis - vaš partner za sajber bezbjednost. Adresa: Trnjanska cesta 59, Zagreb. Email: info@cyberfortis.hr.',
    },
    eyebrow: 'Kontakt',
    title: 'Kontaktirajte nas',
    subtitle:
      'Spremni smo da odgovorimo na vaša pitanja i pomognemo vam u zaštiti vašeg poslovanja. Javite nam se - prvi korak ka bezbjednijem poslovanju.',
    infoHeading: 'Informacije',
    email: 'Email',
    phone: 'Telefon',
    address: 'Adresa',
    addressLine1: 'Trnjanska cesta 59',
    addressLine2: '10000 Zagreb, Hrvatska',
    hours: 'Radno vrijeme',
    hoursValue: 'Pon - Pet: 08:00 - 17:00',
    socHours: 'SOC: Non-stop',
    illustrationAlt: 'Ilustracija zaštitnog štita sajber bezbjednosti',
    mapTitle: 'CyberFortis lokacija',
  },

  solutions: {
    seo: {
      title: 'Naša rješenja',
      description:
        'Cyberfortis SIEM pruža pouzdan i efikasan način za unapređenje bezbjednosnog nadzora u svim organizacijama.',
    },
    eyebrow: 'Naša rješenja',
    title: 'Sopstvena rješenja za sajber bezbjednost',
    subtitle:
      'Razvijamo sopstvene alate prilagođene stvarnim potrebama bezbjednosnih timova.',
    items: [
      {
        title: 'Cyberfortis SIEM',
        paragraphs: [
          'Cyberfortis SIEM pruža pouzdan i efikasan način za unapređenje bezbjednosnog nadzora u svim organizacijama. Naš SIEM nudi jasan uvid u ključne događaje i potencijalne rizike, što omogućava brzu reakciju i brže donošenje odluka. Sistem posjeduje mogućnosti za identifikaciju sumnjivih aktivnosti i upozorava bezbjednosne timove prije eskalacije incidenta. Integracijom podataka iz različitih izvora na jedinstvenoj platformi dobija se prikaz i konsolidacija svih bezbjednosno važnih događaja unutar IT infrastrukture, ali i šire. Njegova skalabilnost omogućava nesmetan rast i prilagođavanje u poslovnom okruženju. Integracije sa različitim servisima i mogućnosti trijaže incidenata čine ga jednim od neizostavnih alata bezbjednosnih timova.',
        ],
      },
      {
        title: 'Cyberfortis Asset Management',
        paragraphs: [
          'Cyberfortis Asset Management platforma je softversko rješenje koje organizacijama omogućava centralizovano upravljanje, praćenje i optimizaciju digitalnih i fizičkih resursa. Korišćenjem jedinstvene platforme, kompanije mogu na jednom mjestu imati pregled nad svojom IT infrastrukturom, opremom, aplikacijama i digitalnim sadržajem.',
          'Ovakve platforme pomažu u boljoj kontroli troškova, povećanju bezbjednosti i efikasnijem upravljanju resursima kroz čitav njihov životni ciklus – od nabavke do zamjene ili povlačenja iz upotrebe. Automatsko praćenje promjena i detaljni izvještaji omogućavaju menadžmentu da donosi informisane odluke i optimizuje poslovne procese.',
        ],
      },
      {
        title: 'Cyberfortis Data Protection',
        paragraphs: [
          'Cyberfortis rješenje za monitoring i hardening baza podataka omogućava organizacijama da zaštite svoje najdragocjenije podatke kroz kontinuirano praćenje aktivnosti i jačanje bezbjednosnih postavki baza. Platforma nadzire pristup bazama podataka u realnom vremenu, prepoznaje sumnjive aktivnosti i pomaže u sprječavanju neovlašćenog pristupa ili zloupotrebe podataka.',
          'Pored monitoringa, rješenje omogućava hardening baza podataka, odnosno automatsku provjeru bezbjednosnih konfiguracija i preporuke za njihovo unapređenje u skladu sa bezbjednosnim standardima i najboljim praksama. Na taj način organizacije mogu smanjiti bezbjednosne rizike, povećati usklađenost sa regulativama i obezbijediti stabilno i bezbjedno okruženje za rad svojih aplikacija.',
        ],
      },
    ],
  },

  careers: {
    seo: {
      title: 'Karijere',
      description:
        'Pridruži se CyberFortis timu - otvorene pozicije za inženjere sajber bezbjednosti. Gradi karijeru u sajber bezbjednosti u Crnoj Gori.',
    },
    badge: 'Karijere',
    title: 'Pridruži se našem timu',
    subtitle:
      'Tražimo motivisane stručnjake koji žele da rade na najizazovnijim bezbjednosnim projektima. Gradi karijeru u sajber bezbjednosti sa nama.',
    openPositions: 'Otvorenih pozicija: 6',
    fullTime: 'Puno radno vrijeme',
    location: 'Hrvatska / Remote',
    deadlineLabel: 'Rok',
    tasksHeading: 'Opis posla',
    qualificationsHeading: 'Potrebne kvalifikacije',
    preferredHeadingJunior: 'Prednost (nije uslov)',
    preferredHeadingMedior: 'Prednost imaju kandidati sa',
    benefitsHeading: 'Nudimo',
    interested: 'Zainteresovani?',
    applyText: 'Prijave (CV + kratko motivaciono pismo) slati na:',
    bottomTitle: 'Ne nalaziš odgovarajuću poziciju?',
    bottomText:
      'Uvijek smo otvoreni za razgovor sa talentovanim stručnjacima. Pošalji nam svoj CV i javićemo ti se kad se otvori prilika.',
    bottomCta: 'Kontaktiraj nas',
    jobs: {
      'junior-cyber-security': {
        title: 'Junior Cyber Security Inženjer',
        level: 'Junior',
        description:
          'Zbog širenja tima tražimo Junior Cyber Security Inženjera koji želi da započne ili razvija karijeru u domenu informacione i sajber bezbjednosti kroz praktičan rad, mentorstvo i kontinuirano učenje.',
        tasks: [
          'Praćenje bezbjednosnih događaja i podrška u analizi incidenata',
          'Učešće u implementaciji i održavanju bezbjednosnih rješenja (firewall, endpoint zaštita, SIEM, hardening DB)',
          'Osnovne bezbjednosne provjere sistema (hardening, patching, vulnerability scanning)',
          'Pomoć u izradi i održavanju bezbjednosne dokumentacije i procedura',
          'Saradnja sa iskusnijim inženjerima na bezbjednosnim projektima',
          'Praćenje aktuelnih sajber prijetnji i učenje kroz realne scenarije',
        ],
        qualifications: [
          'Završeno IT obrazovanje (računari, informatika, mreže ili srodno)',
          'Osnovno razumijevanje mreža i mrežne bezbjednosti (TCP/IP, DNS, firewall)',
          'Osnovno razumijevanje operativnih sistema (Windows i/ili Linux)',
          'Osnovno poznavanje pojmova i praksi sajber bezbjednosti',
          'Spremnost za učenje i profesionalni razvoj',
          'Odgovornost, analitičnost i timski duh',
          'Osnovno znanje engleskog jezika',
        ],
        preferred: [
          'Osnovno iskustvo sa bezbjednosnim alatima (SIEM, antivirus, vulnerability scanner)',
          'Sertifikati ili priprema za sertifikate (Security+, CEH – junior nivo)',
          'Poznavanje osnova skriptovanja (Python, Bash, PowerShell)',
          'Interesovanje za SOC, incident response ili cloud security',
        ],
        benefits: [
          'Mentorstvo i strukturisano uvođenje u posao',
          'Rad na stvarnim bezbjednosnim projektima',
          'Kontinuiranu edukaciju i razvoj karijere',
          'Podršku za sertifikacije i treninge',
          'Prijatno i profesionalno radno okruženje',
          'Mogućnost napredovanja do pozicije Medior Cyber Security Inženjera',
          'Fleksibilno radno vrijeme / hibridni ili remote rad (po dogovoru)',
        ],
      },
      'medior-cyber-security': {
        title: 'Medior Cyber Security Inženjer',
        level: 'Medior',
        description:
          'Zbog rasta i razvoja našeg tima, tražimo Medior Cyber Security Inženjera koji će učestvovati u zaštiti informacionih sistema, unapređenju bezbjednosnih procesa i odgovoru na bezbjednosne incidente.',
        tasks: [
          'Implementacija i održavanje bezbjednosnih rješenja (SIEM, EDR, firewall, DLP i sl.)',
          'Praćenje, analiza i odgovor na bezbjednosne incidente',
          'Učešće u procjeni rizika i bezbjednosnim analizama (vulnerability assessment, hardening)',
          'Saradnja na internim i eksternim bezbjednosnim testiranjima (penetration testing, u saradnji sa timom)',
          'Izrada i održavanje bezbjednosne dokumentacije, politika i procedura',
          'Praćenje novih prijetnji, ranjivosti i trendova u oblasti sajber bezbjednosti',
          'Saradnja sa IT timovima i klijentima na unapređenju nivoa bezbjednosti',
        ],
        qualifications: [
          'Najmanje 2–4 godine iskustva u oblasti sajber bezbjednosti',
          'Dobro poznavanje mrežnih protokola i bezbjednosti (TCP/IP, DNS, VPN, firewall)',
          'Dobro poznavanje operativnih sistema (Linux, Windows)',
          'Dobro poznavanje bezbjednosnih alata (SIEM, IDS/IPS, endpoint protection)',
          'Razumijevanje standarda i okvira (ISO 27001, NIST, CIS)',
          'Analitičko razmišljanje i sposobnost samostalnog rada',
          'Dobro znanje engleskog jezika (pisano i usmeno)',
        ],
        preferred: [
          'Relevantnim sertifikatima (CEH, Security+, CySA+, OSCP, ISO 27001 LI/LA)',
          'Iskustvom u incident response ili SOC okruženju',
          'Poznavanjem alata za automatizaciju i skriptovanje (Python, Bash, PowerShell)',
          'Iskustvom u radu sa regulativama (GDPR, NIS2)',
        ],
        benefits: [
          'Rad u stručnom i motivisanom timu',
          'Rad na zanimljivim i izazovnim bezbjednosnim projektima',
          'Kontinuirano učenje i profesionalni razvoj',
          'Podršku za sertifikacije i edukacije',
        ],
      },
    },
  },
};
