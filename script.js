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
  'Geodude': 74,
  'Nosepass': 299,
  'Wingull': 278,
  'Machop': 66,
  'Makuhita': 296,
  'Voltorb': 100,
  'Electrike': 309,
  'Magnemite': 81,
  'Magneton': 82,
  'Slugma': 218,
  'Torkoal': 324,
  'Numel': 322,
  'Camerupt': 323,
  'Slaking': 289,
  'Vigoroth': 288,
  'Meditite': 307,
  'Linoone': 264,
  'Taillow': 276,
  'Pelipper': 279,
  'Skarmory': 227,
  'Altaria': 334,
  'Lunatone': 337,
  'Solrock': 338,
  'Ralts': 280,
  'Claydol': 344,
  'Milotic': 350,
  'Ludicolo': 272,
  'Whiscash': 340,
  'Gyarados': 130,
  'Wailord': 321,
  'Mightyena': 262,
  'Cacturne': 332,
  'Shiftry': 275,
  'Crawdaunt': 342,
  'Absol': 359,
  'Dusclops': 356,
  'Banette': 354,
  'Sableye': 302,
  'Dusknoir': 477,
  'Froslass': 478,
  'Sealeo': 364,
  'Glalie': 362,
  'Walrein': 365,
  'Shelgon': 372,
  'Flygon': 330,
  'Salamence': 373
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

const renderBattleCards = (battles) => {
  if (!battleCards) return;

  battleCards.innerHTML = battles
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
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${POKEMON_IDS[member.name] || 1}.png" alt="${member.name}" class="pokemon-sprite" />
            <div>
              <h3>${member.name}</h3>
              <div class="subtext">Nv. ${member.level}</div>
            </div>
            <div class="pokemon-item">${member.item || '-'}</div>
          </div>
          <div class="pokemon-meta">
            <span class="badge" title="${ABILITY_DESCRIPTIONS[member.ability] || 'Unknown ability'}">${member.ability}</span>
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
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=386');
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
  renderBattleCards(battles);

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
if (battlesList || battleCards || battleDetail) initBattlesPage();
