var naughtyWords = [
	'2girls1cup',
	'2g1c',
	'a2m',
	'acrotomophilia',
	'ahole',
	'alabamahotpocket',
	'alaskanpipeline',
	'anal',
	'analimpaler',
	'analleakage',
	'analprobe',
	'anilingus',
	'anus',
	'apeshit',
	'areola',
	'areole',
	'arian',
	'arrse',
	'arse',
	'arsehole',
	'ass',
	'assfuck',
	'assfuck',
	'asshole',
	'assbag',
	'assbandit',
	'assbang',
	'assbanged',
	'assbanger',
	'assbangs',
	'assbite',
	'assclown',
	'asscock',
	'asscracker',
	'asses',
	'assface',
	'assfaces',
	'assfuck',
	'assfucker',
	'assfukka',
	'assgoblin',
	'asshat',
	'asshead',
	'asshole',
	'assholes',
	'asshopper',
	'assjacker',
	'asslick',
	'asslicker',
	'assmaster',
	'assmonkey',
	'assmucus',
	'assmucus',
	'assmunch',
	'assmuncher',
	'asspirate',
	'assshit',
	'assshole',
	'asssucker',
	'asswad',
	'asswhole',
	'asswipe',
	'asswipes',
	'autoerotic',
	'autoerotic',
	'axwound',
	'azazel',
	'azz',
	'babeland',
	'babybatter',
	'babyjuice',
	'ballgag',
	'ballgravy',
	'ballkicking',
	'balllicking',
	'ballsack',
	'ballsucking',
	'ballbag',
	'balls',
	'ballsack',
	'bampot',
	'bangbros',
	'bareback',
	'barelylegal',
	'barenaked',
	'barf',
	'bastard',
	'bastardo',
	'bastards',
	'bastinado',
	'battyboy',
	'bawdy',
	'bbw',
	'bdsm',
	'beaner',
	'beaners',
	'beardedclam',
	'beastial',
	'beastiality',
	'beatch',
	'beaver',
	'beavercleaver',
	'beaverlips',
	'beefcurtain',
	'beefcurtain',
	'beefcurtains',
	'beeyotch',
	'bellend',
	'bender',
	'beotch',
	'bescumber',
	'bestial',
	'bestiality',
	'biatch',
	'bigblack',
	'bigbreasts',
	'bigknockers',
	'bigtits',
	'bigtits',
	'bimbo',
	'bimbos',
	'bint',
	'birdlock',
	'bitch',
	'bitchtit',
	'bitchtit',
	'bitchass',
	'bitched',
	'bitcher',
	'bitchers',
	'bitches',
	'bitchin',
	'bitching',
	'bitchtits',
	'bitchy',
	'blackcock',
	'blondeaction',
	'blondeonblondeaction',
	'bloodclaat',
	'bloody',
	'bloodyhell',
	'blowjob',
	'blowme',
	'blowmud',
	'blowyourload',
	'blowjob',
	'blowjobs',
	'bluewaffle',
	'bluewaffle',
	'blumpkin',
	'blumpkin',
	'bod',
	'bodily',
	'boink',
	'boiolas',
	'bollock',
	'bollocks',
	'bollok',
	'bollox',
	'bondage',
	'boned',
	'boner',
	'boners',
	'bong',
	'boob',
	'boobies',
	'boobs',
	'booby',
	'booger',
	'bookie',
	'boong',
	'booobs',
	'boooobs',
	'booooobs',
	'booooooobs',
	'bootee',
	'bootie',
	'booty',
	'bootycall',
	'booze',
	'boozer',
	'boozy',
	'bosom',
	'bosomy',
	'breasts',
	'Breeder',
	'brotherfucker',
	'brownshowers',
	'brunetteaction',
	'buceta',
	'bugger',
	'bukkake',
	'bullshit',
	'bulldyke',
	'bulletvibe',
	'bullshit',
	'bullshits',
	'bullshitted',
	'bullturds',
	'bum',
	'bumboy',
	'bumblefuck',
	'bumclat',
	'bummer',
	'buncombe',
	'bung',
	'bunghole',
	'bunghole',
	'bunnyfucker',
	'bustaload',
	'bustaload',
	'busty',
	'butt',
	'buttfuck',
	'buttfuck',
	'buttplug',
	'buttcheeks',
	'buttfuck',
	'buttfucka',
	'buttfucker',
	'butthole',
	'buttmuch',
	'buttmunch',
	'buttplug',
	'caca',
	'cacafuego',
	'cahone',
	'cameltoe',
	'cameltoe',
	'camgirl',
	'camslut',
	'camwhore',
	'carpetmuncher',
	'carpetmuncher',
	'cawk',
	'cervix',
	'chesticle',
	'chickwithadick',
	'chinc',
	'chincs',
	'choad',
	'choade',
	'choade',
	'chocice',
	'chocolaterosebuds',
	'chode',
	'chodes',
	'chotabags',
	'chotabags',
	'cipa',
	'circlejerk',
	'clevelandsteamer',
	'climax',
	'clit',
	'clitlicker',
	'clitlicker',
	'clitface',
	'clitfuck',
	'clitoris',
	'clitorus',
	'clits',
	'clitty',
	'clittylitter',
	'clittylitter',
	'cloverclamps',
	'clunge',
	'clusterfuck',
	'cnut',
	'cocain',
	'cocaine',
	'coccydynia',
	'cock',
	'cockpocket',
	'cockpocket',
	'cocksnot',
	'cocksnot',
	'cocksucker',
	'cockass',
	'cockbite',
	'cockblock',
	'cockburger',
	'cockeye',
	'cockface',
	'cockfucker',
	'cockhead',
	'cockholster',
	'cockjockey',
	'cockknocker',
	'cockknoker',
	'Cocklump',
	'cockmaster',
	'cockmongler',
	'cockmongruel',
	'cockmonkey',
	'cockmunch',
	'cockmuncher',
	'cocknose',
	'cocknugget',
	'cocks',
	'cockshit',
	'cocksmith',
	'cocksmoke',
	'cocksmoker',
	'cocksniffer',
	'cocksuck',
	'cocksuck',
	'cocksucked',
	'cocksucked',
	'cocksucker',
	'cocksuckers',
	'cocksucking',
	'cocksucks',
	'cocksucks',
	'cocksuka',
	'cocksukka',
	'cockwaffle',
	'coffindodger',
	'coital',
	'cok',
	'cokmuncher',
	'coksucka',
	'commie',
	'condom',
	'coochie',
	'coochy',
	'coon',
	'coonnass',
	'coons',
	'cooter',
	'copsomewood',
	'copsomewood',
	'coprolagnia',
	'coprophilia',
	'corksucker',
	'cornhole',
	'cornhole',
	'corpwhore',
	'corpwhore',
	'corpulent',
	'cox',
	'crabs',
	'crack',
	'crackwhore',
	'crap',
	'crappy',
	'creampie',
	'cretin',
	'crikey',
	'cripple',
	'crotte',
	'cum',
	'cumchugger',
	'cumchugger',
	'cumdumpster',
	'cumdumpster',
	'cumfreak',
	'cumfreak',
	'cumguzzler',
	'cumguzzler',
	'cumbubble',
	'cumdump',
	'cumdump',
	'cumdumpster',
	'cumguzzler',
	'cumjockey',
	'cummer',
	'cummin',
	'cumming',
	'cums',
	'cumshot',
	'cumshots',
	'cumslut',
	'cumstain',
	'cumtart',
	'cunilingus',
	'cunillingus',
	'cunnie',
	'cunnilingus',
	'cunny',
	'cunt',
	'cunthair',
	'cunthair',
	'cuntass',
	'cuntbag',
	'cuntbag',
	'cuntface',
	'cunthole',
	'cunthunter',
	'cuntlick',
	'cuntlick',
	'cuntlicker',
	'cuntlicker',
	'cuntlicking',
	'cuntlicking',
	'cuntrag',
	'cunts',
	'cuntsicle',
	'cuntsicle',
	'cuntslut',
	'cus',
	'cutrope',
	'cutrope',
	'cyalis',
	'cyberfuc',
	'cyberfuck',
	'cyberfuck',
	'cyberfucked',
	'cyberfucked',
	'cyberfucker',
	'cyberfuckers',
	'cyberfucking',
	'cyberfucking',
	'dago',
	'dagos',
	'dammit',
	'damn',
	'damned',
	'damnit',
	'darkie',
	'darn',
	'daterape',
	'daterape',
	'deepthroat',
	'deepthroat',
	'deggo',
	'dendrophilia',
	'dick',
	'dickhead',
	'dickhole',
	'dickhole',
	'dickshy',
	'dickshy',
	'dickbag',
	'dickbeaters',
	'dickdipper',
	'dickface',
	'dickflipper',
	'dickfuck',
	'dickfucker',
	'dickhead',
	'dickheads',
	'dickhole',
	'dickish',
	'dickjuice',
	'dickmilk',
	'dickmonger',
	'dickripper',
	'dicks',
	'dicksipper',
	'dickslap',
	'dicksucker',
	'dicksucking',
	'dicktickler',
	'dickwad',
	'dickweasel',
	'dickweed',
	'dickwhipper',
	'dickwod',
	'dickzipper',
	'diddle',
	'dike',
	'dildo',
	'dildos',
	'diligaf',
	'dillweed',
	'dimwit',
	'dingle',
	'dingleberries',
	'dingleberry',
	'dink',
	'dinks',
	'dipship',
	'dipshit',
	'dirsa',
	'dirty',
	'dirtypillows',
	'dirtysanchez',
	'dirtySanchez',
	'div',
	'dlck',
	'dogstyle',
	'doggiestyle',
	'doggiestyle',
	'doggin',
	'dogging',
	'doggystyle',
	'doggystyle',
	'dolcett',
	'domination',
	'dominatrix',
	'dommes',
	'dong',
	'donkeypunch',
	'donkeypunch',
	'donkeyribber',
	'doochbag',
	'doofus',
	'dookie',
	'doosh',
	'dopey',
	'doubledong',
	'doublepenetration',
	'Doublelift',
	'douche',
	'douchebag',
	'douchebags',
	'douchewaffle',
	'douchey',
	'dpaction',
	'drunk',
	'dryhump',
	'duche',
	'dumass',
	'dumbass',
	'dumbass',
	'dumbasses',
	'Dumbcunt',
	'dumbfuck',
	'dumbshit',
	'dummy',
	'dumshit',
	'dvda',
	'dyke',
	'dykes',
	'eatadick',
	'eatadick',
	'eathairpie',
	'eathairpie',
	'eatmyass',
	'ecchi',
	'ejaculate',
	'ejaculated',
	'ejaculates',
	'ejaculates',
	'ejaculating',
	'ejaculating',
	'ejaculatings',
	'ejaculation',
	'ejakulate',
	'erect',
	'erection',
	'erotic',
	'erotism',
	'escort',
	'essohbee',
	'eunuch',
	'extacy',
	'extasy',
	'fuck',
	'fucker',
	'facial',
	'fack',
	'fanny',
	'fannybandit',
	'fannyflaps',
	'fannyfucker',
	'fanyy',
	'fart',
	'fartknocker',
	'fatass',
	'fcuk',
	'fcuker',
	'fcuking',
	'fecal',
	'feck',
	'fecker',
	'feist',
	'felch',
	'felcher',
	'felching',
	'fellate',
	'fellatio',
	'feltch',
	'feltcher',
	'femalesquirting',
	'femdom',
	'fenian',
	'fice',
	'figging',
	'fingerbang',
	'fingerfuck',
	'fingerfuck',
	'fingerfucked',
	'fingerfucked',
	'fingerfucker',
	'fingerfucker',
	'fingerfuckers',
	'fingerfucking',
	'fingerfucking',
	'fingerfucks',
	'fingerfucks',
	'fingering',
	'fistfuck',
	'fistfuck',
	'fisted',
	'fistfuck',
	'fistfucked',
	'fistfucked',
	'fistfucker',
	'fistfucker',
	'fistfuckers',
	'fistfuckers',
	'fistfucking',
	'fistfucking',
	'fistfuckings',
	'fistfuckings',
	'fistfucks',
	'fistfucks',
	'fisting',
	'fisty',
	'flamer',
	'flange',
	'flaps',
	'fleshflute',
	'flogthelog',
	'flogthelog',
	'floozy',
	'foad',
	'foah',
	'fondle',
	'foobar',
	'fook',
	'fooker',
	'footfetish',
	'footjob',
	'foreskin',
	'freex',
	'frenchify',
	'frigg',
	'frigga',
	'frotting',
	'fubar',
	'fuc',
	'fuck',
	'fuck',
	'fuckbuttons',
	'fuckhole',
	'fuckhole',
	'Fuckoff',
	'fuckpuppet',
	'fuckpuppet',
	'fucktrophy',
	'fucktrophy',
	'fuckyomama',
	'fuckyomama',
	'fuckyou',
	'fucka',
	'fuckass',
	'fuckbag',
	'fuckboy',
	'fuckbrain',
	'fuckbutt',
	'fuckbutter',
	'fucked',
	'fuckedup',
	'fucker',
	'fuckers',
	'fuckersucker',
	'fuckface',
	'fuckhead',
	'fuckheads',
	'fuckhole',
	'fuckin',
	'fucking',
	'fuckings',
	'fuckingshitmotherfucker',
	'fuckme',
	'fuckme',
	'fuckmeat',
	'fuckmeat',
	'fucknugget',
	'fucknut',
	'fucknutt',
	'fuckoff',
	'fucks',
	'fuckstick',
	'fucktard',
	'fucktards',
	'fucktart',
	'fucktoy',
	'fucktoy',
	'fucktwat',
	'fuckup',
	'fuckwad',
	'fuckwhit',
	'fuckwit',
	'fuckwitt',
	'fudgepacker',
	'fudgepacker',
	'fuk',
	'fuker',
	'fukker',
	'fukkers',
	'fukkin',
	'fuks',
	'fukwhit',
	'fukwit',
	'fuq',
	'futanari',
	'fux',
	'fux0r',
	'fvck',
	'fxck',
	'gae',
	'gai',
	'gangbang',
	'gangbang',
	'gangbanged',
	'gangbangs',
	'ganja',
	'gash',
	'gassyass',
	'gassyass',
	'gay',
	'gaysex',
	'gayass',
	'gaybob',
	'gaydo',
	'gayfuck',
	'gayfuckist',
	'gaylord',
	'gays',
	'gaysex',
	'gaytard',
	'gaywad',
	'genderbender',
	'genitals',
	'gey',
	'gfy',
	'ghay',
	'ghey',
	'giantcock',
	'gigolo',
	'ginger',
	'gippo',
	'girlon',
	'girlontop',
	'girlsgonewild',
	'git',
	'glans',
	'goatcx',
	'goatse',
	'god',
	'goddamn',
	'godamn',
	'godamnit',
	'goddam',
	'goddammit',
	'goddamn',
	'goddamned',
	'goddamnit',
	'godsdamn',
	'gokkun',
	'goldenshower',
	'goldenshower',
	'gonad',
	'gonads',
	'googirl',
	'gooch',
	'goodpoop',
	'gook',
	'gooks',
	'goregasm',
	'gringo',
	'grope',
	'groupsex',
	'gspot',
	'gtfo',
	'guido',
	'guro',
	'hamflap',
	'hamflap',
	'handjob',
	'handjob',
	'hardcore',
	'hardon',
	'hardcore',
	'hardcoresex',
	'hebe',
	'heeb',
	'hell',
	'hemp',
	'hentai',
	'heroin',
	'herp',
	'herpes',
	'herpy',
	'heshe',
	'hircismus',
	'hitler',
	'hiv',
	'ho',
	'hoar',
	'hoare',
	'hobag',
	'hoe',
	'hoer',
	'holyshit',
	'homo',
	'homodumbshit',
	'homoerotic',
	'homoey',
	'honkey',
	'honky',
	'hooch',
	'hookah',
	'hooker',
	'hoor',
	'hootch',
	'hooter',
	'hooters',
	'hore',
	'horniest',
	'horny',
	'hotcarl',
	'hotchick',
	'hotsex',
	'howtokill',
	'howtomurdep',
	'howtomurder',
	'hugefat',
	'hump',
	'humped',
	'humping',
	'hun',
	'hussy',
	'hymen',
	'iap',
	'iberianslap',
	'inbred',
	'incest',
	'injun',
	'intercourse',
	'jackoff',
	'jackass',
	'jackasses',
	'jackhole',
	'jackoff',
	'jaggi',
	'jagoff',
	'jailbait',
	'jailbait',
	'jellydonut',
	'jerk',
	'jerkoff',
	'jerkass',
	'jerked',
	'jerkoff',
	'jism',
	'jiz',
	'jiz',
	'jizm',
	'jizm',
	'jizz',
	'jizzed',
	'jock',
	'juggs',
	'junkie',
	'junky',
	'kafir',
	'kawk',
	'kike',
	'kikes',
	'kill',
	'kinbaku',
	'kinkster',
	'kinky',
	'klan',
	'knob',
	'knobend',
	'knobbing',
	'knobead',
	'knobed',
	'knobend',
	'knobhead',
	'knobjocky',
	'knobjokey',
	'kock',
	'kondum',
	'kondums',
	'kooch',
	'kooches',
	'kootch',
	'kraut',
	'kum',
	'kummer',
	'kumming',
	'kums',
	'kunilingus',
	'kunja',
	'kunt',
	'kwif',
	'kwif',
	'kyke',
	'labia',
	'lameass',
	'lardass',
	'leatherrestraint',
	'leatherstraightjacket',
	'lech',
	'lemonparty',
	'LEN',
	'leper',
	'lesbian',
	'lesbians',
	'lesbo',
	'lesbos',
	'lez',
	'lezzie',
	'lmao',
	'lmfao',
	'loin',
	'loins',
	'lolita',
	'looney',
	'lovemaking',
	'lube',
	'lust',
	'lusting',
	'lusty',
	'mafugly',
	'mafugly',
	'makemecome',
	'malesquirting',
	'mams',
	'masochist',
	'massa',
	'masterb8',
	'masterbate',
	'masterbating',
	'masterbation',
	'masterbations',
	'masturbate',
	'masturbating',
	'masturbation',
	'maxi',
	'menageatrois',
	'menses',
	'menstruate',
	'menstruation',
	'meth',
	'mick',
	'microphallus',
	'middlefinger',
	'midget',
	'milf',
	'minge',
	'minger',
	'missionaryposition',
	'mofo',
	'molest',
	'mong',
	'moomoofoofoo',
	'moolie',
	'moron',
	'mothafuck',
	'mothafucka',
	'mothafuckas',
	'mothafuckaz',
	'mothafucked',
	'mothafucked',
	'mothafucker',
	'mothafuckers',
	'mothafuckin',
	'mothafucking',
	'mothafucking',
	'mothafuckings',
	'mothafucks',
	'motherfucker',
	'motherfucker',
	'motherfuck',
	'motherfucka',
	'motherfucked',
	'motherfucker',
	'motherfuckers',
	'motherfuckin',
	'motherfucking',
	'motherfuckings',
	'motherfuckka',
	'motherfucks',
	'moundofvenus',
	'mrhands',
	'muff',
	'muffdiver',
	'muffpuff',
	'muffpuff',
	'muffdiver',
	'muffdiving',
	'munging',
	'munter',
	'murder',
	'mutha',
	'muthafecker',
	'muthafuckker',
	'muther',
	'mutherfucker',
	'naked',
	'nambla',
	'napalm',
	'nappy',
	'nawashi',
	'needthedick',
	'negro',
	'nimphomania',
	'nimrod',
	'ninny',
	'ninnyhammer',
	'nipple',
	'nipples',
	'nob',
	'nobjokey',
	'nobhead',
	'nobjocky',
	'nobjokey',
	'nonce',
	'nsfwimages',
	'nude',
	'nudity',
	'numbnuts',
	'nutbutter',
	'nutbutter',
	'nutsack',
	'nutsack',
	'nutter',
	'nympho',
	'nymphomania',
	'octopussy',
	'oldbag',
	'omg',
	'omorashi',
	'onecuptwogirls',
	'oneguyonejar',
	'opiate',
	'opium',
	'orally',
	'organ',
	'orgasim',
	'orgasims',
	'orgasm',
	'orgasmic',
	'orgasms',
	'orgies',
	'orgy',
	'ovary',
	'ovum',
	'paedophile',
	'paki',
	'panooch',
	'pansy',
	'pantie',
	'panties',
	'panty',
	'pawn',
	'pcp',
	'pecker',
	'peckerhead',
	'pedo',
	'pedobear',
	'pedophile',
	'pedophilia',
	'pedophiliac',
	'pee',
	'peepee',
	'pegging',
	'penetrate',
	'penetration',
	'penial',
	'penile',
	'penis',
	'penisbanger',
	'penisfucker',
	'penispuffer',
	'perversion',
	'phallic',
	'phonesex',
	'phonesex',
	'phuck',
	'phuk',
	'phuked',
	'phuking',
	'phukked',
	'phukking',
	'phuks',
	'phuq',
	'pieceofshit',
	'pigfucker',
	'pikey',
	'pillowbiter',
	'pimp',
	'pimpis',
	'pinko',
	'piss',
	'pissoff',
	'pisspig',
	'pissed',
	'pissedoff',
	'pisser',
	'pissers',
	'pisses',
	'pisses',
	'pissflaps',
	'pissin',
	'pissin',
	'pissing',
	'pissoff',
	'pissoff',
	'pisspig',
	'playboy',
	'pleasurechest',
	'pms',
	'polack',
	'polesmoker',
	'polesmoker',
	'pollock',
	'ponyplay',
	'poof',
	'poon',
	'poonani',
	'poonany',
	'poontang',
	'poop',
	'poopchute',
	'poopchute',
	'Poopuncher',
	'porchmonkey',
	'porchmonkey',
	'porn',
	'porno',
	'pornography',
	'pornos',
	'pot',
	'potty',
	'prick',
	'pricks',
	'prickteaser',
	'prig',
	'princealbertpiercing',
	'prod',
	'pron',
	'prostitute',
	'prude',
	'psycho',
	'pthc',
	'pube',
	'pubes',
	'pubic',
	'pubis',
	'punani',
	'punanny',
	'punany',
	'punkass',
	'punky',
	'punta',
	'puss',
	'pusse',
	'pussi',
	'pussies',
	'pussy',
	'pussyfart',
	'pussyfart',
	'pussypalace',
	'pussypalace',
	'pussylicking',
	'pussypounder',
	'pussys',
	'pust',
	'puto',
	'queaf',
	'queaf',
	'queef',
	'queer',
	'queerbait',
	'queerhole',
	'queero',
	'queers',
	'quicky',
	'quim',
	'racy',
	'raghead',
	'ragingboner',
	'rape',
	'raped',
	'raper',
	'rapey',
	'raping',
	'rapist',
	'raunch',
	'rectal',
	'rectum',
	'rectus',
	'reefer',
	'reetard',
	'reich',
	'renob',
	'retard',
	'retarded',
	'reversecowgirl',
	'revue',
	'rimjaw',
	'rimjob',
	'rimming',
	'ritard',
	'rosypalm',
	'rosypalmandher5sisters',
	'rtard',
	'rubbish',
	'rum',
	'rump',
	'rumprammer',
	'ruski',
	'rustytrombone',
	'shit',
	'sadism',
	'sadist',
	'sambo',
	'sandbar',
	'sandbar',
	'Sandler',
	'sanger',
	'santorum',
	'sausagequeen',
	'scag',
	'scantily',
	'scat',
	'schizo',
	'schlong',
	'scissoring',
	'screw',
	'screwed',
	'screwing',
	'scroat',
	'scrog',
	'scrot',
	'scrote',
	'scrotum',
	'scrud',
	'scum',
	'seaman',
	'seamen',
	'seduce',
	'seks',
	'semen',
	'sex',
	'sexo',
	'sexual',
	'sexy',
	'shag',
	'shagger',
	'shaggin',
	'shagging',
	'shamedame',
	'shavedbeaver',
	'shavedpussy',
	'shemale',
	'shibari',
	'shirtlifter',
	'shit',
	'shitass',
	'shitfucker',
	'shitfucker',
	'shitass',
	'shitbag',
	'shitbagger',
	'shitblimp',
	'shitbrains',
	'shitbreath',
	'shitcanned',
	'shitcunt',
	'shitdick',
	'shite',
	'shiteater',
	'shited',
	'shitey',
	'shitface',
	'shitfaced',
	'shitfuck',
	'shitfull',
	'shithead',
	'shitheads',
	'shithole',
	'shithouse',
	'shiting',
	'shitings',
	'shits',
	'shitspitter',
	'shitstain',
	'shitt',
	'shitted',
	'shitter',
	'shitters',
	'shitters',
	'shittier',
	'shittiest',
	'shitting',
	'shittings',
	'shitty',
	'shiz',
	'shiznit',
	'shota',
	'shrimping',
	'sissy',
	'skag',
	'skank',
	'skeet',
	'skullfuck',
	'slag',
	'slanteye',
	'slave',
	'sleaze',
	'sleazy',
	'slope',
	'slope',
	'slut',
	'slutbucket',
	'slutbucket',
	'slutbag',
	'slutdumper',
	'slutkiss',
	'sluts',
	'smartass',
	'smartasses',
	'smeg',
	'smegma',
	'smut',
	'smutty',
	'snatch',
	'sniper',
	'snowballing',
	'snuff',
	'sodoff',
	'sodom',
	'sodomize',
	'sodomy',
	'sonofabitch',
	'sonofamotherlessgoat',
	'sonofawhore',
	'souse',
	'soused',
	'spac',
	'spade',
	'sperm',
	'splooge',
	'sploogemoose',
	'spooge',
	'spook',
	'spreadlegs',
	'spunk',
	'stfu',
	'stiffy',
	'stoned',
	'strapon',
	'strapon',
	'strappado',
	'strip',
	'stripclub',
	'stroke',
	'stupid',
	'styledoggy',
	'suck',
	'suckass',
	'sucked',
	'sucking',
	'sucks',
	'suicidegirls',
	'sultrywomen',
	'sumofabiatch',
	'swastika',
	'swinger',
	'taff',
	'taig',
	'taintedlove',
	'takingthepiss',
	'tampon',
	'tard',
	'tart',
	'tastemy',
	'tawdry',
	'teabagging',
	'teabagging',
	'teat',
	'teets',
	'teez',
	'teste',
	'testee',
	'testes',
	'testical',
	'testicle',
	'testis',
	'threesome',
	'throating',
	'thrust',
	'thug',
	'thundercunt',
	'tiedup',
	'tightwhite',
	'tinkle',
	'tit',
	'titwank',
	'titwank',
	'titfuck',
	'titi',
	'tities',
	'tits',
	'titt',
	'tittiefucker',
	'titties',
	'titty',
	'tittyfuck',
	'tittyfucker',
	'tittywank',
	'titwank',
	'toke',
	'tongueina',
	'toots',
	'topless',
	'tosser',
	'tramp',
	'trashy',
	'tribadism',
	'trumped',
	'tubgirl',
	'tubgirl',
	'turd',
	'tush',
	'tushy',
	'twat',
	'twathead',
	'twatlips',
	'twats',
	'twatty',
	'twatwaffle',
	'twink',
	'twinkie',
	'twofingers',
	'twofingerswithtongue',
	'twogirlsonecup',
	'twunt',
	'twunter',
	'ugly',
	'unclefucker',
	'undies',
	'undressing',
	'unwed',
	'upskirt',
	'urethraplay',
	'urinal',
	'urine',
	'urophilia',
	'uterus',
	'uzi',
	'vag',
	'vagina',
	'vajayjay',
	'valium',
	'venusmound',
	'veqtable',
	'viagra',
	'vibrator',
	'violetwand',
	'virgin',
	'vixen',
	'vjayjay',
	'vodka',
	'vomit',
	'vorarephilia',
	'voyeur',
	'vulgar',
	'vulva',
	'wad',
	'wang',
	'wank',
	'wanker',
	'wankjob',
	'wanky',
	'wazoo',
	'wedgie',
	'weed',
	'weenie',
	'weewee',
	'weiner',
	'weirdo',
	'wench',
	'wetdream',
	'wetback',
	'whiz',
	'whoar',
	'whoralicious',
	'whore',
	'whorealicious',
	'whorebag',
	'whored',
	'whoreface',
	'whorehopper',
	'whorehouse',
	'whores',
	'whoring',
	'wigger',
	'willies',
	'willy',
	'windowlicker',
	'wiseass',
	'wiseasses',
	'womb',
	'wop',
	'wrappingmen',
	'wrinkledstarfish',
	'wtf',
	'xrated',
	'xx',
	'xxx',
	'yaoi',
	'yeasty',
	'yellowshowers',
	'yid',
	'yiffy',
	'yobbo',
	'zibbi',
	'zoophilia',
	'zubb',
];