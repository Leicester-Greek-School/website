export const LOCALES = ['en', 'el'];

export const STAFF = {
  en: [
    { role: 'Nursery / Pre-School', teachers: ['Christina Kalintzeou'] },
    { role: 'Year 1', teachers: ['Chara Orthodoxou'] },
    { role: 'Year 1+', teachers: ['Maria Karatzia'] },
    { role: 'Year 2/3', teachers: ['Mikaella Makri'] },
    { role: 'Year 4/5/6', teachers: ['Mikaella Makri'] },
    { role: 'GCSE 1/2', teachers: ['Chara Orthodoxou'] },
    { role: 'A level', teachers: ['Panayiota Serghi'] },
    { role: 'Adults Level 1', teachers: ['Roumpini – Danai Zakopoulou'] },
    { role: 'Adults Level 2', teachers: ['Roumpini -Danai Zakopoulou'] }
  ],
  el: [
    { role: 'Νηπιαγωγείο / Προσχολικό', teachers: ['Christina Kalintzeou'] },
    { role: 'Τάξη 1', teachers: ['Chara Orthodoxou'] },
    { role: 'Τάξη 1+', teachers: ['Maria Karatzia'] },
    { role: 'Τάξεις 2/3', teachers: ['Mikaella Makri'] },
    { role: 'Τάξεις 4/5/6', teachers: ['Mikaella Makri'] },
    { role: 'GCSE 1/2', teachers: ['Chara Orthodoxou'] },
    { role: 'A level', teachers: ['Panayiota Serghi'] },
    { role: 'Ενήλικες Επίπεδο 1', teachers: ['Roumpini – Danai Zakopoulou'] },
    { role: 'Ενήλικες Επίπεδο 2', teachers: ['Roumpini -Danai Zakopoulou'] }
  ]
};

export const PAGE_TITLES = {
  teaching: {
    en: 'The Teaching Staff',
    el: 'Διδακτικό Προσωπικό'
  }
};

export const TEACHING_GROUPS = [
  {
    id: 'nursery',
    role_el: 'Νηπιαγωγείο / Προδημοτική',
    role_en: 'Nursery / Pre-Primary',
    teacher: 'Χριστίνα Καλιντζέου',
    assistant: 'Θεοδώρα Καμάνα'
  },
  {
    id: 'year1',
    role_el: 'Year 1',
    role_en: 'Year 1',
    teacher: 'Μαρία Συμεωνίδου',
    assistant: ''
  },
  {
    id: 'year1plus',
    role_el: 'Year 1+ (Διαφοροποιητική)',
    role_en: 'Year 1+ (Differentiation)',
    teacher: 'Μαρία Καρατζιά',
    assistant: ''
  },
  {
    id: 'year2',
    role_el: 'Year 2',
    role_en: 'Year 2',
    teacher: 'Παναγία Πιτσιλίδου',
    assistant: ''
  },
  {
    id: 'year3_4',
    role_el: 'Year 3–4 (Σύμπλεγμα)',
    role_en: 'Years 3–4 (Combined)',
    teacher: 'Θεοδώρα Καμάνα',
    assistant: ''
  },
  {
    id: 'year5_6',
    role_el: 'Year 5–6 (Σύμπλεγμα)',
    role_en: 'Years 5–6 (Combined)',
    teacher: 'Μαρία Καρατζιά',
    assistant: ''
  },
  {
    id: 'gcse',
    role_el: 'Pre-GCSE / GCSE',
    role_en: 'Pre-GCSE / GCSE',
    teacher: 'Ελευθερία Καπαραλίωτη',
    assistant: ''
  },
  {
    id: 'support',
    role_el: 'Γενική Υποστήριξη',
    role_en: 'General Support',
    teacher: '',
    assistant: 'Λυδία-Ναταλία Μύρτα'
  }
];

export const TEACHING_GROUPS_ONLINE = [
  {
    id: 'year1_2_online',
    role_el: 'Year 1–2 Online',
    role_en: 'Year 1–2 Online',
    teacher: 'ΚΕΑ'
  },
  {
    id: 'year3_online',
    role_el: 'Year 3 Online',
    role_en: 'Year 3 Online',
    teacher: 'Ιωάννα Κουμή (ΚΕΑ)'
  },
  {
    id: 'gcse_online',
    role_el: 'GCSE Online',
    role_en: 'GCSE Online',
    teacher: 'ΚΕΑ'
  },
  {
    id: 'alevels_online',
    role_el: 'A Levels',
    role_en: 'A Levels',
    teacher: 'Παναγιώτα Μάγγου'
  },
  {
    id: 'adults_level1_online',
    role_el: 'Adults Level 1',
    role_en: 'Adults Level 1',
    teacher: 'Ελευθερία Καπαραλίωτη'
  },
  {
    id: 'adults_level2_online',
    role_el: 'Adults Level 2',
    role_en: 'Adults Level 2',
    teacher: 'Ρουμπίνη Ζακοπούλου'
  }
];
