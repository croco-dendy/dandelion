# 🌼 Dandelion

**Dandelion** is a monorepo for building a custom VS Code theme based on a watercolor-inspired palette, with modular structure and modern tooling.

---

## 🏠 Project Structure

```
packages/
├── palette/   # Color palette with named hues and shades
├── generator/ # Theme generator (outputs JSON for VS Code)
└── preview/   # React-based theme preview in the browser
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
pnpm install
```

### 2. Generate theme

```bash
pnpm generate
```

This runs the generator to output a `*.json` theme file using the current palette.

### 3. Preview in browser

```bash
pnpm dev --filter preview
```

This starts the local preview tool (React + Tailwind + TanStack Router).

---

## 📑 Workspaces

Each package is self-contained and typed:

* **@dendelion/palette** – Central palette with semantic color names and variations
* **@dendelion/generator** – CLI to create a JSON theme from palette
* **@dendelion/preview** – Visual tool to preview theme swatches in a watercolor pan layout

---

## ⚖️ Tooling

* **TypeScript** – All packages are typed
* **Bun + pnpm + Turbo** – Build system and scripts
* **VS Code** – Final output format
* **Shadcn/UI + Tailwind** – Frontend components
* **Biome** – Linter and formatter
