import { GData2 } from "./adventureland-data"

/** 
 * The following is from http://adventure.land/data.js, version 666 (2021-04-27)
 * It is used to confirm type correctness
 */

test("G.npcs type validation", async () => {
    const G_npcs: Pick<GData2, "npcs"> = {
        "npcs": {
            "items22": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items22",
                "pack": "items22"
            },
            "citizen12": {
                "says": [
                    "I'd hate to find you dead *wink*",
                    "Bloody hell",
                    "What are you doing here",
                    "Who the hell would like living here",
                    "Where is my shovel",
                    "Stay out of the graveyard",
                    "Go home kid",
                    "Seen any good junk around",
                    "Whatca looking for",
                    "Go away",
                    "This isn't the place for you",
                    "Ever heard of minding your own business",
                    "Ever seen a dead man",
                    "Hhehehe",
                    "Finders keepers"
                ],
                "hp": 1200,
                "skin": "marven",
                "speed": 32,
                "id": "citizen12",
                "interaction": [
                    "I watch over the graves. Sometimes people leave 'gifts' on a grave. Ehhh, sometimes I clean the graves of these items."
                ],
                "name": "Marven",
                "level": 42,
                "delay": 3200,
                "role": "citizen",
                "type": "fullstatic"
            },
            "citizen13": {
                "says": [
                    "I see dead people",
                    "Ghosts speak to me",
                    "Are zombies real",
                    "R.I.P. Such nice letters",
                    "*evil glare*",
                    "I serve Death",
                    "Death is my leader",
                    "All Hail Death",
                    "Danger awaits you",
                    "Dracul please take me as your bride",
                    "Death isn't the end",
                    "Do you know of any cults",
                    "Wizard could go to hell I serve Death",
                    "It never rains here, I'm only happy when it rains",
                    "My eyes are blood red",
                    "My favorite color is red",
                    "I'd like to meet my demons"
                ],
                "hp": 1200,
                "skin": "grogue",
                "speed": 32,
                "id": "citizen13",
                "interaction": [
                    "I am a firm believer that the dark arts would solve a lot of problems if it was acceptable to practice them.",
                    "Did you know that Ms. Dracul used to be a member of this village... before she transcended the limitations of mankind. I wish I had the courage to do the rituals required.",
                    "Dracul is a very well-known name around these parts. I wish I could be like them..",
                    "I heard there is a way to get +13 items, anything can turn into one, but you can't even see it ..."
                ],
                "name": "Divian",
                "level": 42,
                "delay": 3200,
                "role": "citizen",
                "type": "fullstatic"
            },
            "citizen10": {
                "says": [
                    "Hi",
                    "My coat keeps me super warm",
                    "Stompy used to be my favorite boar",
                    "I wish stompy would come home",
                    "That inn over there is always a great place",
                    "I want to be everyone's friend",
                    "Do you need a hug",
                    "Hugs keep you warm",
                    "*gives you a hug*",
                    "Free hugs",
                    "This village is mostly boar farmers",
                    "Hey",
                    "Hello",
                    "*wiggles in pink coat*",
                    "Pink is my favorite color",
                    "I'd love to work for Santa"
                ],
                "hp": 12000,
                "skin": "pink",
                "speed": 28,
                "id": "citizen10",
                "interaction": [
                    "Hey Hey guess what! I like the color Pink! I bet you couldn't guess that.",
                    "If Santa ever comes back, I hope I could be his little helper.",
                    "Make sure you wear warm clothes, it's a little chilly out here."
                ],
                "name": "Caroline",
                "level": 92,
                "delay": 1200,
                "role": "citizen",
                "type": "fullstatic"
            },
            "citizen11": {
                "says": [
                    "Stranger",
                    "Where is mother",
                    "Cursed land",
                    "Stay clear",
                    "Go away",
                    "Back away",
                    "*stares blankly*",
                    "*stares coldly*",
                    "...",
                    ".....",
                    "........",
                    "Halt",
                    "Must protect",
                    "Never forget",
                    "Defend",
                    "Protect",
                    "For honor"
                ],
                "hp": 120000,
                "skin": "baron",
                "speed": 28,
                "id": "citizen11",
                "interaction": [
                    "Guard. Village. Protect. Innocents.",
                    "Brothers. Rest. Here. Protect. Over. Their. Graves.",
                    "Remember. The. Fallen. Never. Forget. Their. Sacrifices.",
                    "Heal. The. Fallen."
                ],
                "name": "Baron",
                "level": 120,
                "delay": 12000,
                "role": "citizen",
                "type": "fullstatic"
            },
            "citizen14": {
                "says": [
                    "Hello there",
                    "Where's that boy?",
                    "SON!!!",
                    "Play time is over!",
                    "Welcome",
                    "Same old same old",
                    "Ohh a visitor",
                    "Well hi there",
                    "It's getting late",
                    "Home sweet home",
                    "Are you hungry?"
                ],
                "hp": 4000,
                "skin": "spkw",
                "speed": 28,
                "id": "citizen14",
                "interaction": [
                    "Have you seen my son? He should be around here somewhere.",
                    "It's not a very nice neighborhood around here, But the rent is cheap!",
                    "I heard somewhere that's there's some sort of pumpkin person walking around? That just sounds silly to me"
                ],
                "name": "Violet",
                "level": 70,
                "delay": 4000,
                "role": "citizen",
                "type": "fullstatic"
            },
            "citizen15": {
                "says": [
                    "I think I saw a pumpkin move!!",
                    "I like pumpkins",
                    "Size doesn't matter!",
                    "You found me",
                    "Boo!!",
                    "Weee",
                    "Hello",
                    "*Mumble Mumble*"
                ],
                "hp": 200,
                "skin": "spkc",
                "speed": 16,
                "id": "citizen15",
                "interaction": [
                    "Be careful around here? It's really dangerous up to the north.",
                    "I like to play with the pumpkins, but sometimes they don't want to play and just walk away..",
                    "My imaginary friend is real! And a pumpkin!!"
                ],
                "name": "Timmy",
                "level": 4,
                "delay": 200,
                "role": "citizen",
                "type": "fullstatic"
            },
            "antip2w": {
                "says": "Sup",
                "side_interaction": {
                    "auto": true,
                    "message": "Hey there, good looking fellow. Would you be interested in looking better?",
                    "skin": "fancyd"
                },
                "skin": "fancyd",
                "id": "antip2w",
                "name": "Mr. Dworf",
                "items": [
                    "cosmo0",
                    "cosmo2",
                    "cosmo3"
                ],
                "old_role": "merchant",
                "old_side_interaction": {
                    "auto": true,
                    "message": "I'm the Anti-P2W Authority around here. Making sure all critical items can be bought with gold. Prices can fluctuate based on inflation.",
                    "skin": "fancyd"
                },
                "role": "premium",
                "old_items": [
                    "xpbooster",
                    "goldbooster",
                    "luckbooster",
                    null,
                    null,
                    "xptome",
                    "offering",
                    null,
                    null,
                    null,
                    "qubics",
                    null,
                    null,
                    null
                ],
                "type": "fullstatic"
            },
            "jailer": {
                "says": "Tu-tu-tu",
                "color": "#62C3DF",
                "role": "jailer",
                "skin": "thehelmet",
                "type": "fullstatic",
                "id": "jailer"
            },
            "newupgrade": {
                "says": "+1",
                "name": "Cue",
                "atype": "flow",
                "role": "newupgrade",
                "skin": "newupgrade",
                "id": "newupgrade"
            },
            "goldnpc": {
                "says": "GOLD!",
                "name": "Mr. Rich",
                "color": "#E0B427",
                "role": "gold",
                "skin": "goblin_a",
                "aspeed": "slow",
                "id": "goldnpc"
            },
            "premium": {
                "says": "MMM",
                "name": "Garwyn",
                "items": [
                    "xpbooster",
                    "goldbooster",
                    "luckbooster",
                    null,
                    null,
                    "xptome",
                    "offering",
                    null,
                    null,
                    null,
                    "qubics",
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ],
                "old_role": "premium",
                "atype": "flow",
                "role": "merchant",
                "skin": "pflow",
                "id": "premium"
            },
            "bean": {
                "name": "Bean",
                "type": "full",
                "hp": 3200,
                "role": "daily_events",
                "allow": false,
                "skin": "lionsuit",
                "speed": 30,
                "id": "bean"
            },
            "wnpc": {
                "says": "Help",
                "name": "Wizard",
                "color": "#D96643",
                "quest": "glitch",
                "role": "thesearch",
                "skin": "wizard",
                "type": "fullstatic",
                "id": "wnpc"
            },
            "compound": {
                "type": "static",
                "role": "compound",
                "id": "compound",
                "skin": "shrine2"
            },
            "basics": {
                "says": "Blades, blades, blades",
                "name": "Gabriel",
                "items": [
                    "helmet",
                    "shoes",
                    "gloves",
                    "pants",
                    "coat",
                    "blade",
                    "claw",
                    "staff",
                    "bow",
                    "wshield",
                    "wand",
                    "mace",
                    "wbasher"
                ],
                "atype": "flow",
                "role": "merchant",
                "skin": "daggers",
                "id": "basics"
            },
            "fisherman": {
                "says": "Beautiful",
                "name": "Tristian",
                "color": "#429DDF",
                "quest": "seashell",
                "role": "quest",
                "skin": "fisherman",
                "type": "fullstatic",
                "id": "fisherman"
            },
            "items38": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items38",
                "pack": "items38"
            },
            "pvp": {
                "name": "Ace",
                "type": "full",
                "hp": 5000,
                "role": "pvp_announcer",
                "allow": false,
                "skin": "thehelmet",
                "speed": 40,
                "id": "pvp"
            },
            "lostandfound": {
                "says": "Finders keepers",
                "name": "Ron",
                "color": "#7E65D3",
                "role": "lostandfound",
                "skin": "goblin",
                "type": "fullstatic",
                "id": "lostandfound"
            },
            "thief": {
                "says": "Careful",
                "name": "Crun",
                "color": "#E7E2E7",
                "items": [
                    "licence",
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    "scroll3",
                    "cscroll3"
                ],
                "role": "merchant",
                "skin": "thief",
                "type": "fullstatic",
                "id": "thief"
            },
            "leathermerchant": {
                "says": "Have leathers?",
                "name": "Landon",
                "color": "#6E4430",
                "quest": "leather",
                "role": "quest",
                "skin": "lmerchant",
                "type": "fullstatic",
                "id": "leathermerchant"
            },
            "ornaments": {
                "says": "Hmm. Hmm. Hmm.",
                "name": "Jayson",
                "color": "#E56D39",
                "quest": "ornament",
                "role": "quest",
                "skin": "splithair",
                "type": "fullstatic",
                "id": "ornaments"
            },
            "shellsguy": {
                "says": "Sup",
                "name": "Mr. Dworf",
                "role": "shells",
                "skin": "fancyd",
                "type": "fullstatic",
                "id": "shellsguy"
            },
            "funtokens": {
                "says": "Hihihi",
                "color": "#92D467",
                "side_interaction": {
                    "auto": true,
                    "message": "Once daily event festivities arrive, bring these tokens to me! We wait and wait the day to come!",
                    "skin": "ftokener"
                },
                "skin": "funtokens",
                "id": "funtokens",
                "name": "Tricksy",
                "atype": "flow",
                "token": "funtoken",
                "role": "funtokens",
                "stand": "standg_texture",
                "aspeed": "slow"
            },
            "pete": {
                "says": "Purr",
                "name": "Pete",
                "color": "#EBECEE",
                "role": "petkeeper",
                "skin": "lionsuit",
                "type": "fullstatic",
                "id": "pete"
            },
            "citizen9": {
                "says": [
                    "Oh you like my hair",
                    "Are you here to serve",
                    "I'm sure I can fight off stompy",
                    "Stompy doesn't scare me",
                    "Wizard is my boss",
                    "Good day",
                    "Oh it's snowing",
                    "Snow is nice",
                    "Don't bother the guards building",
                    "Don't flirt with me",
                    "I protect and serve",
                    "I'm a commander",
                    "Greetings stranger",
                    "Hello stranger",
                    "Hi stranger",
                    "I serve the mighty Wizard",
                    "I was instructed to keep this village safe",
                    "The cold doesn't bother me"
                ],
                "hp": 12000,
                "skin": "lilith",
                "speed": 32,
                "id": "citizen9",
                "interaction": [
                    "Greetings Adventurer, are you here to kill some monsters? Great! Always looking for help keeping this land safe.",
                    "Believe it or not. I am the highest ranking officer in these parts. I work hard to keep this town operating and safe."
                ],
                "name": "Lilith",
                "level": 92,
                "delay": 1200,
                "role": "citizen",
                "type": "fullstatic"
            },
            "citizen0": {
                "says": [
                    "Heyoo",
                    "Greetings",
                    "I want a Puppy!",
                    "I want a Kitten!",
                    "Sup",
                    "Nice day",
                    "I wonder why everyone's sitting on my head all of a sudden ..."
                ],
                "hp": 3200,
                "skin": "greencap",
                "speed": 30,
                "id": "citizen0",
                "interaction": [
                    "Hey There! This town is the safest place around. Outside can be dangerous.",
                    "Heyo, I don't understand how those shop owners can just stand around all day. I got to be moving. Kind of restless.",
                    "Just finished school and I've got to go get a real job now. I might become an adventurer since they seem to make a lot of money.",
                    "A friend of mine said the frog thingies in the beach drop some old money or sth like that."
                ],
                "name": "Kane",
                "level": 12,
                "delay": 1200,
                "role": "citizen",
                "aura": {
                    "luck": 200
                },
                "type": "fullstatic"
            },
            "citizen1": {
                "says": [
                    "What is your name",
                    "Bartender give me your strongest liquor",
                    "How are you stranger",
                    "I wonder what my wife is doing at home",
                    "This inns food isn't as good homemade",
                    "Don't buy the food here",
                    "Do I smell",
                    "Good day",
                    "Greetings",
                    "Hello Stranger",
                    "Welcome",
                    "Its warm in here",
                    "*rubs beard*",
                    "Id like a beer",
                    "What beer should I buy",
                    "I need to rent a room",
                    "This place is pretty nice",
                    "Hi there"
                ],
                "hp": 13200,
                "skin": "fxrogue",
                "speed": 40,
                "id": "citizen1",
                "interaction": [
                    "If you don't have a beer in your hand then what are you doing in here!?",
                    "Sit down and tell me a tale!",
                    "If you can't handle the cold then stay inside.. not saying I can't handle the cold.."
                ],
                "name": "Kilgore",
                "level": 120,
                "delay": 1200,
                "steps": 12,
                "role": "citizen",
                "type": "fullstatic"
            },
            "citizen2": {
                "says": [
                    "Freaking youngens",
                    "Go away - Kill some monsters",
                    "Stop",
                    "Someone needs to fix this place up",
                    "I don't have time for this",
                    "I need to go take a nap",
                    "Uhhh",
                    "Mmmehh",
                    "Ugg",
                    "Noob",
                    "Young yipper snappers"
                ],
                "hp": 2400,
                "skin": "oldcitizen",
                "speed": 10,
                "id": "citizen2",
                "interaction": [
                    "Ehh. Back in my day we didn't have all these fancy additions in town, we had the essentials and that's it."
                ],
                "name": "Stewart",
                "level": 32,
                "delay": 12000,
                "role": "citizen",
                "type": "fullstatic"
            },
            "citizen3": {
                "says": [
                    "Do you even lift bro",
                    "Broooo",
                    "Yah I work out",
                    "Sup",
                    "I need to buy some protein",
                    "Lap 203",
                    "Grind 24/7 all day everyday",
                    "You like my headband",
                    "Where are my shoes at",
                    "Where is the gym at",
                    "Nice day to work out",
                    "Wanna work out",
                    "Red headband for the win",
                    "Winners are not losers and I'm a winner",
                    "No I never give up"
                ],
                "hp": 3200,
                "skin": "renaldo",
                "speed": 55,
                "id": "citizen3",
                "interaction": [
                    "I Grind 24 hours a day! 7 days a week! Never Stop! Never Give up! Always Training!!",
                    "My body fat ratio is just 18%. Can you believe it? Yes!",
                    "Do you even lift Bro.",
                    "Hi, I do laps around this town all the time. Gotta stay in shape."
                ],
                "name": "Reny",
                "level": 32,
                "delay": 3600,
                "role": "citizen",
                "type": "fullstatic"
            },
            "citizen4": {
                "says": [
                    "Ohh look who walked into my life",
                    "Single and ready to mingle",
                    "No um I don't own a shop",
                    "Such a nice town",
                    "*fixes dress*",
                    "*gets flustered*",
                    "Would you like a potion sorry",
                    "Ohh look who walked into my life",
                    "Single and ready to mingle",
                    "No um I don't own a shop",
                    "Such a nice town",
                    "*fixes dress*",
                    "*gets flustered*",
                    "Would you like a potion sorry",
                    "No potion for you",
                    "Stop cat calling",
                    "*rolls eyes*Hey sweetie",
                    "Nice day",
                    "Sweet thing are you lost",
                    "Oh hi there cutie",
                    "Lovely weather today",
                    "Do you like my dress",
                    "Welcome to the town"
                ],
                "hp": 24000,
                "skin": "angel",
                "speed": 20,
                "id": "citizen4",
                "interaction": [
                    "I used to sell potions around here, but I decided to retire.",
                    "Always nice to see smiling new faces.",
                    "Are you new here? Welcome.",
                    "This town has grown a lot, I was around when it was just one small block of land."
                ],
                "name": "Angel",
                "level": 80,
                "delay": 6000,
                "role": "citizen",
                "aura": {
                    "gold": 200
                },
                "type": "fullstatic"
            },
            "citizen5": {
                "says": [
                    "I remember the battle of the beards",
                    "Hello",
                    "Greetings",
                    "Good day",
                    "Pretty cold outside ay",
                    "Do you like my outfit",
                    "Hi there",
                    "Tomorrow is a new day",
                    "Ive seen some real shit",
                    "Back in my day ...",
                    "Stompy better die",
                    "*yawns*",
                    "So much snow around here",
                    "*drinks beer*"
                ],
                "hp": 18600,
                "skin": "generalg",
                "speed": 30,
                "id": "citizen5",
                "interaction": [
                    "It is pretty cold outside. I should invest in a hat.",
                    "I came here to pursue a beast called \"Stompy\". I've heard this creature lives in the Ice Mountains nearby.",
                    "I came here for adventure, but now I'm stuck in this bar due to the cold."
                ],
                "name": "Grundur",
                "level": 90,
                "delay": 1200,
                "steps": 12,
                "role": "citizen",
                "type": "fullstatic"
            },
            "citizen6": {
                "says": [
                    "*searches through mail bag*",
                    "*hums to self*",
                    "*whisles*",
                    "Are you new here",
                    "Ohh you're an adventurer",
                    "Good day adventurer",
                    "I like love letters they are sweet",
                    "Um I don't read your letters",
                    "Hey stranger"
                ],
                "hp": 18600,
                "skin": "mailman",
                "speed": 30,
                "id": "citizen6",
                "interaction": [
                    "Hi, I'm a mail man! But no one sends mail out here much. So I guess it's a pretty easy job.",
                    "Careful it's cold outside. But it's nice and warm in here."
                ],
                "name": "Fredric",
                "level": 90,
                "delay": 1200,
                "steps": 12,
                "role": "citizen",
                "type": "fullstatic"
            },
            "citizen7": {
                "says": [
                    "Do you like my scarf",
                    "My mom made my scarf",
                    "Do you know who santa is",
                    "I wonder where santa lives",
                    "I'm used to the cold here",
                    "Hi",
                    "Im going to move to a warmer place one day",
                    "This scarf makes me warm",
                    "Don't hit on me",
                    "I have a boyfriend",
                    "The leather guy is my boyfriend",
                    "I think Stompy is just misunderstood"
                ],
                "hp": 3200,
                "skin": "lucy",
                "speed": 30,
                "id": "citizen7",
                "interaction": [
                    "Hi! Would you like to know a secret? I love the snow.",
                    "Make sure you keep moving, don't want to catch a cold out here.",
                    "I have heard that Santa sometimes visits here during Xmas!"
                ],
                "name": "Lucy",
                "level": 48,
                "delay": 1200,
                "role": "citizen",
                "type": "fullstatic"
            },
            "weapons": {
                "says": "Blades, blades, blades",
                "items": [
                    "blade",
                    "claw",
                    "staff",
                    "bow"
                ],
                "atype": "flow",
                "ignore": true,
                "role": "merchant",
                "skin": "daggers",
                "id": "weapons"
            },
            "scrolls": {
                "says": "Good Luck",
                "name": "Lucas",
                "items": [
                    "scroll0",
                    "cscroll0",
                    "strscroll",
                    "intscroll",
                    "dexscroll",
                    "scroll1",
                    "cscroll1",
                    null,
                    null,
                    null,
                    "scroll2",
                    "cscroll2",
                    null,
                    null
                ],
                "role": "merchant",
                "skin": "scrolls",
                "id": "scrolls"
            },
            "exchange": {
                "id": "exchange",
                "says": "Good Luck!",
                "role": "exchange",
                "name": "Xyn",
                "skin": "magic"
            },
            "holo1": {
                "says": [
                    "rbin"
                ],
                "hp": 6000,
                "skin": "pinkie",
                "speed": 24,
                "id": "holo1",
                "interaction": [
                    "rbin"
                ],
                "name": "Pink",
                "level": 0,
                "delay": 5000,
                "role": "citizen",
                "type": "fullstatic"
            },
            "holo0": {
                "says": [
                    "rbin"
                ],
                "hp": 6000,
                "skin": "greengreen",
                "speed": 24,
                "id": "holo0",
                "interaction": [
                    "rbin"
                ],
                "name": "Green",
                "level": 0,
                "delay": 5000,
                "role": "citizen",
                "type": "fullstatic"
            },
            "holo3": {
                "says": [
                    "rbin"
                ],
                "hp": 6000,
                "skin": "scarf",
                "speed": 24,
                "id": "holo3",
                "interaction": [
                    "rbin"
                ],
                "name": "Scarf",
                "level": 0,
                "delay": 3000,
                "role": "citizen",
                "type": "fullstatic"
            },
            "holo2": {
                "says": [
                    "rbin"
                ],
                "hp": 6000,
                "skin": "purpo",
                "speed": 30,
                "id": "holo2",
                "interaction": [
                    "rbin"
                ],
                "name": "Purple",
                "level": 0,
                "delay": 7000,
                "role": "citizen",
                "type": "fullstatic"
            },
            "holo5": {
                "says": [
                    "rbin"
                ],
                "hp": 6000,
                "skin": "bobo",
                "speed": 16,
                "id": "holo5",
                "interaction": [
                    "rbin"
                ],
                "name": "Bobo",
                "level": 0,
                "delay": 8000,
                "role": "citizen",
                "type": "fullstatic"
            },
            "holo4": {
                "says": [
                    "rbin"
                ],
                "hp": 6000,
                "skin": "twig",
                "speed": 48,
                "id": "holo4",
                "interaction": [
                    "rbin"
                ],
                "name": "Twig",
                "level": 0,
                "delay": 24000,
                "role": "citizen",
                "type": "fullstatic"
            },
            "witch": {
                "says": "Brew Brew Brew",
                "name": "Witch",
                "color": "#AF6AE2",
                "quest": "witch",
                "role": "witch",
                "skin": "brewingwitch",
                "aspeed": "slow",
                "id": "witch"
            },
            "santa": {
                "says": "Ho Ho Ho",
                "name": "Santa",
                "color": "#DF2A2F",
                "quest": "candycane",
                "role": "santa",
                "skin": "santa",
                "id": "santa"
            },
            "princess": {
                "says": [
                    "Oh, Hello!"
                ],
                "hp": 6000,
                "skin": "princess",
                "speed": 24,
                "id": "princess",
                "interaction": [
                    "Wanna taste my daggers?"
                ],
                "name": "Princess",
                "level": 72,
                "delay": 5000,
                "role": "citizen",
                "type": "fullstatic"
            },
            "pwincess": {
                "says": "eek",
                "name": "Wynifreed",
                "color": "#FECDF7",
                "quest": "lostearring",
                "role": "quest",
                "skin": "pwincess",
                "type": "fullstatic",
                "id": "pwincess"
            },
            "lichteaser": {
                "says": "Soon",
                "color": "#5A1D7F",
                "role": "tease",
                "skin": "lichteaser",
                "type": "static",
                "id": "lichteaser"
            },
            "beans": {
                "delay": 4000,
                "type": "full",
                "role": "announcer",
                "name": "Bean",
                "skin": "lionsuit",
                "moving": true,
                "hp": 3200,
                "speed": 30,
                "id": "beans"
            },
            "standmerchant": {
                "says": "Huu Huu",
                "cx": {
                    "hat": "hat221"
                },
                "role": "standmerchant",
                "name": "Divian",
                "skin": "purplelady",
                "color": "#3FEEA2",
                "items": [
                    "stand0",
                    null,
                    null,
                    "ghatb",
                    "ghatp",
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    "test_orb"
                ],
                "type": "fullstatic",
                "id": "standmerchant"
            },
            "craftsman": {
                "says": "Give it to me",
                "name": "Leo",
                "color": "#9EACAE",
                "role": "craftsman",
                "skin": "npcc",
                "type": "fullstatic",
                "id": "craftsman"
            },
            "tbartender": {
                "says": "Hello there",
                "role": "merchant",
                "name": "Jaqk",
                "side_interaction": {
                    "auto": true,
                    "message": "Hello there, partner! Care for a drink? Good luck on the games! Don't lose all your gold at once, heh.",
                    "skin": "showoffi"
                },
                "skin": "showoffi",
                "color": "#EBECEE",
                "items": [
                    "whiskey",
                    "wine",
                    "ale",
                    null,
                    null,
                    "pico",
                    "blue",
                    null,
                    null,
                    null,
                    "espresso",
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    "xshot"
                ],
                "type": "fullstatic",
                "id": "tbartender"
            },
            "newyear_tree": {
                "says": "*Tin* *Tin* *Tin* *Tin*",
                "name": "New Year Tree",
                "color": "#B7161F",
                "atype": "flow",
                "role": "newyear_tree",
                "skin": "newyear_tree",
                "aspeed": "fast",
                "id": "newyear_tree"
            },
            "mistletoe": {
                "says": "Uhhh",
                "name": "Faith",
                "color": "#E376E5",
                "quest": "mistletoe",
                "role": "quest",
                "skin": "pink",
                "type": "fullstatic",
                "id": "mistletoe"
            },
            "items14": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items14",
                "pack": "items14"
            },
            "firstc": {
                "says": [
                    "I've heard Goo's drop Amulets.",
                    "I'm strictly on a goo-only diet."
                ],
                "type": "fullstatic",
                "role": "companion",
                "id": "firstc",
                "skin": "lady1"
            },
            "wbartender": {
                "says": "Welcome!",
                "name": "Warin",
                "color": "#67CCB2",
                "items": [
                    "hpot0",
                    "mpot0",
                    "hpot1",
                    "mpot1",
                    null,
                    "elixirluck",
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ],
                "role": "merchant",
                "skin": "npc63",
                "type": "fullstatic",
                "id": "wbartender"
            },
            "wizardrepeater": {
                "says": "SHELLS!",
                "name": "Wizard",
                "color": "#66BB52",
                "interval": 3000,
                "role": "repeater",
                "skin": "wizard",
                "type": "fullstatic",
                "id": "wizardrepeater"
            },
            "guard": {
                "says": "...",
                "name": "Guard",
                "role": "guard",
                "skin": "thehelmet",
                "type": "fullstatic",
                "id": "guard"
            },
            "items18": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items18",
                "pack": "items18"
            },
            "items19": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items19",
                "pack": "items19"
            },
            "items10": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items10",
                "pack": "items10"
            },
            "items11": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items11",
                "pack": "items11"
            },
            "items12": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items12",
                "pack": "items12"
            },
            "items13": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items13",
                "pack": "items13"
            },
            "pots": {
                "says": "Oh, Hello",
                "items": [
                    "hpot0",
                    "mpot0",
                    "hpot1",
                    "mpot1",
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ],
                "atype": "once",
                "role": "merchant",
                "skin": "yellowlady",
                "id": "pots",
                "stopframe": 1
            },
            "items15": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items15",
                "pack": "items15"
            },
            "items16": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items16",
                "pack": "items16"
            },
            "items17": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items17",
                "pack": "items17"
            },
            "armors": {
                "says": "YESS",
                "items": [],
                "atype": "flow",
                "role": "merchant",
                "skin": "armorguy",
                "id": "armors"
            },
            "pvptokens": {
                "token": "pvptoken",
                "role": "pvptokens",
                "stand": "standx_texture",
                "side_interaction": {
                    "auto": true,
                    "message": "These tokens of honor represent victory. They can scarcely be found in PVP Realms. When daily battles arrive, I suspect they will be in abundance! Along with new armor and new weapons! Glorious!",
                    "skin": "pknight"
                },
                "skin": "pvptokens",
                "color": "#9C201C",
                "says": "Grrr",
                "aspeed": "slow",
                "id": "pvptokens",
                "name": "Gn. Spence"
            },
            "gemmerchant": {
                "says": "Bling",
                "name": "Mine Heathcliff",
                "color": "#A058DF",
                "quest": "gemfragment",
                "role": "quest",
                "skin": "gemmerchant",
                "type": "fullstatic",
                "id": "gemmerchant"
            },
            "rewards": {
                "says": "Rewards!",
                "name": "Werdars",
                "color": "#7E65D3",
                "cx": {
                    "hair": "hairdo518",
                    "head": "makeup107",
                    "hat": "hat400",
                    "face": "coolblueg"
                },
                "role": "rewards",
                "skin": "marmor9h",
                "type": "fullstatic",
                "id": "rewards"
            },
            "items46": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items46",
                "pack": "items46"
            },
            "holo": {
                "says": "\u25b3 \u25bd \u25b2 \u25bc",
                "name": "Z",
                "color": "#EBECEE",
                "role": "resort",
                "skin": "holo",
                "type": "fullstatic",
                "id": "holo"
            },
            "items24": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items24",
                "pack": "items24"
            },
            "items27": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items27",
                "pack": "items27"
            },
            "items26": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items26",
                "pack": "items26"
            },
            "items21": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items21",
                "pack": "items21"
            },
            "items20": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items20",
                "pack": "items20"
            },
            "items23": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items23",
                "pack": "items23"
            },
            "monsterhunter": {
                "says": "Hi!",
                "name": "Daisy",
                "color": "#B4FAA0",
                "token": "monstertoken",
                "role": "monstertokens",
                "skin": "daisy",
                "type": "fullstatic",
                "id": "monsterhunter"
            },
            "items29": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items29",
                "pack": "items29"
            },
            "items28": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items28",
                "pack": "items28"
            },
            "tavern": {
                "says": "Hi",
                "name": "Jaqk",
                "color": "#EBECEE",
                "role": "tavern",
                "skin": "showoffi",
                "type": "fullstatic",
                "id": "tavern"
            },
            "pvpblocker": {
                "says": "I will leave when there are* 4 people around.",
                "type": "fullstatic",
                "role": "blocker",
                "id": "pvpblocker",
                "skin": "thehelmet"
            },
            "appearance": {
                "says": "Now!",
                "name": "Haila",
                "color": "#D95CB4",
                "quest": "cx",
                "role": "cx",
                "skin": "zengirl",
                "aspeed": "slow",
                "id": "appearance"
            },
            "locksmith": {
                "says": "X",
                "name": "Smith",
                "role": "locksmith",
                "skin": "asoldier",
                "type": "fullstatic",
                "id": "locksmith"
            },
            "items32": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items32",
                "pack": "items32"
            },
            "items33": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items33",
                "pack": "items33"
            },
            "items30": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items30",
                "pack": "items30"
            },
            "items31": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items31",
                "pack": "items31"
            },
            "items36": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items36",
                "pack": "items36"
            },
            "items37": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items37",
                "pack": "items37"
            },
            "items34": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items34",
                "pack": "items34"
            },
            "items35": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items35",
                "pack": "items35"
            },
            "fancypots": {
                "says": "Woo. Hic.",
                "role": "merchant",
                "name": "Ernis",
                "side_interaction": {
                    "auto": true,
                    "message": "Hello there. Are you injured or in need of some potions? My family and I pride ourselves with having the best quality potions and elixirs around. Take as much as you need. *hic*",
                    "skin": "potiongirl"
                },
                "skin": "fancypots",
                "color": "#E57636",
                "items": [
                    "hpot0",
                    "mpot0",
                    "hpot1",
                    "mpot1",
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                ],
                "atype": "flow",
                "id": "fancypots"
            },
            "items39": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items39",
                "pack": "items39"
            },
            "ship": {
                "says": "Ahoy",
                "atype": "flow",
                "role": "ship",
                "skin": "ship",
                "aspeed": "slower",
                "id": "ship"
            },
            "shrine": {
                "type": "static",
                "role": "shrine",
                "id": "shrine",
                "skin": "shrine"
            },
            "citizen8": {
                "says": [
                    "How are you",
                    "*wipes snow off himself*",
                    "It's cold here",
                    "*shivers*",
                    "This is a pretty small village",
                    "I've meet a real elf",
                    "Don't go swimming here it's cold"
                ],
                "hp": 16000,
                "skin": "frozenrogue",
                "speed": 38,
                "id": "citizen8",
                "interaction": [
                    "Are you here to kill Stompy too? Well I guess let the best adventurer get to him first!",
                    "My hair was actually black, before it happened."
                ],
                "name": "Wyr",
                "level": 78,
                "delay": 1200,
                "role": "citizen",
                "type": "fullstatic"
            },
            "secondhands": {
                "says": "There's some good stuff in here",
                "name": "Ponty",
                "color": "#7E65D3",
                "role": "secondhands",
                "skin": "blingbling",
                "side_interaction": {
                    "auto": true,
                    "message": "They sell them. I buy them. You buy them from me for higher prices. Win win. I win. Bling!",
                    "skin": "blingbling"
                },
                "type": "fullstatic",
                "id": "secondhands"
            },
            "transporter": {
                "says": "Woo",
                "name": "Alia",
                "places": {
                    "test": 0,
                    "cyberland": 0,
                    "winterland": 1,
                    "main": 9,
                    "desertland": 1
                },
                "color": "#7965C6",
                "role": "transport",
                "skin": "spell",
                "id": "transporter"
            },
            "items47": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items47",
                "pack": "items47"
            },
            "items25": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items25",
                "pack": "items25"
            },
            "items45": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items45",
                "pack": "items45"
            },
            "items44": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items44",
                "pack": "items44"
            },
            "items43": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items43",
                "pack": "items43"
            },
            "items42": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items42",
                "pack": "items42"
            },
            "items41": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items41",
                "pack": "items41"
            },
            "items40": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items40",
                "pack": "items40"
            },
            "bouncer": {
                "interaction": [
                    "Wanna taste my daggers? One move out of line. And you will!",
                    "Come on! One sexist word out of your mouth. Just one. Let's see what your tombstone looks like."
                ],
                "says": [
                    "What?",
                    "BOUNCE"
                ],
                "name": "Wogue",
                "level": 88,
                "role": "bouncer",
                "skin": "bouncer",
                "type": "fullstatic",
                "id": "bouncer"
            },
            "items2": {
                "name": "Ledia",
                "color": "#E0D8A5",
                "role": "items",
                "skin": "lady3",
                "type": "fullstatic",
                "id": "items2",
                "pack": "items2"
            },
            "items3": {
                "name": "Lidia",
                "color": "#E0D8A5",
                "role": "items",
                "skin": "lady3",
                "type": "fullstatic",
                "id": "items3",
                "pack": "items3"
            },
            "items0": {
                "name": "Gabrielle",
                "color": "#E0D8A5",
                "role": "items",
                "skin": "gabrielle",
                "type": "fullstatic",
                "id": "items0",
                "pack": "items0"
            },
            "items1": {
                "name": "Gabriella",
                "color": "#E0D8A5",
                "role": "items",
                "skin": "gabrielle",
                "type": "fullstatic",
                "id": "items1",
                "pack": "items1"
            },
            "items6": {
                "name": "Jane",
                "color": "#E0D8A5",
                "role": "items",
                "skin": "lady2",
                "type": "fullstatic",
                "id": "items6",
                "pack": "items6"
            },
            "items7": {
                "name": "Janet",
                "color": "#E0D8A5",
                "role": "items",
                "skin": "lady2",
                "type": "fullstatic",
                "id": "items7",
                "pack": "items7"
            },
            "items4": {
                "name": "Christie",
                "color": "#E0D8A5",
                "role": "items",
                "skin": "lady4",
                "type": "fullstatic",
                "id": "items4",
                "pack": "items4"
            },
            "items5": {
                "name": "Christina",
                "color": "#E0D8A5",
                "role": "items",
                "skin": "lady4",
                "type": "fullstatic",
                "id": "items5",
                "pack": "items5"
            },
            "lotterylady": {
                "says": "Hi Dear",
                "name": "Rose",
                "color": "#DF5AC5",
                "role": "lottery",
                "skin": "llady",
                "type": "fullstatic",
                "id": "lotterylady"
            },
            "items8": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items8",
                "pack": "items8"
            },
            "items9": {
                "name": "X",
                "color": "#E0D8A5",
                "cx": {
                    "head": "bwhead"
                },
                "role": "items",
                "skin": "mabw",
                "type": "fullstatic",
                "id": "items9",
                "pack": "items9"
            },
            "mcollector": {
                "says": "Hmm",
                "name": "Cole",
                "color": "#67A464",
                "quest": "mcollector",
                "role": "mcollector",
                "skin": "proft",
                "type": "fullstatic",
                "id": "mcollector"
            }
        }
    }
    expect(G_npcs).not.toBe(undefined)
})