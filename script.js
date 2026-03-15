const TYPE_COLORS = {
  Grass: '#3a8f52',
  Poison: '#8d4ba0',
  Fire: '#d6503d',
  Water: '#326fd4',
  Flying: '#6f8fcc',
  Electric: '#c8ab2d',
  Normal: '#7d7f89',
  Bug: '#6f9342',
  Psychic: '#c03d7a',
  Fighting: '#b05737',
  Rock: '#9f8a52',
  Ground: '#9f7847',
  Steel: '#6b8ba0',
  Dark: '#4a3a56',
  Dragon: '#594bc8',
  Ice: '#52a6be',
  Fairy: '#cf79a0',
  Ghost: '#5b4c88'
};

const MOVE_TYPE_COLORS = {
  Normal: '#A8A878',
  Fighting: '#C03028',
  Flying: '#A890F0',
  Poison: '#A040A0',
  Ground: '#E0C068',
  Rock: '#B8A038',
  Bug: '#A8B820',
  Ghost: '#705898',
  Steel: '#B8B8D0',
  Fire: '#F08030',
  Water: '#6890F0',
  Grass: '#78C850',
  Electric: '#F8D030',
  Psychic: '#F85888',
  Ice: '#98D8D8',
  Dragon: '#7038F8',
  Dark: '#705848',
  Fairy: '#EE99AC'
};

const ABILITY_DESCRIPTIONS = {
  'Sturdy': 'Prevents the Pokémon from fainting in one hit.',
  'Keen Eye': 'Prevents accuracy from being lowered.',
  'Guts': 'Boosts Attack when statused.',
  'Thick Fat': 'Halves damage from Fire and Ice moves.',
  'Lightning Rod': 'Redirects Electric moves to this Pokémon.',
  'Flame Body': 'May burn the opponent when hit by a contact move.',
  'Drought': 'Summons harsh sunlight.',
  'Oblivious': 'Prevents infatuation and taunting.',
  'Solid Rock': 'Reduces super-effective damage.',
  'Pickup': 'May pick up items after battle.',
  'Pure Power': 'Doubles Attack stat.',
  'Natural Cure': 'Cures status conditions upon switching out.',
  'Levitate': 'Grants immunity to Ground-type moves.',
  'Synchronize': 'Passes status conditions to the opponent.',
  'Pressure': 'Makes moves cost more PP.',
  'Insomnia': 'Prevents sleep.',
  'Sand Veil': 'Boosts evasion in sandstorm.',
  'Intimidate': 'Lowers the opponent\'s Attack upon entry.',
  'Super Luck': 'Raises critical hit ratio.',
  'Marvel Scale': 'Boosts Defense when statused.',
  'Rain Dish': 'Restores HP in rain.',
  'Adaptability': 'Increases STAB damage.',
  'Ice Body': 'Restores HP in hail.',
  'Truant': 'Skips every other turn.',
  'Vital Spirit': 'Prevents sleep.',
  'Rock Head': 'Prevents recoil damage.',
  'Chlorophyll': 'Doubles Speed in sunlight.',
  'Magnet Pull': 'Prevents Steel-types from switching out.'
};

const MOVE_DESCRIPTIONS = {
  'Rock Tomb': 'Deals damage and lowers Speed by 1 stage.',
  'Tackle': 'Deals damage.',
  'Defense Curl': 'Raises Defense by 1 stage.',
  'Stealth Rock': 'Sets up entry hazard that damages switching Pokémon.',
  'Karate Chop': 'Deals damage with high critical hit ratio.',
  'Seismic Toss': 'Deals damage equal to the user\'s level.',
  'Bulk Up': 'Raises Attack and Defense by 1 stage.',
  'Focus Energy': 'Raises critical hit ratio.',
  'Arm Thrust': 'Hits 2-5 times.',
  'Sand Attack': 'Lowers accuracy by 1 stage.',
  'Knock Off': 'Removes the opponent\'s item.',
  'Spark': 'Deals damage and may paralyze.',
  'Swift': 'Never misses.',
  'Light Screen': 'Halves special damage for 5 turns.',
  'Self-Destruct': 'User faints after use.',
  'Thunder Fang': 'Deals damage and may paralyze or flinch.',
  'Howl': 'Raises Attack by 1 stage.',
  'Bite': 'Deals damage and may flinch.',
  'Flamethrower': 'Deals damage and may burn.',
  'Smokescreen': 'Lowers accuracy by 1 stage.',
  'Rock Throw': 'Deals damage.',
  'Yawn': 'Makes the opponent drowsy.',
  'Lava Plume': 'Deals damage and may burn.',
  'Rapid Spin': 'Deals damage and removes entry hazards.',
  'Protect': 'Protects against moves this turn.',
  'Earthquake': 'Deals damage.',
  'Ember': 'Deals damage and may burn.',
  'Magnitude': 'Deals damage with random power.',
  'Bulldoze': 'Deals damage and lowers Speed.',
  'Body Slam': 'Deals damage and may paralyze.',
  'Facade': 'Power doubles if statused.',
  'Crunch': 'Deals damage and may lower Defense.',
  'Slash': 'Deals damage with high critical hit ratio.',
  'Uproar': 'Prevents sleep for 3 turns.',
  'Shadow Claw': 'Deals damage with high critical hit ratio.',
  'Belly Drum': 'Maximizes Attack but halves HP.',
  'Iron Tail': 'Deals damage and may lower Defense.',
  'Aerial Ace': 'Never misses.',
  'Quick Attack': 'Always moves first.',
  'Wing Attack': 'Deals damage.',
  'Endeavor': 'Sets opponent\'s HP to match user\'s.',
  'Roost': 'Restores HP and removes Flying type temporarily.',
  'Steel Wing': 'Deals damage and may raise Defense.',
  'Air Slash': 'Deals damage and may flinch.',
  'Spikes': 'Sets up entry hazard.',
  'Dragon Breath': 'Deals damage and may paralyze.',
  'Moonblast': 'Deals damage and may lower Special Attack.',
  'Sky Attack': 'Charges then deals damage with high critical hit ratio.',
  'Psychic': 'Deals damage and may lower Special Defense.',
  'Thunderbolt': 'Deals damage and may paralyze.',
  'Shadow Ball': 'Deals damage and may lower Special Defense.',
  'Calm Mind': 'Raises Special Attack and Special Defense.',
  'Ice Beam': 'Deals damage and may freeze.',
  'Zen Headbutt': 'Deals damage and may flinch.',
  'Sunny Day': 'Summons harsh sunlight.',
  'Earth Power': 'Deals damage and may lower Special Defense.',
  'Blizzard': 'Deals damage and may freeze.',
  'Sheer Cold': 'OHKO in hail or if user is Ice-type.',
  'Surf': 'Deals damage.',
  'Water Pulse': 'Deals damage and may confuse.',
  'Supersonic': 'Confuses the opponent.',
  'Waterfall': 'Deals damage and may flinch.',
  'Mud Shot': 'Deals damage and lowers Speed.',
  'Take Down': 'Deals damage with recoil.',
  'High Jump Kick': 'Deals damage but crashes if it misses.',
  'Thunder Punch': 'Deals damage and may paralyze.',
  'Ice Punch': 'Deals damage and may freeze.',
  'Detect': 'Protects against moves this turn.',
  'Play Rough': 'Deals damage and may lower Attack.',
  'Sucker Punch': 'Moves first if opponent is attacking.',
  'Night Slash': 'Deals damage with high critical hit ratio.',
  'Swords Dance': 'Sharply raises Attack.',
  'Psycho Cut': 'Deals damage with high critical hit ratio.',
  'Will-O-Wisp': 'Burns the opponent.',
  'Pain Split': 'Averages HP with the opponent.',
  'Night Shade': 'Deals damage equal to user\'s level.',
  'Feint': 'Hits through Protect and Detect.',
  'Foul Play': 'Uses opponent\'s Attack stat.',
  'Shadow Sneak': 'Always moves first.',
  'Recover': 'Restores half of max HP.',
  'Taunt': 'Prevents status moves.',
  'Thunder Wave': 'Paralyzes the opponent.',
  'Rest': 'Restores HP but user sleeps.',
  'Sleep Talk': 'Uses a random move while asleep.',
  'Dragon Dance': 'Raises Attack and Speed.',
  'Dragon Claw': 'Deals damage.',
  'Outrage': 'Attacks for 2-3 turns then confuses.',
  'Fire Blast': 'Deals damage and may burn.',
  'U-turn': 'Deals damage then switches out.',
  'Stone Edge': 'Deals damage with high critical hit ratio.',
  'Fire Fang': 'Deals damage and may burn or flinch.',
  'Leech Seed': 'Drains HP each turn.',
  'Brick Break': 'Deals damage and breaks screens.',
  'Leaf Blade': 'Deals damage with high critical hit ratio.',
  'Pursuit': 'Deals extra damage to switching Pokémon.',
  'Quick Attack': 'Always moves first.',
  'Growl': 'Lowers Attack by 1 stage.',
  'Golpe STAB': 'Deals STAB damage.',
  'Golpe de cobertura': 'Deals coverage damage.',
  'Block': 'Prevents switching.',
  'Harden': 'Raises Defense by 1 stage.',
  'Wing Attack': 'Deals damage.',
  'Starter Evoluído': 'Evolved starter Pokémon.',
  'Ability padrão': 'Default ability.',
  'Sitrus Berry': 'Held item.',
  'Oran Berry': 'Held item.',
  'Bright Powder': 'Held item.',
  'Berry Juice': 'Held item.',
  'Heat Rock': 'Held item.',
  'Soft Sand': 'Held item.',
  'Leftovers': 'Held item.',
  'Scope Lens': 'Held item.',
  'Wide Lens': 'Held item.',
  'Life Orb': 'Held item.',
  'Spell Tag': 'Held item.',
  'Choice Band': 'Held item.',
  'Choice Specs': 'Held item.',
  'Focus Sash': 'Held item.',
  'Mystic Water': 'Held item.',
  'Lum Berry': 'Held item.',
  'Dark Glasses': 'Held item.',
  'Eviolite': 'Held item.',
  'Choice Scarf': 'Held item.'
};

const POKEMON_IDS = {
  // Gen 1
  'Bulbasaur': 1, 'Ivysaur': 2, 'Venusaur': 3, 'Charmander': 4, 'Charmeleon': 5, 'Charizard': 6,
  'Squirtle': 7, 'Wartortle': 8, 'Blastoise': 9, 'Caterpie': 10, 'Metapod': 11, 'Butterfree': 12,
  'Weedle': 13, 'Kakuna': 14, 'Beedrill': 15, 'Pidgey': 16, 'Pidgeotto': 17, 'Pidgeot': 18,
  'Rattata': 19, 'Raticate': 20, 'Spearow': 21, 'Fearow': 22, 'Ekans': 23, 'Arbok': 24,
  'Pikachu': 25, 'Raichu': 26, 'Sandshrew': 27, 'Sandslash': 28, 'Nidoran♀': 29, 'Nidorina': 30,
  'Nidoqueen': 31, 'Nidoran♂': 32, 'Nidorino': 33, 'Nidoking': 34, 'Clefairy': 35, 'Clefable': 36,
  'Vulpix': 37, 'Ninetales': 38, 'Jigglypuff': 39, 'Wigglytuff': 40, 'Zubat': 41, 'Golbat': 42,
  'Oddish': 43, 'Gloom': 44, 'Vileplume': 45, 'Paras': 46, 'Parasect': 47, 'Venonat': 48,
  'Venomoth': 49, 'Diglett': 50, 'Dugtrio': 51, 'Meowth': 52, 'Persian': 53, 'Psyduck': 54,
  'Golduck': 55, 'Mankey': 56, 'Primeape': 57, 'Growlithe': 58, 'Arcanine': 59, 'Poliwag': 60,
  'Poliwhirl': 61, 'Poliwrath': 62, 'Abra': 63, 'Kadabra': 64, 'Alakazam': 65, 'Machop': 66,
  'Machoke': 67, 'Machamp': 68, 'Bellsprout': 69, 'Weepinbell': 70, 'Victreebel': 71, 'Tentacool': 72,
  'Tentacruel': 73, 'Geodude': 74, 'Graveler': 75, 'Golem': 76, 'Ponyta': 77, 'Rapidash': 78,
  'Slowpoke': 79, 'Slowbro': 80, 'Magnemite': 81, 'Magneton': 82, 'Farfetch\'d': 83, 'Doduo': 84,
  'Dodrio': 85, 'Seel': 86, 'Dewgong': 87, 'Grimer': 88, 'Muk': 89, 'Shellder': 90, 'Cloyster': 91,
  'Gastly': 92, 'Haunter': 93, 'Gengar': 94, 'Onix': 95, 'Drowzee': 96, 'Hypno': 97, 'Krabby': 98,
  'Kingler': 99, 'Voltorb': 100, 'Electrode': 101, 'Exeggcute': 102, 'Exeggutor': 103, 'Cubone': 104,
  'Marowak': 105, 'Hitmonlee': 106, 'Hitmonchan': 107, 'Lickitung': 108, 'Koffing': 109, 'Weezing': 110,
  'Rhyhorn': 111, 'Rhydon': 112, 'Chansey': 113, 'Tangela': 114, 'Kangaskhan': 115, 'Horsea': 116,
  'Seadra': 117, 'Goldeen': 118, 'Seaking': 119, 'Staryu': 120, 'Starmie': 121, 'Mr. Mime': 122,
  'Scyther': 123, 'Jynx': 124, 'Electabuzz': 125, 'Magmar': 126, 'Pinsir': 127, 'Tauros': 128,
  'Magikarp': 129, 'Gyarados': 130, 'Lapras': 131, 'Ditto': 132, 'Eevee': 133, 'Vaporeon': 134,
  'Jolteon': 135, 'Flareon': 136, 'Porygon': 137, 'Omanyte': 138, 'Omastar': 139, 'Kabuto': 140,
  'Kabutops': 141, 'Aerodactyl': 142, 'Snorlax': 143, 'Articuno': 144, 'Zapdos': 145, 'Moltres': 146,
  'Dratini': 147, 'Dragonair': 148, 'Dragonite': 149, 'Mewtwo': 150, 'Mew': 151,

  // Gen 2
  'Chikorita': 152, 'Bayleef': 153, 'Meganium': 154, 'Cyndaquil': 155, 'Quilava': 156, 'Typhlosion': 157,
  'Totodile': 158, 'Croconaw': 159, 'Feraligatr': 160, 'Sentret': 161, 'Furret': 162, 'Hoothoot': 163,
  'Noctowl': 164, 'Ledyba': 165, 'Ledian': 166, 'Spinarak': 167, 'Ariados': 168, 'Crobat': 169,
  'Chinchou': 170, 'Lanturn': 171, 'Pichu': 172, 'Cleffa': 173, 'Igglybuff': 174, 'Togepi': 175,
  'Togetic': 176, 'Natu': 177, 'Xatu': 178, 'Mareep': 179, 'Flaaffy': 180, 'Ampharos': 181,
  'Bellossom': 182, 'Marill': 183, 'Azumarill': 184, 'Sudowoodo': 185, 'Politoed': 186, 'Hoppip': 187,
  'Skiploom': 188, 'Jumpluff': 189, 'Aipom': 190, 'Sunkern': 191, 'Sunflora': 192, 'Yanma': 193,
  'Wooper': 194, 'Quagsire': 195, 'Espeon': 196, 'Umbreon': 197, 'Murkrow': 198, 'Slowking': 199,
  'Misdreavus': 200, 'Unown': 201, 'Wobbuffet': 202, 'Girafarig': 203, 'Pineco': 204, 'Forretress': 205,
  'Dunsparce': 206, 'Gligar': 207, 'Steelix': 208, 'Snubbull': 209, 'Granbull': 210, 'Qwilfish': 211,
  'Scizor': 212, 'Shuckle': 213, 'Heracross': 214, 'Sneasel': 215, 'Teddiursa': 216, 'Ursaring': 217,
  'Slugma': 218, 'Magcargo': 219, 'Swinub': 220, 'Piloswine': 221, 'Corsola': 222, 'Remoraid': 223,
  'Octillery': 224, 'Delibird': 225, 'Mantine': 226, 'Skarmory': 227, 'Houndour': 228, 'Houndoom': 229,
  'Kingdra': 230, 'Phanpy': 231, 'Donphan': 232, 'Porygon2': 233, 'Stantler': 234, 'Smeargle': 235,
  'Tyrogue': 236, 'Hitmontop': 237, 'Smoochum': 238, 'Elekid': 239, 'Magby': 240, 'Miltank': 241,
  'Blissey': 242, 'Raikou': 243, 'Entei': 244, 'Suicune': 245, 'Larvitar': 246, 'Pupitar': 247,
  'Tyranitar': 248, 'Lugia': 249, 'Ho-Oh': 250, 'Celebi': 251,

  // Gen 3
  'Treecko': 252, 'Grovyle': 253, 'Sceptile': 254, 'Torchic': 255, 'Combusken': 256, 'Blaziken': 257,
  'Mudkip': 258, 'Marshtomp': 259, 'Swampert': 260, 'Poochyena': 261, 'Mightyena': 262, 'Zigzagoon': 263,
  'Linoone': 264, 'Wurmple': 265, 'Silcoon': 266, 'Beautifly': 267, 'Cascoon': 268, 'Dustox': 269,
  'Lotad': 270, 'Lombre': 271, 'Ludicolo': 272, 'Seedot': 273, 'Nuzleaf': 274, 'Shiftry': 275,
  'Taillow': 276, 'Swellow': 277, 'Wingull': 278, 'Pelipper': 279, 'Ralts': 280, 'Kirlia': 281,
  'Gardevoir': 282, 'Surskit': 283, 'Masquerain': 284, 'Shroomish': 285, 'Breloom': 286, 'Slakoth': 287,
  'Vigoroth': 288, 'Slaking': 289, 'Nincada': 290, 'Ninjask': 291, 'Shedinja': 292, 'Whismur': 293,
  'Loudred': 294, 'Exploud': 295, 'Makuhita': 296, 'Hariyama': 297, 'Azurill': 298, 'Nosepass': 299,
  'Skitty': 300, 'Delcatty': 301, 'Sableye': 302, 'Mawile': 303, 'Aron': 304, 'Lairon': 305,
  'Aggron': 306, 'Meditite': 307, 'Medicham': 308, 'Electrike': 309, 'Manectric': 310, 'Plusle': 311,
  'Minun': 312, 'Volbeat': 313, 'Illumise': 314, 'Roselia': 315, 'Gulpin': 316, 'Swalot': 317,
  'Carvanha': 318, 'Sharpedo': 319, 'Wailmer': 320, 'Wailord': 321, 'Numel': 322, 'Camerupt': 323,
  'Torkoal': 324, 'Spoink': 325, 'Grumpig': 326, 'Spinda': 327, 'Trapinch': 328, 'Vibrava': 329,
  'Flygon': 330, 'Cacnea': 331, 'Cacturne': 332, 'Swablu': 333, 'Altaria': 334, 'Zangoose': 335,
  'Seviper': 336, 'Lunatone': 337, 'Solrock': 338, 'Barboach': 339, 'Whiscash': 340, 'Corphish': 341,
  'Crawdaunt': 342, 'Baltoy': 343, 'Claydol': 344, 'Lileep': 345, 'Cradily': 346, 'Anorith': 347,
  'Armaldo': 348, 'Feebas': 349, 'Milotic': 350, 'Castform': 351, 'Kecleon': 352, 'Shuppet': 353,
  'Banette': 354, 'Duskull': 355, 'Dusclops': 356, 'Tropius': 357, 'Chimecho': 358, 'Absol': 359,
  'Wynaut': 360, 'Snorunt': 361, 'Glalie': 362, 'Spheal': 363, 'Sealeo': 364, 'Walrein': 365,
  'Clamperl': 366, 'Huntail': 367, 'Gorebyss': 368, 'Relicanth': 369, 'Luvdisc': 370, 'Bagon': 371,
  'Shelgon': 372, 'Salamence': 373, 'Beldum': 374, 'Metang': 375, 'Metagross': 376, 'Regirock': 377,
  'Regice': 378, 'Registeel': 379, 'Latias': 380, 'Latios': 381, 'Kyogre': 382, 'Groudon': 383,
  'Rayquaza': 384, 'Jirachi': 385, 'Deoxys': 386,

  // Gen 4
  'Turtwig': 387, 'Grotle': 388, 'Torterra': 389, 'Chimchar': 390, 'Monferno': 391, 'Infernape': 392,
  'Piplup': 393, 'Prinplup': 394, 'Empoleon': 395, 'Starly': 396, 'Staravia': 397, 'Staraptor': 398,
  'Bidoof': 399, 'Bibarel': 400, 'Kricketot': 401, 'Kricketune': 402, 'Shinx': 403, 'Luxio': 404,
  'Luxray': 405, 'Budew': 406, 'Roserade': 407, 'Cranidos': 408, 'Rampardos': 409, 'Shieldon': 410,
  'Bastiodon': 411, 'Burmy': 412, 'Wormadam': 413, 'Mothim': 414, 'Combee': 415, 'Vespiquen': 416,
  'Pachirisu': 417, 'Buizel': 418, 'Floatzel': 419, 'Cherubi': 420, 'Cherrim': 421, 'Shellos': 422,
  'Gastrodon': 423, 'Ambipom': 424, 'Drifloon': 425, 'Drifblim': 426, 'Buneary': 427, 'Lopunny': 428,
  'Mismagius': 429, 'Honchkrow': 430, 'Glameow': 431, 'Purugly': 432, 'Chingling': 433, 'Stunky': 434,
  'Skuntank': 435, 'Bronzor': 436, 'Bronzong': 437, 'Bonsly': 438, 'Mime Jr.': 439, 'Happiny': 440,
  'Chatot': 441, 'Spiritomb': 442, 'Gible': 443, 'Gabite': 444, 'Garchomp': 445, 'Munchlax': 446,
  'Riolu': 447, 'Lucario': 448, 'Hippopotas': 449, 'Hippowdon': 450, 'Skorupi': 451, 'Drapion': 452,
  'Croagunk': 453, 'Toxtricity': 454, 'Carnivine': 455, 'Finneon': 456, 'Lumineon': 457, 'Mantyke': 458,
  'Snover': 459, 'Abomasnow': 460, 'Weavile': 461, 'Magnezone': 462, 'Lickilicky': 463, 'Rhyperior': 464,
  'Tangrowth': 465, 'Electivire': 466, 'Magmortar': 467, 'Togekiss': 468, 'Yanmega': 469, 'Leafeon': 470,
  'Glaceon': 471, 'Gliscor': 472, 'Mamoswine': 473, 'Porygon-Z': 474, 'Gallade': 475, 'Probopass': 476,
  'Dusknoir': 477, 'Froslass': 478, 'Rotom': 479, 'Uxie': 480, 'Mesprit': 481, 'Azelf': 482,
  'Dialga': 483, 'Palkia': 484, 'Heatrotom': 479, 'Washrotom': 479, 'Frostrotom': 479, 'Fanrotom': 479, 'Mowrotom': 479,
  'Giratina': 487, 'Cresselia': 488, 'Phione': 489, 'Manaphy': 490, 'Darkrai': 491, 'Shaymin': 492,
  'Arceus': 493,

  // Gen 5
  'Victini': 494, 'Snivy': 495, 'Servine': 496, 'Serperior': 497, 'Tepig': 498, 'Pignite': 499, 'Emboar': 500,
  'Oshawott': 501, 'Dewott': 502, 'Samurott': 503, 'Patrat': 504, 'Watchog': 505, 'Lillipup': 506, 'Herdier': 507,
  'Stoutland': 508, 'Purrloin': 509, 'Liepard': 510, 'Pansage': 511, 'Simisage': 512, 'Pansear': 513, 'Simisear': 514,
  'Panpour': 515, 'Simipour': 516, 'Munna': 517, 'Musharna': 518, 'Pidove': 519, 'Tranquill': 520, 'Unfezant': 521,
  'Blitzle': 522, 'Zebstrika': 523, 'Roggenrola': 524, 'Boldore': 525, 'Gigalith': 526, 'Woobat': 527, 'Swoobat': 528,
  'Drilbur': 529, 'Excadrill': 530, 'Audino': 531, 'Timburr': 532, 'Gurdurr': 533, 'Conkeldurr': 534, 'Tympole': 535,
  'Palpitoad': 536, 'Seismitoad': 537, 'Throh': 538, 'Sawk': 539, 'Sewaddle': 540, 'Swadloon': 541, 'Leavanny': 542,
  'Venipede': 543, 'Whirlipede': 544, 'Scolipede': 545, 'Cottonee': 546, 'Whimsicott': 547, 'Petilil': 548, 'Lilligant': 549,
  'Basculin': 550, 'Sandile': 551, 'Krokorok': 552, 'Krookodile': 553, 'Darumaka': 554, 'Darmanitan': 555, 'Maractus': 556,
  'Dwebble': 557, 'Crustle': 558, 'Scraggy': 559, 'Scrafty': 560, 'Sigilyph': 561, 'Yamask': 562, 'Cofagrigus': 563,
  'Tirtouga': 564, 'Carracosta': 565, 'Archen': 566, 'Archeops': 567, 'Trubbish': 568, 'Garbodor': 569, 'Zorua': 570,
  'Zoroark': 571, 'Minccino': 572, 'Cinccino': 573, 'Gothita': 574, 'Gothorita': 575, 'Gothitelle': 576, 'Solosis': 577,
  'Duosion': 578, 'Reuniclus': 579, 'Ducklett': 580, 'Swanna': 581, 'Vanillite': 582, 'Vanillish': 583, 'Vanilluxe': 584,
  'Deerling': 585, 'Sawsbuck': 586, 'Emolga': 587, 'Karrablast': 588, 'Escavalier': 589, 'Foongus': 590, 'Amoonguss': 591,
  'Frillish': 592, 'Jellicent': 593, 'Alomomola': 594, 'Joltik': 595, 'Galvantula': 596, 'Ferroseed': 597, 'Ferrothorn': 598,
  'Klink': 599, 'Klang': 600, 'Klinklang': 601, 'Tynamo': 602, 'Eelektrik': 603, 'Eelektross': 604, 'Elgyem': 605,
  'Beheeyem': 606, 'Litwick': 607, 'Lampent': 608, 'Chandelure': 609, 'Axew': 610, 'Fraxure': 611, 'Haxorus': 612,
  'Cubchoo': 613, 'Beartic': 614, 'Cryogonal': 615, 'Shelmet': 616, 'Accelgor': 617, 'Stunfisk': 618, 'Mienfoo': 619,
  'Mienshao': 620, 'Druddigon': 621, 'Golett': 622, 'Golurk': 623, 'Pawniard': 624, 'Bisharp': 625, 'Bouffalant': 626,
  'Rufflet': 627, 'Braviary': 628, 'Vullaby': 629, 'Mandibuzz': 630, 'Heatmor': 631, 'Durant': 632, 'Deino': 633,
  'Zweilous': 634, 'Hydreigon': 635, 'Larvesta': 636, 'Volcarona': 637, 'Cobalion': 638, 'Terrakion': 639, 'Virizion': 640,
  'Tornadus': 641, 'Thundurus': 642, 'Reshiram': 643, 'Zekrom': 644, 'Landorus': 645, 'Kyurem': 646, 'Keldeo': 647,
  'Meloetta': 648, 'Genesect': 649,

  // Gen 6
  'Chespin': 650, 'Quilladin': 651, 'Chesnaught': 652, 'Fennekin': 653, 'Braixen': 654, 'Delphox': 655,
  'Froakie': 656, 'Frogadier': 657, 'Greninja': 658, 'Bunnelby': 659, 'Diggersby': 660, 'Fletchling': 661,
  'Fletchinder': 662, 'Talonflame': 663, 'Scatterbug': 664, 'Spewpa': 665, 'Vivillon': 666, 'Litleo': 667,
  'Pyroar': 668, 'Flabébé': 669, 'Floette': 670, 'Florges': 671, 'Skiddo': 672, 'Gogoat': 673, 'Pancham': 674,
  'Pangoro': 675, 'Furfrou': 676, 'Espurr': 677, 'Meowstic': 678, 'Honedge': 679, 'Doublade': 680, 'Aegislash': 681,
  'Spritzee': 682, 'Aromatisse': 683, 'Swirlix': 684, 'Slurpuff': 685, 'Inkay': 686, 'Malamar': 687, 'Binacle': 688,
  'Barbaracle': 689, 'Skrelp': 690, 'Dragalge': 691, 'Clauncher': 692, 'Clawitzer': 693, 'Helioptile': 694,
  'Heliolisk': 695, 'Tyrunt': 696, 'Tyrantrum': 697, 'Amaura': 698, 'Aurorus': 699, 'Sylveon': 700, 'Hawlucha': 701,
  'Dedenne': 702, 'Carbink': 703, 'Goomy': 704, 'Sliggoo': 705, 'Goodra': 706, 'Klefki': 707, 'Phantump': 708,
  'Trevenant': 709, 'Pumpkaboo': 710, 'Gourgeist': 711, 'Bergmite': 712, 'Avalugg': 713, 'Noibat': 714, 'Noivern': 715,
  'Xerneas': 716, 'Yveltal': 717, 'Zygarde': 718, 'Diancie': 719, 'Hoopa': 720, 'Volcanion': 721,

  // Gen 7
  'Rowlet': 722, 'Decidueye': 723, 'Litten': 724, 'Torracat': 725, 'Incineroar': 726, 'Popplio': 727, 'Brionne': 728,
  'Primarina': 729, 'Pikipek': 730, 'Trumbeak': 731, 'Toucannon': 732, 'Yungoos': 733, 'Gumshoos': 734, 'Grubbin': 735,
  'Charjabug': 736, 'Vikavolt': 737, 'Crabrawler': 738, 'Crabominable': 739, 'Oricorio': 740, 'Cutiefly': 741,
  'Ribombee': 742, 'Rockruff': 744, 'Lycanroc': 745, 'Wishiwashi': 746, 'Mareanie': 747, 'Toxapex': 748, 'Mudbray': 749,
  'Mudsdale': 750, 'Dewpider': 751, 'Araquanid': 752, 'Fomantis': 753, 'Lurantis': 754, 'Morelull': 755, 'Shiinotic': 756,
  'Salandit': 757, 'Salazzle': 758, 'Stufful': 759, 'Bewear': 760, 'Bounsweet': 761, 'Steenee': 762, 'Tsareena': 763,
  'Comfey': 764, 'Oranguru': 765, 'Passimian': 766, 'Wimpod': 767, 'Golisopod': 768, 'Sandygast': 769, 'Palossand': 770,
  'Pyukumuku': 771, 'Type: Null': 772, 'Silvally': 773, 'Minior': 774, 'Komala': 775, 'Turtonator': 776, 'Togedemaru': 777,
  'Mimikyu': 778, 'Bruxish': 779, 'Drampa': 780, 'Dhelmise': 781, 'Jangmo-o': 782, 'Hakamo-o': 783, 'Kommo-o': 784,
  'Tapu Koko': 785, 'Tapu Lele': 786, 'Tapu Bulu': 787, 'Tapu Fini': 788, 'Cosmog': 789, 'Cosmoem': 790, 'Solgaleo': 791,
  'Lunala': 792, 'Nihilego': 793, 'Buzzwole': 794, 'Pheromosa': 795, 'Xurkitree': 796, 'Celesteela': 797, 'Kartana': 798,
  'Guzzlord': 799, 'Necrozma': 800, 'Magearna': 801, 'Marshadow': 802, 'Poipole': 803, 'Naganadel': 804, 'Stakataka': 805,
  'Blacephalon': 806, 'Zeraora': 807, 'Meltan': 808, 'Melmetal': 809,

  // Gen 8
  'Grookey': 810, 'Thwackey': 811, 'Rillaboom': 812, 'Scorbunny': 813, 'Raboot': 814, 'Cinderace': 815,
  'Sobble': 816, 'Drizzile': 817, 'Inteleon': 818, 'Skwovet': 819, 'Greedent': 820, 'Rookidee': 821,
  'Corvisquire': 822, 'Corviknight': 823, 'Blipbug': 824, 'Dottler': 825, 'Orbeetle': 826, 'Nickit': 827,
  'Thievul': 828, 'Gossifleur': 829, 'Eldegoss': 830, 'Wooloo': 831, 'Dubwool': 832, 'Chewtle': 833,
  'Drednaw': 834, 'Yamper': 835, 'Boltund': 836, 'Rolycoly': 837, 'Carkol': 838, 'Coalossal': 839,
  'Applin': 840, 'Flapple': 841, 'Appletun': 842, 'Silicobra': 843, 'Sandaconda': 844, 'Cramorant': 845,
  'Arrokuda': 846, 'Barraskewda': 847, 'Toxel': 848, 'Toxtricity': 849, 'Sizzlipede': 850, 'Centiskorch': 851,
  'Clobbopus': 852, 'Grapploct': 853, 'Sinistea': 854, 'Polteageist': 855, 'Hatenna': 856, 'Hattrem': 857,
  'Hatterene': 858, 'Impidimp': 859, 'Morgrem': 860, 'Grimmsnarl': 861, 'Obstagoon': 862, 'Perrserker': 863,
  'Cursola': 864, 'Sirfetch\'d': 865, 'Mr. Rime': 866, 'Runerigus': 867, 'Milcery': 868, 'Alcremie': 869,
  'Falinks': 870, 'Pincurchin': 871, 'Snom': 872, 'Frosmoth': 873, 'Stonjourner': 874, 'Eiscue': 875,
  'Indeedee': 876, 'Morpeko': 877, 'Cufant': 878, 'Copperajah': 879, 'Dracozolt': 880, 'Arctozolt': 881,
  'Dracovish': 882, 'Arctovish': 883, 'Duraludon': 884, 'Dreepy': 885, 'Drakloak': 886, 'Dragapult': 887,
  'Zacian': 888, 'Zamazenta': 889, 'Eternatus': 890, 'Kubfu': 891, 'Urshifu': 892, 'Zarude': 893,
  'Regieleki': 894, 'Regidrago': 895, 'Glastrier': 896, 'Spectrier': 897, 'Calyrex': 898,

  // Gen 9
  'Sprigatito': 906, 'Floragato': 907, 'Meowscarada': 908, 'Fuecoco': 909, 'Crocalor': 910, 'Skeledirge': 911,
  'Quaxly': 912, 'Quaxwell': 913, 'Quaquaval': 914, 'Lechonk': 915, 'Oinkologne': 916, 'Tarountula': 917,
  'Spidops': 918, 'Nymble': 919, 'Lokix': 920, 'Pawmi': 921, 'Pawmo': 922, 'Pawmot': 923, 'Tandemaus': 924,
  'Maushold': 925, 'Fidough': 926, 'Dachsbun': 927, 'Smoliv': 928, 'Dolliv': 929, 'Arboliva': 930, 'Capsakid': 931,
  'Scovillain': 932, 'Toedscool': 933, 'Toedscruel': 934, 'Wiglett': 935, 'Wugtrio': 936, 'Bombirdier': 937,
  'Finizen': 938, 'Palafin': 939, 'Varoom': 940, 'Revavroom': 941, 'Cyclizar': 942, 'Orthworm': 943, 'Glimmet': 944,
  'Glimmora': 945, 'Greavard': 946, 'Houndstone': 947, 'Flamigo': 948, 'Cetoddle': 949, 'Cetitan': 950, 'Veluza': 951,
  'Dondozo': 952, 'Tatsugiri': 953, 'Annihilape': 954, 'Clodsire': 955, 'Farigiraf': 956, 'Dudunsparce': 957,
  'Kingambit': 958, 'Great Tusk': 959, 'Scream Tail': 960, 'Brute Bonnet': 961, 'Flutter Mane': 962, 'Slime Mold': 963,
  'Sandy Shocks': 964, 'Iron Treads': 965, 'Iron Bundle': 966, 'Iron Hands': 967, 'Iron Jugulis': 968, 'Iron Moth': 969,
  'Iron Thorns': 970, 'Frigibax': 971, 'Arctibax': 972, 'Baxcalibur': 973, 'Gimmighoul': 974, 'Gholdengo': 975,
  'Wo-Chien': 976, 'Chien-Pao': 977, 'Ting-Lu': 978, 'Chi-Yu': 979, 'Roaring Moon': 980, 'Iron Valiant': 981,
  'Koraidon': 982, 'Miraidon': 983, 'Walking Wake': 984, 'Iron Leaves': 985, 'Dipplin': 986, 'Poltchageist': 987,
  'Sinistcha': 988, 'Okidogi': 989, 'Munkidori': 990, 'Fezandipiti': 991, 'Ogerpon': 992, 'Archaludon': 993,
  'Hydrapple': 994, 'Gouging Fire': 995, 'Raging Bolt': 996, 'Iron Boulder': 997, 'Iron Crown': 998, 'Terapagos': 999,
  'Pecharunt': 1000
};

// Function to get the correct sprite URL for Pokemon, including Mega Evolutions and forms
const getPokemonSpriteUrl = (pokemonName) => {
  const baseId = POKEMON_IDS[pokemonName];
  if (!baseId) return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'; // Default to Bulbasaur

  // Handle Mega Evolutions
  if (pokemonName.includes('Mega ')) {
    const baseName = pokemonName.replace('Mega ', '');
    const megaBaseId = POKEMON_IDS[baseName];
    if (pokemonName.includes(' X')) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${megaBaseId}-mega-x.png`;
    } else if (pokemonName.includes(' Y')) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${megaBaseId}-mega-y.png`;
    } else {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${megaBaseId}-mega.png`;
    }
  }

  // Handle other forms (this is a basic implementation - can be expanded)
  const formMatch = pokemonName.match(/\b(Dusk|Midday|Midnight)\b/i);
  if (formMatch) {
    const form = formMatch[1].toLowerCase();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${baseId}-${form}.png`;
  }

  if (pokemonName.includes('Alolan')) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${baseId}-alolan.png`;
  }
  if (pokemonName.includes('Galarian')) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${baseId}-galar.png`;
  }
  if (pokemonName.includes('Hisuian')) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${baseId}-hisui.png`;
  }

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${baseId}.png`;
};

const getItemSpriteUrl = (itemName) => {
  if (!itemName) return '';
  // Normalize item names to match PokeAPI item sprite filenames.
  const normalized = itemName
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/'/g, '')
    .replace(/\./g, '')
    .replace(/\u00E9/g, 'e')
    .replace(/\u00E1/g, 'a')
    .replace(/\u00F3/g, 'o')
    .replace(/\u00E7/g, 'c');

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${normalized}.png`;
};

const pokedexGrid = document.getElementById('pokedex-grid');
const encountersList = document.getElementById('encounters-list');
const battlesList = document.getElementById('battles-list');
const battleCards = document.getElementById('battle-cards');
const battleDetail = document.getElementById('battle-detail');
const searchInput = document.getElementById('search');

let pokemonList = [];

const paintTypeBadges = () => {
  document.querySelectorAll('.badge').forEach((badge) => {
    const color = TYPE_COLORS[badge.dataset.type] || '#555';
    badge.style.borderColor = color;
    badge.style.backgroundColor = `${color}22`;
    badge.style.color = '#f3f4f6';
  });
};

const renderPokedex = (list) => {
  if (!pokedexGrid) return;

  pokedexGrid.innerHTML = list
    .map(
      (poke) => `
      <div class="poke-card">
        <div class="poke-card-content">
          <img src="${poke.sprite}" alt="Sprite ${poke.name}" loading="lazy" />
          <h3>${poke.name}</h3>
          <div class="poke-number">#${String(poke.id).padStart(3, '0')}</div>
        </div>
      </div>
    `
    )
    .join('');

};

const renderEncounterAreas = (areas) => {
  if (!encountersList) return;

  encountersList.innerHTML = areas
    .map(
      (area) => `
      <div class="encounter-area">
        <div class="encounter-header">
          <h3>${area.name}</h3>
        </div>
        <table class="encounter-table">
          <thead>
            <tr><th>Pokémon</th><th>%</th><th>Method</th><th>Level</th></tr>
          </thead>
          <tbody>
            ${area.encounters
              .map(
                (enc) => `<tr>
                  <td>${enc.pokemon}</td>
                  <td>${enc.rate}</td>
                  <td>${enc.method}</td>
                  <td>${enc.level}</td>
                </tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>
    `
    )
    .join('');
};

const slugify = (text) =>
  text
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const makeBattleSlug = (trainer) => {
  const base = trainer.replace(/\s*\(.*\)$/g, '').trim();
  if (base.includes('&')) {
    return slugify(base.replace('&', 'and'));
  }
  return slugify(base.split(' ')[0]);
};

const renderBattleCards = (battles, category, containerId) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filteredBattles = battles;

  if (category === 'gym-leaders') {
    filteredBattles = battles.filter(battle => battle.trainer.includes('Líder de Ginásio'));
  } else if (category === 'elite-four') {
    filteredBattles = battles.filter(battle => battle.trainer.includes('Elite Four'));
  } else if (category === 'champions') {
    filteredBattles = battles.filter(battle => battle.trainer.includes('Campeão'));
  }

  container.innerHTML = filteredBattles
    .map((battle) => {
      const slug = makeBattleSlug(battle.trainer);
      return `
      <a class="card battle-card" href="battles/${slug}.html">
        <div class="card-content">
          <h3>${battle.trainer}</h3>
          <p>${battle.location}</p>
        </div>
      </a>
    `;
    })
    .join('');
};

const renderBattleDetail = (battle) => {
  if (!battleDetail || !battle) return;

  const trainerSlug = makeBattleSlug(battle.trainer);

  battleDetail.innerHTML = `
    <div class="battle-header">
      <div class="battle-info">
        <div class="trainer-image-container">
          <img src="../images/${trainerSlug}.png" alt="${battle.trainer.split(' ')[0]}" class="trainer-image" />
        </div>
        <h2>${battle.trainer}</h2>
        <p class="muted">${battle.location}</p>
        <a class="button" href="../battles.html">← Voltar</a>
      </div>
    </div>
    <div class="team-grid">
      ${battle.team
        .map(
          (member) => `
        <div class="pokemon-card">
          <div class="pokemon-card-header">
            <img src="${getPokemonSpriteUrl(member.name)}" alt="${member.name}" class="pokemon-sprite" />
            <div>
              <h3>${member.name}</h3>
              <div class="subtext">Nv. ${member.level}</div>
            </div>
          </div>
          <div class="pokemon-meta">
            <span class="badge ability-badge" title="${member.abilityDescription || ABILITY_DESCRIPTIONS[member.ability] || 'Unknown ability'}">${member.ability}</span>
            <span class="item-badge" title="${member.item || 'No item'}">
              ${member.item ? `<img src="${getItemSpriteUrl(member.item)}" alt="${member.item}" class="item-sprite" />` : '-'}
            </span>
          </div>
          <ul class="move-list">
            ${member.moves.map((mv) => `<li title="${mv.desc}" style="background-color: ${MOVE_TYPE_COLORS[mv.type] || '#555'}">${mv.name}</li>`).join('')}
          </ul>
        </div>
      `
        )
        .join('')}
    </div>
  `;
};

const applyFilters = () => {
  if (!searchInput) return;

  const query = searchInput.value.trim().toLowerCase();

  const filtered = pokemonList.filter((poke) => {
    const matchesQuery =
      poke.name.toLowerCase().includes(query) ||
      String(poke.id).padStart(3, '0').includes(query) ||
      String(poke.id).includes(query);

    return matchesQuery;
  });

  renderPokedex(filtered);
};

const initPokedexPage = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1008');
  const data = await response.json();
  pokemonList = data.results.map(p => {
    const id = p.url.split('/').filter(Boolean).pop();
    return {
      id: parseInt(id),
      name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    };
  });
  renderPokedex(pokemonList);
  // populateTypeFilter(pokemonList); // removed since no types
  searchInput.addEventListener('input', applyFilters);
  // typeFilter.addEventListener('change', applyFilters); // removed
};

const initEncountersPage = async () => {
  const encountersRes = await fetch('data/encounters.json');
  const encounters = await encountersRes.json();
  renderEncounterAreas(encounters);
};

const getDataPath = (relative) => {
  const base = window.location.pathname.includes('/battles/') ? '../' : '';
  return `${base}${relative}`;
};

const initBattlesPage = async () => {
  const battlesRes = await fetch(getDataPath('data/battles.json'));
  const battles = await battlesRes.json();

  // Renderizar cards por categoria
  renderBattleCards(battles, 'gym-leaders', 'gym-leaders');
  renderBattleCards(battles, 'elite-four', 'elite-four');
  renderBattleCards(battles, 'champions', 'champions');

  if (battleDetail) {
    const requested = battleDetail.dataset.trainer || new URLSearchParams(window.location.search).get('trainer');
    const pageSlug = window.location.pathname.split('/').pop().replace('.html', '');
    const targetSlug = requested ? makeBattleSlug(requested) : pageSlug;
    const selected = battles.find((b) => makeBattleSlug(b.trainer) === targetSlug);
    renderBattleDetail(selected);
  }
};

if (pokedexGrid) initPokedexPage();
if (encountersList) initEncountersPage();

// Initialize battles page if we're on the battles page
if (window.location.pathname.includes('battles.html') || battleDetail) {
  initBattlesPage();
}

// Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      const icon = header.querySelector('.accordion-icon');
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      // Toggle current item
      header.setAttribute('aria-expanded', !isExpanded);
      content.style.display = isExpanded ? 'none' : 'block';

      // Update icon
      if (icon) {
        icon.textContent = isExpanded ? '▶' : '▼';
      }
    });
  });
});
