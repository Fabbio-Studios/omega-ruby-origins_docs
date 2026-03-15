# Omega Ruby Origins Wiki

Site estático (HTML/CSS/JS) pronto para **GitHub Pages**.

## Estrutura

- `index.html`: menu inicial da wiki
- `pokedex.html`: Pokédex com busca e filtro por tipo
- `encounters.html`: encontros por área
- `battles.html`: batalhas importantes
- `data/*.json`: dados do jogo
- `.github/workflows/deploy-pages.yml`: deploy automático para GitHub Pages
- `.nojekyll`: desativa processamento Jekyll (serve arquivos estáticos diretamente)

## Publicar no GitHub Pages

### Opção recomendada (automática via GitHub Actions)

1. Envie o projeto para o GitHub.
2. Garanta que a branch padrão seja `main`.
3. Em **Settings → Pages → Build and deployment**, selecione **Source: GitHub Actions**.
4. Ao fazer push na `main`, o workflow `Deploy static site to GitHub Pages` publica o site.

## Desenvolvimento local

```bash
python3 -m http.server 4173
```

Acesse:

- `http://127.0.0.1:4173/index.html`

## Observações

- Os links e `fetch` usam caminhos relativos, então o site funciona tanto em domínio raiz quanto em subcaminho de projeto do GitHub Pages.

## Personalizando equipes, habilidades e sprites

- O arquivo `data/battles.json` define todos os treinadores, seus Pokémon, itens, habilidades e movimentos.
- Para mudar a habilidade de um Pokémon (por exemplo, usar uma habilidade alternativa), edite o campo `ability` do Pokémon no JSON.
- Para mudar o item segurado, edite o campo `item` do Pokémon.
- Você também pode adicionar `abilityDescription` para customizar o tooltip que aparece ao passar o mouse sobre a habilidade.

### Editando os sprites exibidos

- Os sprites dos Pokémon são controlados pelo arquivo `script.js` e usam o mapeamento em `POKEMON_IDS`.
- Se um sprite aparecer errado (por exemplo, Lycanroc aparecendo como Rockruff), verifique se o nome está correto no `POKEMON_IDS` ou se você está usando uma forma especial (por exemplo, `Lycanroc Dusk`).
- O URL do sprite é gerado automaticamente em `getPokemonSpriteUrl()`, que também lida com formas como `Dusk`, `Midday`, `Midnight`, `Alolan`, `Galarian` e `Hisuian`.
