/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Department of Electrical/Electronic Engineering, KNUST',
    position: 'Research Assistant',
    url: 'https://eleceng.knust.edu.gh/',
    startDate: '2023-10-01',
    endDate: '2024-10-01',
    summary: ``,
    highlights: [
      "Designed and implemented a study comparing the CO₂ footprint of electric vehicles and internal combustion engine cars.",
      "Built models to estimate EV energy use and linked it to national electricity generation data, including thermal plant emissions.",
      "Compared emissions per mile across different daily mileage scenarios, revealing EVs provide more environmental benefit than ICE vehicles."
    ],
  },
  {
    name: 'Department of Electrical/Electronic Engineering, KNUST',
    position: 'Teaching Assistant',
    url: 'https://eleceng.knust.edu.gh/',
    startDate: '2023-10-01',
    endDate: '2024-10-01',
    summary: ``,
    highlights: [
     'Supported large classes across multiple subjects; Classical Control Systems (230 students), Digital Control Systems (40 students), and Digital Systems & Electrical Measurements (300 students).',
     'Prepared a comprehensive and visually engaging lecture slides for Digital Control Systems which was adopted by the course instructor.',
     'Guided students in applying MATLAB to solve real-world control system problems, reinforcing both theoretical understanding and practical design skills.',
     'Mentored students facing academic challenges, providing both technical coaching and empathetic support to help them regain confidence and improve performance.'
    ],
  },
  {
    name: "KNUST Electrical and Electronic Engineering Students' Association",
    position: 'Study Group Leader',
    url: 'https://www.linkedin.com/company/eleesa-knust/?originalSubdomain=gh',
    startDate: '2019-09-01',
    endDate: '2023-09-01',
    summary: ``,
    highlights: [
      'Led collaborative study groups in key engineering courses including Classical Control Systems, Power Electronics, and Digital Systems, while also supporting peers in foundational subjects such as Calculus and Differential Equations.',
      'Motivated peers to approach academics with renewed focus and discipline.',
      'Assisted peers in improving time management by designing study schedules and helping them stay accountable.'
    ],
  },
  {
    name: "KNUST, Electrical and Electronic Engineering Students' Association",
    position: 'Class Representative',
    url: 'https://www.linkedin.com/company/eleesa-knust/?originalSubdomain=gh',
    startDate: '2022-05-01',
    endDate: '2023-09-01',
    summary: ``,
    highlights: [
      'Ensured lecture halls and teaching equipment were well-prepared, creating a supportive environment for learning.',
      'Advocated for classmates experiencing financial hardship, connecting them with available support.',
      'Facilitated communication between students, lecturers, and university authorities to address academic and administrative concerns.',
'Provided one-on-one guidance to struggling students, helping them regain confidence and improve academic performance.'
    ],
  },
  {
    name: 'VOLTA RIVER AUTHORITY, KPONG GENERATING STATION',
    position: 'Intern',
    url: 'https://www.vra.com/our_mandate/kpong_hydro_plant.php',
    startDate: '2022-10-01',
    endDate: '2022-11-01',
    summary: ``,
    highlights: [
      'Gained hands-on experience with circuit breakers, relays, and monitoring devices at the Protection and Control Section, learning how they safeguard power systems.',
      'Explored transformer operations and faults, including the use of transformer oil for cooling and fault management, at the Electrical Section.',
      'Built practical knowledge of power system maintenance and troubleshooting techniques for critical electrical components, enhancing understanding of real-world grid reliability.'
    ],
  },
  {
    name: 'Sonrise Christian Senior High School',
    position: 'Clinic Assistant',
    url: 'https://sonrise.edu.gh/',
    startDate: '2018-09-01',
    endDate: '2019-07-01',
    summary: ``,
    highlights: [
      'Assisted the school nurse in maintaining a clean and organized clinic environment to ensure effective patient care.',
'Supported treatment of minor conditions, including wound cleaning and administering basic pain relief under supervision.',
'Helped in managing asthma cases through nebulization, providing direct support to patients in need.',
'Gained early exposure to healthcare teamwork and patient support, developing responsibility and attention to detail.'

    ],
  },
 {
    name: 'Sonrise Christian Senior High School',
    position: 'NSMQ Team Support',
    url: 'https://sonrise.edu.gh/',
    startDate: '2018-09-01',
    endDate: '2019-07-01',
    summary: ``,
    highlights: [
      'Tutored and coached team members in key subject areas in preparation for contests',
      'Participated in practice contests simulating real competition conditions and helping the team refine strategies'
    ],
  },
 
];

export default work;
