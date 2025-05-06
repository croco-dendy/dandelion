# @dendelion/palette

🎨 Harmonious color palette inspired by watercolor sets and nature.

Part of the [Adooone Dandelion](https://www.npmjs.com/org/adooone) design system.

---

## ✨ Features

- 12 base colors × 5 shades each (`blur`, `calm`, `core`, `deep`, `echo`)
- Consistent naming
- Emotionally balanced tones
- Designed for use in theming, UI kits, VS Code themes, and design systems

---

## 🌈 Example

```ts
import { swatches, getColor } from '@dendelion/palette'

const grapeCore = getColor('grape', 'core')
console.log(grapeCore) // #b392da
```

---

## 🎨 Full color names

- `paper`, `space`, `glade`, `lemon`
- `curry`, `chili`, `ocean`, `river`
- `grape`, `coral`, `earth`, `stone`

Each has: `blur`, `calm`, `core`, `deep`, `echo`

---

## 📦 Install

```bash
pnpm add @dendelion/palette
```

---

## 🧩 Part of the Adooone Dandelion system

Also see:
- `@dendelion/generator` — create themes from the palette
- `@dendelion/themes` — ready-to-use VS Code themes

---

## 📜 License

MIT — [Dendy](https://github.com/croco-dendy)
