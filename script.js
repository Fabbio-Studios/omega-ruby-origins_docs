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

const pokedexGrid = document.getElementById('pokedex-grid');
const encountersList = document.getElementById('encounters-list');
const battlesList = document.getElementById('battles-list');
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
      <div class="card">
        <img class="sprite" src="${poke.sprite}" alt="Sprite ${poke.name}" loading="lazy" />
        <div class="poke-head">
          <div class="dex">#${String(poke.id).padStart(3, '0')}</div>
          <h3>${poke.name}</h3>
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
      <article class="block">
        <h3>${area.name}</h3>
        <table class="table">
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
      </article>
    `
    )
    .join('');
};

const renderBattles = (battles) => {
  if (!battlesList) return;

  battlesList.innerHTML = battles
    .map(
      (battle) => `
      <article class="block">
        <h3>${battle.trainer} · ${battle.location}</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Pokémon</th><th>Level</th><th>Item</th><th>Ability</th><th>Moveset</th>
            </tr>
          </thead>
          <tbody>
            ${battle.team
              .map(
                (member) => `<tr>
                <td>${member.name}</td>
                <td>${member.level}</td>
                <td>${member.item || '-'}</td>
                <td>${member.ability}</td>
                <td>${member.moves.join(', ')}</td>
              </tr>`
              )
              .join('')}
          </tbody>
        </table>
      </article>
    `
    )
    .join('');
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

const initBattlesPage = async () => {
  const battlesRes = await fetch('data/battles.json');
  const battles = await battlesRes.json();
  renderBattles(battles);
};

if (pokedexGrid) initPokedexPage();
if (encountersList) initEncountersPage();
if (battlesList) initBattlesPage();
