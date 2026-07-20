// AUTO-GENERATED from whitecollarboxing.org. Do not edit by hand.
export type CategoryKey =
  | "events_main_page"
  | "previous_events"
  | "upcoming_events"
  | "news_page"
  | "training_fixed"
  | "uncategorized";

export type Category = {
  key: CategoryKey;
  label: string;
  count: number;
  path: string;
  indent?: boolean;
};

export type Block = { t: "p"; v: string } | { t: "img"; src: string; alt: string };
export type NavLink = { slug: string; title: string };
export type PostedIn = { path: string; label: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
  image: string | null;
  blocks: Block[];
  postedIn: PostedIn[];
  prev: NavLink | null;
  next: NavLink | null;
};

export const AUTHOR = "c og";

export const PAGE_SIZE = 5;

export const NEWS_PAGE_SIZE = 6;

export const categoryList: Category[] = [
  {
    "key": "events_main_page",
    "label": "Events",
    "count": 75,
    "path": "/category/events_main_page"
  },
  {
    "key": "previous_events",
    "label": "Previous Events",
    "count": 67,
    "path": "/category/events_main_page/previous_events",
    "indent": true
  },
  {
    "key": "upcoming_events",
    "label": "Upcoming Events",
    "count": 7,
    "path": "/category/events_main_page/upcoming_events",
    "indent": true
  },
  {
    "key": "news_page",
    "label": "News",
    "count": 69,
    "path": "/category/news_page"
  },
  {
    "key": "training_fixed",
    "label": "Training",
    "count": 71,
    "path": "/category/training_fixed"
  },
  {
    "key": "uncategorized",
    "label": "Uncategorized",
    "count": 4,
    "path": "/category/uncategorized"
  }
];

export const categoryOrder: Record<CategoryKey, string[]> = {
  "events_main_page": [
    "january26bootcamp",
    "september-boxing-bootcamp-2025",
    "january-2025-beginner-boxing-programme",
    "early-morning-boxing-september-2022",
    "beginner-boxing-september-2022",
    "celbridge-gaa-fight-night",
    "box-4-barretstown",
    "gavinglynn",
    "tiny-life-big-fight-2",
    "saints-v-sinners",
    "boxing-fundraiser-punch-up-in-the-palace",
    "the-battle-of-the-barony-fight-night",
    "simonstown-v-st-ultans-fight-night",
    "white-collar-boxing-in-galway",
    "wanderers-and-warriors-fight-night",
    "find-your-inner-warrior",
    "help-neveah-fix-crumlin",
    "brawl-in-the-hall",
    "tiny-life-big-fight",
    "brawl-in-the-hall-ahascragh-fohenagh-gaa-club",
    "battle-carbury-castle",
    "mitchelstown-rugby-st-patricks-weekend",
    "st-paddys-weekend-punch-banagher",
    "dandelion-dust-2",
    "brawl-nepal",
    "brawl-hall-24115",
    "battle-blackwater-bridge-281214",
    "christmas-punch-2-loughrea-271214",
    "armagh-geddon-2",
    "dardevils-round-2-81114",
    "battle-on-the-banks-mallow-261014",
    "blue-and-white-fight-night-4114",
    "lord-of-the-ring-kilkenny-august-22nd",
    "ballers-at-war",
    "the-golden-brawl",
    "tide-versus-pride",
    "ardee-celtic-fc-summer-slam",
    "black-blue-1-february-2014",
    "fight-for-jack-21-february-2014",
    "corinthian-hockey-white-collar-boxing-event-21-february-2014",
    "school-of-hard-knocks-4-april-2014",
    "the-battle-of-the-saints-1-march-2014",
    "lions-club-naas-8-march-2014",
    "lord-of-the-ring-5-14-march-2014",
    "clash-without-the-ash-16-march-2014",
    "battle-of-the-rovers-22-march-2014",
    "rag-rumble-30-april-2014",
    "big-fight-tiny-life-8-may-2014",
    "judgement-day-in-moneyreagh-15-may-2014",
    "st-fechins-v-dreadnots-2-november-2013",
    "andy-lee-boxing-clinic",
    "heroes-2-6th-june-2013",
    "battle-for-the-carers-12-july-2013",
    "the-pink-punch-up-19-july-2013",
    "champion-for-children-13-september-2013",
    "fight-for-life-16-august-2013",
    "the-newbridge-knockout-14-september-2013",
    "tesco-time-5-october-2013",
    "dublin-15-fight-night-19-oct-2013",
    "tiny-life-big-fight-5-november-2013",
    "the-trilogy-3-9-november-2013",
    "knockout-9-november-2013",
    "oraghallaighs-v-newtown-blues-16-november-2013",
    "the-ultimate-fight-night-donoughmore-22-november-2013",
    "armagh-geddon-23-nov-2013",
    "swords-pavilions-fight-halloween-party-27-october-2013",
    "the-dandelion-dust-up-29-november-2013",
    "act-for-meningitis-fight-night-30-november-2013",
    "christmas-punch-up-28-december-2013",
    "loughrea-christmas-punch-up-28-december-2013",
    "the-clash-without-the-ash-15th-february-2013",
    "the-ballroom-buts-up-16th-february-2013",
    "ispcc-cork-24-may-2013",
    "ispcc-dublin-31-may-2013",
    "the-brawl-in-the-hall-2-june-2013"
  ],
  "previous_events": [
    "tiny-life-big-fight-2",
    "saints-v-sinners",
    "boxing-fundraiser-punch-up-in-the-palace",
    "the-battle-of-the-barony-fight-night",
    "simonstown-v-st-ultans-fight-night",
    "white-collar-boxing-in-galway",
    "wanderers-and-warriors-fight-night",
    "find-your-inner-warrior",
    "help-neveah-fix-crumlin",
    "brawl-in-the-hall",
    "tiny-life-big-fight",
    "brawl-in-the-hall-ahascragh-fohenagh-gaa-club",
    "battle-carbury-castle",
    "mitchelstown-rugby-st-patricks-weekend",
    "st-paddys-weekend-punch-banagher",
    "dandelion-dust-2",
    "brawl-nepal",
    "brawl-hall-24115",
    "battle-blackwater-bridge-281214",
    "christmas-punch-2-loughrea-271214",
    "armagh-geddon-2",
    "dardevils-round-2-81114",
    "battle-on-the-banks-mallow-261014",
    "blue-and-white-fight-night-4114",
    "lord-of-the-ring-kilkenny-august-22nd",
    "ballers-at-war",
    "the-golden-brawl",
    "tide-versus-pride",
    "ardee-celtic-fc-summer-slam",
    "black-blue-1-february-2014",
    "fight-for-jack-21-february-2014",
    "corinthian-hockey-white-collar-boxing-event-21-february-2014",
    "school-of-hard-knocks-4-april-2014",
    "the-battle-of-the-saints-1-march-2014",
    "lions-club-naas-8-march-2014",
    "lord-of-the-ring-5-14-march-2014",
    "clash-without-the-ash-16-march-2014",
    "battle-of-the-rovers-22-march-2014",
    "rag-rumble-30-april-2014",
    "big-fight-tiny-life-8-may-2014",
    "judgement-day-in-moneyreagh-15-may-2014",
    "st-fechins-v-dreadnots-2-november-2013",
    "andy-lee-boxing-clinic",
    "heroes-2-6th-june-2013",
    "battle-for-the-carers-12-july-2013",
    "the-pink-punch-up-19-july-2013",
    "champion-for-children-13-september-2013",
    "fight-for-life-16-august-2013",
    "the-newbridge-knockout-14-september-2013",
    "tesco-time-5-october-2013",
    "dublin-15-fight-night-19-oct-2013",
    "tiny-life-big-fight-5-november-2013",
    "the-trilogy-3-9-november-2013",
    "knockout-9-november-2013",
    "oraghallaighs-v-newtown-blues-16-november-2013",
    "the-ultimate-fight-night-donoughmore-22-november-2013",
    "armagh-geddon-23-nov-2013",
    "swords-pavilions-fight-halloween-party-27-october-2013",
    "the-dandelion-dust-up-29-november-2013",
    "act-for-meningitis-fight-night-30-november-2013",
    "christmas-punch-up-28-december-2013",
    "loughrea-christmas-punch-up-28-december-2013",
    "the-clash-without-the-ash-15th-february-2013",
    "the-ballroom-buts-up-16th-february-2013",
    "ispcc-cork-24-may-2013",
    "ispcc-dublin-31-may-2013",
    "the-brawl-in-the-hall-2-june-2013"
  ],
  "upcoming_events": [
    "september-boxing-bootcamp-2025",
    "january-2025-beginner-boxing-programme",
    "early-morning-boxing-september-2022",
    "beginner-boxing-september-2022",
    "celbridge-gaa-fight-night",
    "box-4-barretstown",
    "gavinglynn"
  ],
  "news_page": [
    "january26bootcamp",
    "september-boxing-bootcamp-2025",
    "january-2025-beginner-boxing-programme",
    "gym-wars-advanced-boxing-camp-september-24",
    "september-24-beginner-boxing-programme",
    "january-2024-beginner-boxing-programme",
    "september-23-beginner-boxing-programme",
    "early-morning-boxing-september-2022",
    "beginner-boxing-september-2022",
    "march-beginner-boxing-8-week-programme",
    "january-2022-beginners-boxing-later-time",
    "january-2022-beginners-boxing",
    "november-6-week-beginner-boxing",
    "october-2021-morning-boxing-and-conditioning",
    "boxing-is-back-september-2021-beginners",
    "march-2020-morning-boxing-and-conditioning",
    "march-boxing-bootcamp",
    "january-2020-early-morning-boxing",
    "january-2020-8-week-boxing-and-conditioning",
    "november-early-morning-boxing",
    "november-boxing-and-conditioning-2",
    "june-early-morning-boxing",
    "june-boxing-and-conditioning",
    "weworkwebox",
    "january-boxing-and-conditioning-2019",
    "early-morning-boxing-conditioning",
    "september-boxing-bootcamp",
    "april-boxing-bootcamp",
    "new-year-boxing-bootcamp18",
    "b-fit-boxing-belfast",
    "october",
    "8-week-spring-beginner-boxing-bootcamp",
    "new-year-boxing-bootcamp",
    "november-beginners-boxing",
    "september-beginner-boxing-programme",
    "september-beginners-boxing-programme",
    "hq-update",
    "banaghers-boxing-priest-white-collar-boxing",
    "boxing-classes-weight-loss",
    "january-beginners-boxing-classes-19115",
    "benefits-strength-training",
    "new-gym-opening-september",
    "titanic-tussle-belfast-september-2014",
    "hill-runs-and-mst",
    "september-2014-get-in-the-ring",
    "new-h-i-i-t-boxing",
    "new-january-ladies-boxing-class",
    "rocky-road-to-fitness-boxing-bootcamp",
    "april-mixed-class-2013",
    "new-ashtanga-yoga-with-nicolas-cruz",
    "new-8pm-mixed-january-class",
    "january-mixed-boxing-class",
    "new-september-mixed-class-8pm",
    "september-mixed-boxing-classes",
    "boxing-classes-dublin",
    "january-ladies-boxing-class",
    "million-dollar-baby-201",
    "resolution2012",
    "events",
    "boxingclasses",
    "fight-club-ni-media-launch",
    "fight-club-ni",
    "million-dollar-baby",
    "white-collar-season-kicks-off",
    "whitecollarboxing-ie-packs-a-punch-on-bbc",
    "check-us-out-on-facebook",
    "million-dollar-babies",
    "punch-your-way-into-a-new-decade",
    "are-you-the-next-million-dollar-baby"
  ],
  "training_fixed": [
    "january26bootcamp",
    "september-boxing-bootcamp-2025",
    "january-2025-beginner-boxing-programme",
    "gym-wars-advanced-boxing-camp-september-24",
    "september-24-beginner-boxing-programme",
    "january-2024-beginner-boxing-programme",
    "september-23-beginner-boxing-programme",
    "early-morning-boxing-september-2022",
    "beginner-boxing-september-2022",
    "march-beginner-boxing-8-week-programme",
    "january-2022-beginners-boxing-later-time",
    "january-2022-beginners-boxing",
    "november-6-week-beginner-boxing",
    "october-2021-morning-boxing-and-conditioning",
    "boxing-is-back-september-2021-beginners",
    "march-2020-morning-boxing-and-conditioning",
    "march-boxing-bootcamp",
    "january-2020-early-morning-boxing",
    "january-2020-8-week-boxing-and-conditioning",
    "november-early-morning-boxing",
    "november-boxing-and-conditioning-2",
    "june-early-morning-boxing",
    "june-boxing-and-conditioning",
    "january-boxing-and-conditioning-2019",
    "early-morning-boxing-conditioning",
    "september-boxing-bootcamp",
    "april-boxing-bootcamp",
    "new-year-boxing-bootcamp18",
    "october",
    "8-week-spring-beginner-boxing-bootcamp",
    "new-year-boxing-bootcamp",
    "november-beginners-boxing",
    "september-beginner-boxing-programme",
    "september-beginners-boxing-programme",
    "june-boxing-bootcamp",
    "may-beginners-boxing-bootcamp",
    "march-beginner-boxing-bootcamp",
    "beginner-boxing-challenge",
    "8-week-beginner-boxing-programme",
    "september-boxing-and-conditioning",
    "july-boxing-classes",
    "boxing-conditioning-summer-bootcamp",
    "may-boxing-bootcamp",
    "april-beginners-boxing-class",
    "march-beginners-boxing",
    "january-beginners-boxing-classes-19115",
    "gym-update",
    "new-gym-opening-september",
    "september-2014-get-in-the-ring",
    "new-h-i-i-t-boxing",
    "new-january-ladies-boxing-class",
    "new-january-class-2013",
    "new-september-mixed-class",
    "new-ladies-class",
    "rocky-road-to-fitness-boxing-bootcamp",
    "april-mixed-class-2013",
    "april-ladies-class-2013",
    "new-advanced-boxing-with-nicolas-cruz",
    "new-ashtanga-yoga-with-nicolas-cruz",
    "new-8pm-mixed-january-class",
    "january-mixed-boxing-class",
    "new-september-mixed-class-8pm",
    "september-mixed-boxing-classes",
    "september-ladies-boxing-classes",
    "new-years-rsolutions",
    "events",
    "white-collar-boxer-training-programme",
    "private-boxing-lessons",
    "team-training",
    "million-dollar-baby-training",
    "training"
  ],
  "uncategorized": [
    "september-boxing-bootcamp-2025",
    "june-early-morning-boxing",
    "june-boxing-and-conditioning",
    "november-boxing-and-conditioning"
  ]
};

export const posts: Post[] = [
  {
    "slug": "january26bootcamp",
    "title": "January 2026 Boxing Bootcamp",
    "date": "December 11, 2025",
    "excerpt": "Step into the Ring: 8-Week Beginners Boxing Programme Starts This January 26 Ready to level up your fitness and learn a skill that packs a punch? Our 8-week Beginners Boxing Programme is the ultimate starting point for anyone looking to train like a fighter without taking a hit. Whether you're chasing fitness goals, confidence, or […]",
    "paragraphs": [
      "Step into the Ring: 8-Week Beginners Boxing Programme Starts This January 26",
      "Ready to level up your fitness and learn a skill that packs a punch? Our 8-week Beginners Boxing Programme is the ultimate starting point for anyone looking to train like a fighter without taking a hit. Whether you're chasing fitness goals, confidence, or just want to try something completely new, this is where your boxing journey begins!",
      "Led by world-class, internationally recognised coaches, you'll master the fundamentals of your stance, footwork, defence, and every punch in the book. Each session is hands-on, high-energy, and expertly structured to push your limits, torch up to 800 calories per class, and build mental and physical toughness.",
      "No two classes are the same. One week you're sharpening your jab, the next you're slipping punches and learning how to move like a pro. You'll walk out of every session a little sharper, a little fitter, and a lot more confident.",
      "This programme is open to all fitness levels—we tailor the training to suit you. Whether you're a complete beginner or looking to shake off the rust, we've got your corner.",
      "Spaces are limited, and demand is high so sign up now to avoid missing out!",
      "Price €249",
      "Training Schedule: We have two options to offer flexibility for when you train.",
      "Mondays & Wednesdays @ 7pm Starting January 12th 2026",
      "Tuesdays and Thursdays @ 7pm Starting January 13th 2026",
      "Tuesday and Thursday 7pm Starts September 9th"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Step into the Ring: 8-Week Beginners Boxing Programme Starts This January 26"
      },
      {
        "t": "p",
        "v": "Ready to level up your fitness and learn a skill that packs a punch? Our 8-week Beginners Boxing Programme is the ultimate starting point for anyone looking to train like a fighter without taking a hit. Whether you're chasing fitness goals, confidence, or just want to try something completely new, this is where your boxing journey begins!"
      },
      {
        "t": "p",
        "v": "Led by world-class, internationally recognised coaches, you'll master the fundamentals of your stance, footwork, defence, and every punch in the book. Each session is hands-on, high-energy, and expertly structured to push your limits, torch up to 800 calories per class, and build mental and physical toughness."
      },
      {
        "t": "p",
        "v": "No two classes are the same. One week you're sharpening your jab, the next you're slipping punches and learning how to move like a pro. You'll walk out of every session a little sharper, a little fitter, and a lot more confident."
      },
      {
        "t": "p",
        "v": "This programme is open to all fitness levels—we tailor the training to suit you. Whether you're a complete beginner or looking to shake off the rust, we've got your corner."
      },
      {
        "t": "p",
        "v": "Spaces are limited, and demand is high so sign up now to avoid missing out!"
      },
      {
        "t": "p",
        "v": "Price €249"
      },
      {
        "t": "p",
        "v": "Training Schedule: We have two options to offer flexibility for when you train."
      },
      {
        "t": "p",
        "v": "Mondays & Wednesdays @ 7pm Starting January 12th 2026"
      },
      {
        "t": "p",
        "v": "Tuesdays and Thursdays @ 7pm Starting January 13th 2026"
      },
      {
        "t": "p",
        "v": "Tuesday and Thursday 7pm Starts September 9th"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "september-boxing-bootcamp-2025",
      "title": "September Boxing Bootcamp 2025"
    },
    "next": null
  },
  {
    "slug": "september-boxing-bootcamp-2025",
    "title": "September Boxing Bootcamp 2025",
    "date": "July 15, 2025",
    "excerpt": "Step into the Ring: 8-Week Beginners Boxing Programme Starts This September Ready to level up your fitness and learn a skill that packs a punch? Our 8-week Beginners Boxing Programme is the ultimate starting point for anyone looking to train like a fighter without taking a hit. Whether you're chasing fitness goals, confidence, or just […]",
    "paragraphs": [
      "Step into the Ring: 8-Week Beginners Boxing Programme Starts This September",
      "Ready to level up your fitness and learn a skill that packs a punch? Our 8-week Beginners Boxing Programme is the ultimate starting point for anyone looking to train like a fighter without taking a hit. Whether you're chasing fitness goals, confidence, or just want to try something completely new, this is where your boxing journey begins!",
      "Led by world-class, internationally recognised coaches, you'll master the fundamentals of your stance, footwork, defence, and every punch in the book. Each session is hands-on, high-energy, and expertly structured to push your limits, torch up to 800 calories per class, and build mental and physical toughness.",
      "No two classes are the same. One week you're sharpening your jab, the next you're slipping punches and learning how to move like a pro. You'll walk out of every session a little sharper, a little fitter, and a lot more confident.",
      "This programme is open to all fitness levels—we tailor the training to suit you. Whether you're a complete beginner or looking to shake off the rust, we've got your corner.",
      "Spaces are limited, and demand is high so sign up now to avoid missing out!",
      "Price €249",
      "Training Schedule: We have two options to offer flexibility for when you train.",
      "Mondays and Wednesdays 7pm Starts September 8th",
      "Tuesday and Thursday 7pm Starts September 9th"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Step into the Ring: 8-Week Beginners Boxing Programme Starts This September"
      },
      {
        "t": "p",
        "v": "Ready to level up your fitness and learn a skill that packs a punch? Our 8-week Beginners Boxing Programme is the ultimate starting point for anyone looking to train like a fighter without taking a hit. Whether you're chasing fitness goals, confidence, or just want to try something completely new, this is where your boxing journey begins!"
      },
      {
        "t": "p",
        "v": "Led by world-class, internationally recognised coaches, you'll master the fundamentals of your stance, footwork, defence, and every punch in the book. Each session is hands-on, high-energy, and expertly structured to push your limits, torch up to 800 calories per class, and build mental and physical toughness."
      },
      {
        "t": "p",
        "v": "No two classes are the same. One week you're sharpening your jab, the next you're slipping punches and learning how to move like a pro. You'll walk out of every session a little sharper, a little fitter, and a lot more confident."
      },
      {
        "t": "p",
        "v": "This programme is open to all fitness levels—we tailor the training to suit you. Whether you're a complete beginner or looking to shake off the rust, we've got your corner."
      },
      {
        "t": "p",
        "v": "Spaces are limited, and demand is high so sign up now to avoid missing out!"
      },
      {
        "t": "p",
        "v": "Price €249"
      },
      {
        "t": "p",
        "v": "Training Schedule: We have two options to offer flexibility for when you train."
      },
      {
        "t": "p",
        "v": "Mondays and Wednesdays 7pm Starts September 8th"
      },
      {
        "t": "p",
        "v": "Tuesday and Thursday 7pm Starts September 9th"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      },
      {
        "label": "Uncategorized",
        "path": "/category/uncategorized"
      },
      {
        "label": "Upcoming Events",
        "path": "/category/events_main_page/upcoming_events"
      }
    ],
    "prev": {
      "slug": "january-2025-beginner-boxing-programme",
      "title": "January 2025 Beginner Boxing Programme"
    },
    "next": {
      "slug": "january26bootcamp",
      "title": "January 2026 Boxing Bootcamp"
    }
  },
  {
    "slug": "january-2025-beginner-boxing-programme",
    "title": "January 2025 Beginner Boxing Programme",
    "date": "December 10, 2024",
    "excerpt": "Start your New Year, New You off with our 8-week Beginners Boxing programme. This is the best place to start your boxing journey. Learn your stance, punches and all the boxing moves, whilst burning up to 800 calories per session. Challenge yourself to master the \"Noble Art\" and see have you got what it takes […]",
    "paragraphs": [
      "Start your New Year, New You off with our 8-week Beginners Boxing programme. This is the best place to start your boxing journey. Learn your stance, punches and all the boxing moves, whilst burning up to 800 calories per session.",
      "Challenge yourself to master the \"Noble Art\" and see have you got what it takes to go the extra round! Come join our community and learn every punch in the book! Hit and don't be hit! No two classes are ever the same.",
      "This programme is suitable for all levels of fitness.",
      "Classes are limited to 12 places, to ensure you get the most out of each session. And we are very proud of our team of expert coaches who will take you from novice to seasoned fighter!! Remember there is no where to hide in our gym!",
      "We have three options to choose from:",
      "Monday and Wednesday Mornings @ 7am, starting January 13th.",
      "Mondays and Wednesdays @ 7pm, starting January 13th.",
      "Tuesdays and Thursdays @7pm, starting January 14th.",
      "Cost is €249 for 8 Weeks.",
      "(Gloves and hand-wraps available for purchase)(plenty available for use in gym also)",
      "Mondays and Wednesdays Morning @ 7AM Starting January 13th",
      "Mondays and Wednesdays Evening @ 7PM Starting January 13th",
      "Tuesdays and Thursdays Evening @ 7PM Starting January 14th",
      "(Gloves and hand-wraps available for purchase)(plenty available for use in gym also)"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Start your New Year, New You off with our 8-week Beginners Boxing programme. This is the best place to start your boxing journey. Learn your stance, punches and all the boxing moves, whilst burning up to 800 calories per session."
      },
      {
        "t": "p",
        "v": "Challenge yourself to master the \"Noble Art\" and see have you got what it takes to go the extra round! Come join our community and learn every punch in the book! Hit and don't be hit! No two classes are ever the same."
      },
      {
        "t": "p",
        "v": "This programme is suitable for all levels of fitness."
      },
      {
        "t": "p",
        "v": "Classes are limited to 12 places, to ensure you get the most out of each session. And we are very proud of our team of expert coaches who will take you from novice to seasoned fighter!! Remember there is no where to hide in our gym!"
      },
      {
        "t": "p",
        "v": "We have three options to choose from:"
      },
      {
        "t": "p",
        "v": "Monday and Wednesday Mornings @ 7am, starting January 13th."
      },
      {
        "t": "p",
        "v": "Mondays and Wednesdays @ 7pm, starting January 13th."
      },
      {
        "t": "p",
        "v": "Tuesdays and Thursdays @7pm, starting January 14th."
      },
      {
        "t": "p",
        "v": "Cost is €249 for 8 Weeks."
      },
      {
        "t": "p",
        "v": "(Gloves and hand-wraps available for purchase)(plenty available for use in gym also)"
      },
      {
        "t": "p",
        "v": "Mondays and Wednesdays Morning @ 7AM Starting January 13th"
      },
      {
        "t": "p",
        "v": "Mondays and Wednesdays Evening @ 7PM Starting January 13th"
      },
      {
        "t": "p",
        "v": "Tuesdays and Thursdays Evening @ 7PM Starting January 14th"
      },
      {
        "t": "p",
        "v": "(Gloves and hand-wraps available for purchase)(plenty available for use in gym also)"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      },
      {
        "label": "Upcoming Events",
        "path": "/category/events_main_page/upcoming_events"
      }
    ],
    "prev": {
      "slug": "gym-wars-advanced-boxing-camp-september-24",
      "title": "Gym Wars Advanced Boxing Camp September 24"
    },
    "next": {
      "slug": "september-boxing-bootcamp-2025",
      "title": "September Boxing Bootcamp 2025"
    }
  },
  {
    "slug": "gym-wars-advanced-boxing-camp-september-24",
    "title": "Gym Wars Advanced Boxing Camp September 24",
    "date": "August 1, 2024",
    "excerpt": "We are excited to announce our first \"Gym Wars\" programme. It consists of 8 weeks focusing on performance in the ring. International coach and boxer Terry O'Neill will lead the programme. Terry has been a student of the sport for over 25 years and will break down every aspect of your fight game. It will […]",
    "paragraphs": [
      "We are excited to announce our first \"Gym Wars\" programme. It consists of 8 weeks focusing on performance in the ring. International coach and boxer Terry O'Neill will lead the programme. Terry has been a student of the sport for over 25 years and will break down every aspect of your fight game. It will conclude with a contest in our gym where you get to face off against another fighter from the group.",
      "Start date Wednesday 4th Septemper",
      "Training days Monday & Wednesday @6pm",
      "Fight date Wednesday 30th October",
      "16oz gloves, headgear and gum-shield are all required",
      "Price for this programme is €249"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "We are excited to announce our first \"Gym Wars\" programme. It consists of 8 weeks focusing on performance in the ring. International coach and boxer Terry O'Neill will lead the programme. Terry has been a student of the sport for over 25 years and will break down every aspect of your fight game. It will conclude with a contest in our gym where you get to face off against another fighter from the group."
      },
      {
        "t": "p",
        "v": "Start date Wednesday 4th Septemper"
      },
      {
        "t": "p",
        "v": "Training days Monday & Wednesday @6pm"
      },
      {
        "t": "p",
        "v": "Fight date Wednesday 30th October"
      },
      {
        "t": "p",
        "v": "16oz gloves, headgear and gum-shield are all required"
      },
      {
        "t": "p",
        "v": "Price for this programme is €249"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "september-24-beginner-boxing-programme",
      "title": "September 24 Beginner Boxing Programme"
    },
    "next": {
      "slug": "january-2025-beginner-boxing-programme",
      "title": "January 2025 Beginner Boxing Programme"
    }
  },
  {
    "slug": "september-24-beginner-boxing-programme",
    "title": "September 24 Beginner Boxing Programme",
    "date": "August 1, 2024",
    "excerpt": "We are delighted to announce an 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance, punches, and all the boxing moves. Get hands on coaching by our internationally recognised coaches! Burn up to 800 calories per session and feel fighting fit! Challenge yourself to master the \"Noble Art\" […]",
    "paragraphs": [
      "We are delighted to announce an 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance, punches, and all the boxing moves. Get hands on coaching by our internationally recognised coaches!",
      "Burn up to 800 calories per session and feel fighting fit!",
      "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade.",
      "This programme is suitable for all levels of fitness, we can adjust all training to suit your needs. Places are limited so be sure to sign up early.",
      "We have two options available -",
      "Mondays and Wednesdays @ 7pm Starting September 9th",
      "Tuesdays and Thursdays @7pm Starting September 1oth",
      "Book your place now as this always sells out fast.",
      "Cost €249"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "We are delighted to announce an 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance, punches, and all the boxing moves. Get hands on coaching by our internationally recognised coaches!"
      },
      {
        "t": "p",
        "v": "Burn up to 800 calories per session and feel fighting fit!"
      },
      {
        "t": "p",
        "v": "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade."
      },
      {
        "t": "p",
        "v": "This programme is suitable for all levels of fitness, we can adjust all training to suit your needs. Places are limited so be sure to sign up early."
      },
      {
        "t": "p",
        "v": "We have two options available -"
      },
      {
        "t": "p",
        "v": "Mondays and Wednesdays @ 7pm Starting September 9th"
      },
      {
        "t": "p",
        "v": "Tuesdays and Thursdays @7pm Starting September 1oth"
      },
      {
        "t": "p",
        "v": "Book your place now as this always sells out fast."
      },
      {
        "t": "p",
        "v": "Cost €249"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "january-2024-beginner-boxing-programme",
      "title": "January 2024 Beginner Boxing Programme"
    },
    "next": {
      "slug": "gym-wars-advanced-boxing-camp-september-24",
      "title": "Gym Wars Advanced Boxing Camp September 24"
    }
  },
  {
    "slug": "january-2024-beginner-boxing-programme",
    "title": "January 2024 Beginner Boxing Programme",
    "date": "December 9, 2023",
    "excerpt": "Start your year with our 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance punches and all the boxing moves. Burn up to 800 calories per session Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn […]",
    "paragraphs": [
      "Start your year with our 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance punches and all the boxing moves.",
      "Burn up to 800 calories per session",
      "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade.",
      "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!",
      "We have three options",
      "Cost is €249 for 8 Weeks",
      "Monday and Wednesday Mornings @ 7am Starting January 8th",
      "Mondays and Wednesdays @ 7pm Starting January 8th",
      "Tuesdays and Thursdays @7pm Starting January 9th",
      "Book your place now as this always sells out fast."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Start your year with our 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance punches and all the boxing moves."
      },
      {
        "t": "p",
        "v": "Burn up to 800 calories per session"
      },
      {
        "t": "p",
        "v": "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade."
      },
      {
        "t": "p",
        "v": "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!"
      },
      {
        "t": "p",
        "v": "We have three options"
      },
      {
        "t": "p",
        "v": "Cost is €249 for 8 Weeks"
      },
      {
        "t": "p",
        "v": "Monday and Wednesday Mornings @ 7am Starting January 8th"
      },
      {
        "t": "p",
        "v": "Mondays and Wednesdays @ 7pm Starting January 8th"
      },
      {
        "t": "p",
        "v": "Tuesdays and Thursdays @7pm Starting January 9th"
      },
      {
        "t": "p",
        "v": "Book your place now as this always sells out fast."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "september-23-beginner-boxing-programme",
      "title": "September 23 Beginner Boxing Programme"
    },
    "next": {
      "slug": "september-24-beginner-boxing-programme",
      "title": "September 24 Beginner Boxing Programme"
    }
  },
  {
    "slug": "september-23-beginner-boxing-programme",
    "title": "September 23 Beginner Boxing Programme",
    "date": "August 1, 2023",
    "excerpt": "We are delighted to announce an 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance, punches, and all the boxing moves. Get hands on coaching by our internationally recognised coaches! Burn up to 800 calories per session and feel fighting fit! Challenge yourself to master the \"Noble Art\" […]",
    "paragraphs": [
      "We are delighted to announce an 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance, punches, and all the boxing moves. Get hands on coaching by our internationally recognised coaches!",
      "Burn up to 800 calories per session and feel fighting fit!",
      "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade.",
      "This programme is suitable for all levels of fitness, we can adjust all training to suit your needs. Places are limited so be sure to sign up early.",
      "We have two options available -",
      "Mondays and Wednesdays @ 7pm Starting September 11th",
      "Tuesdays and Thursdays @7.30pm Starting September 12th",
      "Book your place now as this always sells out fast.",
      "Cost €249 (own gloves required)"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "We are delighted to announce an 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance, punches, and all the boxing moves. Get hands on coaching by our internationally recognised coaches!"
      },
      {
        "t": "p",
        "v": "Burn up to 800 calories per session and feel fighting fit!"
      },
      {
        "t": "p",
        "v": "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade."
      },
      {
        "t": "p",
        "v": "This programme is suitable for all levels of fitness, we can adjust all training to suit your needs. Places are limited so be sure to sign up early."
      },
      {
        "t": "p",
        "v": "We have two options available -"
      },
      {
        "t": "p",
        "v": "Mondays and Wednesdays @ 7pm Starting September 11th"
      },
      {
        "t": "p",
        "v": "Tuesdays and Thursdays @7.30pm Starting September 12th"
      },
      {
        "t": "p",
        "v": "Book your place now as this always sells out fast."
      },
      {
        "t": "p",
        "v": "Cost €249 (own gloves required)"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "early-morning-boxing-september-2022",
      "title": "Early Morning Boxing September 2022"
    },
    "next": {
      "slug": "january-2024-beginner-boxing-programme",
      "title": "January 2024 Beginner Boxing Programme"
    }
  },
  {
    "slug": "march-beginner-boxing-8-week-programme",
    "title": "March 2022 Beginner Boxing 8 Week Programme",
    "date": "February 13, 2022",
    "excerpt": "Why not take part in our 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance punches and all the boxing moves. Burn up to 800 calories per session Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! […]",
    "paragraphs": [
      "Why not take part in our 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance punches and all the boxing moves.",
      "Burn up to 800 calories per session",
      "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade.",
      "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!",
      "This programme commences on Monday the 14th March, & will run each Monday & Wednesday @7.00 pm for 8 weeks.",
      "Book your place now as this always sells out fast."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Why not take part in our 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance punches and all the boxing moves."
      },
      {
        "t": "p",
        "v": "Burn up to 800 calories per session"
      },
      {
        "t": "p",
        "v": "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade."
      },
      {
        "t": "p",
        "v": "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!"
      },
      {
        "t": "p",
        "v": "This programme commences on Monday the 14th March, & will run each Monday & Wednesday @7.00 pm for 8 weeks."
      },
      {
        "t": "p",
        "v": "Book your place now as this always sells out fast."
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "january-2022-beginners-boxing-later-time",
      "title": "January 2022 Beginners Boxing (later time)"
    },
    "next": {
      "slug": "beginner-boxing-september-2022",
      "title": "Beginner Boxing September 2022"
    }
  },
  {
    "slug": "january-2022-beginners-boxing-later-time",
    "title": "January 2022 Beginners Boxing (later time)",
    "date": "December 31, 2021",
    "excerpt": "Start your year with our 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance punches and all the boxing moves. Burn up to 800 calories per session Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn […]",
    "paragraphs": [
      "Start your year with our 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance punches and all the boxing moves.",
      "Burn up to 800 calories per session",
      "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade.",
      "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!",
      "This programme commences on Monday the 10th January, & will run each Monday & Wednesday @8.00 pm for 8 weeks.",
      "Book your place now as this always sells out fast."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Start your year with our 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance punches and all the boxing moves."
      },
      {
        "t": "p",
        "v": "Burn up to 800 calories per session"
      },
      {
        "t": "p",
        "v": "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade."
      },
      {
        "t": "p",
        "v": "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!"
      },
      {
        "t": "p",
        "v": "This programme commences on Monday the 10th January, & will run each Monday & Wednesday @8.00 pm for 8 weeks."
      },
      {
        "t": "p",
        "v": "Book your place now as this always sells out fast."
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "january-2022-beginners-boxing",
      "title": "January 2022 Beginners Boxing"
    },
    "next": {
      "slug": "march-beginner-boxing-8-week-programme",
      "title": "March 2022 Beginner Boxing 8 Week Programme"
    }
  },
  {
    "slug": "january-2022-beginners-boxing",
    "title": "January 2022 Beginners Boxing",
    "date": "December 9, 2021",
    "excerpt": "SOLDOUT Start your year with our 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance punches and all the boxing moves. Burn up to 800 calories per session Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! […]",
    "paragraphs": [
      "SOLDOUT",
      "Start your year with our 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance punches and all the boxing moves.",
      "Burn up to 800 calories per session",
      "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade.",
      "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!",
      "This programme commences on Monday the 10th January, & will run each Monday & Wednesday @7.00 pm for 8 weeks.",
      "Book your place now as this always sells out fast."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "SOLDOUT"
      },
      {
        "t": "p",
        "v": "Start your year with our 8 week Beginners Boxing programme. The best place to start your boxing journey. Learn your stance punches and all the boxing moves."
      },
      {
        "t": "p",
        "v": "Burn up to 800 calories per session"
      },
      {
        "t": "p",
        "v": "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade."
      },
      {
        "t": "p",
        "v": "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!"
      },
      {
        "t": "p",
        "v": "This programme commences on Monday the 10th January, & will run each Monday & Wednesday @7.00 pm for 8 weeks."
      },
      {
        "t": "p",
        "v": "Book your place now as this always sells out fast."
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "november-6-week-beginner-boxing",
      "title": "November 6 Week Beginner Boxing"
    },
    "next": {
      "slug": "january-2022-beginners-boxing-later-time",
      "title": "January 2022 Beginners Boxing (later time)"
    }
  },
  {
    "slug": "november-6-week-beginner-boxing",
    "title": "November 6 Week Beginner Boxing",
    "date": "October 26, 2021",
    "excerpt": "We are back!! And we are badder than ever!! Give yourself an early Christmas present. Our ever popular 6 week Beginners Boxing programme returns on the 15th of November. Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! […]",
    "paragraphs": [
      "We are back!! And we are badder than ever!! Give yourself an early Christmas present. Our ever popular 6 week Beginners Boxing programme returns on the 15th of November.",
      "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade.",
      "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!",
      "This programme commences on Monday the 15th November, & will run each Monday & Wednesday @7.00 pm for 6 weeks.",
      "Book your place now as this always sells out fast.",
      "Cost €199 (own gloves required)"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "We are back!! And we are badder than ever!! Give yourself an early Christmas present. Our ever popular 6 week Beginners Boxing programme returns on the 15th of November."
      },
      {
        "t": "p",
        "v": "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade."
      },
      {
        "t": "p",
        "v": "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!"
      },
      {
        "t": "p",
        "v": "This programme commences on Monday the 15th November, & will run each Monday & Wednesday @7.00 pm for 6 weeks."
      },
      {
        "t": "p",
        "v": "Book your place now as this always sells out fast."
      },
      {
        "t": "p",
        "v": "Cost €199 (own gloves required)"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "october-2021-morning-boxing-and-conditioning",
      "title": "October 2021 Morning Boxing and Conditioning"
    },
    "next": {
      "slug": "january-2022-beginners-boxing",
      "title": "January 2022 Beginners Boxing"
    }
  },
  {
    "slug": "boxing-is-back-september-2021-beginners",
    "title": "Boxing is Back September 2021 (Beginners)",
    "date": "September 5, 2021",
    "excerpt": "SOLD OUT We are back!! And we are badder than ever!! Our ever popular 8 week Beginners Boxing programme returns on the 20th of September. Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be […]",
    "paragraphs": [
      "SOLD OUT",
      "We are back!! And we are badder than ever!! Our ever popular 8 week Beginners Boxing programme returns on the 20th of September.",
      "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade.",
      "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!",
      "This programme commences on Monday the 20th September, & will run each Monday & Wednesday @7.30 pm for 8 weeks.",
      "Book your place now as this always sells out fast.",
      "Cost €249 (own gloves required)"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "SOLD OUT"
      },
      {
        "t": "p",
        "v": "We are back!! And we are badder than ever!! Our ever popular 8 week Beginners Boxing programme returns on the 20th of September."
      },
      {
        "t": "p",
        "v": "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade."
      },
      {
        "t": "p",
        "v": "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!"
      },
      {
        "t": "p",
        "v": "This programme commences on Monday the 20th September, & will run each Monday & Wednesday @7.30 pm for 8 weeks."
      },
      {
        "t": "p",
        "v": "Book your place now as this always sells out fast."
      },
      {
        "t": "p",
        "v": "Cost €249 (own gloves required)"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "march-2020-morning-boxing-and-conditioning",
      "title": "March 2020 Morning Boxing and Conditioning"
    },
    "next": {
      "slug": "october-2021-morning-boxing-and-conditioning",
      "title": "October 2021 Morning Boxing and Conditioning"
    }
  },
  {
    "slug": "march-2020-morning-boxing-and-conditioning",
    "title": "March 2020 Morning Boxing and Conditioning",
    "date": "February 24, 2020",
    "excerpt": "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in […]",
    "paragraphs": [
      "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in return is your commitment and honesty (sounds simple). Expect sprinting, punchbags, sledgehammers among other fun toys. Weigh in and Body fat monitoring available. The programme starts on Monday March 9th at 6.30am . Classes are Mondays ,Wednesdays Fridays@6.30am We have Parking and Showers. Huge interest in this so don't miss out. Programme Costs €199 limited places"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in return is your commitment and honesty (sounds simple). Expect sprinting, punchbags, sledgehammers among other fun toys. Weigh in and Body fat monitoring available. The programme starts on Monday March 9th at 6.30am . Classes are Mondays ,Wednesdays Fridays@6.30am We have Parking and Showers. Huge interest in this so don't miss out. Programme Costs €199 limited places"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "march-boxing-bootcamp",
      "title": "March Boxing Bootcamp"
    },
    "next": {
      "slug": "boxing-is-back-september-2021-beginners",
      "title": "Boxing is Back September 2021 (Beginners)"
    }
  },
  {
    "slug": "january-2020-early-morning-boxing",
    "title": "January 2020 Early Morning Boxing",
    "date": "November 29, 2019",
    "excerpt": "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in […]",
    "paragraphs": [
      "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in return is your commitment and honesty (sounds simple). Expect sprinting, punchbags, sledgehammers among other fun toys. Weigh in and Body fat monitoring available. The programme starts on Monday January 13th at 6.30am . Classes are Mondays ,Wednesdays Fridays@6.30am We have Parking and Showers. Huge interest in this so don't miss out. Programme Costs €199 limited places"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in return is your commitment and honesty (sounds simple). Expect sprinting, punchbags, sledgehammers among other fun toys. Weigh in and Body fat monitoring available. The programme starts on Monday January 13th at 6.30am . Classes are Mondays ,Wednesdays Fridays@6.30am We have Parking and Showers. Huge interest in this so don't miss out. Programme Costs €199 limited places"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "january-2020-8-week-boxing-and-conditioning",
      "title": "January 2020 8 Week Boxing and Conditioning"
    },
    "next": {
      "slug": "march-boxing-bootcamp",
      "title": "March Boxing Bootcamp"
    }
  },
  {
    "slug": "january-2020-8-week-boxing-and-conditioning",
    "title": "January 2020 8 Week Boxing and Conditioning",
    "date": "November 29, 2019",
    "excerpt": "Our 8 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it […]",
    "paragraphs": [
      "Our 8 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it takes it go the extra round Suitable and challenging for all levels of fitness. Programme Commences on Monday January 13th and Includes 3 classes per week Monday and Wednesday @ 7pm and Saturday 10am All for only €199. Places are limited. Sign up Today"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our 8 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it takes it go the extra round Suitable and challenging for all levels of fitness. Programme Commences on Monday January 13th and Includes 3 classes per week Monday and Wednesday @ 7pm and Saturday 10am All for only €199. Places are limited. Sign up Today"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "november-early-morning-boxing",
      "title": "November Early Morning Boxing"
    },
    "next": {
      "slug": "january-2020-early-morning-boxing",
      "title": "January 2020 Early Morning Boxing"
    }
  },
  {
    "slug": "november-early-morning-boxing",
    "title": "November Early Morning Boxing",
    "date": "July 25, 2019",
    "excerpt": "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in […]",
    "paragraphs": [
      "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in return is your commitment and honesty (sounds simple). Expect sprinting, punchbags, sledgehammers among other fun toys. Weigh in and Body fat monitoring available. The programme starts on Monday November 11th 2019 at 6.30am . Classes are Mondays ,Wednesdays Fridays@6.30am We have Parking and Showers. Huge interest in this so don't miss out. Programme Costs €199 limited places"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in return is your commitment and honesty (sounds simple). Expect sprinting, punchbags, sledgehammers among other fun toys. Weigh in and Body fat monitoring available. The programme starts on Monday November 11th 2019 at 6.30am . Classes are Mondays ,Wednesdays Fridays@6.30am We have Parking and Showers. Huge interest in this so don't miss out. Programme Costs €199 limited places"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "november-boxing-and-conditioning-2",
      "title": "November Boxing and Conditioning"
    },
    "next": {
      "slug": "january-2020-8-week-boxing-and-conditioning",
      "title": "January 2020 8 Week Boxing and Conditioning"
    }
  },
  {
    "slug": "november-boxing-and-conditioning-2",
    "title": "November Boxing and Conditioning",
    "date": "July 25, 2019",
    "excerpt": "Our 6 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it […]",
    "paragraphs": [
      "Our 6 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it takes it go the extra round Suitable and challenging for all levels of fitness. Programme Commences on Monday November 11th Includes 3 classes per week Monday and Wednesday @ 7pm and Saturday 10am All for only €199. Places are limited. Sign up Today"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our 6 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it takes it go the extra round Suitable and challenging for all levels of fitness. Programme Commences on Monday November 11th Includes 3 classes per week Monday and Wednesday @ 7pm and Saturday 10am All for only €199. Places are limited. Sign up Today"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "june-early-morning-boxing",
      "title": "June Early Morning Boxing"
    },
    "next": {
      "slug": "november-early-morning-boxing",
      "title": "November Early Morning Boxing"
    }
  },
  {
    "slug": "june-early-morning-boxing",
    "title": "June Early Morning Boxing",
    "date": "May 20, 2019",
    "excerpt": "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in […]",
    "paragraphs": [
      "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in return is your commitment and honesty (sounds simple). Expect sprinting, punchbags, sledgehammers among other fun toys. Weigh in and Body fat monitoring available. The programme starts on Monday June 10th 2019 at 6.30am . Classes are Mondays and Wednesdays @6.30am and Saturday @10am Parking and Showers. Huge interest in this so don't miss out. Programme Costs €160 limited places"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in return is your commitment and honesty (sounds simple). Expect sprinting, punchbags, sledgehammers among other fun toys. Weigh in and Body fat monitoring available. The programme starts on Monday June 10th 2019 at 6.30am . Classes are Mondays and Wednesdays @6.30am and Saturday @10am Parking and Showers. Huge interest in this so don't miss out. Programme Costs €160 limited places"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      },
      {
        "label": "Uncategorized",
        "path": "/category/uncategorized"
      }
    ],
    "prev": {
      "slug": "june-boxing-and-conditioning",
      "title": "June Boxing and Conditioning"
    },
    "next": {
      "slug": "november-boxing-and-conditioning-2",
      "title": "November Boxing and Conditioning"
    }
  },
  {
    "slug": "june-boxing-and-conditioning",
    "title": "June Boxing and Conditioning",
    "date": "May 20, 2019",
    "excerpt": "Our 8 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it […]",
    "paragraphs": [
      "Our 8 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it takes it go the extra round Suitable and challenging for all levels of fitness. Programme Commences on June 10th 2019 and Includes 3 classes per week Monday and Wednesday @ 7pm and Saturday 10am All for only €199. Places are limited. Sign up Today"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our 8 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it takes it go the extra round Suitable and challenging for all levels of fitness. Programme Commences on June 10th 2019 and Includes 3 classes per week Monday and Wednesday @ 7pm and Saturday 10am All for only €199. Places are limited. Sign up Today"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      },
      {
        "label": "Uncategorized",
        "path": "/category/uncategorized"
      }
    ],
    "prev": {
      "slug": "weworkwebox",
      "title": "weworkwebox"
    },
    "next": {
      "slug": "june-early-morning-boxing",
      "title": "June Early Morning Boxing"
    }
  },
  {
    "slug": "weworkwebox",
    "title": "weworkwebox",
    "date": "January 18, 2019",
    "excerpt": "We are delighted to announce our 2 boxing workshop dates to Wework Dublin Landings.Our sessions will improve both boxing skills and conditioning . This is the perfect opportunity to learn the sweet science. Our Boxing and Conditioning class is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after […]",
    "paragraphs": [
      "We are delighted to announce our 2 boxing workshop dates to Wework Dublin Landings.Our sessions will improve both boxing skills and conditioning . This is the perfect opportunity to learn the sweet science. Our Boxing and Conditioning class is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect pad work mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it takes it go the extra round. Suitable and challenging for all levels of fitness. Gloves provided. Programme Dates are 21st of June, 05th of July @12pm Price is €30"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "We are delighted to announce our 2 boxing workshop dates to Wework Dublin Landings.Our sessions will improve both boxing skills and conditioning . This is the perfect opportunity to learn the sweet science. Our Boxing and Conditioning class is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect pad work mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it takes it go the extra round. Suitable and challenging for all levels of fitness. Gloves provided. Programme Dates are 21st of June, 05th of July @12pm Price is €30"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "january-boxing-and-conditioning-2019",
      "title": "January Boxing and Conditioning 2019"
    },
    "next": {
      "slug": "june-boxing-and-conditioning",
      "title": "June Boxing and Conditioning"
    }
  },
  {
    "slug": "november-boxing-and-conditioning",
    "title": "November Boxing And Conditioning",
    "date": "October 25, 2018",
    "excerpt": "Our 6 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches Challenge yourself to master the technique and see have you got what it […]",
    "paragraphs": [
      "Our 6 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches Challenge yourself to master the technique and see have you got what it takes it go the extra round Suitable and challenging for all levels of fitness. Programme Commences on Monday November 12th and Includes 3 classes per week Monday and Wednesday @ 7pm and Saturday 10am All for only €160. Places are limited. Sign up Today"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our 6 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches Challenge yourself to master the technique and see have you got what it takes it go the extra round Suitable and challenging for all levels of fitness. Programme Commences on Monday November 12th and Includes 3 classes per week Monday and Wednesday @ 7pm and Saturday 10am All for only €160. Places are limited. Sign up Today"
      }
    ],
    "postedIn": [
      {
        "label": "Uncategorized",
        "path": "/category/uncategorized"
      }
    ],
    "prev": {
      "slug": "early-morning-boxing-conditioning",
      "title": "Early Morning Boxing Conditioning January 2019"
    },
    "next": {
      "slug": "january-boxing-and-conditioning-2019",
      "title": "January Boxing and Conditioning 2019"
    }
  },
  {
    "slug": "early-morning-boxing-conditioning",
    "title": "Early Morning Boxing Conditioning January 2019",
    "date": "August 24, 2018",
    "excerpt": "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in […]",
    "paragraphs": [
      "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in return is your commitment and honesty (sounds simple). Expect sprinting, punchbags, sledgehammers among other fun toys. Weigh in and Body fat monitoring available. The programme starts on Monday January 14 th 2019 at 6.30am . Classes are Mondays and Wednesdays @6.30am and Saturday @10am Parking and Showers. Huge interest in this so don't miss out. Programme Costs €160 limited places",
      "https://www.whitecollarboxing.org/sign-up/"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "We are excited to announce our 6 week Rise and Grind Boxing Conditioning programme. Train with Eoin Stanley and get fighting fit. Eoin will use all the tricks he learned working with GB Boxing, looking after Heavyweight Champion Anthony Joshua among others. Eoin will push your conditioning to the next level all he wants in return is your commitment and honesty (sounds simple). Expect sprinting, punchbags, sledgehammers among other fun toys. Weigh in and Body fat monitoring available. The programme starts on Monday January 14 th 2019 at 6.30am . Classes are Mondays and Wednesdays @6.30am and Saturday @10am Parking and Showers. Huge interest in this so don't miss out. Programme Costs €160 limited places"
      },
      {
        "t": "p",
        "v": "https://www.whitecollarboxing.org/sign-up/"
      },
      {
        "t": "img",
        "src": "/images/content/88199d8213dff2aa88cd090d63f09876.jpg",
        "alt": "Boxing Gym Dublin"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "september-boxing-bootcamp",
      "title": "September Boxing Bootcamp"
    },
    "next": {
      "slug": "november-boxing-and-conditioning",
      "title": "November Boxing And Conditioning"
    }
  },
  {
    "slug": "september-boxing-bootcamp",
    "title": "September Boxing Bootcamp",
    "date": "July 13, 2018",
    "excerpt": "Our September 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on […]",
    "paragraphs": [
      "Our September 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on Monday September 10th & includes boxing x 2 (Monday and Wednesday @7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutritional support *Sparring(optional) *Bagwork *Assessment and tracking *Expert Coaching All for only €249. Early Bird Special €199 when you sign up before July 31st!!!! Place are Limited. Sign up today."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our September 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on Monday September 10th & includes boxing x 2 (Monday and Wednesday @7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutritional support *Sparring(optional) *Bagwork *Assessment and tracking *Expert Coaching All for only €249. Early Bird Special €199 when you sign up before July 31st!!!! Place are Limited. Sign up today."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "april-boxing-bootcamp",
      "title": "April Boxing Bootcamp"
    },
    "next": {
      "slug": "early-morning-boxing-conditioning",
      "title": "Early Morning Boxing Conditioning January 2019"
    }
  },
  {
    "slug": "celbridge-gaa-fight-night",
    "title": "Celbridge Gaa Fight Night",
    "date": "February 22, 2018",
    "excerpt": "Seconds out, round one. The White Collar Boxing phenomenon has spread across the country over recent years, and on March 10 Celbridge GAA will be another club to send its brave members into the ring. Rather than just getting involved for the joy of having a pop at fellow teammates and earning dressing room bragging […]",
    "paragraphs": [
      "Seconds out, round one.",
      "The White Collar Boxing phenomenon has spread across the country over recent years, and on March 10 Celbridge GAA will be another club to send its brave members into the ring.",
      "Rather than just getting involved for the joy of having a pop at fellow teammates and earning dressing room bragging rights, all 30 fighters are stepping up to the plate to raise money for the development of their club.",
      "Members of the senior football, hurling, ladies football and camogie teams, as well as underage managers, have been training relentlessly in preparation for the big night.",
      "In partnership with The Village Inn, the club have also teamed up with WhiteCollarBoxing.org, founded back in 2005.",
      "The website was launched by former Irish Olympian and professional boxer Cathal O'Grady, and his mission was to bring the benefits of boxing to a previously neglected audience and get people involved in the sport.",
      "13 years later, with O'Grady spearheading the training, Celbridge GAA have got on board and it's all systems go for the night itself.",
      "Senior football manager Trevor O'Sullivan pointed to the dedication of all boxers in preparation for Fight Night 2018.",
      "\"Training has been going fantastically well. All participants, ladies and gents, have been putting in a massive effort and there has been a remarkable improvement from week to week. Coupled with the obvious fitness benefits, there has also been a real enjoyable element to the entire process.\"",
      "O'Sullivan added, \"if the launch night is anything to go by we can look forward to a memorable night in the club on March 10.\"",
      "https://www.kildarenow.com/sport/celbridge-gaa-club-teaming-former-olympian-white-collar-boxing-fundraiser/207748"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Seconds out, round one."
      },
      {
        "t": "p",
        "v": "The White Collar Boxing phenomenon has spread across the country over recent years, and on March 10 Celbridge GAA will be another club to send its brave members into the ring."
      },
      {
        "t": "p",
        "v": "Rather than just getting involved for the joy of having a pop at fellow teammates and earning dressing room bragging rights, all 30 fighters are stepping up to the plate to raise money for the development of their club."
      },
      {
        "t": "p",
        "v": "Members of the senior football, hurling, ladies football and camogie teams, as well as underage managers, have been training relentlessly in preparation for the big night."
      },
      {
        "t": "p",
        "v": "In partnership with The Village Inn, the club have also teamed up with WhiteCollarBoxing.org, founded back in 2005."
      },
      {
        "t": "p",
        "v": "The website was launched by former Irish Olympian and professional boxer Cathal O'Grady, and his mission was to bring the benefits of boxing to a previously neglected audience and get people involved in the sport."
      },
      {
        "t": "p",
        "v": "13 years later, with O'Grady spearheading the training, Celbridge GAA have got on board and it's all systems go for the night itself."
      },
      {
        "t": "p",
        "v": "Senior football manager Trevor O'Sullivan pointed to the dedication of all boxers in preparation for Fight Night 2018."
      },
      {
        "t": "p",
        "v": "\"Training has been going fantastically well. All participants, ladies and gents, have been putting in a massive effort and there has been a remarkable improvement from week to week. Coupled with the obvious fitness benefits, there has also been a real enjoyable element to the entire process.\""
      },
      {
        "t": "p",
        "v": "O'Sullivan added, \"if the launch night is anything to go by we can look forward to a memorable night in the club on March 10.\""
      },
      {
        "t": "p",
        "v": "https://www.kildarenow.com/sport/celbridge-gaa-club-teaming-former-olympian-white-collar-boxing-fundraiser/207748"
      }
    ],
    "postedIn": [
      {
        "label": "Upcoming Events",
        "path": "/category/events_main_page/upcoming_events"
      }
    ],
    "prev": {
      "slug": "box-4-barretstown",
      "title": "Box 4 Barretstown"
    },
    "next": {
      "slug": "april-boxing-bootcamp",
      "title": "April Boxing Bootcamp"
    }
  },
  {
    "slug": "box-4-barretstown",
    "title": "Box 4 Barretstown",
    "date": "February 22, 2018",
    "excerpt": "The Wicklow Garda Division Presents \"Box 4 Barretstown\" .32 Gardai are currently training for this amazing event. Olympian and Garda Adam Nolan is currently putting them through their paces. The event takes place in Newtownmount Kennedy on March 2nd and is sponsored by St Raphaels Credit Union",
    "paragraphs": [
      "The Wicklow Garda Division Presents \"Box 4 Barretstown\" .32 Gardai are currently training for this amazing event. Olympian and Garda Adam Nolan is currently putting them through their paces. The event takes place in Newtownmount Kennedy on March 2nd and is sponsored by St Raphaels Credit Union"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The Wicklow Garda Division Presents \"Box 4 Barretstown\" .32 Gardai are currently training for this amazing event. Olympian and Garda Adam Nolan is currently putting them through their paces. The event takes place in Newtownmount Kennedy on March 2nd and is sponsored by St Raphaels Credit Union"
      },
      {
        "t": "img",
        "src": "/images/content/73bd02093487a9cadfda3d07706e5299.jpeg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/4c99407d42566161a1dbe487fbadd5cf.jpeg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Upcoming Events",
        "path": "/category/events_main_page/upcoming_events"
      }
    ],
    "prev": {
      "slug": "gavinglynn",
      "title": "Gavin Glynn Fight Night"
    },
    "next": {
      "slug": "celbridge-gaa-fight-night",
      "title": "Celbridge Gaa Fight Night"
    }
  },
  {
    "slug": "gavinglynn",
    "title": "Gavin Glynn Fight Night",
    "date": "February 22, 2018",
    "excerpt": "On March 8th, 26 volunteers will be competing in a charity boxing match in aid of The Gavin Glynn Foundation. This foundation supports and enables families, with children fighting cancer, to travel overseas to avail of treatment. Supports provided include assisting families with their flights, accommodation and food/living expenses. The event will be held in […]",
    "paragraphs": [
      "On March 8th, 26 volunteers will be competing in a charity boxing match in aid of The Gavin Glynn Foundation.",
      "This foundation supports and enables families, with children fighting cancer, to travel overseas to avail of treatment. Supports provided include assisting families with their flights, accommodation and food/living expenses.",
      "The event will be held in Buskers Bar and the boxers are currently boxing training with Cathal O Grady and his crew in his Dublin Boxing Gym"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "On March 8th, 26 volunteers will be competing in a charity boxing match in aid of The Gavin Glynn Foundation."
      },
      {
        "t": "p",
        "v": "This foundation supports and enables families, with children fighting cancer, to travel overseas to avail of treatment. Supports provided include assisting families with their flights, accommodation and food/living expenses."
      },
      {
        "t": "p",
        "v": "The event will be held in Buskers Bar and the boxers are currently boxing training with Cathal O Grady and his crew in his Dublin Boxing Gym"
      },
      {
        "t": "img",
        "src": "/images/content/3aa99a75a46bb0e3c8b8f4a2dd3e9c63.jpeg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Upcoming Events",
        "path": "/category/events_main_page/upcoming_events"
      }
    ],
    "prev": {
      "slug": "new-year-boxing-bootcamp18",
      "title": "New Year Boxing Bootcamp"
    },
    "next": {
      "slug": "box-4-barretstown",
      "title": "Box 4 Barretstown"
    }
  },
  {
    "slug": "new-year-boxing-bootcamp18",
    "title": "New Year Boxing Bootcamp",
    "date": "December 4, 2017",
    "excerpt": "Our boxing bootcamp is the only way to start the new year off . Our New Year 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our […]",
    "paragraphs": [
      "Our boxing bootcamp is the only way to start the new year off . Our New Year 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on Monday January 15th & includes boxing x 2 (Mon and Wed @7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutrition Workshop *A Fight Night (optional) *Assessment and tracking *All for only €199. Free sparring gloves(Worth €40)if you sign up before December 25th. Place are Limited. Sign up today."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our boxing bootcamp is the only way to start the new year off . Our New Year 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on Monday January 15th & includes boxing x 2 (Mon and Wed @7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutrition Workshop *A Fight Night (optional) *Assessment and tracking *All for only €199. Free sparring gloves(Worth €40)if you sign up before December 25th. Place are Limited. Sign up today."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "b-fit-boxing-belfast",
      "title": "B Fit Boxing Belfast"
    },
    "next": {
      "slug": "gavinglynn",
      "title": "Gavin Glynn Fight Night"
    }
  },
  {
    "slug": "b-fit-boxing-belfast",
    "title": "B Fit Boxing Belfast",
    "date": "August 14, 2017",
    "excerpt": "Totally de-stress!! Learn a skill!!! Torch up to 1000 calories per class!!! Get in the shape of your life!! Learn from the best!! Our 8 week Beginner Boxing Programme kicks off on Tuesday 19th September and we need 30 serious applicants to take up the challenge male or female, you get: Two 1.5hr coached sessions […]",
    "paragraphs": [
      "Totally de-stress!!",
      "Learn a skill!!!",
      "Torch up to 1000 calories per class!!!",
      "Get in the shape of your life!!",
      "Learn from the best!!",
      "Our 8 week Beginner Boxing Programme kicks off on Tuesday 19th September and we need 30 serious applicants to take up the challenge male or female, you get:",
      "Two 1.5hr coached sessions per week from Heavyweight Champ Cathal McMonagle",
      "Sparring, Padwork,Bagwork, Conditioning.",
      "Excellent boxing area with championship ring.",
      "Nutrition Advice.",
      "Fight Night– The Ultimate Challenge.",
      "Assessment and tracking.",
      "All for only £199. Apply today and sign up and Training takes place on Tuesdays and Thursdays @7pm @ B Fit Belfast 79-85 Ravenhill Rd, Belfast, BT6 8DQ",
      "Call Cathal on 07706298954 for more details",
      "Places are Limited.Sign Up Today"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Totally de-stress!!"
      },
      {
        "t": "p",
        "v": "Learn a skill!!!"
      },
      {
        "t": "p",
        "v": "Torch up to 1000 calories per class!!!"
      },
      {
        "t": "p",
        "v": "Get in the shape of your life!!"
      },
      {
        "t": "p",
        "v": "Learn from the best!!"
      },
      {
        "t": "p",
        "v": "Our 8 week Beginner Boxing Programme kicks off on Tuesday 19th September and we need 30 serious applicants to take up the challenge male or female, you get:"
      },
      {
        "t": "p",
        "v": "Two 1.5hr coached sessions per week from Heavyweight Champ Cathal McMonagle"
      },
      {
        "t": "p",
        "v": "Sparring, Padwork,Bagwork, Conditioning."
      },
      {
        "t": "p",
        "v": "Excellent boxing area with championship ring."
      },
      {
        "t": "p",
        "v": "Nutrition Advice."
      },
      {
        "t": "p",
        "v": "Fight Night– The Ultimate Challenge."
      },
      {
        "t": "p",
        "v": "Assessment and tracking."
      },
      {
        "t": "p",
        "v": "All for only £199. Apply today and sign up and Training takes place on Tuesdays and Thursdays @7pm @ B Fit Belfast 79-85 Ravenhill Rd, Belfast, BT6 8DQ"
      },
      {
        "t": "p",
        "v": "Call Cathal on 07706298954 for more details"
      },
      {
        "t": "p",
        "v": "Places are Limited.Sign Up Today"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/4b58bdb2c62815c7f3aaf607a2d008f1.jpg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/4bdd559fc68ff1387e2d9abe0e4315b9.jpg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/67370fbd51c45a8af64fc80f32f0310b.jpg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/3a6fc8812cda30933509710918a6ef2e.jpg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/ed2a8b7d3b27f9cfe5b27d36cd9caebf.jpg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/843777b1399cbcf0774fcffb93b83c94.jpg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/1bb69d7c3fbf709fdcc37655b4226f35.jpg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/a2768ced32e68385bbc11d905419f5ef.jpg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/0e03dc9c62506974e5f122fa33dda9d7.jpg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/940e20a317f3fa2b31dedddc1138a232.jpg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/d5444927eb34f688858f5368844fd779.jpg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/bb982fbffa481777ffd74c443459f0f4.jpg",
        "alt": ""
      },
      {
        "t": "img",
        "src": "/images/content/f27a80b94c21c4efdbf55abddc6dcb68.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "october",
      "title": "October 8 Week Beginner Boxing Bootcamp"
    },
    "next": {
      "slug": "new-year-boxing-bootcamp18",
      "title": "New Year Boxing Bootcamp"
    }
  },
  {
    "slug": "october",
    "title": "October 8 Week Beginner Boxing Bootcamp",
    "date": "August 4, 2017",
    "excerpt": "October 8 Week Beginner Boxing Bootcamp . Totally destress!! Learn a skill!!! Torch up to 1000 calories per class!!! Get in the shape of your life!! Learn from the best!! Our 8 week Olympic Beginner Boxing Programme kicks off on Tuesday 24th October and we need 30 serious applicants to take up the challenge male […]",
    "paragraphs": [
      "October 8 Week Beginner Boxing Bootcamp . Totally destress!! Learn a skill!!! Torch up to 1000 calories per class!!! Get in the shape of your life!! Learn from the best!! Our 8 week Olympic Beginner Boxing Programme kicks off on Tuesday 24th October and we need 30 serious applicants to take up the challenge male or female, you get: – 3 1hr coached sessions per week from Olympic level coaches – 2 Boxing Classes and 1 Weekend Warrior- Nutrition Advice – A fight night (optional) – Assessment and tracking – All for only €199. Apply today and sign up and Training takes place on Tuesdays and Thursdays @7pm and Saturday @10am at our gym in Harold's Cross. Place are Limited"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "October 8 Week Beginner Boxing Bootcamp . Totally destress!! Learn a skill!!! Torch up to 1000 calories per class!!! Get in the shape of your life!! Learn from the best!! Our 8 week Olympic Beginner Boxing Programme kicks off on Tuesday 24th October and we need 30 serious applicants to take up the challenge male or female, you get: – 3 1hr coached sessions per week from Olympic level coaches – 2 Boxing Classes and 1 Weekend Warrior- Nutrition Advice – A fight night (optional) – Assessment and tracking – All for only €199. Apply today and sign up and Training takes place on Tuesdays and Thursdays @7pm and Saturday @10am at our gym in Harold's Cross. Place are Limited"
      },
      {
        "t": "img",
        "src": "/images/content/b3103d0ae03719075743e45665455894.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "8-week-spring-beginner-boxing-bootcamp",
      "title": "8 Week Spring Beginner Boxing Bootcamp"
    },
    "next": {
      "slug": "b-fit-boxing-belfast",
      "title": "B Fit Boxing Belfast"
    }
  },
  {
    "slug": "8-week-spring-beginner-boxing-bootcamp",
    "title": "8 Week Spring Beginner Boxing Bootcamp",
    "date": "February 1, 2017",
    "excerpt": "Get a spring in your step, with our 8 week Spring Boxing Boot-camp. This is the perfect way to get that \"spring in your step\", get into great shape, learn a new sport, whilst being trained & motivated by our team of dedicated coaches, including two former Boxing Olympians & an International Athletics Champion. Our […]",
    "paragraphs": [
      "Get a spring in your step, with our 8 week Spring Boxing Boot-camp. This is the perfect way to get that \"spring in your step\", get into great shape, learn a new sport, whilst being trained & motivated by our team of dedicated coaches, including two former Boxing Olympians & an International Athletics Champion. Our programme commences on Tuesday February 21st & includes 8 weeks training in our dedicated gym, boxing x 2 sessions per week (Tues & Thurs @7pm) & Strength & Conditioning x 1 session (Sat @10am). Programme includes * 8 weeks training (X 24 sessions) *Fight Night (optional) *Assessment & tracking *All for only €199. Place are limited so sign up fast."
    ],
    "image": "/images/featured/8-week-spring-beginner-boxing-bootcamp.jpg",
    "blocks": [
      {
        "t": "p",
        "v": "Get a spring in your step, with our 8 week Spring Boxing Boot-camp. This is the perfect way to get that \"spring in your step\", get into great shape, learn a new sport, whilst being trained & motivated by our team of dedicated coaches, including two former Boxing Olympians & an International Athletics Champion. Our programme commences on Tuesday February 21st & includes 8 weeks training in our dedicated gym, boxing x 2 sessions per week (Tues & Thurs @7pm) & Strength & Conditioning x 1 session (Sat @10am). Programme includes * 8 weeks training (X 24 sessions) *Fight Night (optional) *Assessment & tracking *All for only €199. Place are limited so sign up fast."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "new-year-boxing-bootcamp",
      "title": "New Year Boxing Bootcamp"
    },
    "next": {
      "slug": "october",
      "title": "October 8 Week Beginner Boxing Bootcamp"
    }
  },
  {
    "slug": "new-year-boxing-bootcamp",
    "title": "New Year Boxing Bootcamp",
    "date": "November 18, 2016",
    "excerpt": "Our boxing bootcamp is the only way to start the new year off . Our New Year 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our […]",
    "paragraphs": [
      "Our boxing bootcamp is the only way to start the new year off . Our New Year 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on Monday January 16th & includes boxing x 2 (Mon and Wed @7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutrition Workshop *A Fight Night (optional) *Assessment and tracking *All for only €199. Free sparring gloves(Worth €40)if you sign up before December 25th. Place are Limited. Sign up today."
    ],
    "image": "/images/featured/new-year-boxing-bootcamp.jpg",
    "blocks": [
      {
        "t": "p",
        "v": "Our boxing bootcamp is the only way to start the new year off . Our New Year 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on Monday January 16th & includes boxing x 2 (Mon and Wed @7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutrition Workshop *A Fight Night (optional) *Assessment and tracking *All for only €199. Free sparring gloves(Worth €40)if you sign up before December 25th. Place are Limited. Sign up today."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "tiny-life-big-fight-2",
      "title": "Tiny Life Big Fight"
    },
    "next": {
      "slug": "8-week-spring-beginner-boxing-bootcamp",
      "title": "8 Week Spring Beginner Boxing Bootcamp"
    }
  },
  {
    "slug": "tiny-life-big-fight-2",
    "title": "Tiny Life Big Fight",
    "date": "October 10, 2016",
    "excerpt": "Tiny Life Big Fight takes place in the La Mon Hotel and Country club on Thursday 27th October. All funds raised on the night go to the tinylife charity. Doors open at 7.3opm and tickets and information is available from info@tinylife.org.uk",
    "paragraphs": [
      "Tiny Life Big Fight takes place in the La Mon Hotel and Country club on Thursday 27th October. All funds raised on the night go to the tinylife charity. Doors open at 7.3opm and tickets and information is available from info@tinylife.org.uk"
    ],
    "image": "/images/featured/tiny-life-big-fight-2.jpg",
    "blocks": [
      {
        "t": "p",
        "v": "Tiny Life Big Fight takes place in the La Mon Hotel and Country club on Thursday 27th October. All funds raised on the night go to the tinylife charity. Doors open at 7.3opm and tickets and information is available from info@tinylife.org.uk"
      },
      {
        "t": "img",
        "src": "/images/content/3a0220583ca9721765b24b6ffb350e5c.jpg",
        "alt": "TinyLife White Collar Boxing Registration 2015"
      }
    ],
    "postedIn": [
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "november-beginners-boxing",
      "title": "November Beginners Boxing"
    },
    "next": {
      "slug": "new-year-boxing-bootcamp",
      "title": "New Year Boxing Bootcamp"
    }
  },
  {
    "slug": "november-beginners-boxing",
    "title": "November Beginners Boxing",
    "date": "October 10, 2016",
    "excerpt": "Our next 6 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on […]",
    "paragraphs": [
      "Our next 6 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on the 1st of November & includes boxing x 2 (Tues & Thurs ´@7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 6 weeks training (X 18 sessions) *Nutrition Workshop *A Fight Night (optional) *Assessment and tracking *All for only €150. Place are Limited. Sign up today."
    ],
    "image": "/images/featured/november-beginners-boxing.jpg",
    "blocks": [
      {
        "t": "p",
        "v": "Our next 6 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on the 1st of November & includes boxing x 2 (Tues & Thurs ´@7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 6 weeks training (X 18 sessions) *Nutrition Workshop *A Fight Night (optional) *Assessment and tracking *All for only €150. Place are Limited. Sign up today."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "september-beginner-boxing-programme",
      "title": "September Beginner Boxing Programme"
    },
    "next": {
      "slug": "tiny-life-big-fight-2",
      "title": "Tiny Life Big Fight"
    }
  },
  {
    "slug": "september-beginner-boxing-programme",
    "title": "September Beginner Boxing Programme",
    "date": "August 3, 2016",
    "excerpt": "Our next 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on […]",
    "paragraphs": [
      "Our next 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on the 12th of September & includes boxing x 2 (Mon & Wed ´@7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutrition Workshop *A Fight Night (optional) *Assessment and tracking *All for only €199. Place are Limited. Sign up today."
    ],
    "image": "/images/featured/september-beginner-boxing-programme.jpg",
    "blocks": [
      {
        "t": "p",
        "v": "Our next 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on the 12th of September & includes boxing x 2 (Mon & Wed ´@7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutrition Workshop *A Fight Night (optional) *Assessment and tracking *All for only €199. Place are Limited. Sign up today."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "september-beginners-boxing-programme",
      "title": "September Beginners Boxing Programme"
    },
    "next": {
      "slug": "november-beginners-boxing",
      "title": "November Beginners Boxing"
    }
  },
  {
    "slug": "september-beginners-boxing-programme",
    "title": "September Beginners Boxing Programme",
    "date": "August 3, 2016",
    "excerpt": "Our next 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on […]",
    "paragraphs": [
      "Our next 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on the 12th of September & includes boxing x 2 (Mon & Wed ´@7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutrition Workshop *A Fight Night (optional) *Assessment and tracking *All for only €199. Place are Limited. Sign up today."
    ],
    "image": "/images/featured/september-beginners-boxing-programme.jpg",
    "blocks": [
      {
        "t": "p",
        "v": "Our next 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on the 12th of September & includes boxing x 2 (Mon & Wed ´@7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutrition Workshop *A Fight Night (optional) *Assessment and tracking *All for only €199. Place are Limited. Sign up today."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "saints-v-sinners",
      "title": "Saints V Sinners White Collar Boxing"
    },
    "next": {
      "slug": "september-beginner-boxing-programme",
      "title": "September Beginner Boxing Programme"
    }
  },
  {
    "slug": "saints-v-sinners",
    "title": "Saints V Sinners White Collar Boxing",
    "date": "May 31, 2016",
    "excerpt": "Wolfe Tones Hurling Club and St Senans RFC lock horns in a unique battle between both clubs. The event takes places in The Bunratty Castle Hotel on Sunday 5th of June. Tickets are €20 and proceeds go to both clubs",
    "paragraphs": [
      "Wolfe Tones Hurling Club and St Senans RFC lock horns in a unique battle between both clubs. The event takes places in The Bunratty Castle Hotel on Sunday 5th of June. Tickets are €20 and proceeds go to both clubs"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Wolfe Tones Hurling Club and St Senans RFC lock horns in a unique battle between both clubs. The event takes places in The Bunratty Castle Hotel on Sunday 5th of June. Tickets are €20 and proceeds go to both clubs"
      },
      {
        "t": "img",
        "src": "/images/content/0329fdf01dec7b9e8ee72fc2e21c5a93.jpg",
        "alt": "White Collar Boxing Clare"
      }
    ],
    "postedIn": [
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "june-boxing-bootcamp",
      "title": "June Boxing Bootcamp"
    },
    "next": {
      "slug": "september-beginners-boxing-programme",
      "title": "September Beginners Boxing Programme"
    }
  },
  {
    "slug": "june-boxing-bootcamp",
    "title": "June Boxing Bootcamp",
    "date": "May 31, 2016",
    "excerpt": "Our next 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you in shape for the summer. We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our […]",
    "paragraphs": [
      "Our next 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you in shape for the summer. We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion.",
      "Our programme commences on the 13th of June & includes boxing x 2 (Mon & Wed ´@7pm) & Strength & Conditioning x 1 (sat 10am).",
      "Programme includes",
      "* 8 weeks training (X 24 sessions)",
      "*Nutrition Workshop",
      "*A Fight Night (optional)",
      "*Assessment and tracking",
      "*All for only €199.",
      "Place are Limited. Sign up today."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our next 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you in shape for the summer. We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion."
      },
      {
        "t": "p",
        "v": "Our programme commences on the 13th of June & includes boxing x 2 (Mon & Wed ´@7pm) & Strength & Conditioning x 1 (sat 10am)."
      },
      {
        "t": "p",
        "v": "Programme includes"
      },
      {
        "t": "p",
        "v": "* 8 weeks training (X 24 sessions)"
      },
      {
        "t": "p",
        "v": "*Nutrition Workshop"
      },
      {
        "t": "p",
        "v": "*A Fight Night (optional)"
      },
      {
        "t": "p",
        "v": "*Assessment and tracking"
      },
      {
        "t": "p",
        "v": "*All for only €199."
      },
      {
        "t": "p",
        "v": "Place are Limited. Sign up today."
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "boxing-fundraiser-punch-up-in-the-palace",
      "title": "Boxing Fundraiser Punch up in the Palace"
    },
    "next": {
      "slug": "saints-v-sinners",
      "title": "Saints V Sinners White Collar Boxing"
    }
  },
  {
    "slug": "boxing-fundraiser-punch-up-in-the-palace",
    "title": "Boxing Fundraiser Punch up in the Palace",
    "date": "April 8, 2016",
    "excerpt": "Our event has been upgraded from a bunker to a palace….!! On Friday 15th April White Collar Boxing is coming to the salubrious Palace Nightclub on Camden Street where our brave novice boxers will battle it out to raise money for people with Motor Neurone Disease after 8 weeks of tough training. Tickets on sale […]",
    "paragraphs": [
      "Our event has been upgraded from a bunker to a palace….!! On Friday 15th April White Collar Boxing is coming to the salubrious Palace Nightclub on Camden Street where our brave novice boxers will battle it out to raise money for people with Motor Neurone Disease after 8 weeks of tough training. Tickets on sale very soon, watch this space!!",
      "Let's get Ready to RRRumble!"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our event has been upgraded from a bunker to a palace….!! On Friday 15th April White Collar Boxing is coming to the salubrious Palace Nightclub on Camden Street where our brave novice boxers will battle it out to raise money for people with Motor Neurone Disease after 8 weeks of tough training. Tickets on sale very soon, watch this space!!"
      },
      {
        "t": "p",
        "v": "Let's get Ready to RRRumble!"
      },
      {
        "t": "img",
        "src": "/images/content/ced1dc17f0384257087e20293b0ae158.jpg",
        "alt": "Boxing Fundraiser"
      }
    ],
    "postedIn": [
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "may-beginners-boxing-bootcamp",
      "title": "May Beginners Boxing Bootcamp"
    },
    "next": {
      "slug": "june-boxing-bootcamp",
      "title": "June Boxing Bootcamp"
    }
  },
  {
    "slug": "may-beginners-boxing-bootcamp",
    "title": "May Beginners Boxing Bootcamp",
    "date": "April 8, 2016",
    "excerpt": "May Beginners Bootcamp Gym routine boring you? Want to learn a skill from Olympians? Get in the best shape of your life? Learn the art of boxing giving you the confidence, the enjoyment of exercise and power to take control of your life. Our 8 week Olympic Beginner Boxing Programme kicks off on Tuesday May […]",
    "paragraphs": [
      "May Beginners Bootcamp",
      "Gym routine boring you? Want to learn a skill from Olympians? Get in the best shape of your life?",
      "Learn the art of boxing giving you the confidence, the enjoyment of exercise and power to take control of your life. Our 8 week Olympic Beginner Boxing Programme kicks off on Tuesday May 3rd and we need 30 serious applicants to take up the challenge",
      "Enjoy the team environment",
      "8 Week May Boxing Challenge",
      "Male or female, you get: - 3 coaching sessions per week from Olympic level coaches - Nutrition Workshop - A fight night (optional) - Assessment and tracking - Free Hand-wraps",
      "€160 for 8 weeks. Apply today and sign up and Training takes place on Tuesdays and Thursdays @7pm and Saturday @10am at our gym in Harold's Cross. Place are Limited"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "May Beginners Bootcamp"
      },
      {
        "t": "p",
        "v": "Gym routine boring you? Want to learn a skill from Olympians? Get in the best shape of your life?"
      },
      {
        "t": "p",
        "v": "Learn the art of boxing giving you the confidence, the enjoyment of exercise and power to take control of your life. Our 8 week Olympic Beginner Boxing Programme kicks off on Tuesday May 3rd and we need 30 serious applicants to take up the challenge"
      },
      {
        "t": "p",
        "v": "Enjoy the team environment"
      },
      {
        "t": "p",
        "v": "8 Week May Boxing Challenge"
      },
      {
        "t": "p",
        "v": "Male or female, you get: - 3 coaching sessions per week from Olympic level coaches - Nutrition Workshop - A fight night (optional) - Assessment and tracking - Free Hand-wraps"
      },
      {
        "t": "p",
        "v": "€160 for 8 weeks. Apply today and sign up and Training takes place on Tuesdays and Thursdays @7pm and Saturday @10am at our gym in Harold's Cross. Place are Limited"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "march-beginner-boxing-bootcamp",
      "title": "March Beginner 8 Week Boxing Bootcamp"
    },
    "next": {
      "slug": "boxing-fundraiser-punch-up-in-the-palace",
      "title": "Boxing Fundraiser Punch up in the Palace"
    }
  },
  {
    "slug": "march-beginner-boxing-bootcamp",
    "title": "March Beginner 8 Week Boxing Bootcamp",
    "date": "February 10, 2016",
    "excerpt": "Beginners Boxing Bootcamp Gym routine boring you? Want to learn a skill from Olympians? Get in the best shape of your life? Learn the art of boxing giving you the confidence, the enjoyment of exercise and power to take control of your life. Our 8 week Olympic Beginner Boxing Programme kicks off on Monday 21th […]",
    "paragraphs": [
      "Beginners Boxing Bootcamp",
      "Gym routine boring you? Want to learn a skill from Olympians? Get in the best shape of your life?",
      "Learn the art of boxing giving you the confidence, the enjoyment of exercise and power to take control of your life. Our 8 week Olympic Beginner Boxing Programme kicks off on Monday 21th March and we need 30 serious applicants to take up the challenge",
      "8 Week March Boxing Challenge",
      "Male or female, you get: - 3 coaching sessions per week from Olympic level coaches - Nutrition Workshop - A fight night (optional) - Assessment and tracking - Free Hand-wraps",
      "All for only €80 p/month. Apply today and sign up and Training takes place on Mondays and Wednesdays @7pm and Saturday @10am at our gym in Harold's Cross. Place are Limited"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Beginners Boxing Bootcamp"
      },
      {
        "t": "p",
        "v": "Gym routine boring you? Want to learn a skill from Olympians? Get in the best shape of your life?"
      },
      {
        "t": "p",
        "v": "Learn the art of boxing giving you the confidence, the enjoyment of exercise and power to take control of your life. Our 8 week Olympic Beginner Boxing Programme kicks off on Monday 21th March and we need 30 serious applicants to take up the challenge"
      },
      {
        "t": "p",
        "v": "8 Week March Boxing Challenge"
      },
      {
        "t": "p",
        "v": "Male or female, you get: - 3 coaching sessions per week from Olympic level coaches - Nutrition Workshop - A fight night (optional) - Assessment and tracking - Free Hand-wraps"
      },
      {
        "t": "p",
        "v": "All for only €80 p/month. Apply today and sign up and Training takes place on Mondays and Wednesdays @7pm and Saturday @10am at our gym in Harold's Cross. Place are Limited"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "the-battle-of-the-barony-fight-night",
      "title": "The Battle of the Barony Fight Night"
    },
    "next": {
      "slug": "may-beginners-boxing-bootcamp",
      "title": "May Beginners Boxing Bootcamp"
    }
  },
  {
    "slug": "the-battle-of-the-barony-fight-night",
    "title": "The Battle of the Barony Fight Night",
    "date": "February 8, 2016",
    "excerpt": "February 20th will be a big fight night in the south Kilkenny Area with Piltown and Mooncoin Gaa Clubs. settling old scores usually confined to the Hurling Field. The extravagansa that has sold out at over 1000 tickets will take place in Mooncoin Gaa on February 20th 2016",
    "paragraphs": [
      "February 20th will be a big fight night in the south Kilkenny Area with Piltown and Mooncoin Gaa Clubs. settling old scores usually confined to the Hurling Field. The extravagansa that has sold out at over 1000 tickets will take place in Mooncoin Gaa on February 20th 2016"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "February 20th will be a big fight night in the south Kilkenny Area with Piltown and Mooncoin Gaa Clubs. settling old scores usually confined to the Hurling Field. The extravagansa that has sold out at over 1000 tickets will take place in Mooncoin Gaa on February 20th 2016"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "simonstown-v-st-ultans-fight-night",
      "title": "Simonstown V St Ultans Fight Night"
    },
    "next": {
      "slug": "march-beginner-boxing-bootcamp",
      "title": "March Beginner 8 Week Boxing Bootcamp"
    }
  },
  {
    "slug": "simonstown-v-st-ultans-fight-night",
    "title": "Simonstown V St Ultans Fight Night",
    "date": "February 1, 2016",
    "excerpt": "These two Meath Big Guns are usually battling it out on the Gaa Field. On Saturday 6th February they take to the boxing ring to sort out their differences. There is 14 contest with alot of big names from the Meath Gaa scene lacing up the gloves",
    "paragraphs": [
      "These two Meath Big Guns are usually battling it out on the Gaa Field. On Saturday 6th February they take to the boxing ring to sort out their differences. There is 14 contest with alot of big names from the Meath Gaa scene lacing up the gloves"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "These two Meath Big Guns are usually battling it out on the Gaa Field. On Saturday 6th February they take to the boxing ring to sort out their differences. There is 14 contest with alot of big names from the Meath Gaa scene lacing up the gloves"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "beginner-boxing-challenge",
      "title": "8 Week New Year Boxing Challenge"
    },
    "next": {
      "slug": "the-battle-of-the-barony-fight-night",
      "title": "The Battle of the Barony Fight Night"
    }
  },
  {
    "slug": "beginner-boxing-challenge",
    "title": "8 Week New Year Boxing Challenge",
    "date": "December 10, 2015",
    "excerpt": "Beginners Boxing Gym routine boring you? Want to learn a skill from Olympians? Get in the best shape of your life? Learn the art of boxing giving you the confidence, the enjoyment of exercise and power to take control of your life. Our 8 week Olympic Beginner Boxing Programme kicks off on Monday 11th January […]",
    "paragraphs": [
      "Beginners Boxing",
      "Gym routine boring you? Want to learn a skill from Olympians? Get in the best shape of your life?",
      "Learn the art of boxing giving you the confidence, the enjoyment of exercise and power to take control of your life. Our 8 week Olympic Beginner Boxing Programme kicks off on Monday 11th January and we need 30 serious applicants to take up the challenge",
      "8 Week New Year Boxing Challenge",
      "Male or female, you get: - 3 coaching sessions per week from Olympic level coaches - An 8 Week Nutrition Plan (to kick start the New Year) - A fight night (optional) - Assessment and tracking - Free Hand-wraps",
      "All for only €90 p/month. Apply today and sign up before the New Year and avail of our 20% Early Bird Discount - finishes 31st Dec.Training takes place on Mondays and Wednesdays @8pm and Saturday @10am at our gym in Harold's Cross."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Beginners Boxing"
      },
      {
        "t": "p",
        "v": "Gym routine boring you? Want to learn a skill from Olympians? Get in the best shape of your life?"
      },
      {
        "t": "p",
        "v": "Learn the art of boxing giving you the confidence, the enjoyment of exercise and power to take control of your life. Our 8 week Olympic Beginner Boxing Programme kicks off on Monday 11th January and we need 30 serious applicants to take up the challenge"
      },
      {
        "t": "p",
        "v": "8 Week New Year Boxing Challenge"
      },
      {
        "t": "p",
        "v": "Male or female, you get: - 3 coaching sessions per week from Olympic level coaches - An 8 Week Nutrition Plan (to kick start the New Year) - A fight night (optional) - Assessment and tracking - Free Hand-wraps"
      },
      {
        "t": "p",
        "v": "All for only €90 p/month. Apply today and sign up before the New Year and avail of our 20% Early Bird Discount - finishes 31st Dec.Training takes place on Mondays and Wednesdays @8pm and Saturday @10am at our gym in Harold's Cross."
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "white-collar-boxing-in-galway",
      "title": "White Collar Boxing in Galway"
    },
    "next": {
      "slug": "simonstown-v-st-ultans-fight-night",
      "title": "Simonstown V St Ultans Fight Night"
    }
  },
  {
    "slug": "white-collar-boxing-in-galway",
    "title": "White Collar Boxing in Galway",
    "date": "November 17, 2015",
    "excerpt": "Delighted to return to Leitir Mor to help raise funds for the local Sportlann Naomh Anna. This is our third show in Connemara and they love their white collar boxing in Galway. Tickets are available from the Sportlann http://www.naomhanna.ie/sportlann.html and the event takes place on Saturday 28th November",
    "paragraphs": [
      "Delighted to return to Leitir Mor to help raise funds for the local Sportlann Naomh Anna. This is our third show in Connemara and they love their white collar boxing in Galway. Tickets are available from the Sportlann http://www.naomhanna.ie/sportlann.html and the event takes place on Saturday 28th November"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Delighted to return to Leitir Mor to help raise funds for the local Sportlann Naomh Anna. This is our third show in Connemara and they love their white collar boxing in Galway. Tickets are available from the Sportlann http://www.naomhanna.ie/sportlann.html and the event takes place on Saturday 28th November"
      },
      {
        "t": "img",
        "src": "/images/content/dbba5931ed2c029073393ae86947fb07.jpg",
        "alt": "White Collar Boxing Galway"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "wanderers-and-warriors-fight-night",
      "title": "Wanderers And Warriors Fight Night"
    },
    "next": {
      "slug": "beginner-boxing-challenge",
      "title": "8 Week New Year Boxing Challenge"
    }
  },
  {
    "slug": "wanderers-and-warriors-fight-night",
    "title": "Wanderers And Warriors Fight Night",
    "date": "November 17, 2015",
    "excerpt": "Wanderers GAA Club Ballyboden we would like to thank whitecollarboxing.org for training the fighters and running the fightnight for our Wanderers and Warriors White Collar Boxing Night . As you can imagine there is a huge cost to run this event and without the support of our sponsors it would be impossible to hold this […]",
    "paragraphs": [
      "Wanderers GAA Club Ballyboden we would like to thank whitecollarboxing.org for training the fighters and running the fightnight for our Wanderers and Warriors White Collar Boxing Night . As you can imagine there is a huge cost to run this event and without the support of our sponsors it would be impossible to hold this event. Their sponsorship will go towards the Juvenile GAA coach for the club and local schools and community. Tickets for the event can be bought online at www.wanderersgaa.ie",
      "The event will take place in The Palace on Camden St on Saturday November 28th 2015"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Wanderers GAA Club Ballyboden we would like to thank whitecollarboxing.org for training the fighters and running the fightnight for our Wanderers and Warriors White Collar Boxing Night . As you can imagine there is a huge cost to run this event and without the support of our sponsors it would be impossible to hold this event. Their sponsorship will go towards the Juvenile GAA coach for the club and local schools and community. Tickets for the event can be bought online at www.wanderersgaa.ie"
      },
      {
        "t": "p",
        "v": "The event will take place in The Palace on Camden St on Saturday November 28th 2015"
      },
      {
        "t": "img",
        "src": "/images/content/8c54ea66df497094f5a07caf18dc938d.jpg",
        "alt": "White Collar Boxing Fight Night"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "find-your-inner-warrior",
      "title": "Find Your Inner Warrior Charity Fight Night"
    },
    "next": {
      "slug": "white-collar-boxing-in-galway",
      "title": "White Collar Boxing in Galway"
    }
  },
  {
    "slug": "find-your-inner-warrior",
    "title": "Find Your Inner Warrior Charity Fight Night",
    "date": "November 17, 2015",
    "excerpt": "Stelfox recruitment have teamed up with Soar to bring to you a night of White Collar Boxing in The Palace Niteclub The show takes place on Friday 27th November 2015 and tickets are priced at €20.",
    "paragraphs": [
      "Stelfox recruitment have teamed up with Soar to bring to you a night of White Collar Boxing in The Palace Niteclub The show takes place on Friday 27th November 2015 and tickets are priced at €20."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Stelfox recruitment have teamed up with Soar to bring to you a night of White Collar Boxing in The Palace Niteclub The show takes place on Friday 27th November 2015 and tickets are priced at €20."
      },
      {
        "t": "img",
        "src": "/images/content/1a21a386fbe30ee0f3bea1b979299592.png",
        "alt": "Charity Boxing Fundraiser"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "8-week-beginner-boxing-programme",
      "title": "8 Week Beginner Boxing Programme"
    },
    "next": {
      "slug": "wanderers-and-warriors-fight-night",
      "title": "Wanderers And Warriors Fight Night"
    }
  },
  {
    "slug": "8-week-beginner-boxing-programme",
    "title": "8 Week Beginner Boxing Programme",
    "date": "October 1, 2015",
    "excerpt": "Our next 8 week \"Begin to Box\" programme, commences on Monday the 19th of October at 7pm. Learn the basics of boxing while having fun doing so. This programme is suitable for complete beginners. Training will take place in our purpose built boxing gym in Harolds Cross, Dublin 6. You will be trained and inspired […]",
    "paragraphs": [
      "Our next 8 week \"Begin to Box\" programme, commences on Monday the 19th of October at 7pm. Learn the basics of boxing while having fun doing so. This programme is suitable for complete beginners. Training will take place in our purpose built boxing gym in Harolds Cross, Dublin 6. You will be trained and inspired by our team of elite coaches. The sessions are on Mondays and Wednesdays at 7pm. If you are serious about getting fit and learning how to box, our gym at White Collar HQ is the place to come. Places are limited, so sign up soon. The programme costs €180. If you require any further info, please do not hesitate to contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our next 8 week \"Begin to Box\" programme, commences on Monday the 19th of October at 7pm. Learn the basics of boxing while having fun doing so. This programme is suitable for complete beginners. Training will take place in our purpose built boxing gym in Harolds Cross, Dublin 6. You will be trained and inspired by our team of elite coaches. The sessions are on Mondays and Wednesdays at 7pm. If you are serious about getting fit and learning how to box, our gym at White Collar HQ is the place to come. Places are limited, so sign up soon. The programme costs €180. If you require any further info, please do not hesitate to contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org."
      },
      {
        "t": "img",
        "src": "/images/content/3f50e7e4e1ef19cc8dba5ca4a54a2ddf.jpg",
        "alt": "Boxing Gym Dublin"
      },
      {
        "t": "img",
        "src": "/images/content/e5a7a74e058face5ced3df4202376b53.jpg",
        "alt": "Boxing Training"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "september-boxing-and-conditioning",
      "title": "September Boxing and Conditioning"
    },
    "next": {
      "slug": "find-your-inner-warrior",
      "title": "Find Your Inner Warrior Charity Fight Night"
    }
  },
  {
    "slug": "",
    "title": "8 Week Beginner Boxing Programme",
    "date": "October 1, 2015",
    "excerpt": "Our next 8 week \"Begin to Box\" programme, commences on Monday the 19th of October at 7pm. Learn the basics of boxing while having fun doing so. This programme is suitable for complete beginners. Training will take place in our purpose built boxing gym in Harolds Cross, Dublin 6. You will be trained and inspired […]",
    "paragraphs": [
      "Our next 8 week \"Begin to Box\" programme, commences on Monday the 19th of October at 7pm. Learn the basics of boxing while having fun doing so. This programme is suitable for complete beginners. Training will take place in our purpose built boxing gym in Harolds Cross, Dublin 6. You will be trained and inspired by our team of elite coaches. The sessions are on Mondays and Wednesdays at 7pm. If you are serious about getting fit and learning how to box, our gym at White Collar HQ is the place to come. Places are limited, so sign up soon. The programme costs €180. If you require any further info, please do not hesitate to contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our next 8 week \"Begin to Box\" programme, commences on Monday the 19th of October at 7pm. Learn the basics of boxing while having fun doing so. This programme is suitable for complete beginners. Training will take place in our purpose built boxing gym in Harolds Cross, Dublin 6. You will be trained and inspired by our team of elite coaches. The sessions are on Mondays and Wednesdays at 7pm. If you are serious about getting fit and learning how to box, our gym at White Collar HQ is the place to come. Places are limited, so sign up soon. The programme costs €180. If you require any further info, please do not hesitate to contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org."
      },
      {
        "t": "img",
        "src": "/images/content/3f50e7e4e1ef19cc8dba5ca4a54a2ddf.jpg",
        "alt": "Boxing Gym Dublin"
      },
      {
        "t": "img",
        "src": "/images/content/e5a7a74e058face5ced3df4202376b53.jpg",
        "alt": "Boxing Training"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "september-boxing-and-conditioning",
      "title": "September Boxing and Conditioning"
    },
    "next": {
      "slug": "find-your-inner-warrior",
      "title": "Find Your Inner Warrior Charity Fight Night"
    }
  },
  {
    "slug": "september-boxing-and-conditioning",
    "title": "September Boxing and Conditioning",
    "date": "July 23, 2015",
    "excerpt": "Our 8 week September Boxing and Conditioning, starts Monday 7th of September at 7pm. Learn the basics of boxing while having fun doing so. This programme for Boxing Training Dublin is suitable for complete beginners . Training will take place in our gym in Harolds Cross Dublin 6. You will be trained and inspired by […]",
    "paragraphs": [
      "Our 8 week September Boxing and Conditioning, starts Monday 7th of September at 7pm. Learn the basics of boxing while having fun doing so. This programme for Boxing Training Dublin is suitable for complete beginners . Training will take place in our gym in Harolds Cross Dublin 6. You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no time. The boxing sessions are Mondays and Wednesdays at 7pm. Our Strength and Conditioning classes are 7am and 6pm on Tuesdays and Thursdays and at 10 am on Saturday morning . If you are serious about getting fit this is the place to come . Places are limited. The programme costs €180. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our 8 week September Boxing and Conditioning, starts Monday 7th of September at 7pm. Learn the basics of boxing while having fun doing so. This programme for Boxing Training Dublin is suitable for complete beginners . Training will take place in our gym in Harolds Cross Dublin 6. You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no time. The boxing sessions are Mondays and Wednesdays at 7pm. Our Strength and Conditioning classes are 7am and 6pm on Tuesdays and Thursdays and at 10 am on Saturday morning . If you are serious about getting fit this is the place to come . Places are limited. The programme costs €180. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information"
      },
      {
        "t": "img",
        "src": "/images/content/c6c37c7d1f27cfd60acf26fd01470b89.png",
        "alt": "Boxing Training Dublin"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "help-neveah-fix-crumlin",
      "title": "Help Neveah Fix Crumlin"
    },
    "next": {
      "slug": "8-week-beginner-boxing-programme",
      "title": "8 Week Beginner Boxing Programme"
    }
  },
  {
    "slug": "help-neveah-fix-crumlin",
    "title": "Help Neveah Fix Crumlin",
    "date": "July 20, 2015",
    "excerpt": "For anyone in the Royal County and around this is a night not to be missed. Fiona Fox and her Father Tom are pulling out all the stops for this Fundraiser. They have already an A list of local celebrities as long as your arm both climbing into the ring and supporting this fundraising drive […]",
    "paragraphs": [
      "For anyone in the Royal County and around this is a night not to be missed. Fiona Fox and her Father Tom are pulling out all the stops for this Fundraiser. They have already an A list of local celebrities as long as your arm both climbing into the ring and supporting this fundraising drive for Crumlins Childrens Hospital. Fiona and her family know first hand the great work done inside Crumlin Hospitals four walls and are now helping out with this big White Collar Boxing Extravaganza. The Show takes place in the Headfort Arms Hotel in Kells on Saturday 25th of September. Tickets are priced at €20"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "For anyone in the Royal County and around this is a night not to be missed. Fiona Fox and her Father Tom are pulling out all the stops for this Fundraiser. They have already an A list of local celebrities as long as your arm both climbing into the ring and supporting this fundraising drive for Crumlins Childrens Hospital. Fiona and her family know first hand the great work done inside Crumlin Hospitals four walls and are now helping out with this big White Collar Boxing Extravaganza. The Show takes place in the Headfort Arms Hotel in Kells on Saturday 25th of September. Tickets are priced at €20"
      },
      {
        "t": "img",
        "src": "/images/content/9ad5f139423b6b2503a526c63b6ac64b.jpg",
        "alt": "Poster Crumlin Kells"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "brawl-in-the-hall",
      "title": "Brawl In The Hall"
    },
    "next": {
      "slug": "september-boxing-and-conditioning",
      "title": "September Boxing and Conditioning"
    }
  },
  {
    "slug": "brawl-in-the-hall",
    "title": "Brawl In The Hall",
    "date": "July 16, 2015",
    "excerpt": "We are delighted to announce \"Brawl in The Hall\" It is a joint venture between Inniscarra Community Centre, Muskerry RFC and \"Deans wish to walk\". There are a great number of local characters already signed up and the night itself will be a fun filled event. Tickets are €20 and The show takes place on […]",
    "paragraphs": [
      "We are delighted to announce \"Brawl in The Hall\" It is a joint venture between Inniscarra Community Centre, Muskerry RFC and \"Deans wish to walk\". There are a great number of local characters already signed up and the night itself will be a fun filled event. Tickets are €20 and The show takes place on Friday September 11th"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "We are delighted to announce \"Brawl in The Hall\" It is a joint venture between Inniscarra Community Centre, Muskerry RFC and \"Deans wish to walk\". There are a great number of local characters already signed up and the night itself will be a fun filled event. Tickets are €20 and The show takes place on Friday September 11th"
      },
      {
        "t": "img",
        "src": "/images/content/d8cbfc44ee0ad0b11859d7a9c7bf5a51.png",
        "alt": "IMG_5029"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "july-boxing-classes",
      "title": "July Boxing Classes"
    },
    "next": {
      "slug": "help-neveah-fix-crumlin",
      "title": "Help Neveah Fix Crumlin"
    }
  },
  {
    "slug": "july-boxing-classes",
    "title": "July Boxing Classes",
    "date": "June 12, 2015",
    "excerpt": "Why not try out our 8 week July Boxing Programme, starts Tuesday 7th of July at 7pm. Learn the basics of boxing while having fun doing so. This programme is suitable for beginners. Training will take place in our very own gym in Harolds Cross Dublin 6 You will be trained and inspired by our […]",
    "paragraphs": [
      "Why not try out our 8 week July Boxing Programme, starts Tuesday 7th of July at 7pm. Learn the basics of boxing while having fun doing so. This programme is suitable for beginners. Training will take place in our very own gym in Harolds Cross Dublin 6 You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no time. The boxing sessions are Tuesdays and Thursdays at 7pm with an option of sparring on Fridays from 6 to 9pm and weekend warrior Strength and Conditioning class at 10 am on Saturday . This programme allows you access to all classes on the timetable so you can try different trainers or different days . Places are limited. The programme costs €150. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information"
    ],
    "image": null,
    "blocks": [
      {
        "t": "img",
        "src": "/images/content/d18d994dfd3176125d35ddc60e97abaf.jpg",
        "alt": "july boxing class 2"
      },
      {
        "t": "p",
        "v": "Why not try out our 8 week July Boxing Programme, starts Tuesday 7th of July at 7pm. Learn the basics of boxing while having fun doing so. This programme is suitable for beginners. Training will take place in our very own gym in Harolds Cross Dublin 6 You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no time. The boxing sessions are Tuesdays and Thursdays at 7pm with an option of sparring on Fridays from 6 to 9pm and weekend warrior Strength and Conditioning class at 10 am on Saturday . This programme allows you access to all classes on the timetable so you can try different trainers or different days . Places are limited. The programme costs €150. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "boxing-conditioning-summer-bootcamp",
      "title": "Boxing Conditioning Summer Bootcamp"
    },
    "next": {
      "slug": "brawl-in-the-hall",
      "title": "Brawl In The Hall"
    }
  },
  {
    "slug": "boxing-conditioning-summer-bootcamp",
    "title": "Boxing Conditioning Summer Bootcamp",
    "date": "May 27, 2015",
    "excerpt": "Boxers are known for their lean and athletic physiques! Want to know how they get into such prime condition? Train with us at White Collar Boxing HQ on our 6 week Boxing Conditioning Course starting Monday 22nd June Classes will be held on Monday and Wednesday evenings from 8-9pm and led by Coach Eoin Stanley […]",
    "paragraphs": [
      "Boxers are known for their lean and athletic physiques!",
      "Want to know how they get into such prime condition?",
      "Train with us at White Collar Boxing HQ on our 6 week Boxing Conditioning Course starting Monday 22nd June",
      "Classes will be held on Monday and Wednesday evenings from 8-9pm and led by Coach Eoin Stanley of White Collar Boxing fame!",
      "Utilising the tried and tested training techniques of Champion Boxers, you will....",
      "-Burn body fat -Increase lean body mass -See your all round fitness levels sky rocket -And all while watching your general health and well being reach new highs",
      "Suitable for all Levels",
      "Remember \"Training Hard, makes Looking Good Easy\"",
      "Price €99 Sign up now places limited"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Boxers are known for their lean and athletic physiques!"
      },
      {
        "t": "p",
        "v": "Want to know how they get into such prime condition?"
      },
      {
        "t": "p",
        "v": "Train with us at White Collar Boxing HQ on our 6 week Boxing Conditioning Course starting Monday 22nd June"
      },
      {
        "t": "p",
        "v": "Classes will be held on Monday and Wednesday evenings from 8-9pm and led by Coach Eoin Stanley of White Collar Boxing fame!"
      },
      {
        "t": "p",
        "v": "Utilising the tried and tested training techniques of Champion Boxers, you will...."
      },
      {
        "t": "p",
        "v": "-Burn body fat -Increase lean body mass -See your all round fitness levels sky rocket -And all while watching your general health and well being reach new highs"
      },
      {
        "t": "p",
        "v": "Suitable for all Levels"
      },
      {
        "t": "p",
        "v": "Remember \"Training Hard, makes Looking Good Easy\""
      },
      {
        "t": "p",
        "v": "Price €99 Sign up now places limited"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "tiny-life-big-fight",
      "title": "Tiny Life Big Fight"
    },
    "next": {
      "slug": "july-boxing-classes",
      "title": "July Boxing Classes"
    }
  },
  {
    "slug": "tiny-life-big-fight",
    "title": "Tiny Life Big Fight",
    "date": "May 5, 2015",
    "excerpt": "May 21st is the date it all comes to a head in the La Mon Hotel and Country club. All funds raised on the night go to the tinylife charity. Doors open at 7.3opm and tickets and information is available from kelly@tinylife.org.uk",
    "paragraphs": [
      "May 21st is the date it all comes to a head in the La Mon Hotel and Country club. All funds raised on the night go to the tinylife charity. Doors open at 7.3opm and tickets and information is available from kelly@tinylife.org.uk"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "May 21st is the date it all comes to a head in the La Mon Hotel and Country club. All funds raised on the night go to the tinylife charity. Doors open at 7.3opm and tickets and information is available from kelly@tinylife.org.uk"
      },
      {
        "t": "img",
        "src": "/images/content/3a0220583ca9721765b24b6ffb350e5c.jpg",
        "alt": "TinyLife White Collar Boxing Registration 2015"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "may-boxing-bootcamp",
      "title": "May Boxing Bootcamp"
    },
    "next": {
      "slug": "boxing-conditioning-summer-bootcamp",
      "title": "Boxing Conditioning Summer Bootcamp"
    }
  },
  {
    "slug": "may-boxing-bootcamp",
    "title": "May Boxing Bootcamp",
    "date": "May 5, 2015",
    "excerpt": "8 week boxing training programme starting on May, 25th . This programme is suitable for beginners. Training will take place in our very own boxing gym in Harolds Cross Dublin 6 You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will […]",
    "paragraphs": [
      "8 week boxing training programme starting on May, 25th . This programme is suitable for beginners. Training will take place in our very own boxing gym in Harolds Cross Dublin 6 You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no time. The boxing sessions are Monday and Wednesday at 7pm with an option of sparring on Fridays from 6 to 9pm. The strength and conditioning classes are Tuesdays and Thursdays at 7 am and 6pm on both days and a Saturday morning Weekend Warrior giving you plenty of choice. This programme allows you access to all classes on the timetable. Places are limited. The programme costs €150. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information.",
      "https://www.whitecollarboxing.org/sign-up/"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "8 week boxing training programme starting on May, 25th . This programme is suitable for beginners. Training will take place in our very own boxing gym in Harolds Cross Dublin 6 You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no time. The boxing sessions are Monday and Wednesday at 7pm with an option of sparring on Fridays from 6 to 9pm. The strength and conditioning classes are Tuesdays and Thursdays at 7 am and 6pm on both days and a Saturday morning Weekend Warrior giving you plenty of choice. This programme allows you access to all classes on the timetable. Places are limited. The programme costs €150. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
      },
      {
        "t": "p",
        "v": "https://www.whitecollarboxing.org/sign-up/"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "april-beginners-boxing-class",
      "title": "April Beginners Boxing Class"
    },
    "next": {
      "slug": "tiny-life-big-fight",
      "title": "Tiny Life Big Fight"
    }
  },
  {
    "slug": "april-beginners-boxing-class",
    "title": "April Beginners Boxing Class",
    "date": "April 10, 2015",
    "excerpt": "8 week boxing training programme starting on Tuesday, 28th April. Training will take place in our very own boxing gym in Harolds Cross Dublin 6. Our Boxing(Nut)Coach Richie will take you under his boxing wing and teach you \"The Sweet Science\" the class will contain both boxing technique work various boxing drills aswell as some […]",
    "paragraphs": [
      "8 week boxing training programme starting on Tuesday, 28th April. Training will take place in our very own boxing gym in Harolds Cross Dublin 6. Our Boxing(Nut)Coach Richie will take you under his boxing wing and teach you \"The Sweet Science\" the class will contain both boxing technique work various boxing drills aswell as some tough conditioning work. The boxing classes are Tuesdays and Thursdays at 7pm with an option of sparring on Fridays from 6 to 8pm and a Saturday morning 10am Weekend Warrior . This programme will have you in the shape of your life Guaranteed. Places are limited. The programme costs €150. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "8 week boxing training programme starting on Tuesday, 28th April. Training will take place in our very own boxing gym in Harolds Cross Dublin 6. Our Boxing(Nut)Coach Richie will take you under his boxing wing and teach you \"The Sweet Science\" the class will contain both boxing technique work various boxing drills aswell as some tough conditioning work. The boxing classes are Tuesdays and Thursdays at 7pm with an option of sparring on Fridays from 6 to 8pm and a Saturday morning 10am Weekend Warrior . This programme will have you in the shape of your life Guaranteed. Places are limited. The programme costs €150. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
      },
      {
        "t": "img",
        "src": "/images/content/618bea48e749df4d36f8662c6832d6bc.jpg",
        "alt": "richie"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "brawl-in-the-hall-ahascragh-fohenagh-gaa-club",
      "title": "Brawl in the Hall Ahascragh Fohenagh gaa club"
    },
    "next": {
      "slug": "may-boxing-bootcamp",
      "title": "May Boxing Bootcamp"
    }
  },
  {
    "slug": "brawl-in-the-hall-ahascragh-fohenagh-gaa-club",
    "title": "Brawl in the Hall Ahascragh Fohenagh gaa club",
    "date": "March 20, 2015",
    "excerpt": "White Collar Boxing is hitting Ahascragh Fohenagh gaa club on April 11th, There is huge interest in the event with many local celebrities climbing into the ring for their first contest. The show takes place in Caltra Hall and tickets are priced at €15",
    "paragraphs": [
      "White Collar Boxing is hitting Ahascragh Fohenagh gaa club on April 11th, There is huge interest in the event with many local celebrities climbing into the ring for their first contest. The show takes place in Caltra Hall and tickets are priced at €15"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "White Collar Boxing is hitting Ahascragh Fohenagh gaa club on April 11th, There is huge interest in the event with many local celebrities climbing into the ring for their first contest. The show takes place in Caltra Hall and tickets are priced at €15"
      },
      {
        "t": "img",
        "src": "/images/content/d9af6b962afac1f8a5e148a8fd093162.png",
        "alt": "IMG_4016"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "march-beginners-boxing",
      "title": "March Beginners Boxing"
    },
    "next": {
      "slug": "april-beginners-boxing-class",
      "title": "April Beginners Boxing Class"
    }
  },
  {
    "slug": "march-beginners-boxing",
    "title": "March Beginners Boxing",
    "date": "February 20, 2015",
    "excerpt": "8 week boxing training programme starting on Monday, 23rd March. Training will take place in our very own boxing gym in Harolds Cross Dublin 6 You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no […]",
    "paragraphs": [
      "8 week boxing training programme starting on Monday, 23rd March. Training will take place in our very own boxing gym in Harolds Cross Dublin 6 You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no time. The boxing sessions are Monday and Wednesday at 7pm with an option of sparring on Fridays from 6 to 9pm. The strength and conditioning classes are Tuesdays and Thursdays at 7 am and 6pm on both days and a Saturday morning Weekend Warrior giving you plenty of choice. This programme allows you access to all classes on the timetable. Places are limited. The programme costs €150. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "8 week boxing training programme starting on Monday, 23rd March. Training will take place in our very own boxing gym in Harolds Cross Dublin 6 You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no time. The boxing sessions are Monday and Wednesday at 7pm with an option of sparring on Fridays from 6 to 9pm. The strength and conditioning classes are Tuesdays and Thursdays at 7 am and 6pm on both days and a Saturday morning Weekend Warrior giving you plenty of choice. This programme allows you access to all classes on the timetable. Places are limited. The programme costs €150. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "hq-update",
      "title": "Hq Update"
    },
    "next": {
      "slug": "brawl-in-the-hall-ahascragh-fohenagh-gaa-club",
      "title": "Brawl in the Hall Ahascragh Fohenagh gaa club"
    }
  },
  {
    "slug": "hq-update",
    "title": "Hq Update",
    "date": "February 17, 2015",
    "excerpt": "Loads happening in March at White Collar Hq, We are introducing our new 6 week \"Stronger\" programme which includes 6 Weeks of Strength and Conditioning with an initial consult with our resident strength coach Des before starting. This will kick anyone's butt into shape.We are also have an 8 week beginners boxing programme starting on […]",
    "paragraphs": [
      "Loads happening in March at White Collar Hq, We are introducing our new 6 week \"Stronger\" programme which includes 6 Weeks of Strength and Conditioning with an initial consult with our resident strength coach Des before starting. This will kick anyone's butt into shape.We are also have an 8 week beginners boxing programme starting on Monday 23rd March by far our most popular class. People see and feel the results of lacing up the gloves for an old school proven approach to training, and it is at a discounted price of €150. We also have the new 5 class pass for those of you struggling with any long term commitment in your life.... And if that wasn't enough we have our two month unlimited membership offer of €150",
      "sign up"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Loads happening in March at White Collar Hq, We are introducing our new 6 week \"Stronger\" programme which includes 6 Weeks of Strength and Conditioning with an initial consult with our resident strength coach Des before starting. This will kick anyone's butt into shape.We are also have an 8 week beginners boxing programme starting on Monday 23rd March by far our most popular class. People see and feel the results of lacing up the gloves for an old school proven approach to training, and it is at a discounted price of €150. We also have the new 5 class pass for those of you struggling with any long term commitment in your life.... And if that wasn't enough we have our two month unlimited membership offer of €150"
      },
      {
        "t": "p",
        "v": "sign up"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "battle-carbury-castle",
      "title": "Battle for Carbury Castle"
    },
    "next": {
      "slug": "march-beginners-boxing",
      "title": "March Beginners Boxing"
    }
  },
  {
    "slug": "battle-carbury-castle",
    "title": "Battle for Carbury Castle",
    "date": "February 11, 2015",
    "excerpt": "The famous footballers from Carbury swap the the football for boxing gloves for this fundraising event. 3o local men and women are braving it out to see who will be crowned King of The Castle, The event takes place in Rapture Night Club on Saturday March 14th at the Hamlet Court Hotel and tickets are […]",
    "paragraphs": [
      "The famous footballers from Carbury swap the the football for boxing gloves for this fundraising event. 3o local men and women are braving it out to see who will be crowned King of The Castle, The event takes place in Rapture Night Club on Saturday March 14th at the Hamlet Court Hotel and tickets are priced at €20"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The famous footballers from Carbury swap the the football for boxing gloves for this fundraising event. 3o local men and women are braving it out to see who will be crowned King of The Castle, The event takes place in Rapture Night Club on Saturday March 14th at the Hamlet Court Hotel and tickets are priced at €20"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "mitchelstown-rugby-st-patricks-weekend",
      "title": "Mitchelstown Rugby St Patricks Weekend"
    },
    "next": {
      "slug": "hq-update",
      "title": "Hq Update"
    }
  },
  {
    "slug": "mitchelstown-rugby-st-patricks-weekend",
    "title": "Mitchelstown Rugby St Patricks Weekend",
    "date": "February 11, 2015",
    "excerpt": "The third year in the row this unique event is proving to be the only show in town. Moneys raised goes to Mitchelstown Rfc as well as a host of other local charities. The show takes place on Saturday 14th of March",
    "paragraphs": [
      "The third year in the row this unique event is proving to be the only show in town. Moneys raised goes to Mitchelstown Rfc as well as a host of other local charities. The show takes place on Saturday 14th of March"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The third year in the row this unique event is proving to be the only show in town. Moneys raised goes to Mitchelstown Rfc as well as a host of other local charities. The show takes place on Saturday 14th of March"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "st-paddys-weekend-punch-banagher",
      "title": "St Paddys Weekend Punch up Banagher"
    },
    "next": {
      "slug": "battle-carbury-castle",
      "title": "Battle for Carbury Castle"
    }
  },
  {
    "slug": "st-paddys-weekend-punch-banagher",
    "title": "St Paddys Weekend Punch up Banagher",
    "date": "February 11, 2015",
    "excerpt": "Banaghers first ever White Collar Boxing tournament \"The St Pa Weekend Punch up\" is happeneing at JJ Houghs Pub on Saturday March 14th, Probably going to be the craziest show ever featuring the local priest. Tickets are priced at €20 and are available from fighters and online at http://www.eventbrite.ie/e/st-patricks-weekend-punch-up-tickets-15708973964?aff=ehomesaved",
    "paragraphs": [
      "Banaghers first ever White Collar Boxing tournament \"The St Pa Weekend Punch up\" is happeneing at JJ Houghs Pub on Saturday March 14th, Probably going to be the craziest show ever featuring the local priest. Tickets are priced at €20 and are available from fighters and online at",
      "http://www.eventbrite.ie/e/st-patricks-weekend-punch-up-tickets-15708973964?aff=ehomesaved"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Banaghers first ever White Collar Boxing tournament \"The St Pa Weekend Punch up\" is happeneing at JJ Houghs Pub on Saturday March 14th, Probably going to be the craziest show ever featuring the local priest. Tickets are priced at €20 and are available from fighters and online at"
      },
      {
        "t": "p",
        "v": "http://www.eventbrite.ie/e/st-patricks-weekend-punch-up-tickets-15708973964?aff=ehomesaved"
      },
      {
        "t": "img",
        "src": "/images/content/7c991f8aa7ef801a8107dd47af11ab8a.jpg",
        "alt": "tickets banagher"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "dandelion-dust-2",
      "title": "Dandelion Dust up 2"
    },
    "next": {
      "slug": "mitchelstown-rugby-st-patricks-weekend",
      "title": "Mitchelstown Rugby St Patricks Weekend"
    }
  },
  {
    "slug": "dandelion-dust-2",
    "title": "Dandelion Dust up 2",
    "date": "February 11, 2015",
    "excerpt": "Friday 13th March is the Dandelion Dust Up Round 2 in Dandelion Nightclub on St Stephen's Green in Dublin 2 – please come along and support this event and join the fight against MND!",
    "paragraphs": [
      "Friday 13th March is the Dandelion Dust Up Round 2 in Dandelion Nightclub on St Stephen's Green in Dublin 2 – please come along and support this event and join the fight against MND!"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Friday 13th March is the Dandelion Dust Up Round 2 in Dandelion Nightclub on St Stephen's Green in Dublin 2 – please come along and support this event and join the fight against MND!"
      },
      {
        "t": "img",
        "src": "/images/content/b242ba29bc53061c8e3aa5c8f00d7cd3.jpg",
        "alt": "imnda"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "brawl-nepal",
      "title": "Brawl for Nepal"
    },
    "next": {
      "slug": "st-paddys-weekend-punch-banagher",
      "title": "St Paddys Weekend Punch up Banagher"
    }
  },
  {
    "slug": "brawl-nepal",
    "title": "Brawl for Nepal",
    "date": "February 11, 2015",
    "excerpt": "This fight takes place on Friday 27th of February in Dandelion and is already proving to be a big ticket seller, Funds raised go to the Umbrella Foundations work in Nepal the event will be followed be a disco until the wee hours",
    "paragraphs": [
      "This fight takes place on Friday 27th of February in Dandelion and is already proving to be a big ticket seller, Funds raised go to the Umbrella Foundations work in Nepal the event will be followed be a disco until the wee hours"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "This fight takes place on Friday 27th of February in Dandelion and is already proving to be a big ticket seller, Funds raised go to the Umbrella Foundations work in Nepal the event will be followed be a disco until the wee hours"
      },
      {
        "t": "img",
        "src": "/images/content/1ce49d38ae3252a5e7ecac7aeb92dce7.jpg",
        "alt": "umbrella"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "banaghers-boxing-priest-white-collar-boxing",
      "title": "Banaghers Boxing Priest Replies to Opponent in upcoming white collar boxing bout"
    },
    "next": {
      "slug": "dandelion-dust-2",
      "title": "Dandelion Dust up 2"
    }
  },
  {
    "slug": "banaghers-boxing-priest-white-collar-boxing",
    "title": "Banaghers Boxing Priest Replies to Opponent in upcoming white collar boxing bout",
    "date": "January 30, 2015",
    "excerpt": "Banaghers Boxing Priest Fr Jalapeno Pepper replies to Jared Madden. Fr 'Jalapeno' Pepper replies to Jared Madden. White Collar Boxing Ireland is brought to new literal levels as tensions flare between Fr Pierre Pepper and Jared Marc O'Maidín. Banaghers Boxing Priest Fr Jalapeno Pepper",
    "paragraphs": [
      "Banaghers Boxing Priest Fr Jalapeno Pepper replies to Jared Madden. Fr 'Jalapeno' Pepper replies to Jared Madden. White Collar Boxing Ireland is brought to new literal levels as tensions flare between Fr Pierre Pepper and Jared Marc O'Maidín.",
      "Banaghers Boxing Priest Fr Jalapeno Pepper"
    ],
    "image": "/images/featured/banaghers-boxing-priest-white-collar-boxing.jpg",
    "blocks": [
      {
        "t": "p",
        "v": "Banaghers Boxing Priest Fr Jalapeno Pepper replies to Jared Madden. Fr 'Jalapeno' Pepper replies to Jared Madden. White Collar Boxing Ireland is brought to new literal levels as tensions flare between Fr Pierre Pepper and Jared Marc O'Maidín."
      },
      {
        "t": "img",
        "src": "/images/content/59db7f0b8e9d6ac7b8c7ac06a79a2b20.jpg",
        "alt": "banagher boxing priest"
      },
      {
        "t": "p",
        "v": "Banaghers Boxing Priest Fr Jalapeno Pepper"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "boxing-classes-weight-loss",
      "title": "Boxing Classes for weight loss"
    },
    "next": {
      "slug": "brawl-nepal",
      "title": "Brawl for Nepal"
    }
  },
  {
    "slug": "boxing-classes-weight-loss",
    "title": "Boxing Classes for weight loss",
    "date": "January 9, 2015",
    "excerpt": "When everyone is rushing for the latest \"lose weight\" quick buzz, we at whitecollarboxing.org are applying a more proven and traditional approach. Boxing training is a great workout, it's high intensity burns lots of calories. It also helps with building muscle, especially in the upper body. The mental aspect of trying to conquer a new […]",
    "paragraphs": [
      "When everyone is rushing for the latest \"lose weight\" quick buzz, we at whitecollarboxing.org are applying a more proven and traditional approach. Boxing training is a great workout, it's high intensity burns lots of calories. It also helps with building muscle, especially in the upper body. The mental aspect of trying to conquer a new skill, will keep you from getting bored and you will avoid the temptation to quit. We are coupling our boxing training with strength and conditioning classes to maximize the benefits. Our S & C classes are intense, but very enjoyable."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "When everyone is rushing for the latest \"lose weight\" quick buzz, we at whitecollarboxing.org are applying a more proven and traditional approach. Boxing training is a great workout, it's high intensity burns lots of calories. It also helps with building muscle, especially in the upper body. The mental aspect of trying to conquer a new skill, will keep you from getting bored and you will avoid the temptation to quit. We are coupling our boxing training with strength and conditioning classes to maximize the benefits. Our S & C classes are intense, but very enjoyable."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "brawl-hall-24115",
      "title": "Brawl in the Hall 24/1/15"
    },
    "next": {
      "slug": "banaghers-boxing-priest-white-collar-boxing",
      "title": "Banaghers Boxing Priest Replies to Opponent in upcoming white collar boxing bout"
    }
  },
  {
    "slug": "brawl-hall-24115",
    "title": "Brawl in the Hall 24/1/15",
    "date": "January 6, 2015",
    "excerpt": "Brawl in the hall will be a fun filled night on Saturday 24th January, Come along and support the club",
    "paragraphs": [
      "Brawl in the hall will be a fun filled night on Saturday 24th January, Come along and support the club"
    ],
    "image": null,
    "blocks": [
      {
        "t": "img",
        "src": "/images/content/568fe1842e94474ec77c8b456c5f23d7.png",
        "alt": "IMG_3233"
      },
      {
        "t": "p",
        "v": "Brawl in the hall will be a fun filled night on Saturday 24th January, Come along and support the club"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "january-beginners-boxing-classes-19115",
      "title": "January Beginners Boxing Classes 19/1/15"
    },
    "next": {
      "slug": "boxing-classes-weight-loss",
      "title": "Boxing Classes for weight loss"
    }
  },
  {
    "slug": "january-beginners-boxing-classes-19115",
    "title": "January Beginners Boxing Classes 19/1/15",
    "date": "December 8, 2014",
    "excerpt": "8 week boxing training programme starting on Monday, 19th January. For this programme we are putting particular emphasis on conditioning. Training will take place in our very own boxing gym in Harolds Cross Dublin 6 You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing […]",
    "paragraphs": [
      "8 week boxing training programme starting on Monday, 19th January. For this programme we are putting particular emphasis on conditioning. Training will take place in our very own boxing gym in Harolds Cross Dublin 6",
      "You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no time.",
      "The boxing sessions are Monday and Wednesday at 7pm with an option of sparring on Fridays from 6 to 9pm.",
      "The strength and conditioning classes are Tuesdays and Thursdays at 7 am and 6pm on both days and a Saturday morning Strongman giving you plenty of choice.",
      "Places are limited. The programme costs €200. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "8 week boxing training programme starting on Monday, 19th January. For this programme we are putting particular emphasis on conditioning. Training will take place in our very own boxing gym in Harolds Cross Dublin 6"
      },
      {
        "t": "p",
        "v": "You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no time."
      },
      {
        "t": "p",
        "v": "The boxing sessions are Monday and Wednesday at 7pm with an option of sparring on Fridays from 6 to 9pm."
      },
      {
        "t": "p",
        "v": "The strength and conditioning classes are Tuesdays and Thursdays at 7 am and 6pm on both days and a Saturday morning Strongman giving you plenty of choice."
      },
      {
        "t": "p",
        "v": "Places are limited. The programme costs €200. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "battle-blackwater-bridge-281214",
      "title": "Battle for the Blackwater Bridge 27/12/14"
    },
    "next": {
      "slug": "brawl-hall-24115",
      "title": "Brawl in the Hall 24/1/15"
    }
  },
  {
    "slug": "battle-blackwater-bridge-281214",
    "title": "Battle for the Blackwater Bridge 27/12/14",
    "date": "November 20, 2014",
    "excerpt": "This local derby is going to be a big night with pride and bragging rights at stake. This is the first collaboration between the two local senior clubs Johnstownbridge of Kildare and Na Fianna of Meath . Who is tougher?? All questions will be answered in Rapture Nightclub on December 27th",
    "paragraphs": [
      "This local derby is going to be a big night with pride and bragging rights at stake. This is the first collaboration between the two local senior clubs Johnstownbridge of Kildare and Na Fianna of Meath . Who is tougher?? All questions will be answered in Rapture Nightclub on December 27th"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "This local derby is going to be a big night with pride and bragging rights at stake. This is the first collaboration between the two local senior clubs Johnstownbridge of Kildare and Na Fianna of Meath . Who is tougher?? All questions will be answered in Rapture Nightclub on December 27th"
      },
      {
        "t": "img",
        "src": "/images/content/dbbb77172ccecf44328123164bffa003.png",
        "alt": "photo (21)"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "christmas-punch-2-loughrea-271214",
      "title": "Christmas Punch Up 2 Loughrea 27/12/14"
    },
    "next": {
      "slug": "january-beginners-boxing-classes-19115",
      "title": "January Beginners Boxing Classes 19/1/15"
    }
  },
  {
    "slug": "christmas-punch-2-loughrea-271214",
    "title": "Christmas Punch Up 2 Loughrea 27/12/14",
    "date": "November 20, 2014",
    "excerpt": "Its Rumble time in Loughrea again. After a huge night last year the guys are climbing into the ring for one more rumble. Once again its for two worth local charities Abalta school for Autism and Loughrea rams Fc Tickets are €2o and are available from participants and on the door",
    "paragraphs": [
      "Its Rumble time in Loughrea again. After a huge night last year the guys are climbing into the ring for one more rumble. Once again its for two worth local charities Abalta school for Autism and Loughrea rams Fc Tickets are €2o and are available from participants and on the door"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Its Rumble time in Loughrea again. After a huge night last year the guys are climbing into the ring for one more rumble. Once again its for two worth local charities Abalta school for Autism and Loughrea rams Fc Tickets are €2o and are available from participants and on the door"
      },
      {
        "t": "img",
        "src": "/images/content/d665b75bfcb7c7f7cb3fa2a53ece0013.png",
        "alt": "photo (19)"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "armagh-geddon-2",
      "title": "Armagh-Geddon 29/11/14"
    },
    "next": {
      "slug": "battle-blackwater-bridge-281214",
      "title": "Battle for the Blackwater Bridge 27/12/14"
    }
  },
  {
    "slug": "armagh-geddon-2",
    "title": "Armagh-Geddon 29/11/14",
    "date": "November 20, 2014",
    "excerpt": "Back by popular demand, the ultimate white collar boxing event returns to the city in order to raise funds for another worthy charity. Organiser Liam White is again overwhelmed by the enthusiasm and interest in this event. \"We are delighted to be announcing another Armagh-Geddon Charity Boxing event this year following its success in 2013. […]",
    "paragraphs": [
      "Back by popular demand, the ultimate white collar boxing event returns to the city in order to raise funds for another worthy charity.",
      "Organiser Liam White is again overwhelmed by the enthusiasm and interest in this event. \"We are delighted to be announcing another Armagh-Geddon Charity Boxing event this year following its success in 2013. We are very grateful for the generosity that has been shown so far by local companies with support for the event. There has been an astonishing amount of interest shown by local participants ensuring the evening to be another \"knockout\" success!\"",
      "Under the guidance of Keady professional boxer and Commonwealth Bronze medallist Sean Duffy, 32 brave men and women are putting it all on the line and are undertaking an intensive 6 week training programme that will see them progress from boxing amateurs to pros when they get the ultimate opportunity to compete in a boxing ring on Saturday 29thNovember in the Armagh City Hotel at 8pm.",
      "All the proceeds from this show will be donated to the Niamh Louise Foundation. Tickets are on sale at the cost of £20 with a limited number of ring side seats available for £30, which can be purchased from the Armagh City Hotel or from any participant in the event.",
      "If you are interested in making a donation to the charity or sponsoring any of the participants please contact: Liam White on -07725705418, Sean Mc Kinney on -07715 983129 or Seamus O Neill on-07884 315110."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Back by popular demand, the ultimate white collar boxing event returns to the city in order to raise funds for another worthy charity."
      },
      {
        "t": "p",
        "v": "Organiser Liam White is again overwhelmed by the enthusiasm and interest in this event. \"We are delighted to be announcing another Armagh-Geddon Charity Boxing event this year following its success in 2013. We are very grateful for the generosity that has been shown so far by local companies with support for the event. There has been an astonishing amount of interest shown by local participants ensuring the evening to be another \"knockout\" success!\""
      },
      {
        "t": "p",
        "v": "Under the guidance of Keady professional boxer and Commonwealth Bronze medallist Sean Duffy, 32 brave men and women are putting it all on the line and are undertaking an intensive 6 week training programme that will see them progress from boxing amateurs to pros when they get the ultimate opportunity to compete in a boxing ring on Saturday 29thNovember in the Armagh City Hotel at 8pm."
      },
      {
        "t": "p",
        "v": "All the proceeds from this show will be donated to the Niamh Louise Foundation. Tickets are on sale at the cost of £20 with a limited number of ring side seats available for £30, which can be purchased from the Armagh City Hotel or from any participant in the event."
      },
      {
        "t": "p",
        "v": "If you are interested in making a donation to the charity or sponsoring any of the participants please contact: Liam White on -07725705418, Sean Mc Kinney on -07715 983129 or Seamus O Neill on-07884 315110."
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "benefits-strength-training",
      "title": "Benefits of Strength Training"
    },
    "next": {
      "slug": "christmas-punch-2-loughrea-271214",
      "title": "Christmas Punch Up 2 Loughrea 27/12/14"
    }
  },
  {
    "slug": "benefits-strength-training",
    "title": "Benefits of Strength Training",
    "date": "November 19, 2014",
    "excerpt": "What is strength training and how does it work? Strength training is a mode of exercise that emphasises high force movements against resistance designed to improve strength, conditioning, fitness, sport specific performance and a variety of health measures. Muscles will adapt to working against and kind of resistance and by changing that resistance we can […]",
    "paragraphs": [
      "What is strength training and how does it work?",
      "Strength training is a mode of exercise that emphasises high force movements against resistance designed to improve strength, conditioning, fitness, sport specific performance and a variety of health measures. Muscles will adapt to working against and kind of resistance and by changing that resistance we can manipulate the adaptations that our bodies go through following exercise.",
      "Resistance can take many form. Traditional barbells and dumbbells generally spring to most people's minds but resistance can often be found from one's own body weight, elastics resistance bands, kettlebells, tyres, balls, a punch bag or another person. In general terms the resistance for strength training should allow you to perform anywhere from 1 to 20 repetitions to failure (meaning you can't do any more reps!)",
      "Strength training is intermittent in nature, with periods of work followed by periods of rest. We can also manipulate the work: rest ratios to illicit certain responses from the body.",
      "Why is strength training important?",
      "Strength training will get you strong which is a bit obvious but there are several ways in which it does this: Enhanced signalling from brain to muscle Better inter and intra-muscular coordination (how well your muscles work together) Increased muscle mass and muscle fibre density Stronger connective tissues like tendons",
      "Some useful side effects of strength training",
      "Greater force production at lighter tasks (e.g. a punch) Improved speed, agility and quickness A higher metabolic rate (how much energy your body burns when you aren't exercising) Improves glucose tolerance and insulin sensitivity Decreased cardiac risk factors (by decreasing blood pressure and bad cholesterol) Improved ability to carry out daily tasks (like picking up children, moving heavy loads) Better posture High muscle : fat ratio",
      "More bang for your buck",
      "Strength training elicits a much higher EPOC (post exercise oxygen consumption) than steady state cardio exercise. This means that the body is forced to work harder to build back up oxygen stores thereby allowing you to burn an increased number of calories for up to 72 hours after strength training.",
      "How much do you need?",
      "For anyone looking to maintain current levels of strength, body composition and fitness 60-90 mins per week of strength training is adequate.",
      "For those looking to improve these measures 120-180 mins per week is required.",
      "Training time does not have to be sequential so for most people 2-3 sessions per week is perfect.",
      "Anything else you should know?",
      "Strength training is not supposed to replace other forms of training, it is supposed to complement it.",
      "We recommend that if you are taking part in two boxing sessions per week (these are primarily high intensity cardio in nature) you should complement these with 1 or 2 strength sessions as well. For the perfect training week add in a low level cardio session such as running, a long walk or a light game of your favourite sport to boost heart health.",
      "What do we offer @ HQ?",
      "Currently we run Morning Conditioning @ 7am and Strength and Conditioning @ 6pm on Tuesdays and Thursdays as well as Weekend Warrior @ 10am on Saturdays. All of which will fulfil your strength training needs.",
      "All levels of fitness and strength are catered for at each session, contact hq@whitecollarboxing.org for more info.",
      "Des"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "What is strength training and how does it work?"
      },
      {
        "t": "p",
        "v": "Strength training is a mode of exercise that emphasises high force movements against resistance designed to improve strength, conditioning, fitness, sport specific performance and a variety of health measures. Muscles will adapt to working against and kind of resistance and by changing that resistance we can manipulate the adaptations that our bodies go through following exercise."
      },
      {
        "t": "p",
        "v": "Resistance can take many form. Traditional barbells and dumbbells generally spring to most people's minds but resistance can often be found from one's own body weight, elastics resistance bands, kettlebells, tyres, balls, a punch bag or another person. In general terms the resistance for strength training should allow you to perform anywhere from 1 to 20 repetitions to failure (meaning you can't do any more reps!)"
      },
      {
        "t": "p",
        "v": "Strength training is intermittent in nature, with periods of work followed by periods of rest. We can also manipulate the work: rest ratios to illicit certain responses from the body."
      },
      {
        "t": "p",
        "v": "Why is strength training important?"
      },
      {
        "t": "p",
        "v": "Strength training will get you strong which is a bit obvious but there are several ways in which it does this: Enhanced signalling from brain to muscle Better inter and intra-muscular coordination (how well your muscles work together) Increased muscle mass and muscle fibre density Stronger connective tissues like tendons"
      },
      {
        "t": "p",
        "v": "Some useful side effects of strength training"
      },
      {
        "t": "p",
        "v": "Greater force production at lighter tasks (e.g. a punch) Improved speed, agility and quickness A higher metabolic rate (how much energy your body burns when you aren't exercising) Improves glucose tolerance and insulin sensitivity Decreased cardiac risk factors (by decreasing blood pressure and bad cholesterol) Improved ability to carry out daily tasks (like picking up children, moving heavy loads) Better posture High muscle : fat ratio"
      },
      {
        "t": "p",
        "v": "More bang for your buck"
      },
      {
        "t": "p",
        "v": "Strength training elicits a much higher EPOC (post exercise oxygen consumption) than steady state cardio exercise. This means that the body is forced to work harder to build back up oxygen stores thereby allowing you to burn an increased number of calories for up to 72 hours after strength training."
      },
      {
        "t": "p",
        "v": "How much do you need?"
      },
      {
        "t": "p",
        "v": "For anyone looking to maintain current levels of strength, body composition and fitness 60-90 mins per week of strength training is adequate."
      },
      {
        "t": "p",
        "v": "For those looking to improve these measures 120-180 mins per week is required."
      },
      {
        "t": "p",
        "v": "Training time does not have to be sequential so for most people 2-3 sessions per week is perfect."
      },
      {
        "t": "p",
        "v": "Anything else you should know?"
      },
      {
        "t": "p",
        "v": "Strength training is not supposed to replace other forms of training, it is supposed to complement it."
      },
      {
        "t": "p",
        "v": "We recommend that if you are taking part in two boxing sessions per week (these are primarily high intensity cardio in nature) you should complement these with 1 or 2 strength sessions as well. For the perfect training week add in a low level cardio session such as running, a long walk or a light game of your favourite sport to boost heart health."
      },
      {
        "t": "p",
        "v": "What do we offer @ HQ?"
      },
      {
        "t": "p",
        "v": "Currently we run Morning Conditioning @ 7am and Strength and Conditioning @ 6pm on Tuesdays and Thursdays as well as Weekend Warrior @ 10am on Saturdays. All of which will fulfil your strength training needs."
      },
      {
        "t": "p",
        "v": "All levels of fitness and strength are catered for at each session, contact hq@whitecollarboxing.org for more info."
      },
      {
        "t": "p",
        "v": "Des"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "gym-update",
      "title": "Gym Update!"
    },
    "next": {
      "slug": "armagh-geddon-2",
      "title": "Armagh-Geddon 29/11/14"
    }
  },
  {
    "slug": "gym-update",
    "title": "Gym Update!",
    "date": "November 4, 2014",
    "excerpt": "The new boxing and conditioning gym is going great with excellent attendances for out boxing, circuit and conditioning classes. We'll shortly be posting our new timetable with a range of classes to suit every need in the early am and after work time slots. Our classes are designed for you to get the most from […]",
    "paragraphs": [
      "The new boxing and conditioning gym is going great with excellent attendances for out boxing, circuit and conditioning classes. We'll shortly be posting our new timetable with a range of classes to suit every need in the early am and after work time slots. Our classes are designed for you to get the most from your workout with the personal attention from all our coaches that you have come to expect from White Collar Boxing. Our HQ in Harolds Cross is proving to be a great location with ample free parking and proximity to our Canal Running Highway.",
      "Our new strength and conditioning coach, Des has been initiated into his first boxing class as well as championing the early morning conditioning workouts. We've had great feedback from member who took up the early bird monthly rate and we'll be extending our membership options to suit all needs.",
      "Watch this space for more info and as always keep an eye on our Facebook page for the most up to date info."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The new boxing and conditioning gym is going great with excellent attendances for out boxing, circuit and conditioning classes. We'll shortly be posting our new timetable with a range of classes to suit every need in the early am and after work time slots. Our classes are designed for you to get the most from your workout with the personal attention from all our coaches that you have come to expect from White Collar Boxing. Our HQ in Harolds Cross is proving to be a great location with ample free parking and proximity to our Canal Running Highway."
      },
      {
        "t": "p",
        "v": "Our new strength and conditioning coach, Des has been initiated into his first boxing class as well as championing the early morning conditioning workouts. We've had great feedback from member who took up the early bird monthly rate and we'll be extending our membership options to suit all needs."
      },
      {
        "t": "p",
        "v": "Watch this space for more info and as always keep an eye on our Facebook page for the most up to date info."
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "dardevils-round-2-81114",
      "title": "DarDevils Round 2 8/11/14"
    },
    "next": {
      "slug": "benefits-strength-training",
      "title": "Benefits of Strength Training"
    }
  },
  {
    "slug": "dardevils-round-2-81114",
    "title": "DarDevils Round 2 8/11/14",
    "date": "September 19, 2014",
    "excerpt": "Its show time again for Drogheda Animal Rescue, The fighters who are being trained by former Irish International Damien Mckenna are raising money by climbing through the ropes for this great cause. The event will be held in the Westcourt Hotel Drogheda Tickets are €20",
    "paragraphs": [
      "Its show time again for Drogheda Animal Rescue, The fighters who are being trained by former Irish International Damien Mckenna are raising money by climbing through the ropes for this great cause. The event will be held in the Westcourt Hotel Drogheda Tickets are €20"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Its show time again for Drogheda Animal Rescue, The fighters who are being trained by former Irish International Damien Mckenna are raising money by climbing through the ropes for this great cause. The event will be held in the Westcourt Hotel Drogheda Tickets are €20"
      },
      {
        "t": "img",
        "src": "/images/content/c363df0f8655760b2456cb40a731461b.png",
        "alt": "dar ticket"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "battle-on-the-banks-mallow-261014",
      "title": "Battle on the Banks Mallow 26/10/14"
    },
    "next": {
      "slug": "gym-update",
      "title": "Gym Update!"
    }
  },
  {
    "slug": "battle-on-the-banks-mallow-261014",
    "title": "Battle on the Banks Mallow 26/10/14",
    "date": "September 19, 2014",
    "excerpt": "A white collar boxing event will be held in The Arches Bar Mallow on the October bank holiday weekend in aid of Mallow Search and Rescue and Mallow swimming club. It will be a great night, we hope to see you all there. Training has started and it is going to be a great night",
    "paragraphs": [
      "A white collar boxing event will be held in The Arches Bar Mallow on the October bank holiday weekend in aid of Mallow Search and Rescue and Mallow swimming club. It will be a great night, we hope to see you all there. Training has started and it is going to be a great night"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "A white collar boxing event will be held in The Arches Bar Mallow on the October bank holiday weekend in aid of Mallow Search and Rescue and Mallow swimming club. It will be a great night, we hope to see you all there. Training has started and it is going to be a great night"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "blue-and-white-fight-night-4114",
      "title": "Blue and White Fight Night 4/1/14"
    },
    "next": {
      "slug": "dardevils-round-2-81114",
      "title": "DarDevils Round 2 8/11/14"
    }
  },
  {
    "slug": "blue-and-white-fight-night-4114",
    "title": "Blue and White Fight Night 4/1/14",
    "date": "September 19, 2014",
    "excerpt": "St Annes Gaa Tallaght and whitecollarboxing.org proudly present Blue and White Fight Night in Citywest Hotel. The show is sponsored by Paddy Power and tickets are €25. The training is going well and there is over 1000 tickets sold already",
    "paragraphs": [
      "St Annes Gaa Tallaght and whitecollarboxing.org proudly present Blue and White Fight Night in Citywest Hotel. The show is sponsored by Paddy Power and tickets are €25. The training is going well and there is over 1000 tickets sold already"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "St Annes Gaa Tallaght and whitecollarboxing.org proudly present Blue and White Fight Night in Citywest Hotel. The show is sponsored by Paddy Power and tickets are €25. The training is going well and there is over 1000 tickets sold already"
      },
      {
        "t": "img",
        "src": "/images/content/858e8ccf1f34a011a1e97fdf348c7fd3.jpg",
        "alt": "Poster"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "new-gym-opening-september",
      "title": "New Gym Opening September"
    },
    "next": {
      "slug": "battle-on-the-banks-mallow-261014",
      "title": "Battle on the Banks Mallow 26/10/14"
    }
  },
  {
    "slug": "new-gym-opening-september",
    "title": "New Gym Opening September",
    "date": "August 1, 2014",
    "excerpt": "Our new boxing gym is up and running. The location for our new gym is Unit 2b Greenmount Industrial Estate Harolds Cross Dublin 6w. The estate is a real fitness hub with Yoga Studios , Taekwondo and now our White Collar Boxing and Conditioning Gym. We have a punch bag rack complete with a mixture […]",
    "paragraphs": [
      "Our new boxing gym is up and running. The location for our new gym is Unit 2b Greenmount Industrial Estate Harolds Cross Dublin 6w. The estate is a real fitness hub with Yoga Studios , Taekwondo and now our White Collar Boxing and Conditioning Gym. We have a punch bag rack complete with a mixture of punchbags speedball s etc. A sixteen foot boxing ring, a 25 metre sprint and conditioning track as well as male and female changing rooms and showers.",
      "The classes are great fun and our coaches have a wealth of experience from Olympic Games to world championships. They are a refreshing break from the norm with a personal touch to each class",
      "Special opening offer of €150 for 2 months unlimited classes for everyone who books online before the end of September",
      "sign up",
      "September/October Opening Times",
      "Monday 5pm- 10pm 5pm Open Gym, 6pm Advanced Boxing, 7pm Beginners Boxing, 8pm Bag work and Conditining,9pm Open Gym",
      "Tuesday 7am to 12pm 7am Morning Conditioning, 8am Morning Conditioning, 9am- 12pm Session of the day",
      "Wednesday 5pm- 10pm 5pm Open Gym, 6pm Advanced Boxing, 7pm Beginners Boxing, 8pm Bag work and Conditining,9pm Open Gym",
      "Thursday 7am Morning Conditioning, 8am Morning Conditioning, 9am- 12pm Session of the day",
      "Friday 5pm to 9pm 5pm to 9pm Sparring/Coaches Choice"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our new boxing gym is up and running. The location for our new gym is Unit 2b Greenmount Industrial Estate Harolds Cross Dublin 6w. The estate is a real fitness hub with Yoga Studios , Taekwondo and now our White Collar Boxing and Conditioning Gym. We have a punch bag rack complete with a mixture of punchbags speedball s etc. A sixteen foot boxing ring, a 25 metre sprint and conditioning track as well as male and female changing rooms and showers."
      },
      {
        "t": "p",
        "v": "The classes are great fun and our coaches have a wealth of experience from Olympic Games to world championships. They are a refreshing break from the norm with a personal touch to each class"
      },
      {
        "t": "p",
        "v": "Special opening offer of €150 for 2 months unlimited classes for everyone who books online before the end of September"
      },
      {
        "t": "p",
        "v": "sign up"
      },
      {
        "t": "p",
        "v": "September/October Opening Times"
      },
      {
        "t": "p",
        "v": "Monday 5pm- 10pm 5pm Open Gym, 6pm Advanced Boxing, 7pm Beginners Boxing, 8pm Bag work and Conditining,9pm Open Gym"
      },
      {
        "t": "p",
        "v": "Tuesday 7am to 12pm 7am Morning Conditioning, 8am Morning Conditioning, 9am- 12pm Session of the day"
      },
      {
        "t": "p",
        "v": "Wednesday 5pm- 10pm 5pm Open Gym, 6pm Advanced Boxing, 7pm Beginners Boxing, 8pm Bag work and Conditining,9pm Open Gym"
      },
      {
        "t": "p",
        "v": "Thursday 7am Morning Conditioning, 8am Morning Conditioning, 9am- 12pm Session of the day"
      },
      {
        "t": "p",
        "v": "Friday 5pm to 9pm 5pm to 9pm Sparring/Coaches Choice"
      },
      {
        "t": "img",
        "src": "/images/content/dbb8fd7276810c503f521f860b13941a.jpg",
        "alt": "New Gym"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "lord-of-the-ring-kilkenny-august-22nd",
      "title": "Lord of the Ring Kilkenny August 22nd 2014"
    },
    "next": {
      "slug": "blue-and-white-fight-night-4114",
      "title": "Blue and White Fight Night 4/1/14"
    }
  },
  {
    "slug": "lord-of-the-ring-kilkenny-august-22nd",
    "title": "Lord of the Ring Kilkenny August 22nd 2014",
    "date": "July 30, 2014",
    "excerpt": "Kilkenny Rugby step off the field and into the ring to raise funds for the club. The venue for the showdown is Langtons ballroom. The fight night is shaping up to be a good one with a vast array of local characters making their pugilistic debut that night Tickets are €20 and are available from […]",
    "paragraphs": [
      "Kilkenny Rugby step off the field and into the ring to raise funds for the club. The venue for the showdown is Langtons ballroom. The fight night is shaping up to be a good one with a vast array of local characters making their pugilistic debut that night",
      "Tickets are €20 and are available from the players"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Kilkenny Rugby step off the field and into the ring to raise funds for the club. The venue for the showdown is Langtons ballroom. The fight night is shaping up to be a good one with a vast array of local characters making their pugilistic debut that night"
      },
      {
        "t": "p",
        "v": "Tickets are €20 and are available from the players"
      },
      {
        "t": "img",
        "src": "/images/content/6d39305f6895e4598f815fa512e217ab.png",
        "alt": "photo (11)"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "ballers-at-war",
      "title": "Ballers at War 19th July 2014"
    },
    "next": {
      "slug": "new-gym-opening-september",
      "title": "New Gym Opening September"
    }
  },
  {
    "slug": "ballers-at-war",
    "title": "Ballers at War 19th July 2014",
    "date": "June 25, 2014",
    "excerpt": "Neptune and Blu Demons basketball go head to head off court, They take on one another in the boxing ring to raise money for both clubs. The show takes place in the Savoy Theatre on Saturday 19th July Tickets are priced at €20 include entry into the Niteclub after the event",
    "paragraphs": [
      "Neptune and Blu Demons basketball go head to head off court, They take on one another in the boxing ring to raise money for both clubs. The show takes place in the Savoy Theatre on Saturday 19th July Tickets are priced at €20 include entry into the Niteclub after the event"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Neptune and Blu Demons basketball go head to head off court, They take on one another in the boxing ring to raise money for both clubs. The show takes place in the Savoy Theatre on Saturday 19th July Tickets are priced at €20 include entry into the Niteclub after the event"
      },
      {
        "t": "img",
        "src": "/images/content/84b85d4e2b6f5c45271554103c8ca00d.png",
        "alt": "photo (9)"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "the-golden-brawl",
      "title": "The Golden Brawl August 3rd 2014"
    },
    "next": {
      "slug": "lord-of-the-ring-kilkenny-august-22nd",
      "title": "Lord of the Ring Kilkenny August 22nd 2014"
    }
  },
  {
    "slug": "the-golden-brawl",
    "title": "The Golden Brawl August 3rd 2014",
    "date": "June 25, 2014",
    "excerpt": "Cashel RFC and Kilfeacle GFC go head to head on Sunday August 3rd in Golden Community Centre to raise funds to provide improved facilities for both clubs it proves to be a very entertaining night with live music late into the night after",
    "paragraphs": [
      "Cashel RFC and Kilfeacle GFC go head to head on Sunday August 3rd in Golden Community Centre to raise funds to provide improved facilities for both clubs it proves to be a very entertaining night with live music late into the night after"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Cashel RFC and Kilfeacle GFC go head to head on Sunday August 3rd in Golden Community Centre to raise funds to provide improved facilities for both clubs it proves to be a very entertaining night with live music late into the night after"
      },
      {
        "t": "img",
        "src": "/images/content/4c2faeee51c891e2c3e6503666d9ec8c.jpg",
        "alt": "Cashel 2014"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "titanic-tussle-belfast-september-2014",
      "title": "Titanic Tussle Belfast September 2014"
    },
    "next": {
      "slug": "ballers-at-war",
      "title": "Ballers at War 19th July 2014"
    }
  },
  {
    "slug": "titanic-tussle-belfast-september-2014",
    "title": "Titanic Tussle Belfast September 2014",
    "date": "May 22, 2014",
    "excerpt": "We are delighted to announce \"Titanic Tussle\" at the Titanic Conference Centre , This is going to be epic !!!! We are currently looking for those courageous enough to climb on board and be a hero for six minutes. Spaces are limited and absolutely no boxing experience is required. Boxers will be trained expertly by […]",
    "paragraphs": [
      "We are delighted to announce \"Titanic Tussle\" at the Titanic Conference Centre , This is going to be epic !!!! We are currently looking for those courageous enough to climb on board and be a hero for six minutes. Spaces are limited and absolutely no boxing experience is required. Boxers will be trained expertly by the team at Monkstown Bc, The soul focus of the training will be on getting you in the best physical and mental shape to climb into a boxing ring. There is no hiding places in the boxing ring and their will be no hiding places in this programme. The fight will take place on Thursday 23rd October and we encourage people to align themselves with a good cause/charity and make this worth while on a number of levels. So if you are getting that sinking feeling that you need to do something worth while with your life be a survivor get in touch now 07909694328 email info@whitecollarboxing.org or message us on FB",
      "Your supporters will get the opportunity to enjoy the fights and the White Star Hospitality"
    ],
    "image": null,
    "blocks": [
      {
        "t": "img",
        "src": "/images/content/030e04d477a791fda6d841b495c185b4.jpg",
        "alt": "titanic"
      },
      {
        "t": "p",
        "v": "We are delighted to announce \"Titanic Tussle\" at the Titanic Conference Centre , This is going to be epic !!!! We are currently looking for those courageous enough to climb on board and be a hero for six minutes. Spaces are limited and absolutely no boxing experience is required. Boxers will be trained expertly by the team at Monkstown Bc, The soul focus of the training will be on getting you in the best physical and mental shape to climb into a boxing ring. There is no hiding places in the boxing ring and their will be no hiding places in this programme. The fight will take place on Thursday 23rd October and we encourage people to align themselves with a good cause/charity and make this worth while on a number of levels. So if you are getting that sinking feeling that you need to do something worth while with your life be a survivor get in touch now 07909694328 email info@whitecollarboxing.org or message us on FB"
      },
      {
        "t": "p",
        "v": "Your supporters will get the opportunity to enjoy the fights and the White Star Hospitality"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "tide-versus-pride",
      "title": "Tide Versus Pride 14 June 2014"
    },
    "next": {
      "slug": "the-golden-brawl",
      "title": "The Golden Brawl August 3rd 2014"
    }
  },
  {
    "slug": "tide-versus-pride",
    "title": "Tide Versus Pride 14 June 2014",
    "date": "May 22, 2014",
    "excerpt": "Lahinch Playground Rescue and Lifford A.F.C lock horns in the Queens Niteclub Ennis on Saturday 14th of June. The boxing training is going well and tickets are selling fast. The money from this fundraiser goes towards two good local causes",
    "paragraphs": [
      "Lahinch Playground Rescue and Lifford A.F.C lock horns in the Queens Niteclub Ennis on Saturday 14th of June. The boxing training is going well and tickets are selling fast. The money from this fundraiser goes towards two good local causes"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Lahinch Playground Rescue and Lifford A.F.C lock horns in the Queens Niteclub Ennis on Saturday 14th of June. The boxing training is going well and tickets are selling fast. The money from this fundraiser goes towards two good local causes"
      },
      {
        "t": "img",
        "src": "/images/content/7a54550791d1b4f803441e5f3ab2411c.jpg",
        "alt": "tive versus pride"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "ardee-celtic-fc-summer-slam",
      "title": "Ardee Celtic Fc Summer Slam 28 June 2014"
    },
    "next": {
      "slug": "titanic-tussle-belfast-september-2014",
      "title": "Titanic Tussle Belfast September 2014"
    }
  },
  {
    "slug": "ardee-celtic-fc-summer-slam",
    "title": "Ardee Celtic Fc Summer Slam 28 June 2014",
    "date": "May 21, 2014",
    "excerpt": "Ardee Celtic take it off the field and into the Ring for The Summer Slam, Boxing training is already underway and all involved are enjoying doing something different. The fight takes place on the 28th June in Ardee Parish Centre",
    "paragraphs": [
      "Ardee Celtic take it off the field and into the Ring for The Summer Slam, Boxing training is already underway and all involved are enjoying doing something different. The fight takes place on the 28th June in Ardee Parish Centre"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Ardee Celtic take it off the field and into the Ring for The Summer Slam, Boxing training is already underway and all involved are enjoying doing something different. The fight takes place on the 28th June in Ardee Parish Centre"
      },
      {
        "t": "img",
        "src": "/images/content/b6bfafd0728f8a13555143a49efd2d06.png",
        "alt": "ardee"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "hill-runs-and-mst",
      "title": "Hill Runs and MST"
    },
    "next": {
      "slug": "tide-versus-pride",
      "title": "Tide Versus Pride 14 June 2014"
    }
  },
  {
    "slug": "hill-runs-and-mst",
    "title": "Hill Runs and MST",
    "date": "May 13, 2014",
    "excerpt": "Now that summer is upon us it is important to mix up your training. We will be introducing some hill runs and MST (modified strongman training) which is sure to take everyone out of their comfort zone. Training outdoors can ad a breath of fresh air to your training programme as well as some much […]",
    "paragraphs": [
      "Now that summer is upon us it is important to mix up your training. We will be introducing some hill runs and MST (modified strongman training) which is sure to take everyone out of their comfort zone. Training outdoors can ad a breath of fresh air to your training programme as well as some much needed Vitamin D. Adding variety and a new stimulus is always an excellent way of to refocus ones training programme,"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Now that summer is upon us it is important to mix up your training. We will be introducing some hill runs and MST (modified strongman training) which is sure to take everyone out of their comfort zone. Training outdoors can ad a breath of fresh air to your training programme as well as some much needed Vitamin D. Adding variety and a new stimulus is always an excellent way of to refocus ones training programme,"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "september-2014-get-in-the-ring",
      "title": "September 2014 Get in the Ring"
    },
    "next": {
      "slug": "ardee-celtic-fc-summer-slam",
      "title": "Ardee Celtic Fc Summer Slam 28 June 2014"
    }
  },
  {
    "slug": "september-2014-get-in-the-ring",
    "title": "September 2014 Get in the Ring",
    "date": "February 12, 2014",
    "excerpt": "The programme consists of 8 weeks intensive training by our International and Olympic Coaches, starting on the 8th September, Boxing training is every Monday and Wednesday night at 7pm with conditioning on Tuesday and Thursday mornings at 7am. The soul focus of the training will be on getting you in the best physical and mental […]",
    "paragraphs": [
      "The programme consists of 8 weeks intensive training by our International and Olympic Coaches, starting on the 8th September, Boxing training is every Monday and Wednesday night at 7pm with conditioning on Tuesday and Thursday mornings at 7am. The soul focus of the training will be on getting you in the best physical and mental shape to climb into a boxing ring. There is no hiding places in the boxing ring and their will be no hiding places in this programme. The fight will take place in late October and we encourage people to align themselves with a good cause/charity and make this worth while on a number of levels. Participants fitness/strength/weight will be measured and monitored throughout the programme",
      "The programme costs €250 and spaces are limited",
      "\"Special new gym opening offer of €150 for all courses bought online\"",
      "Sign up today by contacting Cathal on +353 87 8526323 or email info@whitecollarboxing.org"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The programme consists of 8 weeks intensive training by our International and Olympic Coaches, starting on the 8th September, Boxing training is every Monday and Wednesday night at 7pm with conditioning on Tuesday and Thursday mornings at 7am. The soul focus of the training will be on getting you in the best physical and mental shape to climb into a boxing ring. There is no hiding places in the boxing ring and their will be no hiding places in this programme. The fight will take place in late October and we encourage people to align themselves with a good cause/charity and make this worth while on a number of levels. Participants fitness/strength/weight will be measured and monitored throughout the programme"
      },
      {
        "t": "p",
        "v": "The programme costs €250 and spaces are limited"
      },
      {
        "t": "p",
        "v": "\"Special new gym opening offer of €150 for all courses bought online\""
      },
      {
        "t": "p",
        "v": "Sign up today by contacting Cathal on +353 87 8526323 or email info@whitecollarboxing.org"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "new-h-i-i-t-boxing",
      "title": "NEW!! H.I.I.T Boxing"
    },
    "next": {
      "slug": "hill-runs-and-mst",
      "title": "Hill Runs and MST"
    }
  },
  {
    "slug": "new-h-i-i-t-boxing",
    "title": "NEW!! H.I.I.T Boxing",
    "date": "February 10, 2014",
    "excerpt": "White Collar Boxers be brave….. Eoin Stanley is back!! Those of you familiar with our infamous morning sessions live in fear of this man, but in March he will transform you into the shape of your lives – if you dare!! On the Monday 10th of March at 8pm we are running our first ever […]",
    "paragraphs": [
      "White Collar Boxers be brave….. Eoin Stanley is back!! Those of you familiar with our infamous morning sessions live in fear of this man, but in March he will transform you into the shape of your lives – if you dare!!",
      "On the Monday 10th of March at 8pm we are running our first ever 6 week H.I.I.T Boxing course. This High Interval Intensity Boxing Training is as a Boxing specific Strength and Conditioning program tailored for anyone who wants to improve their overall fitness and general health. No boxing experience necessary.",
      "Sessions will take place every Monday and Wednesday at 8pm in the National Boxing Stadium on the South Circular Road. The course costs €150. To register please email info@whitecollarboxing.org or contact Cathal on 087-8526323. Places are limited.",
      "For this course only, if you puke we will offer you a free session after!!!"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "White Collar Boxers be brave….. Eoin Stanley is back!! Those of you familiar with our infamous morning sessions live in fear of this man, but in March he will transform you into the shape of your lives – if you dare!!"
      },
      {
        "t": "p",
        "v": "On the Monday 10th of March at 8pm we are running our first ever 6 week H.I.I.T Boxing course. This High Interval Intensity Boxing Training is as a Boxing specific Strength and Conditioning program tailored for anyone who wants to improve their overall fitness and general health. No boxing experience necessary."
      },
      {
        "t": "p",
        "v": "Sessions will take place every Monday and Wednesday at 8pm in the National Boxing Stadium on the South Circular Road. The course costs €150. To register please email info@whitecollarboxing.org or contact Cathal on 087-8526323. Places are limited."
      },
      {
        "t": "p",
        "v": "For this course only, if you puke we will offer you a free session after!!!"
      },
      {
        "t": "img",
        "src": "/images/content/f6593a8e73eebd16f2907848f20efced.jpg",
        "alt": "HIIT (1)"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "new-january-ladies-boxing-class",
      "title": "NEW January Ladies Boxing Class"
    },
    "next": {
      "slug": "september-2014-get-in-the-ring",
      "title": "September 2014 Get in the Ring"
    }
  },
  {
    "slug": "new-january-ladies-boxing-class",
    "title": "NEW January Ladies Boxing Class",
    "date": "January 23, 2014",
    "excerpt": "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class! Starting on Monday 27th of January this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the […]",
    "paragraphs": [
      "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class!",
      "Starting on Monday 27th of January this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin.",
      "The programme costs €120. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class!"
      },
      {
        "t": "p",
        "v": "Starting on Monday 27th of January this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin."
      },
      {
        "t": "p",
        "v": "The programme costs €120. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org"
      },
      {
        "t": "img",
        "src": "/images/content/d5175c5e77947815dfb100e0acf84a03.jpg",
        "alt": "40"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "new-january-class-2013",
      "title": "NEW January Boxing Class 2014"
    },
    "next": {
      "slug": "new-h-i-i-t-boxing",
      "title": "NEW!! H.I.I.T Boxing"
    }
  },
  {
    "slug": "new-january-class-2013",
    "title": "NEW January Boxing Class 2014",
    "date": "January 3, 2014",
    "excerpt": "Punch off that Christmas pud with our 8 week mixed training programme starting on Monday, 20th January. For this programme we are putting particular emphasis on conditioning and weight loss. Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest if they […]",
    "paragraphs": [
      "Punch off that Christmas pud with our 8 week mixed training programme starting on Monday, 20th January. For this programme we are putting particular emphasis on conditioning and weight loss.",
      "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest if they so wish.",
      "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time.",
      "The training sessions are twice weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm",
      "The programme costs €250 but discounts are available for former participants and groups. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Punch off that Christmas pud with our 8 week mixed training programme starting on Monday, 20th January. For this programme we are putting particular emphasis on conditioning and weight loss."
      },
      {
        "t": "p",
        "v": "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest if they so wish."
      },
      {
        "t": "p",
        "v": "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time."
      },
      {
        "t": "p",
        "v": "The training sessions are twice weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm"
      },
      {
        "t": "p",
        "v": "The programme costs €250 but discounts are available for former participants and groups. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
      },
      {
        "t": "img",
        "src": "/images/content/20b345a6bdf97b2d6f6f50818444d3c9.jpg",
        "alt": "Boxing Comp"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "black-blue-1-february-2014",
      "title": "Black & Blue - 1 February 2014"
    },
    "next": {
      "slug": "new-january-ladies-boxing-class",
      "title": "NEW January Ladies Boxing Class"
    }
  },
  {
    "slug": "black-blue-1-february-2014",
    "title": "Black & Blue - 1 February 2014",
    "date": "January 2, 2014",
    "excerpt": "Simonstown GAA are taking on rivals Walterstown in a titanic Battle that will leave both Black & Blue! Both clubs are taking to the ring on Saturday 1st of February in Simonstown GAA. Tickets are €20 and can be purchased from both clubs. Doors open at 7.30pm - don't miss your opportunity to witness this […]",
    "paragraphs": [
      "Simonstown GAA are taking on rivals Walterstown in a titanic Battle that will leave both Black & Blue! Both clubs are taking to the ring on Saturday 1st of February in Simonstown GAA. Tickets are €20 and can be purchased from both clubs. Doors open at 7.30pm - don't miss your opportunity to witness this fight to the end."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Simonstown GAA are taking on rivals Walterstown in a titanic Battle that will leave both Black & Blue! Both clubs are taking to the ring on Saturday 1st of February in Simonstown GAA. Tickets are €20 and can be purchased from both clubs. Doors open at 7.30pm - don't miss your opportunity to witness this fight to the end."
      },
      {
        "t": "img",
        "src": "/images/content/4947670e7143489926649ef0514b4177.jpg",
        "alt": "Simonstown Poster"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "fight-for-jack-21-february-2014",
      "title": "Fight for Jack - 21 February 2014"
    },
    "next": {
      "slug": "new-january-class-2013",
      "title": "NEW January Boxing Class 2014"
    }
  },
  {
    "slug": "fight-for-jack-21-february-2014",
    "title": "Fight for Jack - 21 February 2014",
    "date": "January 1, 2014",
    "excerpt": "In August 2012, Jack Kavanagh dived into an oncoming wave. In that moment his life changed – he broke his neck. He is now paralysed from the chest down with only limited movement in his arms and wrists. Jack had just finished first year pharmacy, was a qualified lifeguard and windsurfing instructor (and fanatic), and […]",
    "paragraphs": [
      "In August 2012, Jack Kavanagh dived into an oncoming wave. In that moment his life changed – he broke his neck. He is now paralysed from the chest down with only limited movement in his arms and wrists. Jack had just finished first year pharmacy, was a qualified lifeguard and windsurfing instructor (and fanatic), and had a future full of promise ahead of him. Now his life journey will be very different to what he originally envisaged, but he is determined to overcome the challenges and have as full and normal a life as possible. Just one year after his accident Jack has started back at college. Trinity College are being very supportive in facilitating his completion of his pharmacy degree over an extended period. There are significant issues surrounding this, not least of which is the need for appropriate accommodation, 24 hour care and an assistant to help him with his lab work. Despite this Jack is happy to be taking on the challenge.To continue to make progress and not let this catastrophic accident be the end of his plans he will need significant funds to cover;",
      "Carer assistance",
      "Intensive physiotherapy and occupational therapy support",
      "Specialist equipment and communications technology",
      "Specialised transport",
      "An assistant to help him return to college, attend lectures and complete assignments",
      "In time he hopes also to gain access to some innovative treatments and procedures which could further enhance his mobility",
      "Please reward his determination and ambition by purchasing a ticket to the upcoming Fight Night in Dandelion Nightclub on Stephens Green on the 21st of February. Tickets are €15 for students and and €20 for adults. Tickets can be purchased on the door or by phoning Derville Stacey on 0868158879"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "In August 2012, Jack Kavanagh dived into an oncoming wave. In that moment his life changed – he broke his neck. He is now paralysed from the chest down with only limited movement in his arms and wrists. Jack had just finished first year pharmacy, was a qualified lifeguard and windsurfing instructor (and fanatic), and had a future full of promise ahead of him. Now his life journey will be very different to what he originally envisaged, but he is determined to overcome the challenges and have as full and normal a life as possible. Just one year after his accident Jack has started back at college. Trinity College are being very supportive in facilitating his completion of his pharmacy degree over an extended period. There are significant issues surrounding this, not least of which is the need for appropriate accommodation, 24 hour care and an assistant to help him with his lab work. Despite this Jack is happy to be taking on the challenge.To continue to make progress and not let this catastrophic accident be the end of his plans he will need significant funds to cover;"
      },
      {
        "t": "p",
        "v": "Carer assistance"
      },
      {
        "t": "p",
        "v": "Intensive physiotherapy and occupational therapy support"
      },
      {
        "t": "p",
        "v": "Specialist equipment and communications technology"
      },
      {
        "t": "p",
        "v": "Specialised transport"
      },
      {
        "t": "p",
        "v": "An assistant to help him return to college, attend lectures and complete assignments"
      },
      {
        "t": "p",
        "v": "In time he hopes also to gain access to some innovative treatments and procedures which could further enhance his mobility"
      },
      {
        "t": "p",
        "v": "Please reward his determination and ambition by purchasing a ticket to the upcoming Fight Night in Dandelion Nightclub on Stephens Green on the 21st of February. Tickets are €15 for students and and €20 for adults. Tickets can be purchased on the door or by phoning Derville Stacey on 0868158879"
      },
      {
        "t": "img",
        "src": "/images/content/6ee1481e12bf95e85775e375b497340f.jpg",
        "alt": "Poster 2 FFJ"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "corinthian-hockey-white-collar-boxing-event-21-february-2014",
      "title": "Corinthian Hockey White Collar Boxing Event - 21 February 2014"
    },
    "next": {
      "slug": "black-blue-1-february-2014",
      "title": "Black & Blue - 1 February 2014"
    }
  },
  {
    "slug": "corinthian-hockey-white-collar-boxing-event-21-february-2014",
    "title": "Corinthian Hockey White Collar Boxing Event - 21 February 2014",
    "date": "January 1, 2014",
    "excerpt": "Club 92 get ready to rummmmmmble!! Corinthian Hockey Club are leaving the sticks at home and climbing in to the ring for the first time to raise funds for their club. This must see event will take place on the 21st of February. Doors 7.30pm and tickets are €20. To get yours TODAY contact Alan […]",
    "paragraphs": [
      "Club 92 get ready to rummmmmmble!! Corinthian Hockey Club are leaving the sticks at home and climbing in to the ring for the first time to raise funds for their club. This must see event will take place on the 21st of February. Doors 7.30pm and tickets are €20. To get yours TODAY contact Alan on 087-9484074"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Club 92 get ready to rummmmmmble!! Corinthian Hockey Club are leaving the sticks at home and climbing in to the ring for the first time to raise funds for their club. This must see event will take place on the 21st of February. Doors 7.30pm and tickets are €20. To get yours TODAY contact Alan on 087-9484074"
      },
      {
        "t": "img",
        "src": "/images/content/8d290d7ab0061ba6a1b896fc2fdbeca6.jpg",
        "alt": "Corinthian hockey poster"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "school-of-hard-knocks-4-april-2014",
      "title": "School of Hard Knocks - 4 April 2014"
    },
    "next": {
      "slug": "fight-for-jack-21-february-2014",
      "title": "Fight for Jack - 21 February 2014"
    }
  },
  {
    "slug": "school-of-hard-knocks-4-april-2014",
    "title": "School of Hard Knocks - 4 April 2014",
    "date": "January 1, 2014",
    "excerpt": "Whitecollarboxing.org are collaborating with Ratoath College Parents Association to bring you; 'School of Hard Knocks'. Parents Pupils and Past Pupils are pitched together in an epic boxing event in order to raise funds the future development of their local college. To be crowned champion, 30 brave men and women are putting it all on the […]",
    "paragraphs": [
      "Whitecollarboxing.org are collaborating with Ratoath College Parents Association to bring you; 'School of Hard Knocks'. Parents Pupils and Past Pupils are pitched together in an epic boxing event in order to raise funds the future development of their local college.",
      "To be crowned champion, 30 brave men and women are putting it all on the line and are currently undertaking an intensive 6 week training programme that will see them go from boxing amateur to pro when they get the ultimate opportunity to compete in a boxing ring on Friday 4th April in the Pillo Hotel Ashbourne Co. Meath.",
      "Former Olympic Boxer, Cathal O'Grady of whitecollarboxing.org is overwhelmed by the enthusiasm and interest in this event. \"Ratoath College Parents Association are delighted with the generosity that has been shown them so far by local companies and individuals in support of the event.\" Brendan Newe, Chairperson of the Parents Association, says the committee are delighted with the reaction to date. \"So many local individuals and businesses are supporting this event by sponsoring participants, advertisements and fight bouts. RCPA would particularly like to acknowledge the support if their two main sponsors Des Kelly Interiors and The Auld Stand. All sponsors will be given exposure on the night with company name on screens and boxers wearing the name on vests as well as mentions from our MC on the night and in the event programme. If you are interested in sponsorship in the event please contact Bee Flanagan on 086 8094924 or Orla McNally on 087 1944549.",
      "RCPA would like to acknowledge the support of Golden Gloves Boxing Club in the heart of the village who have facilitated training for contestants.",
      "Tickets for the event will be on sale in the college each afternoon from 3:15 pm or are available from any of the contestants.",
      "All the proceeds from this show will go towards the Ratoath College Parents Association college development fund in preparation for the building of the new extension"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Whitecollarboxing.org are collaborating with Ratoath College Parents Association to bring you; 'School of Hard Knocks'. Parents Pupils and Past Pupils are pitched together in an epic boxing event in order to raise funds the future development of their local college."
      },
      {
        "t": "p",
        "v": "To be crowned champion, 30 brave men and women are putting it all on the line and are currently undertaking an intensive 6 week training programme that will see them go from boxing amateur to pro when they get the ultimate opportunity to compete in a boxing ring on Friday 4th April in the Pillo Hotel Ashbourne Co. Meath."
      },
      {
        "t": "p",
        "v": "Former Olympic Boxer, Cathal O'Grady of whitecollarboxing.org is overwhelmed by the enthusiasm and interest in this event. \"Ratoath College Parents Association are delighted with the generosity that has been shown them so far by local companies and individuals in support of the event.\" Brendan Newe, Chairperson of the Parents Association, says the committee are delighted with the reaction to date. \"So many local individuals and businesses are supporting this event by sponsoring participants, advertisements and fight bouts. RCPA would particularly like to acknowledge the support if their two main sponsors Des Kelly Interiors and The Auld Stand. All sponsors will be given exposure on the night with company name on screens and boxers wearing the name on vests as well as mentions from our MC on the night and in the event programme. If you are interested in sponsorship in the event please contact Bee Flanagan on 086 8094924 or Orla McNally on 087 1944549."
      },
      {
        "t": "p",
        "v": "RCPA would like to acknowledge the support of Golden Gloves Boxing Club in the heart of the village who have facilitated training for contestants."
      },
      {
        "t": "p",
        "v": "Tickets for the event will be on sale in the college each afternoon from 3:15 pm or are available from any of the contestants."
      },
      {
        "t": "p",
        "v": "All the proceeds from this show will go towards the Ratoath College Parents Association college development fund in preparation for the building of the new extension"
      },
      {
        "t": "img",
        "src": "/images/content/a36319e10b999f1f47ddefa90b53545b.jpg",
        "alt": "Rathoath"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "the-battle-of-the-saints-1-march-2014",
      "title": "The Battle of the Saints - 1 March 2014"
    },
    "next": {
      "slug": "corinthian-hockey-white-collar-boxing-event-21-february-2014",
      "title": "Corinthian Hockey White Collar Boxing Event - 21 February 2014"
    }
  },
  {
    "slug": "the-battle-of-the-saints-1-march-2014",
    "title": "The Battle of the Saints - 1 March 2014",
    "date": "December 31, 2013",
    "excerpt": "Kilkenny a battle is coming your way - who will win the Northern Knockout!?! The only way to find out who will triumph between St. Patricks Ballyragget and St. Lachtains Freshford is to get your tickets now!! The showdown will take place on 1st March at 7.30pm in the Newpark Hotel. Tickets only €20 and […]",
    "paragraphs": [
      "Kilkenny a battle is coming your way - who will win the Northern Knockout!?! The only way to find out who will triumph between St. Patricks Ballyragget and St. Lachtains Freshford is to get your tickets now!! The showdown will take place on 1st March at 7.30pm in the Newpark Hotel. Tickets only €20 and can be purchased from both clubs. For more information please email info@whitecollarboxing.org"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Kilkenny a battle is coming your way - who will win the Northern Knockout!?! The only way to find out who will triumph between St. Patricks Ballyragget and St. Lachtains Freshford is to get your tickets now!! The showdown will take place on 1st March at 7.30pm in the Newpark Hotel. Tickets only €20 and can be purchased from both clubs. For more information please email info@whitecollarboxing.org"
      },
      {
        "t": "img",
        "src": "/images/content/d31a00a6ce7709ffa08a8f4cc98f9767.jpg",
        "alt": "Ballyragget jpeg"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "lions-club-naas-8-march-2014",
      "title": "Lions Club Naas - 8 March 2014"
    },
    "next": {
      "slug": "school-of-hard-knocks-4-april-2014",
      "title": "School of Hard Knocks - 4 April 2014"
    }
  },
  {
    "slug": "lions-club-naas-8-march-2014",
    "title": "Lions Club Naas - 8 March 2014",
    "date": "December 30, 2013",
    "excerpt": "The Lions Club are taking over Time Nightclub in a boxing extravaganza that will rock Naas! The mighty Lions are climbing in to the ring and go the distance for charity. 30 local business men and women will find out what they are made of at 7.30pm in Time Nightclub on Saturday the 8th of […]",
    "paragraphs": [
      "The Lions Club are taking over Time Nightclub in a boxing extravaganza that will rock Naas! The mighty Lions are climbing in to the ring and go the distance for charity. 30 local business men and women will find out what they are made of at 7.30pm in Time Nightclub on Saturday the 8th of March. Tickets are €20 and they are roaring to be bought!! Contact Steph on 086-3737584 for more info."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The Lions Club are taking over Time Nightclub in a boxing extravaganza that will rock Naas! The mighty Lions are climbing in to the ring and go the distance for charity. 30 local business men and women will find out what they are made of at 7.30pm in Time Nightclub on Saturday the 8th of March. Tickets are €20 and they are roaring to be bought!! Contact Steph on 086-3737584 for more info."
      },
      {
        "t": "img",
        "src": "/images/content/3a45fd42d8511fb67f2e53d2eef7fe33.jpg",
        "alt": "Lions Poster"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "lord-of-the-ring-5-14-march-2014",
      "title": "Lord of the Ring 5 - 14 March 2014"
    },
    "next": {
      "slug": "the-battle-of-the-saints-1-march-2014",
      "title": "The Battle of the Saints - 1 March 2014"
    }
  },
  {
    "slug": "lord-of-the-ring-5-14-march-2014",
    "title": "Lord of the Ring 5 - 14 March 2014",
    "date": "December 29, 2013",
    "excerpt": "Letterkenny let's get ready to rrrrrumble!! Letterkenny RFC v ST Eunan's GAA are taking each other on in a titanic battle to the end. This white collar boxing extravaganza is taking place in the Mount Errigal Hotel, Ballyraine, Letterkenny at 7.30pm on Friday 14th March. To get tickets to see which club will triumph contact […]",
    "paragraphs": [
      "Letterkenny let's get ready to rrrrrumble!! Letterkenny RFC v ST Eunan's GAA are taking each other on in a titanic battle to the end. This white collar boxing extravaganza is taking place in the Mount Errigal Hotel, Ballyraine, Letterkenny at 7.30pm on Friday 14th March. To get tickets to see which club will triumph contact Boyd Robinson on 087-2362998"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Letterkenny let's get ready to rrrrrumble!! Letterkenny RFC v ST Eunan's GAA are taking each other on in a titanic battle to the end. This white collar boxing extravaganza is taking place in the Mount Errigal Hotel, Ballyraine, Letterkenny at 7.30pm on Friday 14th March. To get tickets to see which club will triumph contact Boyd Robinson on 087-2362998"
      },
      {
        "t": "img",
        "src": "/images/content/52f2a529a92184655a6291b6d0174b37.jpg",
        "alt": "1958232_10202357124423817_994850427_n"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "clash-without-the-ash-16-march-2014",
      "title": "Clash without the Ash - 16 March 2014"
    },
    "next": {
      "slug": "lions-club-naas-8-march-2014",
      "title": "Lions Club Naas - 8 March 2014"
    }
  },
  {
    "slug": "clash-without-the-ash-16-march-2014",
    "title": "Clash without the Ash - 16 March 2014",
    "date": "December 28, 2013",
    "excerpt": "Let's get ready to rrrrrrumble!! Wolfe Tones GAA are taking on Newtown On Fergus GAA in a fight night like no other. Which club will come out on top and be crowned champions!?! All boxers are climbing in to the ring after undergoing 6 weeks of intense training to participate in a fight night to […]",
    "paragraphs": [
      "Let's get ready to rrrrrrumble!! Wolfe Tones GAA are taking on Newtown On Fergus GAA in a fight night like no other. Which club will come out on top and be crowned champions!?! All boxers are climbing in to the ring after undergoing 6 weeks of intense training to participate in a fight night to raise funds for their clubs but they need your support. The venue is the Oakwood Arms Hotel, on Sun March 16th at 7pm - tickets are only €20 and can be purchased from all boxers and club."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Let's get ready to rrrrrrumble!! Wolfe Tones GAA are taking on Newtown On Fergus GAA in a fight night like no other. Which club will come out on top and be crowned champions!?! All boxers are climbing in to the ring after undergoing 6 weeks of intense training to participate in a fight night to raise funds for their clubs but they need your support. The venue is the Oakwood Arms Hotel, on Sun March 16th at 7pm - tickets are only €20 and can be purchased from all boxers and club."
      },
      {
        "t": "img",
        "src": "/images/content/3e763b623ba3f90899c1c6852541ccdb.jpg",
        "alt": "Wolftones v newmarket poster"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "battle-of-the-rovers-22-march-2014",
      "title": "Battle of the Rovers - 22 March 2014"
    },
    "next": {
      "slug": "lord-of-the-ring-5-14-march-2014",
      "title": "Lord of the Ring 5 - 14 March 2014"
    }
  },
  {
    "slug": "battle-of-the-rovers-22-march-2014",
    "title": "Battle of the Rovers - 22 March 2014",
    "date": "December 26, 2013",
    "excerpt": "Rovers get ready to rrrrrrrrrumble! Arravale Rovers are taking on the Galtee Rovers in a titanic battle to be named club champions. The rival rovers are currently undergoing 6 weeks intensive training to prepare for climbing through the ring. Be there to witmess the Battle of the Rovers on the 22nd of March at 7pm […]",
    "paragraphs": [
      "Rovers get ready to rrrrrrrrrumble! Arravale Rovers are taking on the Galtee Rovers in a titanic battle to be named club champions. The rival rovers are currently undergoing 6 weeks intensive training to prepare for climbing through the ring. Be there to witmess the Battle of the Rovers on the 22nd of March at 7pm in the Aherlow House Hotel. Tickets €20 and can be purchased from both clubs. For more information please email info@whitecollarboxing.org"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Rovers get ready to rrrrrrrrrumble! Arravale Rovers are taking on the Galtee Rovers in a titanic battle to be named club champions. The rival rovers are currently undergoing 6 weeks intensive training to prepare for climbing through the ring. Be there to witmess the Battle of the Rovers on the 22nd of March at 7pm in the Aherlow House Hotel. Tickets €20 and can be purchased from both clubs. For more information please email info@whitecollarboxing.org"
      },
      {
        "t": "img",
        "src": "/images/content/035a57f05cbc9cff73dd93223f29c32a.jpg",
        "alt": "Arravale"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "rag-rumble-30-april-2014",
      "title": "RAG Rumble - 30 April 2014"
    },
    "next": {
      "slug": "clash-without-the-ash-16-march-2014",
      "title": "Clash without the Ash - 16 March 2014"
    }
  },
  {
    "slug": "rag-rumble-30-april-2014",
    "title": "RAG Rumble - 30 April 2014",
    "date": "December 24, 2013",
    "excerpt": "St Patrick's College in association with whitecollarboxing.org presents the 'RAG RUMBLE' in Dandelion Nightclub at 9.30pm on Wednesday 30th April 2014. Punishment exacted will be like never before – so sit up straight and take notice as this show will be devastating! Who'll be saved by the bell?? Be there on the night to find […]",
    "paragraphs": [
      "St Patrick's College in association with whitecollarboxing.org presents the 'RAG RUMBLE' in Dandelion Nightclub at 9.30pm on Wednesday 30th April 2014. Punishment exacted will be like never before – so sit up straight and take notice as this show will be devastating! Who'll be saved by the bell?? Be there on the night to find out! Tickets are ONLY €8 and can be purchased from the SU Office or outside Java. Note: This is an over 18's event. I.D. will be required."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "St Patrick's College in association with whitecollarboxing.org presents the 'RAG RUMBLE' in Dandelion Nightclub at 9.30pm on Wednesday 30th April 2014. Punishment exacted will be like never before – so sit up straight and take notice as this show will be devastating! Who'll be saved by the bell?? Be there on the night to find out! Tickets are ONLY €8 and can be purchased from the SU Office or outside Java. Note: This is an over 18's event. I.D. will be required."
      },
      {
        "t": "img",
        "src": "/images/content/5c410165b53184551933089df1732ca6.jpg",
        "alt": "St pats web"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "big-fight-tiny-life-8-may-2014",
      "title": "Big Fight Tiny Life - 8 May 2014"
    },
    "next": {
      "slug": "battle-of-the-rovers-22-march-2014",
      "title": "Battle of the Rovers - 22 March 2014"
    }
  },
  {
    "slug": "big-fight-tiny-life-8-may-2014",
    "title": "Big Fight Tiny Life - 8 May 2014",
    "date": "December 20, 2013",
    "excerpt": "Always dreamt of stepping into the ring? Always wanted to tone and sculpt your body? Always felt like you could do more for a local charity? Then this is YOUR chance to fulfill a lifetime ambition and take part in the Tiny Life Big Fight, white collar boxing event. You will be guided by professional […]",
    "paragraphs": [
      "Always dreamt of stepping into the ring? Always wanted to tone and sculpt your body? Always felt like you could do more for a local charity? Then this is YOUR chance to fulfill a lifetime ambition and take part in the Tiny Life Big Fight, white collar boxing event.",
      "You will be guided by professional boxing coaches through an intensive 6 week training and conditioning programme twice weekly as you learn the fundamentals of boxing. You will be provided with all equipment (except mouth guard) and later in the programme, you will be matched up with a suitable opponent who you will fight on fight night.",
      "We will then bring the Glitz and Glamour of Las Vegas to your fight night where you will showcase your skills and techniques on the grand stage during a 3 x 1 minute rounds (for women) and 3 x 1 ½ minute rounds (for men). This really is a once in a lifetime experience that you and your family and friends will never forget.",
      "Fight night will be on Thursday 8th May 2014 at 7pm in La Mon Hotel & Country Club, Gransha. Training starts on Tuesday 1st of April in Monkstown BC Belfast and is every Tuesday and Thursday at 6.30pm.",
      "Boxers Commitment:-",
      "£50 registration fee and £300 sponsorship - we will provide you with fundraising ideas and sponsorship opportunities for your employer etc. Plus sell 10-15 tickets for fight night priced at £10 each."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Always dreamt of stepping into the ring? Always wanted to tone and sculpt your body? Always felt like you could do more for a local charity? Then this is YOUR chance to fulfill a lifetime ambition and take part in the Tiny Life Big Fight, white collar boxing event."
      },
      {
        "t": "p",
        "v": "You will be guided by professional boxing coaches through an intensive 6 week training and conditioning programme twice weekly as you learn the fundamentals of boxing. You will be provided with all equipment (except mouth guard) and later in the programme, you will be matched up with a suitable opponent who you will fight on fight night."
      },
      {
        "t": "p",
        "v": "We will then bring the Glitz and Glamour of Las Vegas to your fight night where you will showcase your skills and techniques on the grand stage during a 3 x 1 minute rounds (for women) and 3 x 1 ½ minute rounds (for men). This really is a once in a lifetime experience that you and your family and friends will never forget."
      },
      {
        "t": "p",
        "v": "Fight night will be on Thursday 8th May 2014 at 7pm in La Mon Hotel & Country Club, Gransha. Training starts on Tuesday 1st of April in Monkstown BC Belfast and is every Tuesday and Thursday at 6.30pm."
      },
      {
        "t": "p",
        "v": "Boxers Commitment:-"
      },
      {
        "t": "p",
        "v": "£50 registration fee and £300 sponsorship - we will provide you with fundraising ideas and sponsorship opportunities for your employer etc. Plus sell 10-15 tickets for fight night priced at £10 each."
      },
      {
        "t": "img",
        "src": "/images/content/f81da861090299faa411908991a4d71b.jpg",
        "alt": "Correct Flyer Poster"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "judgement-day-in-moneyreagh-15-may-2014",
      "title": "Judgement Day in Moneyreagh - 15 May 2014"
    },
    "next": {
      "slug": "rag-rumble-30-april-2014",
      "title": "RAG Rumble - 30 April 2014"
    }
  },
  {
    "slug": "judgement-day-in-moneyreagh-15-may-2014",
    "title": "Judgement Day in Moneyreagh - 15 May 2014",
    "date": "December 18, 2013",
    "excerpt": "Judgement Day is coming to Moneyreagh! Glenthoran Community Trust brings you a fight night you will never forget. Ain't gonna be no re-match. 12 contests and the headline act Brannigan v Beattie will commence at 7.00pm on Thursday 15th of May in the Le Mon Hotel in Moneyreagh, Belfast. Tickets are only £15 or (Table […]",
    "paragraphs": [
      "Judgement Day is coming to Moneyreagh! Glenthoran Community Trust brings you a fight night you will never forget. Ain't gonna be no re-match. 12 contests and the headline act Brannigan v Beattie will commence at 7.00pm on Thursday 15th of May in the Le Mon Hotel in Moneyreagh, Belfast. Tickets are only £15 or (Table of 10 £150) can be purchased via paypal on the GCT website www.GCTNI.com or by emailing info@GCTNI.com. This event is being held by Glenthoran Commubity Trust in association with Glenthoran Football Club, St. Francis Group and the chosen charity of SOS"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Judgement Day is coming to Moneyreagh! Glenthoran Community Trust brings you a fight night you will never forget. Ain't gonna be no re-match. 12 contests and the headline act Brannigan v Beattie will commence at 7.00pm on Thursday 15th of May in the Le Mon Hotel in Moneyreagh, Belfast. Tickets are only £15 or (Table of 10 £150) can be purchased via paypal on the GCT website www.GCTNI.com or by emailing info@GCTNI.com. This event is being held by Glenthoran Commubity Trust in association with Glenthoran Football Club, St. Francis Group and the chosen charity of SOS"
      },
      {
        "t": "img",
        "src": "/images/content/e518727220e130f7e16cc9d445b2eacc.jpg",
        "alt": "BOXING FLIER - PRINT VERSION"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "new-september-mixed-class",
      "title": "NEW September Mixed Class"
    },
    "next": {
      "slug": "big-fight-tiny-life-8-may-2014",
      "title": "Big Fight Tiny Life - 8 May 2014"
    }
  },
  {
    "slug": "new-september-mixed-class",
    "title": "NEW September Mixed Class",
    "date": "July 19, 2013",
    "excerpt": "Our 8 week mixed training programme kicks off on Monday, 9th September. We are putting particular emphasis on conditioning and weight loss. Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest You will be trained and inspired by our team of […]",
    "paragraphs": [
      "Our 8 week mixed training programme kicks off on Monday, 9th September. We are putting particular emphasis on conditioning and weight loss.",
      "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest",
      "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time.",
      "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am",
      "SIGN UP NOW",
      "The programme costs €300 but discounts are available for former participants and groups. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our 8 week mixed training programme kicks off on Monday, 9th September. We are putting particular emphasis on conditioning and weight loss."
      },
      {
        "t": "p",
        "v": "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest"
      },
      {
        "t": "p",
        "v": "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time."
      },
      {
        "t": "p",
        "v": "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am"
      },
      {
        "t": "p",
        "v": "SIGN UP NOW"
      },
      {
        "t": "p",
        "v": "The programme costs €300 but discounts are available for former participants and groups. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
      },
      {
        "t": "img",
        "src": "/images/content/20b345a6bdf97b2d6f6f50818444d3c9.jpg",
        "alt": "Boxing Comp"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "new-ladies-class",
      "title": "NEW Ladies September Class"
    },
    "next": {
      "slug": "judgement-day-in-moneyreagh-15-may-2014",
      "title": "Judgement Day in Moneyreagh - 15 May 2014"
    }
  },
  {
    "slug": "new-ladies-class",
    "title": "NEW Ladies September Class",
    "date": "July 19, 2013",
    "excerpt": "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class! Starting on Monday 9th of September this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the […]",
    "paragraphs": [
      "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class!",
      "Starting on Monday 9th of September this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin.",
      "SIGN UP NOW",
      "The programme costs €120. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class!"
      },
      {
        "t": "p",
        "v": "Starting on Monday 9th of September this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin."
      },
      {
        "t": "p",
        "v": "SIGN UP NOW"
      },
      {
        "t": "p",
        "v": "The programme costs €120. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org"
      },
      {
        "t": "img",
        "src": "/images/content/d5175c5e77947815dfb100e0acf84a03.jpg",
        "alt": "40"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "st-fechins-v-dreadnots-2-november-2013",
      "title": "St Fechins v Dreadnots - 2 November 2013"
    },
    "next": {
      "slug": "new-september-mixed-class",
      "title": "NEW September Mixed Class"
    }
  },
  {
    "slug": "st-fechins-v-dreadnots-2-november-2013",
    "title": "St Fechins v Dreadnots - 2 November 2013",
    "date": "May 25, 2013",
    "excerpt": "St Freckins take on the Dreadknots!! Be there on the 2nd of November in the City North Hotel at 7.30pm!! For tickets and more info contact Vinny on 087-9534484",
    "paragraphs": [
      "St Freckins take on the Dreadknots!!",
      "Be there on the 2nd of November in the City North Hotel at 7.30pm!!",
      "For tickets and more info contact Vinny on 087-9534484"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "St Freckins take on the Dreadknots!!"
      },
      {
        "t": "p",
        "v": "Be there on the 2nd of November in the City North Hotel at 7.30pm!!"
      },
      {
        "t": "p",
        "v": "For tickets and more info contact Vinny on 087-9534484"
      },
      {
        "t": "img",
        "src": "/images/content/576b8d4ed8b72198a4d49333e29b01c2.jpg",
        "alt": "St Feckins v Dreadknots jpeg"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "andy-lee-boxing-clinic",
      "title": "Andy Lee Boxing Clinic"
    },
    "next": {
      "slug": "new-ladies-class",
      "title": "NEW Ladies September Class"
    }
  },
  {
    "slug": "andy-lee-boxing-clinic",
    "title": "Andy Lee Boxing Clinic",
    "date": "May 10, 2013",
    "excerpt": "White Collar Boxing is proud to announce that we will be holding a Boxing Workshop with former Olympian and World Title contender Andy Lee on the 21st of May in the National Boxing Stadium from 7.30pm - 9pm. Taking you from amateur to pro with his top tips and individual advice - this is one […]",
    "paragraphs": [
      "White Collar Boxing is proud to announce that we will be holding a Boxing Workshop with former Olympian and World Title contender Andy Lee on the 21st of May in the National Boxing Stadium from 7.30pm - 9pm. Taking you from amateur to pro with his top tips and individual advice - this is one not to be missed! He will hold an intense 1 hour boxing clinic followed by individual boxing technique advice and he will also be giving an insight into the boxing industry and his career to help all our budding boxers out there! The session costs €30 and to reserve your place please email info@whitecollarboxing.org or contact Cathal on 087-8526323"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "White Collar Boxing is proud to announce that we will be holding a Boxing Workshop with former Olympian and World Title contender Andy Lee on the 21st of May in the National Boxing Stadium from 7.30pm - 9pm. Taking you from amateur to pro with his top tips and individual advice - this is one not to be missed! He will hold an intense 1 hour boxing clinic followed by individual boxing technique advice and he will also be giving an insight into the boxing industry and his career to help all our budding boxers out there! The session costs €30 and to reserve your place please email info@whitecollarboxing.org or contact Cathal on 087-8526323"
      },
      {
        "t": "img",
        "src": "/images/content/60515d170506022ed8dfb14e37ab1a48.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "rocky-road-to-fitness-boxing-bootcamp",
      "title": "Rocky Road to Fitness Boxing Bootcamp"
    },
    "next": {
      "slug": "st-fechins-v-dreadnots-2-november-2013",
      "title": "St Fechins v Dreadnots - 2 November 2013"
    }
  },
  {
    "slug": "rocky-road-to-fitness-boxing-bootcamp",
    "title": "Rocky Road to Fitness Boxing Bootcamp",
    "date": "May 7, 2013",
    "excerpt": "Want to get fighting fit this summer!?! Our Rocky Road to Fitness Boxing Bootcamp is Back!!! The programme consists of 8 weeks intensive training by our International and Olympic Coaches in the National Boxing Stadium on the South Circular Road in Dublin. Starting on Monday the 24th of June, training is every Monday and Wednesday […]",
    "paragraphs": [
      "Want to get fighting fit this summer!?! Our Rocky Road to Fitness Boxing Bootcamp is Back!!!",
      "The programme consists of 8 weeks intensive training by our International and Olympic Coaches in the National Boxing Stadium on the South Circular Road in Dublin. Starting on Monday the 24th of June, training is every Monday and Wednesday night at 7pm. There will be a mixture of indoor and outdoor training concentrating on boxing drills, technique and fitness.",
      "So fight the good fight this summer and join us on your rocky road to fitness. The programme costs €200 and includes 2 surprise adventure challenges and a nutrition talk by a top diet expert. Discounts are available for former participants and groups.",
      "Sign up today by contacting Cathal on +353 87 8526323 or email info@whitecollarboxing.org or reserve your place online",
      "Rocky IV: I guess what Im trying to say is, if I can change, and you can change, everybody can change"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Want to get fighting fit this summer!?! Our Rocky Road to Fitness Boxing Bootcamp is Back!!!"
      },
      {
        "t": "p",
        "v": "The programme consists of 8 weeks intensive training by our International and Olympic Coaches in the National Boxing Stadium on the South Circular Road in Dublin. Starting on Monday the 24th of June, training is every Monday and Wednesday night at 7pm. There will be a mixture of indoor and outdoor training concentrating on boxing drills, technique and fitness."
      },
      {
        "t": "p",
        "v": "So fight the good fight this summer and join us on your rocky road to fitness. The programme costs €200 and includes 2 surprise adventure challenges and a nutrition talk by a top diet expert. Discounts are available for former participants and groups."
      },
      {
        "t": "p",
        "v": "Sign up today by contacting Cathal on +353 87 8526323 or email info@whitecollarboxing.org or reserve your place online"
      },
      {
        "t": "p",
        "v": "Rocky IV: I guess what Im trying to say is, if I can change, and you can change, everybody can change"
      },
      {
        "t": "img",
        "src": "/images/content/a9a14809ea531502f785bd8c699d5533.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "heroes-2-6th-june-2013",
      "title": "Heroes 2 - 6 June 2013"
    },
    "next": {
      "slug": "andy-lee-boxing-clinic",
      "title": "Andy Lee Boxing Clinic"
    }
  },
  {
    "slug": "heroes-2-6th-june-2013",
    "title": "Heroes 2 - 6 June 2013",
    "date": "May 5, 2013",
    "excerpt": "White Collar Boxing is back in Belfast!!! From the Organiser's who brought you BBC \"Fight Club NI\",\"The Fight I II III IV\" and \"Heroes\" We are proud to present \"Heroes 2\" . We are offering you the unique experience of training like an Olympian while supporting a Charity close to you heart! We are looking […]",
    "paragraphs": [
      "White Collar Boxing is back in Belfast!!!",
      "From the Organiser's who brought you BBC \"Fight Club NI\",\"The Fight I II III IV\" and \"Heroes\"",
      "We are proud to present \"Heroes 2\" . We are offering you the unique experience of training like an Olympian while supporting a Charity close to you heart!",
      "We are looking for 30 brave individuals to take on the challenge and learn what it takes to climb through the ropes",
      "Training will take place in Monkstown Boxing Club starting Tuesday the 23rd of April. After the intensive training programme you will make your debut in front of a star studded audience in Belfasts Europa Hotel on June 6th"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "White Collar Boxing is back in Belfast!!!"
      },
      {
        "t": "p",
        "v": "From the Organiser's who brought you BBC \"Fight Club NI\",\"The Fight I II III IV\" and \"Heroes\""
      },
      {
        "t": "p",
        "v": "We are proud to present \"Heroes 2\" . We are offering you the unique experience of training like an Olympian while supporting a Charity close to you heart!"
      },
      {
        "t": "p",
        "v": "We are looking for 30 brave individuals to take on the challenge and learn what it takes to climb through the ropes"
      },
      {
        "t": "p",
        "v": "Training will take place in Monkstown Boxing Club starting Tuesday the 23rd of April. After the intensive training programme you will make your debut in front of a star studded audience in Belfasts Europa Hotel on June 6th"
      },
      {
        "t": "img",
        "src": "/images/content/889a9b373ec968ed850bbeb98bf8d708.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "battle-for-the-carers-12-july-2013",
      "title": "Battle for the Carers - 12 July 2013"
    },
    "next": {
      "slug": "rocky-road-to-fitness-boxing-bootcamp",
      "title": "Rocky Road to Fitness Boxing Bootcamp"
    }
  },
  {
    "slug": "battle-for-the-carers-12-july-2013",
    "title": "Battle for the Carers - 12 July 2013",
    "date": "May 3, 2013",
    "excerpt": "Sligo get Ready to Ruuummmble!!! White Collar Boxing fundraiser and The Carers Association Sligo are hosting 'Battle for the Carers' in the Radisson Blu Hotel in Ballincar, Co Sligo on the 12th of July at 7pm. 30 brave men and women will battle through an intensive six week training programme with the ultimate goal of […]",
    "paragraphs": [
      "Sligo get Ready to Ruuummmble!!! White Collar Boxing fundraiser and The Carers Association Sligo are hosting 'Battle for the Carers' in the Radisson Blu Hotel in Ballincar, Co Sligo on the 12th of July at 7pm. 30 brave men and women will battle through an intensive six week training programme with the ultimate goal of stepping into the ring to help raise funds for the local organisation. All proceeds from the night will provide family carers with much needed support. Tickets are only €15 and can be purchased from Jim and Loretta. For more information please contact them on 0719143123"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Sligo get Ready to Ruuummmble!!! White Collar Boxing fundraiser and The Carers Association Sligo are hosting 'Battle for the Carers' in the Radisson Blu Hotel in Ballincar, Co Sligo on the 12th of July at 7pm. 30 brave men and women will battle through an intensive six week training programme with the ultimate goal of stepping into the ring to help raise funds for the local organisation. All proceeds from the night will provide family carers with much needed support. Tickets are only €15 and can be purchased from Jim and Loretta. For more information please contact them on 0719143123"
      },
      {
        "t": "img",
        "src": "/images/content/d84968081026496aa56297517340857e.jpg",
        "alt": "Carers Poster Jpeg comp"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "the-pink-punch-up-19-july-2013",
      "title": "The Pink Punch Up - 19 July 2013"
    },
    "next": {
      "slug": "heroes-2-6th-june-2013",
      "title": "Heroes 2 - 6 June 2013"
    }
  },
  {
    "slug": "the-pink-punch-up-19-july-2013",
    "title": "The Pink Punch Up - 19 July 2013",
    "date": "May 2, 2013",
    "excerpt": "Get involved... Do It for Fun.. Do It for Fitness.. Do It for Charity... Do It to Fight Breast Cancer!! 30 Everyday Women have undertaken 6 weeks intensive training before they take to the Ring to Fight Against Breast Cancer! All In Aid Of Breast Cancer Ireland! This will be a fantastic night if entertainment […]",
    "paragraphs": [
      "Get involved... Do It for Fun.. Do It for Fitness.. Do It for Charity... Do It to Fight Breast Cancer!! 30 Everyday Women have undertaken 6 weeks intensive training before they take to the Ring to Fight Against Breast Cancer! All In Aid Of Breast Cancer Ireland! This will be a fantastic night if entertainment with 30 all women fight 4 gorgeous Ring Boys and an Amazing special guest performance from Male Pole Performer Marcin Miller!! Plus Club 92 Night Club After. For more information please contact info@whitecollarboxing.org"
    ],
    "image": "/images/featured/the-pink-punch-up-19-july-2013.jpg",
    "blocks": [
      {
        "t": "p",
        "v": "Get involved... Do It for Fun.. Do It for Fitness.. Do It for Charity... Do It to Fight Breast Cancer!! 30 Everyday Women have undertaken 6 weeks intensive training before they take to the Ring to Fight Against Breast Cancer! All In Aid Of Breast Cancer Ireland! This will be a fantastic night if entertainment with 30 all women fight 4 gorgeous Ring Boys and an Amazing special guest performance from Male Pole Performer Marcin Miller!! Plus Club 92 Night Club After. For more information please contact info@whitecollarboxing.org"
      },
      {
        "t": "img",
        "src": "/images/content/5d273cff5c4fb6b18873026ff13131c6.jpg",
        "alt": "Pink Punch up ticket jpeg"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "champion-for-children-13-september-2013",
      "title": "Champion for the Children - 13 September 2013"
    },
    "next": {
      "slug": "battle-for-the-carers-12-july-2013",
      "title": "Battle for the Carers - 12 July 2013"
    }
  },
  {
    "slug": "champion-for-children-13-september-2013",
    "title": "Champion for the Children - 13 September 2013",
    "date": "May 2, 2013",
    "excerpt": "Become a Champion for the Children attending Cork University Hospital by participating in a White Collar Boxing event to raise much-needed money for sick children. CUH Charity, in association with Highfield RFC in Cork, has launched a 'Champions for Children' ultimate White Collar Boxing event which will take place on the 13th of September. While […]",
    "paragraphs": [
      "Become a Champion for the Children attending Cork University Hospital by participating in a White Collar Boxing event to raise much-needed money for sick children.",
      "CUH Charity, in association with Highfield RFC in Cork, has launched a 'Champions for Children' ultimate White Collar Boxing event which will take place on the 13th of September.",
      "While Friday the 13th might be an unlucky day for some, participants and spectators alike are guaranteed a knock-out, action-packed night of excitement and entertainment during fight-night which will be held in the heart of Cork's social scene – Reardens of Washington Street.",
      "Males and females are being sought for the event which offers members of the public the unique opportunity to work with White Collar Boxing trainers over a six-week period , starting in July, before they step into the ring to battle it out over three rounds of boxing.",
      "According to Marie Watson, Children's Unit nurse, the recruitment is already going well with many people eager to sign up for the challenge will be as rewarding as it will be exciting.",
      "\"We already have 20 people signed up and we need more than 30 so we are doing well. We hope that people from all walks of life will get involved to support and raise money with the end goal of improving the care and facilities for sick children in CUH.\"",
      "Gethin Lewis of Highfield RFC said \"The hospital is our closest neighbour so the CUH Charity is not just a cause close to our hearts but it's close in proximity too. We've already got an overwhelming amount of support from our members and from the public so we are looking forward to the training sessions and of course the big fight night on September 13.\"",
      "The main event will consist of 15 fights with each contender paired up with an opponent of equal strength and agility.",
      "Participants over 18 years of age with a general level of fitness are welcome to sign up for the challenge.",
      "Spectators who purchase tickets for €20 will not only enjoy a night of nail-biting action and good humoured rivalry but there will also be food, a drinks promotion and entertainment on the night as well as free entry to Havana Browns.",
      "To sign-up or to purchase tickets for 'Champions for Children' White Collar Boxing event email info@cuhcharity.ie or highfieldrfc@gmail.com. Alternatively call the CUH Charity office on 021 4234529 or Highfield RFC on 021 4541293"
    ],
    "image": null,
    "blocks": [
      {
        "t": "img",
        "src": "/images/content/cb47d4f997a562b00fea5bef613c972a.jpg",
        "alt": "Image 1 comp"
      },
      {
        "t": "p",
        "v": "Become a Champion for the Children attending Cork University Hospital by participating in a White Collar Boxing event to raise much-needed money for sick children."
      },
      {
        "t": "p",
        "v": "CUH Charity, in association with Highfield RFC in Cork, has launched a 'Champions for Children' ultimate White Collar Boxing event which will take place on the 13th of September."
      },
      {
        "t": "p",
        "v": "While Friday the 13th might be an unlucky day for some, participants and spectators alike are guaranteed a knock-out, action-packed night of excitement and entertainment during fight-night which will be held in the heart of Cork's social scene – Reardens of Washington Street."
      },
      {
        "t": "p",
        "v": "Males and females are being sought for the event which offers members of the public the unique opportunity to work with White Collar Boxing trainers over a six-week period , starting in July, before they step into the ring to battle it out over three rounds of boxing."
      },
      {
        "t": "p",
        "v": "According to Marie Watson, Children's Unit nurse, the recruitment is already going well with many people eager to sign up for the challenge will be as rewarding as it will be exciting."
      },
      {
        "t": "p",
        "v": "\"We already have 20 people signed up and we need more than 30 so we are doing well. We hope that people from all walks of life will get involved to support and raise money with the end goal of improving the care and facilities for sick children in CUH.\""
      },
      {
        "t": "p",
        "v": "Gethin Lewis of Highfield RFC said \"The hospital is our closest neighbour so the CUH Charity is not just a cause close to our hearts but it's close in proximity too. We've already got an overwhelming amount of support from our members and from the public so we are looking forward to the training sessions and of course the big fight night on September 13.\""
      },
      {
        "t": "p",
        "v": "The main event will consist of 15 fights with each contender paired up with an opponent of equal strength and agility."
      },
      {
        "t": "p",
        "v": "Participants over 18 years of age with a general level of fitness are welcome to sign up for the challenge."
      },
      {
        "t": "p",
        "v": "Spectators who purchase tickets for €20 will not only enjoy a night of nail-biting action and good humoured rivalry but there will also be food, a drinks promotion and entertainment on the night as well as free entry to Havana Browns."
      },
      {
        "t": "p",
        "v": "To sign-up or to purchase tickets for 'Champions for Children' White Collar Boxing event email info@cuhcharity.ie or highfieldrfc@gmail.com. Alternatively call the CUH Charity office on 021 4234529 or Highfield RFC on 021 4541293"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "fight-for-life-16-august-2013",
      "title": "Fight for Life - 16 August 2013"
    },
    "next": {
      "slug": "the-pink-punch-up-19-july-2013",
      "title": "The Pink Punch Up - 19 July 2013"
    }
  },
  {
    "slug": "fight-for-life-16-august-2013",
    "title": "Fight for Life - 16 August 2013",
    "date": "May 2, 2013",
    "excerpt": "A fight like no other is coming to Tipperary. 30 boxers are putting everything on the line to raise money in aid of Cancer Research. They fight for themselves, they fight for their loved ones, they fight to find a cure, they fight for life. If you would like to support this great event then […]",
    "paragraphs": [
      "A fight like no other is coming to Tipperary. 30 boxers are putting everything on the line to raise money in aid of Cancer Research. They fight for themselves, they fight for their loved ones, they fight to find a cure, they fight for life. If you would like to support this great event then please purchase your tickets now for the Charity event of the year at the Ormonde Hotel on the 16th of August. Tickets cost €20 and doors open at 7.30pm for more information email info@whitecollarboxing.org"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "A fight like no other is coming to Tipperary. 30 boxers are putting everything on the line to raise money in aid of Cancer Research. They fight for themselves, they fight for their loved ones, they fight to find a cure, they fight for life. If you would like to support this great event then please purchase your tickets now for the Charity event of the year at the Ormonde Hotel on the 16th of August. Tickets cost €20 and doors open at 7.30pm for more information email info@whitecollarboxing.org"
      },
      {
        "t": "img",
        "src": "/images/content/19245e51bcd7de42868665667226b155.jpg",
        "alt": "Poster Jpeg"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "the-newbridge-knockout-14-september-2013",
      "title": "The Newbridge Knockout - 14 September 2013"
    },
    "next": {
      "slug": "champion-for-children-13-september-2013",
      "title": "Champion for the Children - 13 September 2013"
    }
  },
  {
    "slug": "the-newbridge-knockout-14-september-2013",
    "title": "The Newbridge Knockout - 14 September 2013",
    "date": "May 1, 2013",
    "excerpt": "Kildare get ready to rrrrrrumble!!! Newbridge RFC and the Military are taking each other on in a Charity Fight Night like no other. Army v Civilian - who will win??? There can be NO SURRENDER! Proceeds for this fight to the end are in aid of Newbridge RFC and the Curragh Lourdes Fund and takes […]",
    "paragraphs": [
      "Kildare get ready to rrrrrrumble!!! Newbridge RFC and the Military are taking each other on in a Charity Fight Night like no other. Army v Civilian - who will win??? There can be NO SURRENDER! Proceeds for this fight to the end are in aid of Newbridge RFC and the Curragh Lourdes Fund and takes place at 7.30pm on Saturday 14th September in Naas's exclusive Time Bar & Venue. Tickets for the Newbridge Knockout are €20 and can be purchased from Newbridge RFC by contacting 086-3986848."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Kildare get ready to rrrrrrumble!!! Newbridge RFC and the Military are taking each other on in a Charity Fight Night like no other. Army v Civilian - who will win??? There can be NO SURRENDER! Proceeds for this fight to the end are in aid of Newbridge RFC and the Curragh Lourdes Fund and takes place at 7.30pm on Saturday 14th September in Naas's exclusive Time Bar & Venue. Tickets for the Newbridge Knockout are €20 and can be purchased from Newbridge RFC by contacting 086-3986848."
      },
      {
        "t": "img",
        "src": "/images/content/805d0d5baedf201084a2cc85d1b3afbd.jpg",
        "alt": "Newbridge Correct Jpeg"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "tesco-time-5-october-2013",
      "title": "Tesco Time - 5 October 2013"
    },
    "next": {
      "slug": "fight-for-life-16-august-2013",
      "title": "Fight for Life - 16 August 2013"
    }
  },
  {
    "slug": "tesco-time-5-october-2013",
    "title": "Tesco Time - 5 October 2013",
    "date": "May 1, 2013",
    "excerpt": "The date is Saturday 5th of October, the location is Time Bar & Venue - the time Tesco Time!! This fight night organised by the staff of Tesco to raise money for Aware Charity promises to pack a punch. Tickets are €20 and include entry into the nightclub afterwards. For more details email info@whitecollarboxing.org",
    "paragraphs": [
      "The date is Saturday 5th of October, the location is Time Bar & Venue - the time Tesco Time!! This fight night organised by the staff of Tesco to raise money for Aware Charity promises to pack a punch. Tickets are €20 and include entry into the nightclub afterwards. For more details email info@whitecollarboxing.org"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The date is Saturday 5th of October, the location is Time Bar & Venue - the time Tesco Time!! This fight night organised by the staff of Tesco to raise money for Aware Charity promises to pack a punch. Tickets are €20 and include entry into the nightclub afterwards. For more details email info@whitecollarboxing.org"
      },
      {
        "t": "img",
        "src": "/images/content/e2c317a7b5d152668991583dccaddf7c.jpg",
        "alt": "Tesco Poster"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "dublin-15-fight-night-19-oct-2013",
      "title": "Dublin 15 Fight Night - 19 October 2013"
    },
    "next": {
      "slug": "the-newbridge-knockout-14-september-2013",
      "title": "The Newbridge Knockout - 14 September 2013"
    }
  },
  {
    "slug": "dublin-15-fight-night-19-oct-2013",
    "title": "Dublin 15 Fight Night - 19 October 2013",
    "date": "May 1, 2013",
    "excerpt": "St Brigid's GAA are taking on the rugby lads from Coolmine in the Dublin 15 Fight Night. Tickets are €20 and can be purchased from both clubs. It is taking place on Oct 19th in St Brigid's. Don't miss out and get your tickets today! For more information contact Billy on 087-4172333",
    "paragraphs": [
      "St Brigid's GAA are taking on the rugby lads from Coolmine in the Dublin 15 Fight Night. Tickets are €20 and can be purchased from both clubs. It is taking place on Oct 19th in St Brigid's. Don't miss out and get your tickets today! For more information contact Billy on 087-4172333"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "St Brigid's GAA are taking on the rugby lads from Coolmine in the Dublin 15 Fight Night. Tickets are €20 and can be purchased from both clubs. It is taking place on Oct 19th in St Brigid's. Don't miss out and get your tickets today! For more information contact Billy on 087-4172333"
      },
      {
        "t": "img",
        "src": "/images/content/6d5b2cbb60d95bb7249d166ba160d317.jpg",
        "alt": "St Brigids v coolmine jpeg"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "tiny-life-big-fight-5-november-2013",
      "title": "Tiny Life Big Fight - 5 November 2013"
    },
    "next": {
      "slug": "tesco-time-5-october-2013",
      "title": "Tesco Time - 5 October 2013"
    }
  },
  {
    "slug": "tiny-life-big-fight-5-november-2013",
    "title": "Tiny Life Big Fight - 5 November 2013",
    "date": "April 30, 2013",
    "excerpt": "Always dreamt of stepping into the ring? Always wanted to tone and sculpt your body? Always felt like you could do more for a local charity? Then this is YOUR chance to fulfil a lifetime ambition and take part in the Tiny Life Big Fight, white collar boxing event. You will be guided by professional […]",
    "paragraphs": [
      "Always dreamt of stepping into the ring? Always wanted to tone and sculpt your body? Always felt like you could do more for a local charity? Then this is YOUR chance to fulfil a lifetime ambition and take part in the Tiny Life Big Fight, white collar boxing event.",
      "You will be guided by professional boxing coaches through an intensive 6 week training and conditioning programme twice weekly as you learn the fundamentals of boxing. You will be provided with all equipment (except mouth guard) and later in the programme, you will be matched up with a suitable opponent who you will fight on fight night.",
      "We will then bring the Glitz and Glamour of Las Vegas to your fight night where you will showcase your skills and techniques on the grand stage during a 3 x 1 minute rounds (for women) and 3 x 1 ½ minute rounds (for men). This really is a once in a lifetime experience that you and your family and friends will never forget.",
      "Fight night will be on Tuesday 5th November 2013 at 7pm in La Mon Hotel & Country Club, Gransha.",
      "Boxers Commitment:-",
      "£50 registration fee and £300 sponsorship - we will provide you with fundraising ideas and sponsorship opportunities for your employer etc. Plus sell 10-15 tickets for fight night priced at £10 each.",
      "Are you brave enough?",
      "To register check out the Tinylife Flyer or call Samara on 90815050/ email: samara@tinylife.org.uk"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Always dreamt of stepping into the ring? Always wanted to tone and sculpt your body? Always felt like you could do more for a local charity? Then this is YOUR chance to fulfil a lifetime ambition and take part in the Tiny Life Big Fight, white collar boxing event."
      },
      {
        "t": "p",
        "v": "You will be guided by professional boxing coaches through an intensive 6 week training and conditioning programme twice weekly as you learn the fundamentals of boxing. You will be provided with all equipment (except mouth guard) and later in the programme, you will be matched up with a suitable opponent who you will fight on fight night."
      },
      {
        "t": "p",
        "v": "We will then bring the Glitz and Glamour of Las Vegas to your fight night where you will showcase your skills and techniques on the grand stage during a 3 x 1 minute rounds (for women) and 3 x 1 ½ minute rounds (for men). This really is a once in a lifetime experience that you and your family and friends will never forget."
      },
      {
        "t": "p",
        "v": "Fight night will be on Tuesday 5th November 2013 at 7pm in La Mon Hotel & Country Club, Gransha."
      },
      {
        "t": "p",
        "v": "Boxers Commitment:-"
      },
      {
        "t": "p",
        "v": "£50 registration fee and £300 sponsorship - we will provide you with fundraising ideas and sponsorship opportunities for your employer etc. Plus sell 10-15 tickets for fight night priced at £10 each."
      },
      {
        "t": "p",
        "v": "Are you brave enough?"
      },
      {
        "t": "p",
        "v": "To register check out the Tinylife Flyer or call Samara on 90815050/ email: samara@tinylife.org.uk"
      },
      {
        "t": "img",
        "src": "/images/content/41995226bb1704519898324b24dae0f3.jpg",
        "alt": "samara 2"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "the-trilogy-3-9-november-2013",
      "title": "The Trilogy 3 - 9 November 2013"
    },
    "next": {
      "slug": "dublin-15-fight-night-19-oct-2013",
      "title": "Dublin 15 Fight Night - 19 October 2013"
    }
  },
  {
    "slug": "the-trilogy-3-9-november-2013",
    "title": "The Trilogy 3 - 9 November 2013",
    "date": "April 30, 2013",
    "excerpt": "White Collar Boxing is coming to Louth in what promises to be a huge fundraiser for the Ardee St Mary's GFC. On Saturday 9th November in the Ardee Parish Centre at 7.30pm the newly trained White Collar Boxers will be anxiously waiting to climb in to the ring for their moment of glory! If you […]",
    "paragraphs": [
      "White Collar Boxing is coming to Louth in what promises to be a huge fundraiser for the Ardee St Mary's GFC. On Saturday 9th November in the Ardee Parish Centre at 7.30pm the newly trained White Collar Boxers will be anxiously waiting to climb in to the ring for their moment of glory! If you would like to support the 'The Trilogy 3' and witness the fight of your life, then contact Mark 087-1194839. Tickets €20"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "White Collar Boxing is coming to Louth in what promises to be a huge fundraiser for the Ardee St Mary's GFC. On Saturday 9th November in the Ardee Parish Centre at 7.30pm the newly trained White Collar Boxers will be anxiously waiting to climb in to the ring for their moment of glory! If you would like to support the 'The Trilogy 3' and witness the fight of your life, then contact Mark 087-1194839. Tickets €20"
      },
      {
        "t": "img",
        "src": "/images/content/bdbe4857cfb5765fdf4a383fae72c83c.jpg",
        "alt": "Layout 1"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "knockout-9-november-2013",
      "title": "Knockout - 9 November 2013"
    },
    "next": {
      "slug": "tiny-life-big-fight-5-november-2013",
      "title": "Tiny Life Big Fight - 5 November 2013"
    }
  },
  {
    "slug": "knockout-9-november-2013",
    "title": "Knockout - 9 November 2013",
    "date": "April 30, 2013",
    "excerpt": "Dundalk get Ready to Rrrrrrrumble! Inniskeen Ladies GAA are climbing into the ring in a fight night like no other. The ladies are fighting to raise funds for the Carickmacross Cancer Society. The date is Saturday 9th November and the venue is the Oriel Park in Dundalk. Do you dare?? Show starts @ 8pm and […]",
    "paragraphs": [
      "Dundalk get Ready to Rrrrrrrumble! Inniskeen Ladies GAA are climbing into the ring in a fight night like no other. The ladies are fighting to raise funds for the Carickmacross Cancer Society.",
      "The date is Saturday 9th November and the venue is the Oriel Park in Dundalk. Do you dare?? Show starts @ 8pm and doors open @ 7.15pm. Ticket are €10 and VIP tickets are €25 each. For more information email info@whitecollarboxing.org"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Dundalk get Ready to Rrrrrrrumble! Inniskeen Ladies GAA are climbing into the ring in a fight night like no other. The ladies are fighting to raise funds for the Carickmacross Cancer Society."
      },
      {
        "t": "p",
        "v": "The date is Saturday 9th November and the venue is the Oriel Park in Dundalk. Do you dare?? Show starts @ 8pm and doors open @ 7.15pm. Ticket are €10 and VIP tickets are €25 each. For more information email info@whitecollarboxing.org"
      },
      {
        "t": "img",
        "src": "/images/content/6a37b5eff78cccb7dacb579fd934b61c.jpg",
        "alt": "knockout poster 2"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "oraghallaighs-v-newtown-blues-16-november-2013",
      "title": "O'Raghallaighs v Newtown Blues 16 November 2013"
    },
    "next": {
      "slug": "the-trilogy-3-9-november-2013",
      "title": "The Trilogy 3 - 9 November 2013"
    }
  },
  {
    "slug": "oraghallaighs-v-newtown-blues-16-november-2013",
    "title": "O'Raghallaighs v Newtown Blues 16 November 2013",
    "date": "April 29, 2013",
    "excerpt": "Let's get ready to rrrrrrumble!! O'Rallaighs are taking on Newtown Blues in a fight night like no other. Which club will come out on top and be crowned champions!?! All boxers are climbing in to the ring after undergoing 6 weeks of intense training to participate in a fight night to rasie funds for their […]",
    "paragraphs": [
      "Let's get ready to rrrrrrumble!! O'Rallaighs are taking on Newtown Blues in a fight night like no other. Which club will come out on top and be crowned champions!?! All boxers are climbing in to the ring after undergoing 6 weeks of intense training to participate in a fight night to rasie funds for their clubs but they need your support. The venue is O'Rallaigh's Clubrooms, on Sat Nov 16th at 7.30pm - tickets are only €20 and can be purchased from all boxers and club."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Let's get ready to rrrrrrumble!! O'Rallaighs are taking on Newtown Blues in a fight night like no other. Which club will come out on top and be crowned champions!?! All boxers are climbing in to the ring after undergoing 6 weeks of intense training to participate in a fight night to rasie funds for their clubs but they need your support. The venue is O'Rallaigh's Clubrooms, on Sat Nov 16th at 7.30pm - tickets are only €20 and can be purchased from all boxers and club."
      },
      {
        "t": "img",
        "src": "/images/content/56e2ea1bb7095d9f4af979987d96093f.jpg",
        "alt": "O'Rallaighs v Newtown Blues"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "the-ultimate-fight-night-donoughmore-22-november-2013",
      "title": "The Ultimate Fight Night Donoughmore - 22 November 2013"
    },
    "next": {
      "slug": "knockout-9-november-2013",
      "title": "Knockout - 9 November 2013"
    }
  },
  {
    "slug": "the-ultimate-fight-night-donoughmore-22-november-2013",
    "title": "The Ultimate Fight Night Donoughmore - 22 November 2013",
    "date": "March 10, 2013",
    "excerpt": "The Ultimate Fight Night is coming to Donoughmore. On Friday 22nd of November at 7pm, madness will descend. A fundraising night for the local GAA and GFC, this promises to be a fight that Donoughmore won't live to regret. However you might if you don't get your tickets now! Adult tickets are €20 and Child […]",
    "paragraphs": [
      "The Ultimate Fight Night is coming to Donoughmore. On Friday 22nd of November at 7pm, madness will descend. A fundraising night for the local GAA and GFC, this promises to be a fight that Donoughmore won't live to regret. However you might if you don't get your tickets now! Adult tickets are €20 and Child tickets are €10. For more info please contact Martin on 087-2674943"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The Ultimate Fight Night is coming to Donoughmore. On Friday 22nd of November at 7pm, madness will descend. A fundraising night for the local GAA and GFC, this promises to be a fight that Donoughmore won't live to regret. However you might if you don't get your tickets now! Adult tickets are €20 and Child tickets are €10. For more info please contact Martin on 087-2674943"
      },
      {
        "t": "img",
        "src": "/images/content/8152790582d7f2646f35e2a4b7ea97fe.jpg",
        "alt": "The Ultimate Fight Night jpeg web"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "armagh-geddon-23-nov-2013",
      "title": "Armagh-geddon - 23 November 2013"
    },
    "next": {
      "slug": "oraghallaighs-v-newtown-blues-16-november-2013",
      "title": "O'Raghallaighs v Newtown Blues 16 November 2013"
    }
  },
  {
    "slug": "armagh-geddon-23-nov-2013",
    "title": "Armagh-geddon - 23 November 2013",
    "date": "March 9, 2013",
    "excerpt": "Armagh-geddon!! Co. Armagh companies are going head to head in battle in the biggest corporate event ever to hit the City Whitecollarboxing.org are collaborating with Philip White Tyres to bring you; 'Armagh-geddon, Company Battle'. Employees from local businesses and local sports personalities (Rugby, GAA) are pitched together in an epic boxing event in order to […]",
    "paragraphs": [
      "Armagh-geddon!!",
      "Co. Armagh companies are going head to head in battle in the biggest corporate event ever to hit the City",
      "Whitecollarboxing.org are collaborating with Philip White Tyres to bring you; 'Armagh-geddon, Company Battle'. Employees from local businesses and local sports personalities (Rugby, GAA) are pitched together in an epic boxing event in order to raise funds the Northern Ireland Children's Hospice.",
      "To celebrate this unique event a launch night in the Armagh City Hotel will be held where players will be weighed in and face each other for the first time before commencing training on TBC.",
      "To be crowned company champion, 24 brave men and women are putting it all on the line and are undertaking an intensive 6 week training programme that will see them go from boxing amateur to pro when they get the ultimate opportunity to compete in a boxing ring on Saturday 23rd November in the Armagh City Hotel at 7.30pm.",
      "Former Olympic Boxer, Cathal O'Grady of whitecollarboxing.org is overwhelmed by the enthusiasm and interest in this event. Both clubs are delighted with the generosity that has been shown them so far by local companies and individuals in support of the event. Each participant needs an entry fee of £50 plus £200 sponsorship from the company. This will give your company 2 free tickets, 2 month exposure in the local papers running up to the event and great exposure on the night with company name on screens and boxers wearing the name on vests. If you are interested in sponsorship in the event please contact Liam White on +44 7725705418 or Philip White on +44 7808093333.",
      "All the proceeds from this show will go towards the Northern Ireland Children Hospice. Tickets are £20 stg or a ring side table of £300 for ten people with food can be purchased from the Armagh City Hotel."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Armagh-geddon!!"
      },
      {
        "t": "p",
        "v": "Co. Armagh companies are going head to head in battle in the biggest corporate event ever to hit the City"
      },
      {
        "t": "p",
        "v": "Whitecollarboxing.org are collaborating with Philip White Tyres to bring you; 'Armagh-geddon, Company Battle'. Employees from local businesses and local sports personalities (Rugby, GAA) are pitched together in an epic boxing event in order to raise funds the Northern Ireland Children's Hospice."
      },
      {
        "t": "p",
        "v": "To celebrate this unique event a launch night in the Armagh City Hotel will be held where players will be weighed in and face each other for the first time before commencing training on TBC."
      },
      {
        "t": "p",
        "v": "To be crowned company champion, 24 brave men and women are putting it all on the line and are undertaking an intensive 6 week training programme that will see them go from boxing amateur to pro when they get the ultimate opportunity to compete in a boxing ring on Saturday 23rd November in the Armagh City Hotel at 7.30pm."
      },
      {
        "t": "p",
        "v": "Former Olympic Boxer, Cathal O'Grady of whitecollarboxing.org is overwhelmed by the enthusiasm and interest in this event. Both clubs are delighted with the generosity that has been shown them so far by local companies and individuals in support of the event. Each participant needs an entry fee of £50 plus £200 sponsorship from the company. This will give your company 2 free tickets, 2 month exposure in the local papers running up to the event and great exposure on the night with company name on screens and boxers wearing the name on vests. If you are interested in sponsorship in the event please contact Liam White on +44 7725705418 or Philip White on +44 7808093333."
      },
      {
        "t": "p",
        "v": "All the proceeds from this show will go towards the Northern Ireland Children Hospice. Tickets are £20 stg or a ring side table of £300 for ten people with food can be purchased from the Armagh City Hotel."
      },
      {
        "t": "img",
        "src": "/images/content/169186add70249a3cf70f402b88086c2.jpg",
        "alt": "Armagh FINALjpg comp"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "swords-pavilions-fight-halloween-party-27-october-2013",
      "title": "Swords Pavilions Fight & Halloween Party - 27 October 2013"
    },
    "next": {
      "slug": "the-ultimate-fight-night-donoughmore-22-november-2013",
      "title": "The Ultimate Fight Night Donoughmore - 22 November 2013"
    }
  },
  {
    "slug": "swords-pavilions-fight-halloween-party-27-october-2013",
    "title": "Swords Pavilions Fight & Halloween Party - 27 October 2013",
    "date": "March 9, 2013",
    "excerpt": "On Sunday 27th of October, employees from the Swords Pavillions are climbing in to the ring in the Wright Venue at 7.30pm to raise vital funds for the Jack & Jill Foundation. They need your support so please head along. Tickets only €20 and can be purchased from any of the participants and also on […]",
    "paragraphs": [
      "On Sunday 27th of October, employees from the Swords Pavillions are climbing in to the ring in the Wright Venue at 7.30pm to raise vital funds for the Jack & Jill Foundation. They need your support so please head along. Tickets only €20 and can be purchased from any of the participants and also on the door. This not only gaurantees you entry into the fight but also into the spooktacular Halloween afterparty!! For more details please email info@whitecollarboxing.org"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "On Sunday 27th of October, employees from the Swords Pavillions are climbing in to the ring in the Wright Venue at 7.30pm to raise vital funds for the Jack & Jill Foundation. They need your support so please head along. Tickets only €20 and can be purchased from any of the participants and also on the door. This not only gaurantees you entry into the fight but also into the spooktacular Halloween afterparty!! For more details please email info@whitecollarboxing.org"
      },
      {
        "t": "img",
        "src": "/images/content/f249048fe4aa28d5b5d50c57c5e550e0.jpg",
        "alt": "Swords Pav Poster"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "the-dandelion-dust-up-29-november-2013",
      "title": "The Dandelion Dust Up - 29 November 2013"
    },
    "next": {
      "slug": "armagh-geddon-23-nov-2013",
      "title": "Armagh-geddon - 23 November 2013"
    }
  },
  {
    "slug": "the-dandelion-dust-up-29-november-2013",
    "title": "The Dandelion Dust Up - 29 November 2013",
    "date": "March 8, 2013",
    "excerpt": "White Collar Boxing is coming to Dublin City Centre!!! \"The Dandelion Dust Up!!\" - Friday 29th November 2013 Fighters Wanted!! In aid of the Irish Motor Neurone Disease Association. Men and women of all ages and fitness levels needed to commit to 8 weeks of intensive boxing training by the best in the business in […]",
    "paragraphs": [
      "White Collar Boxing is coming to Dublin City Centre!!! \"The Dandelion Dust Up!!\" - Friday 29th November 2013",
      "Fighters Wanted!! In aid of the Irish Motor Neurone Disease Association. Men and women of all ages and fitness levels needed to commit to 8 weeks of intensive boxing training by the best in the business in the High Performance Gym at the National Boxing Stadium.",
      "No previous boxing experience necessary; the training will ensure you are ready to step into the ring on Fight Night!",
      "Places are limited - Email or call 01 873 0422 to secure yours Fundraising & ticket sales is required by all participants."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "White Collar Boxing is coming to Dublin City Centre!!! \"The Dandelion Dust Up!!\" - Friday 29th November 2013"
      },
      {
        "t": "p",
        "v": "Fighters Wanted!! In aid of the Irish Motor Neurone Disease Association. Men and women of all ages and fitness levels needed to commit to 8 weeks of intensive boxing training by the best in the business in the High Performance Gym at the National Boxing Stadium."
      },
      {
        "t": "p",
        "v": "No previous boxing experience necessary; the training will ensure you are ready to step into the ring on Fight Night!"
      },
      {
        "t": "p",
        "v": "Places are limited - Email or call 01 873 0422 to secure yours Fundraising & ticket sales is required by all participants."
      },
      {
        "t": "img",
        "src": "/images/content/7d44b7682615fa7e5c3c825481787935.jpg",
        "alt": "IMNDA Jpeg"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "act-for-meningitis-fight-night-30-november-2013",
      "title": "Act for Meningitis Fight Night - 30 November 2013"
    },
    "next": {
      "slug": "swords-pavilions-fight-halloween-party-27-october-2013",
      "title": "Swords Pavilions Fight & Halloween Party - 27 October 2013"
    }
  },
  {
    "slug": "act-for-meningitis-fight-night-30-november-2013",
    "title": "Act for Meningitis Fight Night - 30 November 2013",
    "date": "March 8, 2013",
    "excerpt": "ACT for Meningitis is a non -profit organisation based in Galway, Ireland. It was established in 2011 by Siobhán and Noel Carroll, who in 2008 lost their precious daughter Aoibhe – aged 4- to Meningitis. Since losing Aoibhe, Siobhán and Noel feel that there is an urgent need to increase awareness and educate people of […]",
    "paragraphs": [
      "ACT for Meningitis is a non -profit organisation based in Galway, Ireland. It was established in 2011 by Siobhán and Noel Carroll, who in 2008 lost their precious daughter Aoibhe – aged 4- to Meningitis. Since losing Aoibhe, Siobhán and Noel feel that there is an urgent need to increase awareness and educate people of the signs and symptoms of Meningitis. To help raise funds for this amazing charity, they are holding their very own fight night on Saturday 30th of November at 7.30pm on in the Sports Hall in Athlone IT. Tickets are €15 and can be purchased at Athlone Town Centre and The Bounty. Please support by getting your ticket today."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "ACT for Meningitis is a non -profit organisation based in Galway, Ireland. It was established in 2011 by Siobhán and Noel Carroll, who in 2008 lost their precious daughter Aoibhe – aged 4- to Meningitis. Since losing Aoibhe, Siobhán and Noel feel that there is an urgent need to increase awareness and educate people of the signs and symptoms of Meningitis. To help raise funds for this amazing charity, they are holding their very own fight night on Saturday 30th of November at 7.30pm on in the Sports Hall in Athlone IT. Tickets are €15 and can be purchased at Athlone Town Centre and The Bounty. Please support by getting your ticket today."
      },
      {
        "t": "img",
        "src": "/images/content/a836636bb1dfc20ba0a94996a6896e45.jpg",
        "alt": "fight night poster"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "christmas-punch-up-28-december-2013",
      "title": "Christmas Punch Up - 28 December 2013"
    },
    "next": {
      "slug": "the-dandelion-dust-up-29-november-2013",
      "title": "The Dandelion Dust Up - 29 November 2013"
    }
  },
  {
    "slug": "christmas-punch-up-28-december-2013",
    "title": "Christmas Punch Up - 28 December 2013",
    "date": "March 7, 2013",
    "excerpt": "The festive season has turned fight season as Broadford take on Clogherinkoe in a Christmas Punch Up like no other! This event is not to be missed - taking place on the 28th December 2013. For tickets please contact clubs or Sarah on 087-6772398",
    "paragraphs": [
      "The festive season has turned fight season as Broadford take on Clogherinkoe in a Christmas Punch Up like no other! This event is not to be missed - taking place on the 28th December 2013. For tickets please contact clubs or Sarah on 087-6772398"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The festive season has turned fight season as Broadford take on Clogherinkoe in a Christmas Punch Up like no other! This event is not to be missed - taking place on the 28th December 2013. For tickets please contact clubs or Sarah on 087-6772398"
      },
      {
        "t": "img",
        "src": "/images/content/4e678b478a201136779a68a3a0dedae5.jpg",
        "alt": "Christmas Punch Up"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "loughrea-christmas-punch-up-28-december-2013",
      "title": "Loughrea Christmas Punch Up - 28 December 2013"
    },
    "next": {
      "slug": "act-for-meningitis-fight-night-30-november-2013",
      "title": "Act for Meningitis Fight Night - 30 November 2013"
    }
  },
  {
    "slug": "loughrea-christmas-punch-up-28-december-2013",
    "title": "Loughrea Christmas Punch Up - 28 December 2013",
    "date": "March 7, 2013",
    "excerpt": "",
    "paragraphs": [],
    "image": null,
    "blocks": [
      {
        "t": "img",
        "src": "/images/content/cbf57b4208bea9dc40b96e7698ce6c9f.jpg",
        "alt": "POSTER FINAL"
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "april-mixed-class-2013",
      "title": "April Mixed Class 2013"
    },
    "next": {
      "slug": "christmas-punch-up-28-december-2013",
      "title": "Christmas Punch Up - 28 December 2013"
    }
  },
  {
    "slug": "april-mixed-class-2013",
    "title": "April Mixed Class 2013",
    "date": "March 1, 2013",
    "excerpt": "Our 8 week mixed training programme kicks off on Monday, 15th April. We are putting particular emphasis on conditioning and weight loss. Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest You will be trained and inspired by our team of […]",
    "paragraphs": [
      "Our 8 week mixed training programme kicks off on Monday, 15th April. We are putting particular emphasis on conditioning and weight loss.",
      "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest",
      "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time.",
      "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am",
      "The programme costs €300 but discounts are available for former participants and groups. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information or sign up here"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our 8 week mixed training programme kicks off on Monday, 15th April. We are putting particular emphasis on conditioning and weight loss."
      },
      {
        "t": "p",
        "v": "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest"
      },
      {
        "t": "p",
        "v": "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time."
      },
      {
        "t": "p",
        "v": "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am"
      },
      {
        "t": "p",
        "v": "The programme costs €300 but discounts are available for former participants and groups. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information or sign up here"
      },
      {
        "t": "img",
        "src": "/images/content/6a04e89131da201b4851b14a05f896c2.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "april-ladies-class-2013",
      "title": "April Ladies Class 2013"
    },
    "next": {
      "slug": "loughrea-christmas-punch-up-28-december-2013",
      "title": "Loughrea Christmas Punch Up - 28 December 2013"
    }
  },
  {
    "slug": "april-ladies-class-2013",
    "title": "April Ladies Class 2013",
    "date": "February 28, 2013",
    "excerpt": "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class! Starting on Monday 15th of April, this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the […]",
    "paragraphs": [
      "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class!",
      "Starting on Monday 15th of April, this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin.",
      "The programme costs €120. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. Sign up Here... Or find us on Facebook:www.facebook.com/whitecollarboxing"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class!"
      },
      {
        "t": "p",
        "v": "Starting on Monday 15th of April, this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin."
      },
      {
        "t": "p",
        "v": "The programme costs €120. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. Sign up Here... Or find us on Facebook:www.facebook.com/whitecollarboxing"
      },
      {
        "t": "img",
        "src": "/images/content/9bf35aac34ce50c46a583b645474590c.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "new-advanced-boxing-with-nicolas-cruz",
      "title": "New Advanced Boxing with Nicolas Cruz!"
    },
    "next": {
      "slug": "april-mixed-class-2013",
      "title": "April Mixed Class 2013"
    }
  },
  {
    "slug": "new-advanced-boxing-with-nicolas-cruz",
    "title": "New Advanced Boxing with Nicolas Cruz!",
    "date": "February 15, 2013",
    "excerpt": "Advanced Boxing with Nicolas Cruz! To take part in this exciting course with the Master of Boxing himself you need to have a good foundation in boxing. Throughout the course Nicholas will identify your strengths and weaknesses and work with you to make you a better boxer.He will also be concentrating on advance combinations, padwork […]",
    "paragraphs": [
      "Advanced Boxing with Nicolas Cruz! To take part in this exciting course with the Master of Boxing himself you need to have a good foundation in boxing. Throughout the course Nicholas will identify your strengths and weaknesses and work with you to make you a better boxer.He will also be concentrating on advance combinations, padwork and technique. Class is every Tuesday evening at 8.30pm in the National Boxing Stadium commencing on March 12th. Email info@whitecollarboxing.org to register your interest now!! Classes are once a week for 8 weeks at €120. Sign Up Here"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Advanced Boxing with Nicolas Cruz! To take part in this exciting course with the Master of Boxing himself you need to have a good foundation in boxing. Throughout the course Nicholas will identify your strengths and weaknesses and work with you to make you a better boxer.He will also be concentrating on advance combinations, padwork and technique. Class is every Tuesday evening at 8.30pm in the National Boxing Stadium commencing on March 12th. Email info@whitecollarboxing.org to register your interest now!! Classes are once a week for 8 weeks at €120. Sign Up Here"
      },
      {
        "t": "img",
        "src": "/images/content/ce878da073dddf729653d7732e4803ae.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "new-ashtanga-yoga-with-nicolas-cruz",
      "title": "NEW Ashtanga Yoga with Nicolas Cruz!"
    },
    "next": {
      "slug": "april-ladies-class-2013",
      "title": "April Ladies Class 2013"
    }
  },
  {
    "slug": "new-ashtanga-yoga-with-nicolas-cruz",
    "title": "NEW Ashtanga Yoga with Nicolas Cruz!",
    "date": "February 15, 2013",
    "excerpt": "NEW Ashtanga Yoga with Nicolas Cruz! This dynamic form of Yoga works to strengthen and realign the body and is the perfect accompaniment for boxing. Working on your core and balance. Also known as power yoga, this form of yoga is a whole body workout, focusing on flexibility, toning, strength building, and functional movements and […]",
    "paragraphs": [
      "NEW Ashtanga Yoga with Nicolas Cruz! This dynamic form of Yoga works to strengthen and realign the body and is the perfect accompaniment for boxing. Working on your core and balance. Also known as power yoga, this form of yoga is a whole body workout, focusing on flexibility, toning, strength building, and functional movements and also elicits properties of what a good cardio session can do.Class is every Thursday evening at 8.30pm in the National Boxing Stadium commencing on March 14th. Email info@whitecollarboxing.org to register your interest now!! Class is once a week for 8 weeks at €120 Sign Up Here",
      "/*"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "NEW Ashtanga Yoga with Nicolas Cruz! This dynamic form of Yoga works to strengthen and realign the body and is the perfect accompaniment for boxing. Working on your core and balance. Also known as power yoga, this form of yoga is a whole body workout, focusing on flexibility, toning, strength building, and functional movements and also elicits properties of what a good cardio session can do.Class is every Thursday evening at 8.30pm in the National Boxing Stadium commencing on March 14th. Email info@whitecollarboxing.org to register your interest now!! Class is once a week for 8 weeks at €120 Sign Up Here"
      },
      {
        "t": "img",
        "src": "/images/content/11eed6e7a662a177fc659b41ae6e8223.jpg",
        "alt": ""
      },
      {
        "t": "p",
        "v": "/*"
      },
      {
        "t": "img",
        "src": "//www.googleadservices.com/pagead/conversion/1009613508/?value=0&amp;label=nlw4CJyk8AQQxPW14QM&amp;guid=ON&amp;script=0",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "the-clash-without-the-ash-15th-february-2013",
      "title": "The Clash Without the Ash - 15th February 2013"
    },
    "next": {
      "slug": "new-advanced-boxing-with-nicolas-cruz",
      "title": "New Advanced Boxing with Nicolas Cruz!"
    }
  },
  {
    "slug": "the-clash-without-the-ash-15th-february-2013",
    "title": "The Clash Without the Ash - 15th February 2013",
    "date": "January 5, 2013",
    "excerpt": "The Night - 15th of February, 2013 The Venue - The Templemore Arms Hotel The Event - JK Brackens vs Loughmore/Castleiney 15 vs 15 in single combat in the most anticpated clash ever between these two clubs. Get your tickets now! Contact info@whitecollarboxing.org for more info",
    "paragraphs": [
      "The Night - 15th of February, 2013",
      "The Venue - The Templemore Arms Hotel",
      "The Event - JK Brackens vs Loughmore/Castleiney 15 vs 15 in single combat in the most anticpated clash ever between these two clubs.",
      "Get your tickets now! Contact info@whitecollarboxing.org for more info"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The Night - 15th of February, 2013"
      },
      {
        "t": "p",
        "v": "The Venue - The Templemore Arms Hotel"
      },
      {
        "t": "p",
        "v": "The Event - JK Brackens vs Loughmore/Castleiney 15 vs 15 in single combat in the most anticpated clash ever between these two clubs."
      },
      {
        "t": "p",
        "v": "Get your tickets now! Contact info@whitecollarboxing.org for more info"
      },
      {
        "t": "img",
        "src": "/images/content/21495e980f55cd83a1dbeb8877478968.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "the-ballroom-buts-up-16th-february-2013",
      "title": "The Ballroom Bust Up - 16th February 2013"
    },
    "next": {
      "slug": "new-ashtanga-yoga-with-nicolas-cruz",
      "title": "NEW Ashtanga Yoga with Nicolas Cruz!"
    }
  },
  {
    "slug": "the-ballroom-buts-up-16th-february-2013",
    "title": "The Ballroom Bust Up - 16th February 2013",
    "date": "January 5, 2013",
    "excerpt": "The Ballroom Bust Up , 16th February 2013 Knockvilla Kickhams are taking on Clonoulty Rossmore in a battle of the titans that Tipperary hasnt seen before. Both clubs are exchanging hurls for boxing gloves as players climb into the ring for the first time to raise funds for their clubs. The Bust Up will bring […]",
    "paragraphs": [
      "The Ballroom Bust Up , 16th February 2013",
      "Knockvilla Kickhams are taking on Clonoulty Rossmore in a battle of the titans that Tipperary hasnt seen before. Both clubs are exchanging hurls for boxing gloves as players climb into the ring for the first time to raise funds for their clubs. The Bust Up will bring the Ballroom down so if you want to witness the fight night of the county then get your tickets now admission €20 to the Dundrum House Hotel at 7.30pm. Contact info@whitecollarboxing.org for more information"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The Ballroom Bust Up , 16th February 2013"
      },
      {
        "t": "p",
        "v": "Knockvilla Kickhams are taking on Clonoulty Rossmore in a battle of the titans that Tipperary hasnt seen before. Both clubs are exchanging hurls for boxing gloves as players climb into the ring for the first time to raise funds for their clubs. The Bust Up will bring the Ballroom down so if you want to witness the fight night of the county then get your tickets now admission €20 to the Dundrum House Hotel at 7.30pm. Contact info@whitecollarboxing.org for more information"
      },
      {
        "t": "img",
        "src": "/images/content/8bc7b79fce79b184f491ed96ed3d139d.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "new-8pm-mixed-january-class",
      "title": "NEW 8pm January Mixed Class"
    },
    "next": {
      "slug": "the-clash-without-the-ash-15th-february-2013",
      "title": "The Clash Without the Ash - 15th February 2013"
    }
  },
  {
    "slug": "new-8pm-mixed-january-class",
    "title": "NEW 8pm January Mixed Class",
    "date": "January 4, 2013",
    "excerpt": "Due to unprecedented demand for our 7pm class we now have an extra mixed class running at 8pm!!! Limited time for sign up ,so if you are interested in training in the home of the Irish Olympians and getting your chance to climb into the boxing ring for your very own fight night then email […]",
    "paragraphs": [
      "Due to unprecedented demand for our 7pm class we now have an extra mixed class running at 8pm!!! Limited time for sign up ,so if you are interested in training in the home of the Irish Olympians and getting your chance to climb into the boxing ring for your very own fight night then email info@whitecollarboxing.org NOW!!!!!",
      "This is also an 8 week mixed training programme starting on the 14th of January that puts particular emphasis on conditioning and weight loss. You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time.",
      "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 8pm and Tuesday and Thursday Mornings at 7am. The programme costs €300 but discounts are available for former participants and groups.",
      "For more information phone Cathal on (087) 8526323 or email info@whitecollarboxing.org"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Due to unprecedented demand for our 7pm class we now have an extra mixed class running at 8pm!!! Limited time for sign up ,so if you are interested in training in the home of the Irish Olympians and getting your chance to climb into the boxing ring for your very own fight night then email info@whitecollarboxing.org NOW!!!!!"
      },
      {
        "t": "p",
        "v": "This is also an 8 week mixed training programme starting on the 14th of January that puts particular emphasis on conditioning and weight loss. You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time."
      },
      {
        "t": "p",
        "v": "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 8pm and Tuesday and Thursday Mornings at 7am. The programme costs €300 but discounts are available for former participants and groups."
      },
      {
        "t": "p",
        "v": "For more information phone Cathal on (087) 8526323 or email info@whitecollarboxing.org"
      },
      {
        "t": "img",
        "src": "/images/content/323e615d7cd77ed7d2e102b77aaf012b.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "ispcc-cork-24-may-2013",
      "title": "ISPCC Cork - 24 May 2013"
    },
    "next": {
      "slug": "the-ballroom-buts-up-16th-february-2013",
      "title": "The Ballroom Bust Up - 16th February 2013"
    }
  },
  {
    "slug": "ispcc-cork-24-may-2013",
    "title": "ISPCC Cork - 24 May 2013",
    "date": "December 21, 2012",
    "excerpt": "The ISPCC re looking for 30 contenders (men and women) in Dublin and Cork to put themselves forward for an ultimate challenge in aid of ISPC - no previous experience needed and will suit people of all athletic ability. 'Panic at the Disco' is a six week training programme of white collar boxing which will […]",
    "paragraphs": [
      "The ISPCC re looking for 30 contenders (men and women) in Dublin and Cork to put themselves forward for an ultimate challenge in aid of ISPC - no previous experience needed and will suit people of all athletic ability.",
      "'Panic at the Disco' is a six week training programme of white collar boxing which will culminate in two main events in Dublin and Cork - Final event to take place in Dandelion Nightclub, St Stephen's Green in Dublin and the Savoy Nightclub in Cork - hence the 'Panic at the Disco'!",
      "ISPCC white collar boxing has some of the best trainers in the business, with Olympic athlete Cathal O'Grady at the forefront! www.whitecollarboxing.org",
      "At the main events there will be 15 fights in total. You will be paired with a fellow boxer of equal strength and agility for your fight. Once you step into the ring, you will never forget the sheer adrenaline that pumps through your veins and the electric atmosphere that fills the room.",
      "Each fighter will be asked to sell 20 tickets at a cost of €25 per ticket during the training period. Tickets will cover entry to event and nightclub till close.",
      "Each fighter will also be asked to pay a deposit of €50 before training commences to secure your place.",
      "Sign up today- email rumble@ispcc.ie or call 1850 50 40 50 to speak with Rita based in our Dublin office or Elaine in Cork.",
      "Cork",
      "6 weeks training starts on Monday April 15th in Fr Horgan's Hall, Churchfield Business Park",
      "Event to be held in the Savoy Nightclub, Patrick Street on Friday 24th of May"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The ISPCC re looking for 30 contenders (men and women) in Dublin and Cork to put themselves forward for an ultimate challenge in aid of ISPC - no previous experience needed and will suit people of all athletic ability."
      },
      {
        "t": "p",
        "v": "'Panic at the Disco' is a six week training programme of white collar boxing which will culminate in two main events in Dublin and Cork - Final event to take place in Dandelion Nightclub, St Stephen's Green in Dublin and the Savoy Nightclub in Cork - hence the 'Panic at the Disco'!"
      },
      {
        "t": "p",
        "v": "ISPCC white collar boxing has some of the best trainers in the business, with Olympic athlete Cathal O'Grady at the forefront! www.whitecollarboxing.org"
      },
      {
        "t": "p",
        "v": "At the main events there will be 15 fights in total. You will be paired with a fellow boxer of equal strength and agility for your fight. Once you step into the ring, you will never forget the sheer adrenaline that pumps through your veins and the electric atmosphere that fills the room."
      },
      {
        "t": "p",
        "v": "Each fighter will be asked to sell 20 tickets at a cost of €25 per ticket during the training period. Tickets will cover entry to event and nightclub till close."
      },
      {
        "t": "p",
        "v": "Each fighter will also be asked to pay a deposit of €50 before training commences to secure your place."
      },
      {
        "t": "p",
        "v": "Sign up today- email rumble@ispcc.ie or call 1850 50 40 50 to speak with Rita based in our Dublin office or Elaine in Cork."
      },
      {
        "t": "p",
        "v": "Cork"
      },
      {
        "t": "p",
        "v": "6 weeks training starts on Monday April 15th in Fr Horgan's Hall, Churchfield Business Park"
      },
      {
        "t": "p",
        "v": "Event to be held in the Savoy Nightclub, Patrick Street on Friday 24th of May"
      },
      {
        "t": "img",
        "src": "/images/content/670dc6bb7f25113bcbfccadd80787866.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "ispcc-dublin-31-may-2013",
      "title": "ISPCC Dublin - 31 May 2013"
    },
    "next": {
      "slug": "new-8pm-mixed-january-class",
      "title": "NEW 8pm January Mixed Class"
    }
  },
  {
    "slug": "ispcc-dublin-31-may-2013",
    "title": "ISPCC Dublin - 31 May 2013",
    "date": "December 20, 2012",
    "excerpt": "The ISPCC re looking for 30 contenders (men and women) in Dublin and Cork to put themselves forward for an ultimate challenge in aid of ISPC - no previous experience needed and will suit people of all athletic ability. 'Panic at the Disco' is a six week training programme of white collar boxing which will […]",
    "paragraphs": [
      "The ISPCC re looking for 30 contenders (men and women) in Dublin and Cork to put themselves forward for an ultimate challenge in aid of ISPC - no previous experience needed and will suit people of all athletic ability.",
      "'Panic at the Disco' is a six week training programme of white collar boxing which will culminate in two main events in Dublin and Cork - Final event to take place in Dandelion Nightclub, St Stephen's Green in Dublin and the Savoy Nightclub in Cork - hence the 'Panic at the Disco'!",
      "ISPCC white collar boxing has some of the best trainers in the business, with Olympic athlete Cathal O'Grady at the forefront! www.whitecollarboxing.org",
      "At the main events there will be 15 fights in total. You will be paired with a fellow boxer of equal strength and agility for your fight. Once you step into the ring, you will never forget the sheer adrenaline that pumps through your veins and the electric atmosphere that fills the room.",
      "Each fighter will be asked to sell 20 tickets at a cost of €25 per ticket during the training period. Tickets will cover entry to event and nightclub till close.",
      "Each fighter will also be asked to pay a deposit of €50 before training commences to secure your place.",
      "Sign up today- email rumble@ispcc.ie or call 1850 50 40 50 to speak with Rita based in our Dublin office or Elaine in Cork.",
      "Dublin",
      "6 weeks training starts on Monday April 22nd in the National Boxing Stadium",
      "Event to be held in Dandelion Nightclub, St Stephen's Green on Friday 31st of May"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The ISPCC re looking for 30 contenders (men and women) in Dublin and Cork to put themselves forward for an ultimate challenge in aid of ISPC - no previous experience needed and will suit people of all athletic ability."
      },
      {
        "t": "p",
        "v": "'Panic at the Disco' is a six week training programme of white collar boxing which will culminate in two main events in Dublin and Cork - Final event to take place in Dandelion Nightclub, St Stephen's Green in Dublin and the Savoy Nightclub in Cork - hence the 'Panic at the Disco'!"
      },
      {
        "t": "p",
        "v": "ISPCC white collar boxing has some of the best trainers in the business, with Olympic athlete Cathal O'Grady at the forefront! www.whitecollarboxing.org"
      },
      {
        "t": "p",
        "v": "At the main events there will be 15 fights in total. You will be paired with a fellow boxer of equal strength and agility for your fight. Once you step into the ring, you will never forget the sheer adrenaline that pumps through your veins and the electric atmosphere that fills the room."
      },
      {
        "t": "p",
        "v": "Each fighter will be asked to sell 20 tickets at a cost of €25 per ticket during the training period. Tickets will cover entry to event and nightclub till close."
      },
      {
        "t": "p",
        "v": "Each fighter will also be asked to pay a deposit of €50 before training commences to secure your place."
      },
      {
        "t": "p",
        "v": "Sign up today- email rumble@ispcc.ie or call 1850 50 40 50 to speak with Rita based in our Dublin office or Elaine in Cork."
      },
      {
        "t": "p",
        "v": "Dublin"
      },
      {
        "t": "p",
        "v": "6 weeks training starts on Monday April 22nd in the National Boxing Stadium"
      },
      {
        "t": "p",
        "v": "Event to be held in Dandelion Nightclub, St Stephen's Green on Friday 31st of May"
      },
      {
        "t": "img",
        "src": "/images/content/302d934feb0c2cd55fede72bd1c6136a.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "the-brawl-in-the-hall-2-june-2013",
      "title": "The Brawl in the Hall - 2 June 2013"
    },
    "next": {
      "slug": "ispcc-cork-24-may-2013",
      "title": "ISPCC Cork - 24 May 2013"
    }
  },
  {
    "slug": "the-brawl-in-the-hall-2-june-2013",
    "title": "The Brawl in the Hall - 2 June 2013",
    "date": "December 16, 2012",
    "excerpt": "Cashel watch Out! Cashel RFC and Cashel GAA are taking each other on in a fight night like no other. Players from both clubs are ditching the pitch and leaving the boots behind to battle it out in the boxing ring for the first time. To be crowned Club Champions, 30 brave men and women […]",
    "paragraphs": [
      "Cashel watch Out! Cashel RFC and Cashel GAA are taking each other on in a fight night like no other. Players from both clubs are ditching the pitch and leaving the boots behind to battle it out in the boxing ring for the first time. To be crowned Club Champions, 30 brave men and women from both clubs are putting it all on Sunday 2nd June 2013. Tickets are selling fast so to get yours email info@whitecollaring.ie",
      "All the proceeds from this show will provide vital funds needed to keep the two clubs in action for another year."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Cashel watch Out! Cashel RFC and Cashel GAA are taking each other on in a fight night like no other. Players from both clubs are ditching the pitch and leaving the boots behind to battle it out in the boxing ring for the first time. To be crowned Club Champions, 30 brave men and women from both clubs are putting it all on Sunday 2nd June 2013. Tickets are selling fast so to get yours email info@whitecollaring.ie"
      },
      {
        "t": "p",
        "v": "All the proceeds from this show will provide vital funds needed to keep the two clubs in action for another year."
      },
      {
        "t": "img",
        "src": "/images/content/621dcb6f8e45158613a8b992cd707054.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "Previous Events",
        "path": "/category/events_main_page/previous_events"
      }
    ],
    "prev": {
      "slug": "january-mixed-boxing-class",
      "title": "January Mixed Boxing Class"
    },
    "next": {
      "slug": "ispcc-dublin-31-may-2013",
      "title": "ISPCC Dublin - 31 May 2013"
    }
  },
  {
    "slug": "january-mixed-boxing-class",
    "title": "January Mixed Boxing Class",
    "date": "October 19, 2012",
    "excerpt": "Our 8 week mixed training programme kicks off on Monday, 14th January. We are putting particular emphasis on conditioning and weight loss. Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest You will be trained and inspired by our team of […]",
    "paragraphs": [
      "Our 8 week mixed training programme kicks off on Monday, 14th January. We are putting particular emphasis on conditioning and weight loss.",
      "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest",
      "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time.",
      "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am",
      "The programme costs €300 but discounts are available for former participants and groups. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information",
      "We are also running a ladies boxing class in January... see details here",
      "Fill out this quick enquiry form and we will get back to you about booking your place!",
      "If you see this message, leave this next form field blank.",
      "Or for further info call Cathal on on 087 8526323 or visit us on Facebook for all the latest updates.",
      "For more information contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our 8 week mixed training programme kicks off on Monday, 14th January. We are putting particular emphasis on conditioning and weight loss."
      },
      {
        "t": "p",
        "v": "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest"
      },
      {
        "t": "p",
        "v": "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time."
      },
      {
        "t": "p",
        "v": "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am"
      },
      {
        "t": "p",
        "v": "The programme costs €300 but discounts are available for former participants and groups. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information"
      },
      {
        "t": "p",
        "v": "We are also running a ladies boxing class in January... see details here"
      },
      {
        "t": "img",
        "src": "/images/content/3be9f0378e79976c792aa872c5efd8b1.jpg",
        "alt": ""
      },
      {
        "t": "p",
        "v": "Fill out this quick enquiry form and we will get back to you about booking your place!"
      },
      {
        "t": "p",
        "v": "If you see this message, leave this next form field blank."
      },
      {
        "t": "p",
        "v": "Or for further info call Cathal on on 087 8526323 or visit us on Facebook for all the latest updates."
      },
      {
        "t": "p",
        "v": "For more information contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "new-september-mixed-class-8pm",
      "title": "NEW September Mixed Class 8pm!!"
    },
    "next": {
      "slug": "the-brawl-in-the-hall-2-june-2013",
      "title": "The Brawl in the Hall - 2 June 2013"
    }
  },
  {
    "slug": "new-september-mixed-class-8pm",
    "title": "NEW September Mixed Class 8pm!!",
    "date": "May 25, 2012",
    "excerpt": "Due to unprecedented demand fpr our 7pm class we now have an extra mixed class running at 8pm!!! Limited time for sign up ,so if you are interested in training in the home of the Irish Olympians and getting your chance to climb into the boxing ring for your very own fight night then email […]",
    "paragraphs": [
      "Due to unprecedented demand fpr our 7pm class we now have an extra mixed class running at 8pm!!! Limited time for sign up ,so if you are interested in training in the home of the Irish Olympians and getting your chance to climb into the boxing ring for your very own fight night then email info@whitecollarboxing.org NOW!!!!!",
      "This is also an 8 week mixed training programme that puts particular emphasis on conditioning and weight loss. You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time.",
      "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 8pm and Tuesday and Thursday Mornings at 7am. The programme costs €300 but discounts are available for former participants and groups.",
      "For more information phone Cathal on (087) 8526323 or email info@whitecollarboxing.org"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Due to unprecedented demand fpr our 7pm class we now have an extra mixed class running at 8pm!!! Limited time for sign up ,so if you are interested in training in the home of the Irish Olympians and getting your chance to climb into the boxing ring for your very own fight night then email info@whitecollarboxing.org NOW!!!!!"
      },
      {
        "t": "p",
        "v": "This is also an 8 week mixed training programme that puts particular emphasis on conditioning and weight loss. You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time."
      },
      {
        "t": "p",
        "v": "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 8pm and Tuesday and Thursday Mornings at 7am. The programme costs €300 but discounts are available for former participants and groups."
      },
      {
        "t": "p",
        "v": "For more information phone Cathal on (087) 8526323 or email info@whitecollarboxing.org"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "september-mixed-boxing-classes",
      "title": "September Mixed Boxing Classes"
    },
    "next": {
      "slug": "january-mixed-boxing-class",
      "title": "January Mixed Boxing Class"
    }
  },
  {
    "slug": "september-mixed-boxing-classes",
    "title": "September Mixed Boxing Classes",
    "date": "May 24, 2012",
    "excerpt": "Our 8 week mixed training programme kicks off on Monday, 10th September. We are putting particular emphasis on conditioning and weight loss. Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest You will be trained and inspired by our team of […]",
    "paragraphs": [
      "Our 8 week mixed training programme kicks off on Monday, 10th September. We are putting particular emphasis on conditioning and weight loss.",
      "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest",
      "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time.",
      "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am",
      "The programme costs €300 but discounts are available for former participants and groups. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our 8 week mixed training programme kicks off on Monday, 10th September. We are putting particular emphasis on conditioning and weight loss."
      },
      {
        "t": "p",
        "v": "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest"
      },
      {
        "t": "p",
        "v": "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time."
      },
      {
        "t": "p",
        "v": "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am"
      },
      {
        "t": "p",
        "v": "The programme costs €300 but discounts are available for former participants and groups. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org for more information."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "september-ladies-boxing-classes",
      "title": "September Ladies Boxing Classes"
    },
    "next": {
      "slug": "new-september-mixed-class-8pm",
      "title": "NEW September Mixed Class 8pm!!"
    }
  },
  {
    "slug": "september-ladies-boxing-classes",
    "title": "September Ladies Boxing Classes",
    "date": "May 24, 2012",
    "excerpt": "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class! Starting on Monday 10th September, this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South […]",
    "paragraphs": [
      "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class!",
      "Starting on Monday 10th September, this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin.",
      "The programme costs €120 and includes free handwraps. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. Or find us out on Facebook: www.facebook.com/whitecollarboxing"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class!"
      },
      {
        "t": "p",
        "v": "Starting on Monday 10th September, this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin."
      },
      {
        "t": "p",
        "v": "The programme costs €120 and includes free handwraps. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. Or find us out on Facebook: www.facebook.com/whitecollarboxing"
      },
      {
        "t": "img",
        "src": "/images/content/1f2d9257b9b3bd3be953630d6d14f8ab.jpg",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "boxing-classes-dublin",
      "title": "Boxing Classes Dublin"
    },
    "next": {
      "slug": "september-mixed-boxing-classes",
      "title": "September Mixed Boxing Classes"
    }
  },
  {
    "slug": "boxing-classes-dublin",
    "title": "Boxing Classes Dublin",
    "date": "January 9, 2012",
    "excerpt": "If your getting fit in 2015 is your goal why not try our boxing classes. Whether you fancy climbing into a boxing ring for the first time or just want to learn how to correctly punch and jump rope our boxing classes are for you. 8 week boxing training programme starting on Monday, 19th January. […]",
    "paragraphs": [
      "If your getting fit in 2015 is your goal why not try our boxing classes. Whether you fancy climbing into a boxing ring for the first time or just want to learn how to correctly punch and jump rope our boxing classes are for you.",
      "8 week boxing training programme starting on Monday, 19th January. For this programme we are putting particular emphasis on conditioning. Training will take place in our very own boxing gym in Harolds Cross Dublin 6. You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no time. The boxing sessions are Monday and Wednesday at 7pm with an option of sparring on Fridays from 6 to 9pm. The strength and conditioning classes are Tuesdays and Thursdays at 7am and 6pm on both days and a Saturday morning Strongman giving you plenty of choice. Places are limited!",
      "We still have limited availability for our January 19th white collar boxing programme",
      "sign up"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "If your getting fit in 2015 is your goal why not try our boxing classes. Whether you fancy climbing into a boxing ring for the first time or just want to learn how to correctly punch and jump rope our boxing classes are for you."
      },
      {
        "t": "p",
        "v": "8 week boxing training programme starting on Monday, 19th January. For this programme we are putting particular emphasis on conditioning. Training will take place in our very own boxing gym in Harolds Cross Dublin 6. You will be trained and inspired by our team of top International and Olympic Coaches from the worlds of boxing and Athletics who will have you fighting fit in no time. The boxing sessions are Monday and Wednesday at 7pm with an option of sparring on Fridays from 6 to 9pm. The strength and conditioning classes are Tuesdays and Thursdays at 7am and 6pm on both days and a Saturday morning Strongman giving you plenty of choice. Places are limited!"
      },
      {
        "t": "p",
        "v": "We still have limited availability for our January 19th white collar boxing programme"
      },
      {
        "t": "p",
        "v": "sign up"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "january-ladies-boxing-class",
      "title": "January Ladies Boxing Class"
    },
    "next": {
      "slug": "september-ladies-boxing-classes",
      "title": "September Ladies Boxing Classes"
    }
  },
  {
    "slug": "january-ladies-boxing-class",
    "title": "January Ladies Boxing Class",
    "date": "January 4, 2012",
    "excerpt": "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class! Starting on Monday 14th January, this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South […]",
    "paragraphs": [
      "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class!",
      "Starting on Monday 14th January, this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin.",
      "We are also running a mixed boxing class in January... see details here",
      "The programme costs €120. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. Or find us out on Facebook:www.facebook.com/whitecollarboxing",
      "Fill out this quick enquiry form and we will get back to you about booking your place!",
      "If you see this message, leave this next form field blank.",
      "Or for further info call Cathal on on 087 8526323 or visit us on Facebook for all the latest updates.",
      "For more information contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Feel like a \"Million Dollar Baby\" this year and join our ladies boxing class!"
      },
      {
        "t": "p",
        "v": "Starting on Monday 14th January, this fun filled class will have you looking firm and fit in no time! The programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin."
      },
      {
        "t": "p",
        "v": "We are also running a mixed boxing class in January... see details here"
      },
      {
        "t": "p",
        "v": "The programme costs €120. Contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. Or find us out on Facebook:www.facebook.com/whitecollarboxing"
      },
      {
        "t": "img",
        "src": "/images/content/1a867d83de239947bb51e812a3bb8fcf.jpg",
        "alt": ""
      },
      {
        "t": "p",
        "v": "Fill out this quick enquiry form and we will get back to you about booking your place!"
      },
      {
        "t": "p",
        "v": "If you see this message, leave this next form field blank."
      },
      {
        "t": "p",
        "v": "Or for further info call Cathal on on 087 8526323 or visit us on Facebook for all the latest updates."
      },
      {
        "t": "p",
        "v": "For more information contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "million-dollar-baby-201",
      "title": "Ladies Boxing Class 2012"
    },
    "next": {
      "slug": "boxing-classes-dublin",
      "title": "Boxing Classes Dublin"
    }
  },
  {
    "slug": "million-dollar-baby-201",
    "title": "Ladies Boxing Class 2012",
    "date": "December 12, 2011",
    "excerpt": "Feel like a \"Million Dollar Baby\" in the New Year. Our ladies boxing class starts on Monday 23rd of January The fun filled programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin. The programme costs €120 and includes handwraps […]",
    "paragraphs": [
      "Feel like a \"Million Dollar Baby\" in the New Year. Our ladies boxing class starts on Monday 23rd of January",
      "The fun filled programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin.",
      "The programme costs €120 and includes handwraps and a whitecollarboxing.org T shirt.",
      "To book contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Feel like a \"Million Dollar Baby\" in the New Year. Our ladies boxing class starts on Monday 23rd of January"
      },
      {
        "t": "p",
        "v": "The fun filled programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin."
      },
      {
        "t": "p",
        "v": "The programme costs €120 and includes handwraps and a whitecollarboxing.org T shirt."
      },
      {
        "t": "p",
        "v": "To book contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "new-years-rsolutions",
      "title": "Fresh Start for 2012"
    },
    "next": {
      "slug": "january-ladies-boxing-class",
      "title": "January Ladies Boxing Class"
    }
  },
  {
    "slug": "new-years-rsolutions",
    "title": "Fresh Start for 2012",
    "date": "December 10, 2011",
    "excerpt": "Book your place early for our New Year programme ! Our 8 week training programme kicks off on Monday, January 16th. We are putting particular emphasis on conditioning and weight loss. Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest You […]",
    "paragraphs": [
      "Book your place early for our New Year programme !",
      "Our 8 week training programme kicks off on Monday, January 16th. We are putting particular emphasis on conditioning and weight loss.",
      "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest",
      "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time.",
      "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am",
      "The programme costs €300 but group discounts are available.",
      "To book contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Book your place early for our New Year programme !"
      },
      {
        "t": "p",
        "v": "Our 8 week training programme kicks off on Monday, January 16th. We are putting particular emphasis on conditioning and weight loss."
      },
      {
        "t": "p",
        "v": "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest"
      },
      {
        "t": "p",
        "v": "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time."
      },
      {
        "t": "p",
        "v": "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am"
      },
      {
        "t": "p",
        "v": "The programme costs €300 but group discounts are available."
      },
      {
        "t": "p",
        "v": "To book contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing."
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "resolution2012",
      "title": "New Years Resolutions"
    },
    "next": {
      "slug": "million-dollar-baby-201",
      "title": "Ladies Boxing Class 2012"
    }
  },
  {
    "slug": "resolution2012",
    "title": "New Years Resolutions",
    "date": "December 8, 2011",
    "excerpt": "Book your place early for our New Year programme ! Our 8 week training programme kicks off on Monday, January 16th. We are putting particular emphasis on conditioning and weight loss. Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest You […]",
    "paragraphs": [
      "Book your place early for our New Year programme !",
      "Our 8 week training programme kicks off on Monday, January 16th. We are putting particular emphasis on conditioning and weight loss.",
      "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest",
      "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time.",
      "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am",
      "The programme costs €300 but group discounts are available.",
      "To book contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Book your place early for our New Year programme !"
      },
      {
        "t": "p",
        "v": "Our 8 week training programme kicks off on Monday, January 16th. We are putting particular emphasis on conditioning and weight loss."
      },
      {
        "t": "p",
        "v": "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest"
      },
      {
        "t": "p",
        "v": "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time."
      },
      {
        "t": "p",
        "v": "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am"
      },
      {
        "t": "p",
        "v": "The programme costs €300 but group discounts are available."
      },
      {
        "t": "p",
        "v": "To book contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "events",
      "title": "Pre Season Push"
    },
    "next": {
      "slug": "new-years-rsolutions",
      "title": "Fresh Start for 2012"
    }
  },
  {
    "slug": "boxingclasses",
    "title": "Boxing Classes Dublin",
    "date": "November 30, 2011",
    "excerpt": "Fancy getting yourself in shape for 2012? Forget those boring sessions at the gym, trundling on the treadmill and mind numbing sessions on the stepper, find your inner warrior with White Collar Warrior with our Boxing Classes in Dublin. Our next cycle of training sessions starts in January in the National Boxing Stadium Gym on […]",
    "paragraphs": [
      "Fancy getting yourself in shape for 2012? Forget those boring sessions at the gym, trundling on the treadmill and mind numbing sessions on the stepper, find your inner warrior with White Collar Warrior with our Boxing Classes in Dublin. Our next cycle of training sessions starts in January in the National Boxing Stadium Gym on the South Circular Road in Dublin with separate sessions for men and women.",
      "Book your place early for our New Year programme !",
      "Our 8 week training programme kicks off on Monday, January 16th. We are putting particular emphasis on conditioning and weight loss.",
      "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest",
      "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time.",
      "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am",
      "The programme costs €300 but group discounts are available.",
      "To book contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing.",
      "Ladies Boxing Classes",
      "Feel like a \"Million Dollar Baby\" in the New Year. Our ladies boxing class starts on Monday 23rd of January",
      "The fun filled programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin.",
      "The programme costs €120 and includes handwraps and a whitecollarboxing.org T shirt.",
      "To book contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Fancy getting yourself in shape for 2012? Forget those boring sessions at the gym, trundling on the treadmill and mind numbing sessions on the stepper, find your inner warrior with White Collar Warrior with our Boxing Classes in Dublin. Our next cycle of training sessions starts in January in the National Boxing Stadium Gym on the South Circular Road in Dublin with separate sessions for men and women."
      },
      {
        "t": "p",
        "v": "Book your place early for our New Year programme !"
      },
      {
        "t": "p",
        "v": "Our 8 week training programme kicks off on Monday, January 16th. We are putting particular emphasis on conditioning and weight loss."
      },
      {
        "t": "p",
        "v": "Participants will have the added motivation of climbing into the Boxing Ring at the end of the 8 weeks for their first contest"
      },
      {
        "t": "p",
        "v": "You will be trained and inspired by our team of top International and Olympic Coaches who will have you fighting fit in no time."
      },
      {
        "t": "p",
        "v": "The training sessions are four times weekly at the National Stadium Gym on the South Circular Road in Dublin 8 on Mondays and Wednesdays at 7pm and Tuesday and Thursday Mornings at 7am"
      },
      {
        "t": "p",
        "v": "The programme costs €300 but group discounts are available."
      },
      {
        "t": "p",
        "v": "To book contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing."
      },
      {
        "t": "p",
        "v": "Ladies Boxing Classes"
      },
      {
        "t": "p",
        "v": "Feel like a \"Million Dollar Baby\" in the New Year. Our ladies boxing class starts on Monday 23rd of January"
      },
      {
        "t": "p",
        "v": "The fun filled programme involves two weekly sessions (Mondays and Wednesdays at 8pm) over 6 weeks at the National Stadium Gym on the South Circular Road in Dublin."
      },
      {
        "t": "p",
        "v": "The programme costs €120 and includes handwraps and a whitecollarboxing.org T shirt."
      },
      {
        "t": "p",
        "v": "To book contact Cathal on +353 87 8526323 or email info@whitecollarboxing.org. or check us out on Facebook: www.facebook.com/whitecollarboxing."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "white-collar-boxer-training-programme",
      "title": "White Collar Boxer"
    },
    "next": {
      "slug": "events",
      "title": "Pre Season Push"
    }
  },
  {
    "slug": "white-collar-boxer-training-programme",
    "title": "White Collar Boxer",
    "date": "July 11, 2011",
    "excerpt": "This programme is open to everybody. It is designed to take you from lacing on a boxing glove for the first time to fighting centre stage on your very own big \"fight night\". We believe that everyone can learn how to box. We begin by working on basic boxing techniques. Like engineering, we start with […]",
    "paragraphs": [
      "This programme is open to everybody. It is designed to take you from lacing on a boxing glove for the first time to fighting centre stage on your very own big \"fight night\".",
      "We believe that everyone can learn how to box. We begin by working on basic boxing techniques. Like engineering, we start with the foundations and work our way up. Stance is important to get right from the very beginning. We ensure you are grounded & relaxed before proceeding with defense and offense.",
      "Defense is so important in the sport of boxing. There are many different techniques and styles of defense. We teach all of these and then help you figure out which is the most appropriate to your style of boxing and when to use your defensive strategies.",
      "Offense or throwing punches, is the fun part everyone loves. Working from your stance, we start by teaching you how to throw \"The Jab\", progressing from there to the old \"1, 2\" and advancing on to multiple punch combinations, both to the body and head.",
      "What we learn and perfect on the floor, we take to the bags and school sparring, before trialing it in an open sparring situation.",
      "For those of you who are bitten by \"the boxing bug\" and are brave enough to take their new found pugilistic skills to the ring, we will arrange a contest for you on one of our frequent fight nights."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "This programme is open to everybody. It is designed to take you from lacing on a boxing glove for the first time to fighting centre stage on your very own big \"fight night\"."
      },
      {
        "t": "p",
        "v": "We believe that everyone can learn how to box. We begin by working on basic boxing techniques. Like engineering, we start with the foundations and work our way up. Stance is important to get right from the very beginning. We ensure you are grounded & relaxed before proceeding with defense and offense."
      },
      {
        "t": "p",
        "v": "Defense is so important in the sport of boxing. There are many different techniques and styles of defense. We teach all of these and then help you figure out which is the most appropriate to your style of boxing and when to use your defensive strategies."
      },
      {
        "t": "p",
        "v": "Offense or throwing punches, is the fun part everyone loves. Working from your stance, we start by teaching you how to throw \"The Jab\", progressing from there to the old \"1, 2\" and advancing on to multiple punch combinations, both to the body and head."
      },
      {
        "t": "p",
        "v": "What we learn and perfect on the floor, we take to the bags and school sparring, before trialing it in an open sparring situation."
      },
      {
        "t": "p",
        "v": "For those of you who are bitten by \"the boxing bug\" and are brave enough to take their new found pugilistic skills to the ring, we will arrange a contest for you on one of our frequent fight nights."
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "private-boxing-lessons",
      "title": "1-2-1 Private Boxing Lessons"
    },
    "next": {
      "slug": "boxingclasses",
      "title": "Boxing Classes Dublin"
    }
  },
  {
    "slug": "private-boxing-lessons",
    "title": "1-2-1 Private Boxing Lessons",
    "date": "July 11, 2011",
    "excerpt": "Private boxing lessons are also available. In these individualised classes we will work on everything from warm up to cool down, with special emphasis on improving technique through pad work. People say \"there are no hiding places in the boxing ring\". There are certainly no hiding places in our 1-2-1 private lessons. This is an […]",
    "paragraphs": [
      "Private boxing lessons are also available. In these individualised classes we will work on everything from warm up to cool down, with special emphasis on improving technique through pad work. People say \"there are no hiding places in the boxing ring\". There are certainly no hiding places in our 1-2-1 private lessons.",
      "This is an opportunity to fine tune your boxing technique. Please contact us to arrange a private boxing class.",
      "One to one classes start from €50 and last 1 hour"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Private boxing lessons are also available. In these individualised classes we will work on everything from warm up to cool down, with special emphasis on improving technique through pad work. People say \"there are no hiding places in the boxing ring\". There are certainly no hiding places in our 1-2-1 private lessons."
      },
      {
        "t": "p",
        "v": "This is an opportunity to fine tune your boxing technique. Please contact us to arrange a private boxing class."
      },
      {
        "t": "p",
        "v": "One to one classes start from €50 and last 1 hour"
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "team-training",
      "title": "Team Training"
    },
    "next": {
      "slug": "white-collar-boxer-training-programme",
      "title": "White Collar Boxer"
    }
  },
  {
    "slug": "team-training",
    "title": "Team Training",
    "date": "July 11, 2011",
    "excerpt": "Boxing training provides an excellent cross training opportunity and unique bonding experience for teams. Boxers are respected amongst elite athletes for their superior fitness and physical conditioning. Boxing training provides the perfect addition to pre-season training, improving all aspects of physical fitness, whilst developing mental toughness. Give your team a fighting start, contact us to […]",
    "paragraphs": [
      "Boxing training provides an excellent cross training opportunity and unique bonding experience for teams. Boxers are respected amongst elite athletes for their superior fitness and physical conditioning. Boxing training provides the perfect addition to pre-season training, improving all aspects of physical fitness, whilst developing mental toughness.",
      "Give your team a fighting start, contact us to arrange your team training sessions."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Boxing training provides an excellent cross training opportunity and unique bonding experience for teams. Boxers are respected amongst elite athletes for their superior fitness and physical conditioning. Boxing training provides the perfect addition to pre-season training, improving all aspects of physical fitness, whilst developing mental toughness."
      },
      {
        "t": "p",
        "v": "Give your team a fighting start, contact us to arrange your team training sessions."
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "million-dollar-baby-training",
      "title": "Million Dollar Baby"
    },
    "next": {
      "slug": "private-boxing-lessons",
      "title": "1-2-1 Private Boxing Lessons"
    }
  },
  {
    "slug": "million-dollar-baby-training",
    "title": "Million Dollar Baby",
    "date": "July 11, 2011",
    "excerpt": "Do you want to look and feel like a Million Dollar Baby? This ladies only programme lets you enjoy all the benefits of training like a professional fighter, without ending up with a professional fighters face! Get into the shape of your life by hitting heavy bags, skipping and learning to defend yourself. Stress does […]",
    "paragraphs": [
      "Do you want to look and feel like a Million Dollar Baby? This ladies only programme lets you enjoy all the benefits of training like a professional fighter, without ending up with a professional fighters face!",
      "Get into the shape of your life by hitting heavy bags, skipping and learning to defend yourself. Stress does not stand a chance!",
      "Small group classes can be arranged. Please contact us."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Do you want to look and feel like a Million Dollar Baby? This ladies only programme lets you enjoy all the benefits of training like a professional fighter, without ending up with a professional fighters face!"
      },
      {
        "t": "p",
        "v": "Get into the shape of your life by hitting heavy bags, skipping and learning to defend yourself. Stress does not stand a chance!"
      },
      {
        "t": "p",
        "v": "Small group classes can be arranged. Please contact us."
      }
    ],
    "postedIn": [
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "training",
      "title": "Training"
    },
    "next": {
      "slug": "team-training",
      "title": "Team Training"
    }
  },
  {
    "slug": "fight-club-ni-media-launch",
    "title": "Fight Club NI Media Launch",
    "date": "September 21, 2010",
    "excerpt": "Check out some snaps from our media launch for Fight Club NI at Breens Gym in Belfast City Centre recently.",
    "paragraphs": [
      "Check out some snaps from our media launch for Fight Club NI at Breens Gym in Belfast City Centre recently."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Check out some snaps from our media launch for Fight Club NI at Breens Gym in Belfast City Centre recently."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "fight-club-ni",
      "title": "Fight Club NI"
    },
    "next": {
      "slug": "training",
      "title": "Training"
    }
  },
  {
    "slug": "fight-club-ni",
    "title": "Fight Club NI",
    "date": "September 8, 2010",
    "excerpt": "White Collar Boxing Ireland presents Fight Club NI as it makes its long awaited return to Belfast\" this Autumn. After a hugely successful sellout night in the Europa Hotel last year and the subsequent hit TV show on BBC \"Fight Club NI\" comes to the Home of boxing in Belfasts Kings Hall and launches in […]",
    "paragraphs": [
      "White Collar Boxing Ireland presents Fight Club NI as it makes its long awaited return to Belfast\" this Autumn.",
      "After a hugely successful sellout night in the Europa Hotel last year and the subsequent hit TV show on BBC \"Fight Club NI\" comes to the Home of boxing in Belfasts Kings Hall and launches in September 2010.",
      "An eight week intensive programme starts on Tuesday 28th September. Places are limited so book early. For more info or to book your place contact Cathal on +353 87 8526323 or email info@fightclubni.co.uk or check us out on Facebook at: facebook.com/whitecollarboxing."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "White Collar Boxing Ireland presents Fight Club NI as it makes its long awaited return to Belfast\" this Autumn."
      },
      {
        "t": "p",
        "v": "After a hugely successful sellout night in the Europa Hotel last year and the subsequent hit TV show on BBC \"Fight Club NI\" comes to the Home of boxing in Belfasts Kings Hall and launches in September 2010."
      },
      {
        "t": "p",
        "v": "An eight week intensive programme starts on Tuesday 28th September. Places are limited so book early. For more info or to book your place contact Cathal on +353 87 8526323 or email info@fightclubni.co.uk or check us out on Facebook at: facebook.com/whitecollarboxing."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "million-dollar-baby",
      "title": "Million Dollar Baby"
    },
    "next": {
      "slug": "fight-club-ni-media-launch",
      "title": "Fight Club NI Media Launch"
    }
  },
  {
    "slug": "million-dollar-baby",
    "title": "Million Dollar Baby",
    "date": "August 16, 2010",
    "excerpt": "Our next 8 week \"Million Dollar Baby\" beginners boxing course starts on Monday the 20th of September at the National Boxing Stadium on the South Circular Road in Dublin. The course costs €160 and includes gloves with twice weekly training sessions on Mondays and Wednesdays from 8pm. For further details or to book your place […]",
    "paragraphs": [
      "Our next 8 week \"Million Dollar Baby\" beginners boxing course starts on Monday the 20th of September at the National Boxing Stadium on the South Circular Road in Dublin. The course costs €160 and includes gloves with twice weekly training sessions on Mondays and Wednesdays from 8pm.",
      "For further details or to book your place contact us on: info@whitecollarboxing.org or call us on +353 87 8526323."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our next 8 week \"Million Dollar Baby\" beginners boxing course starts on Monday the 20th of September at the National Boxing Stadium on the South Circular Road in Dublin. The course costs €160 and includes gloves with twice weekly training sessions on Mondays and Wednesdays from 8pm."
      },
      {
        "t": "p",
        "v": "For further details or to book your place contact us on: info@whitecollarboxing.org or call us on +353 87 8526323."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "white-collar-season-kicks-off",
      "title": "white collar season kicks off"
    },
    "next": {
      "slug": "fight-club-ni",
      "title": "Fight Club NI"
    }
  },
  {
    "slug": "white-collar-season-kicks-off",
    "title": "white collar season kicks off",
    "date": "August 16, 2010",
    "excerpt": "White Collar Boxing training re starts on Wednesday 15th September in the National Boxing Stadium on the South Circular Road in Dublin ahead of a White Collar Fight Night at The Academy in November. The course costs €300 and there will be discounts for groups of 2 or more, Training will be twice weekly on […]",
    "paragraphs": [
      "White Collar Boxing training re starts on Wednesday 15th September in the National Boxing Stadium on the South Circular Road in Dublin ahead of a White Collar Fight Night at The Academy in November. The course costs €300 and there will be discounts for groups of 2 or more, Training will be twice weekly on Mondays and Wednesdays at 7pm for 10 weeks.",
      "For more details or to book your place you can contact us at:",
      "info@whitecollarboxing.org or +353 87 8526323."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "White Collar Boxing training re starts on Wednesday 15th September in the National Boxing Stadium on the South Circular Road in Dublin ahead of a White Collar Fight Night at The Academy in November. The course costs €300 and there will be discounts for groups of 2 or more, Training will be twice weekly on Mondays and Wednesdays at 7pm for 10 weeks."
      },
      {
        "t": "p",
        "v": "For more details or to book your place you can contact us at:"
      },
      {
        "t": "p",
        "v": "info@whitecollarboxing.org or +353 87 8526323."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "whitecollarboxing-ie-packs-a-punch-on-bbc",
      "title": "whitecollarboxing.org packs a punch on bbc"
    },
    "next": {
      "slug": "million-dollar-baby",
      "title": "Million Dollar Baby"
    }
  },
  {
    "slug": "whitecollarboxing-ie-packs-a-punch-on-bbc",
    "title": "whitecollarboxing.org packs a punch on bbc",
    "date": "April 14, 2010",
    "excerpt": "Watch part 1 of NI Fight Club on BBC ONE Northern Ireland from 22:45 on Monday, April 19 NI Fight Club is a new three part series from BBC Northern Ireland which follows a group of individuals from the Northern Ireland Business community as they take part in Belfasts first ever White Collar Boxing tournament, […]",
    "paragraphs": [
      "Watch part 1 of NI Fight Club on BBC ONE Northern Ireland from 22:45 on Monday, April 19",
      "NI Fight Club is a new three part series from BBC Northern Ireland which follows a group of individuals from the Northern Ireland Business community as they take part in Belfasts first ever White Collar Boxing tournament, proving that the thrill of business is no match for the thrill of the fight.",
      "With no previous boxing experience they have signed up for 11 weeks of intensive training before taking to the ring at the Europa Hotel for a fight against a fellow rookie. The series follows their progress as they swap the daily grind of the office for the blood, sweat and tears of the boxing ring.",
      "Trained by ex professional fighter Cathal OGrady, he has tapped into the psyche of high flying professionals to offer them the Fight Night at Europa Hotel unique experience of becoming a boxer. It is his job to turn a group of doctors, solicitors, civil servants and company directors into athletes capable of going toe-to-toe against each other in the raw atmosphere of Fight Night.",
      "In the first programme of the series the participants are taught the basic skills of boxing and it becomes apparent some are more natural athletes than others.",
      "The first programme introduces town planner John Gibson who is swapping his daily routine of meditation and yoga for a more primal existence in the ring; entrepreneur Dessie Aughey who is determined to avenge his childhood memories of losing in the boxing ring; company director Mark Scullion whos wife signed him up to lose weight and psychiatrist Dr Owen Gallagher who at 56 is the oldest fighter on the block fulfilling a childhood dream.",
      "Des Henderson, producer said: \"Filming these guys over 11 weeks was an unforgettable experience. Here were ordinary men and women who during the day dealt with clients, attended board meetings or treated patients, yet at night they were knocking seven bells out of each other in the ring. It was no-holds-barred, there were a lot of injuries, but the guys battled through, they were tough characters and I suppose thats why they are successful in business, boxing is a great metaphor for life.\""
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Watch part 1 of NI Fight Club on BBC ONE Northern Ireland from 22:45 on Monday, April 19"
      },
      {
        "t": "p",
        "v": "NI Fight Club is a new three part series from BBC Northern Ireland which follows a group of individuals from the Northern Ireland Business community as they take part in Belfasts first ever White Collar Boxing tournament, proving that the thrill of business is no match for the thrill of the fight."
      },
      {
        "t": "p",
        "v": "With no previous boxing experience they have signed up for 11 weeks of intensive training before taking to the ring at the Europa Hotel for a fight against a fellow rookie. The series follows their progress as they swap the daily grind of the office for the blood, sweat and tears of the boxing ring."
      },
      {
        "t": "p",
        "v": "Trained by ex professional fighter Cathal OGrady, he has tapped into the psyche of high flying professionals to offer them the Fight Night at Europa Hotel unique experience of becoming a boxer. It is his job to turn a group of doctors, solicitors, civil servants and company directors into athletes capable of going toe-to-toe against each other in the raw atmosphere of Fight Night."
      },
      {
        "t": "p",
        "v": "In the first programme of the series the participants are taught the basic skills of boxing and it becomes apparent some are more natural athletes than others."
      },
      {
        "t": "p",
        "v": "The first programme introduces town planner John Gibson who is swapping his daily routine of meditation and yoga for a more primal existence in the ring; entrepreneur Dessie Aughey who is determined to avenge his childhood memories of losing in the boxing ring; company director Mark Scullion whos wife signed him up to lose weight and psychiatrist Dr Owen Gallagher who at 56 is the oldest fighter on the block fulfilling a childhood dream."
      },
      {
        "t": "p",
        "v": "Des Henderson, producer said: \"Filming these guys over 11 weeks was an unforgettable experience. Here were ordinary men and women who during the day dealt with clients, attended board meetings or treated patients, yet at night they were knocking seven bells out of each other in the ring. It was no-holds-barred, there were a lot of injuries, but the guys battled through, they were tough characters and I suppose thats why they are successful in business, boxing is a great metaphor for life.\""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "check-us-out-on-facebook",
      "title": "Check us out on facebook"
    },
    "next": {
      "slug": "white-collar-season-kicks-off",
      "title": "white collar season kicks off"
    }
  },
  {
    "slug": "check-us-out-on-facebook",
    "title": "Check us out on facebook",
    "date": "March 2, 2010",
    "excerpt": "Keep up to date with all the latest White Collar Boxing news by visiting our Facebook page: facebook.com/whitecollarboxing",
    "paragraphs": [
      "Keep up to date with all the latest White Collar Boxing news by visiting our Facebook page: facebook.com/whitecollarboxing"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Keep up to date with all the latest White Collar Boxing news by visiting our Facebook page: facebook.com/whitecollarboxing"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "million-dollar-babies",
      "title": "Million dollar babies"
    },
    "next": {
      "slug": "whitecollarboxing-ie-packs-a-punch-on-bbc",
      "title": "whitecollarboxing.org packs a punch on bbc"
    }
  },
  {
    "slug": "million-dollar-babies",
    "title": "Million dollar babies",
    "date": "March 2, 2010",
    "excerpt": "Our next Million Dollar Baby fitness programme kicks off at The National Stadium Gym on the South Circular Road in Dublin 8 on Monday, March 22nd. The unique ladies only programme comprises of 8 weeks training that will have you boxing clever and feeling fantastic. Training sessions will be twice weekly Mondays and Wednesdays at […]",
    "paragraphs": [
      "Our next Million Dollar Baby fitness programme kicks off at The National Stadium Gym on the South Circular Road in Dublin 8 on Monday, March 22nd.",
      "The unique ladies only programme comprises of 8 weeks training that will have you boxing clever and feeling fantastic.",
      "Training sessions will be twice weekly Mondays and Wednesdays at 8.00pm.",
      "The programme costs €180, for further information call Cathal on +353 87 8526323 or email: info@whitecollarboxing.org."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our next Million Dollar Baby fitness programme kicks off at The National Stadium Gym on the South Circular Road in Dublin 8 on Monday, March 22nd."
      },
      {
        "t": "p",
        "v": "The unique ladies only programme comprises of 8 weeks training that will have you boxing clever and feeling fantastic."
      },
      {
        "t": "p",
        "v": "Training sessions will be twice weekly Mondays and Wednesdays at 8.00pm."
      },
      {
        "t": "p",
        "v": "The programme costs €180, for further information call Cathal on +353 87 8526323 or email: info@whitecollarboxing.org."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "punch-your-way-into-a-new-decade",
      "title": "Punch your way into a new decade"
    },
    "next": {
      "slug": "check-us-out-on-facebook",
      "title": "Check us out on facebook"
    }
  },
  {
    "slug": "punch-your-way-into-a-new-decade",
    "title": "Punch your way into a new decade",
    "date": "January 16, 2010",
    "excerpt": "Its a New Year and and a new decade. Youre probably fed up off all those failed diets and fitness regime that you havent been able to stick to as part of your New Years resolutions so why not make a fresh start with White Collar Boxing? Our new program for 2010 is just about […]",
    "paragraphs": [
      "Its a New Year and and a new decade. Youre probably fed up off all those failed diets and fitness regime that you havent been able to stick to as part of your New Years resolutions so why not make a fresh start with White Collar Boxing?",
      "Our new program for 2010 is just about to kick off with weekly training sessions at the National Stadium on the South Circular road in Dublin.",
      "After two months training from our Olympic coaches you will be fighting fit and may even feel brave enough to step into the ring for a White Collar Fight Night and give yourself the ultimate adrenalin rush!",
      "For further information contact Cathal on 087 8526323 or email info@whitecollarboxing.org."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Its a New Year and and a new decade. Youre probably fed up off all those failed diets and fitness regime that you havent been able to stick to as part of your New Years resolutions so why not make a fresh start with White Collar Boxing?"
      },
      {
        "t": "p",
        "v": "Our new program for 2010 is just about to kick off with weekly training sessions at the National Stadium on the South Circular road in Dublin."
      },
      {
        "t": "p",
        "v": "After two months training from our Olympic coaches you will be fighting fit and may even feel brave enough to step into the ring for a White Collar Fight Night and give yourself the ultimate adrenalin rush!"
      },
      {
        "t": "p",
        "v": "For further information contact Cathal on 087 8526323 or email info@whitecollarboxing.org."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": {
      "slug": "are-you-the-next-million-dollar-baby",
      "title": "Are you the next million dollar baby?"
    },
    "next": {
      "slug": "million-dollar-babies",
      "title": "Million dollar babies"
    }
  },
  {
    "slug": "are-you-the-next-million-dollar-baby",
    "title": "Are you the next million dollar baby?",
    "date": "January 16, 2010",
    "excerpt": "The Million Dollar Baby fitness program (ladies only) is one of our most popular programs. Sign up now for two weekly training sessions at the National Stadium on the South Circular road in Dublin. The program is currently available at a special discounted rate of €200.",
    "paragraphs": [
      "The Million Dollar Baby fitness program (ladies only) is one of our most popular programs. Sign up now for two weekly training sessions at the National Stadium on the South Circular road in Dublin.",
      "The program is currently available at a special discounted rate of €200."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "The Million Dollar Baby fitness program (ladies only) is one of our most popular programs. Sign up now for two weekly training sessions at the National Stadium on the South Circular road in Dublin."
      },
      {
        "t": "p",
        "v": "The program is currently available at a special discounted rate of €200."
      },
      {
        "t": "img",
        "src": "http://whitecollarboxing.org/ksi9:-7ney_-/../_img/13.jpg",
        "alt": "million dollar baby"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      }
    ],
    "prev": null,
    "next": {
      "slug": "punch-your-way-into-a-new-decade",
      "title": "Punch your way into a new decade"
    }
  },
  {
    "slug": "early-morning-boxing-september-2022",
    "title": "Early Morning Boxing September 2022",
    "date": "",
    "excerpt": "Set your alarm clock. 7am Boxing is back for September!! Burn up to 1000 calories in 1 class Start the day the right way. Expect bag work, kettlebells, bodyweight exercise. You have never trained like this before This programme is suitable for all levels of fitness and no boxing experience necessary. Classes are limited to […]",
    "paragraphs": [
      "Set your alarm clock. 7am Boxing is back for September!!",
      "Burn up to 1000 calories in 1 class Start the day the right way. Expect bag work, kettlebells, bodyweight exercise. You have never trained like this before",
      "This programme is suitable for all levels of fitness and no boxing experience necessary. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!",
      "This programme commences on Monday the 12th September, & will run each Tuesday and Thursday @7.00 am for 8 weeks.",
      "Book your place now as this always sells out fast"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Set your alarm clock. 7am Boxing is back for September!!"
      },
      {
        "t": "p",
        "v": "Burn up to 1000 calories in 1 class Start the day the right way. Expect bag work, kettlebells, bodyweight exercise. You have never trained like this before"
      },
      {
        "t": "p",
        "v": "This programme is suitable for all levels of fitness and no boxing experience necessary. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!"
      },
      {
        "t": "p",
        "v": "This programme commences on Monday the 12th September, & will run each Tuesday and Thursday @7.00 am for 8 weeks."
      },
      {
        "t": "p",
        "v": "Book your place now as this always sells out fast"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "Events",
        "path": "/category/events_main_page"
      },
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      },
      {
        "label": "Upcoming Events",
        "path": "/category/events_main_page/upcoming_events"
      }
    ],
    "prev": {
      "slug": "beginner-boxing-september-2022",
      "title": "Beginner Boxing September 2022"
    },
    "next": {
      "slug": "september-23-beginner-boxing-programme",
      "title": "September 23 Beginner Boxing Programme"
    }
  },
  {
    "slug": "beginner-boxing-september-2022",
    "title": "Beginner Boxing September 2022",
    "date": "",
    "excerpt": "We are back!! And we are badder than ever!! Our ever popular 8 week Beginners Boxing programme returns on the 12th of September. Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No […]",
    "paragraphs": [
      "We are back!! And we are badder than ever!! Our ever popular 8 week Beginners Boxing programme returns on the 12th of September.",
      "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade.",
      "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!",
      "This programme commences on Monday the 12th September, & will run each Monday & Wednesday @7.00 pm for 8 weeks.",
      "Book your place now as this always sells out fast.",
      "Cost €249 (own gloves required)"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "We are back!! And we are badder than ever!! Our ever popular 8 week Beginners Boxing programme returns on the 12th of September."
      },
      {
        "t": "p",
        "v": "Challenge yourself to master the \"Noble Art\" and see have you got what it takes it go the extra round! Learn every punch in the book! Hit and don't be hit! No two classes are ever the same. Each time you leave the gym you'll have learnt another trick of the trade."
      },
      {
        "t": "p",
        "v": "This programme is suitable for all levels of fitness. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!"
      },
      {
        "t": "p",
        "v": "This programme commences on Monday the 12th September, & will run each Monday & Wednesday @7.00 pm for 8 weeks."
      },
      {
        "t": "p",
        "v": "Book your place now as this always sells out fast."
      },
      {
        "t": "p",
        "v": "Cost €249 (own gloves required)"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      },
      {
        "label": "Upcoming Events",
        "path": "/category/events_main_page/upcoming_events"
      }
    ],
    "prev": {
      "slug": "march-beginner-boxing-8-week-programme",
      "title": "March 2022 Beginner Boxing 8 Week Programme"
    },
    "next": {
      "slug": "early-morning-boxing-september-2022",
      "title": "Early Morning Boxing September 2022"
    }
  },
  {
    "slug": "october-2021-morning-boxing-and-conditioning",
    "title": "October 2021 Morning Boxing and Conditioning",
    "date": "",
    "excerpt": "Set your alarm clock. 7am Boxing is back!! Burn up to 1000 calories in 1 class Start the day the right way. Expect bag work, kettlebells, bodyweight exercise. You have never trained like this before This programme is suitable for all levels of fitness and no boxing experience necessary. Classes are limited to 12 places, […]",
    "paragraphs": [
      "Set your alarm clock. 7am Boxing is back!!",
      "Burn up to 1000 calories in 1 class Start the day the right way. Expect bag work, kettlebells, bodyweight exercise. You have never trained like this before",
      "This programme is suitable for all levels of fitness and no boxing experience necessary. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!",
      "This programme commences on Monday the 4th October, & will run each Monday, Wednesday, Friday @7.00 am for 6 weeks.",
      "Book your place now as this always sells out fast"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Set your alarm clock. 7am Boxing is back!!"
      },
      {
        "t": "p",
        "v": "Burn up to 1000 calories in 1 class Start the day the right way. Expect bag work, kettlebells, bodyweight exercise. You have never trained like this before"
      },
      {
        "t": "p",
        "v": "This programme is suitable for all levels of fitness and no boxing experience necessary. Classes are limited to 12 places, allowing extra space & safety, whilst being coached by one of our expert coaches. Remember there is no where to hide in our gym!"
      },
      {
        "t": "p",
        "v": "This programme commences on Monday the 4th October, & will run each Monday, Wednesday, Friday @7.00 am for 6 weeks."
      },
      {
        "t": "p",
        "v": "Book your place now as this always sells out fast"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "boxing-is-back-september-2021-beginners",
      "title": "Boxing is Back September 2021 (Beginners)"
    },
    "next": {
      "slug": "november-6-week-beginner-boxing",
      "title": "November 6 Week Beginner Boxing"
    }
  },
  {
    "slug": "march-boxing-bootcamp",
    "title": "March Boxing Bootcamp",
    "date": "",
    "excerpt": "Our 8 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it […]",
    "paragraphs": [
      "Our 8 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it takes it go the extra round Suitable and challenging for all levels of fitness. Programme Commences on Monday March 16th and Includes 3 classes per week Monday and Wednesday @ 7pm and Saturday 10am All for only €199. Places are limited. Sign up Today"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our 8 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it takes it go the extra round Suitable and challenging for all levels of fitness. Programme Commences on Monday March 16th and Includes 3 classes per week Monday and Wednesday @ 7pm and Saturday 10am All for only €199. Places are limited. Sign up Today"
      },
      {
        "t": "img",
        "src": "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        "alt": ""
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "january-2020-early-morning-boxing",
      "title": "January 2020 Early Morning Boxing"
    },
    "next": {
      "slug": "march-2020-morning-boxing-and-conditioning",
      "title": "March 2020 Morning Boxing and Conditioning"
    }
  },
  {
    "slug": "january-boxing-and-conditioning-2019",
    "title": "January Boxing and Conditioning 2019",
    "date": "",
    "excerpt": "Our 8 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it […]",
    "paragraphs": [
      "Our 8 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it takes it go the extra round Suitable and challenging for all levels of fitness. Programme Commences on Monday January 14th and Includes 3 classes per week Monday and Wednesday @ 7pm and Saturday 10am All for only €199. Places are limited. Sign up Today"
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our 8 week Boxing and Conditioning programme is the ultimate fitness workout. We mix up traditional boxing techniques with killer conditioning exercises all after our signature boxing warm up Expect bag work, medicine balls, battle ropes, mat work, and expert boxing coaches. Challenge yourself to master the technique and see have you got what it takes it go the extra round Suitable and challenging for all levels of fitness. Programme Commences on Monday January 14th and Includes 3 classes per week Monday and Wednesday @ 7pm and Saturday 10am All for only €199. Places are limited. Sign up Today"
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "november-boxing-and-conditioning",
      "title": "November Boxing And Conditioning"
    },
    "next": {
      "slug": "weworkwebox",
      "title": "weworkwebox"
    }
  },
  {
    "slug": "april-boxing-bootcamp",
    "title": "April Boxing Bootcamp",
    "date": "",
    "excerpt": "Our April 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on […]",
    "paragraphs": [
      "Our April 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on Tuesday April 3rd & includes boxing x 2 (Tues and Thurs @7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutritional support *Sparring(optional) *Bagwork *Assessment and tracking *All for only €199. Place are Limited. Sign up today."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our April 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on Tuesday April 3rd & includes boxing x 2 (Tues and Thurs @7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutritional support *Sparring(optional) *Bagwork *Assessment and tracking *All for only €199. Place are Limited. Sign up today."
      }
    ],
    "postedIn": [
      {
        "label": "News",
        "path": "/category/news_page"
      },
      {
        "label": "Training",
        "path": "/category/training_fixed"
      }
    ],
    "prev": {
      "slug": "celbridge-gaa-fight-night",
      "title": "Celbridge Gaa Fight Night"
    },
    "next": {
      "slug": "september-boxing-bootcamp",
      "title": "September Boxing Bootcamp"
    }
  },
  {
    "slug": "training",
    "title": "Training",
    "date": "",
    "excerpt": "Our next 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on […]",
    "paragraphs": [
      "Our next 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on the 12th of September & includes boxing x 2 (Mon & Wed ´@7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutrition Workshop *A Fight Night (optional) *Assessment and tracking *All for only €199. Place are Limited. Sign up today."
    ],
    "image": null,
    "blocks": [
      {
        "t": "p",
        "v": "Our next 8 week boxing bootcamp is now open for applicants. This is the perfect way to get you \"Fighting Fit\". We have seen fanatastic results from our previous groups. Learn a new sport, be trained & motivated by our dedicated team, including two former Olympians & an International Athletics champion. Our programme commences on the 12th of September & includes boxing x 2 (Mon & Wed ´@7pm) & Strength & Conditioning x 1 (sat 10am). Programme includes * 8 weeks training (X 24 sessions) *Nutrition Workshop *A Fight Night (optional) *Assessment and tracking *All for only €199. Place are Limited. Sign up today."
      }
    ],
    "postedIn": [],
    "prev": null,
    "next": null
  }
];

const postBySlug = new Map(posts.map((p) => [p.slug, p]));

export function getPost(slug: string): Post | undefined {
  return postBySlug.get(slug);
}

export function getCategoryByPath(path: string): Category | undefined {
  return categoryList.find((c) => c.path === path);
}

export function getPostsByCategory(key: CategoryKey): Post[] {
  return (categoryOrder[key] || [])
    .map((slug) => postBySlug.get(slug))
    .filter((p): p is Post => Boolean(p));
}
