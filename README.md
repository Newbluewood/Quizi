# Quizi

Kviz aplikacija u pregledaču: prijava, rešavanje pitanja (JSON), tabla rezultata i statički sadržaj. Nema pravog bekenda — podaci ostaju u **LocalStorage** u tvom pregledaču.

## Demo

Živa verzija: [quizi-if-not-busy.netlify.app](https://quizi-if-not-busy.netlify.app/)

## Tehnologije

U projektu (prema zavisnostima u `Quizi/node_modules`) koriste se m.in. **Vue 3**, **Vite ~5**, **Vue Router**, **Pinia**.

## Probni nalozi

Lozinke su isključivo za demo. Korisničko ime profesora u podacima aplikacije glasi **Proffesor** (dva slova „f“ — usklađeno sa `Quizi/dist/data/Users.json`).

| Uloga      | Korisničko ime | Lozinka   |
|-----------|----------------|-----------|
| Admin     | Admin          | Admin     |
| Korisnik  | User1          | User1     |
| Korisnik  | User2          | User2     |
| Profesor  | Proffesor      | Noe       |
| Korisnik  | Jordan         | Naismith  |

## Struktura repozitorijuma

- **`Quizi/dist/`** — gotov frontend build (`index.html`, `assets/`, `data/` sa pitanjima i avatarama).
- **`Quizi/.vscode/`** — podešavanja editora.
- **`README.md`** — ovaj dokument.

Napomena: u istoriji ovog repoa nalazi se i ceo **`Quizi/node_modules/`**. Uobičajena praksa je da se `node_modules` ne čuva u Git-u (`.gitignore` + `npm install`), zajedno sa izvorom (`src/`, `package.json`, konfig Vite-a).

## Pokretanje lokalno (samo build)

Dok izvorni kod nije u repou, možeš servirati samo **`Quizi/dist`** bilo kojim statičkim serverom, npr.:

```bash
npx --yes serve "Quizi/dist"
```

Alternativa je da otvoriš `Quizi/dist/index.html` preko jednostavnog lokalnog servera pregledača (neki pregledači direktno `file://` ograničavaju ES module).

Kada povratiš izvor aplikacije, ovde dodaj korake oblika `npm install` → `npm run dev` / `npm run build`.

---

*Podaci iz kviza i korisnika nisu zajednički na serveru — sve je namenjeno učenju i prototipu.*
