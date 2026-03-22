# ☕ ChaiBrew.js

### Brew your Chai, in your own style.

> A lightweight, utility-first CSS engine that lets you **style directly from your HTML** — no CSS files needed.

---

## 🚀 What is ChaiBrew?

ChaiBrew is a **runtime CSS engine** inspired by utility-first frameworks like Tailwind.

Instead of writing CSS, you write simple class names:

```html
<div class="chai-bg-red chai-p-10 chai-rounded-8"></div>
```

And ChaiBrew converts them into real styles instantly ⚡

---

## ⚡ Why ChaiBrew?

Because sometimes you don’t need a heavy setup — you just need speed.

* ⚡ No build tools required
* 🪶 Lightweight & fast
* 🧠 Smart parsing engine
* 🎯 Utility-first approach
* 🧩 Fully customizable
* 🔌 Easy integration

---

## 📦 Installation

```bash
npm install chaibrew
```

---

## 🛠️ Usage

### 1. Import

```js
import chaiBrew from "chaibrew";
```

---

### 2. Initialize

```js
document.addEventListener("DOMContentLoaded", () => {
  chaiBrew();
});
```

---

### 3. Use in HTML

```html
<div class="chai-bg-blue chai-p-20 chai-text-white chai-rounded-10">
  Welcome to ChaiBrew ☕
</div>
```

---

## 🔍 How It Works

ChaiBrew scans your DOM for classes starting with:

```
chai-
```

Then:

1. 🔍 Parses the class
2. 🧠 Maps it to a CSS property
3. 🎨 Applies styles dynamically
4. 🧹 Removes processed classes safely

---

## 🧪 Example

### Input

```html
<div class="chai-w-200 chai-h-100 chai-bg-green chai-rounded-12"></div>
```

### Output (Rendered)

* width: 200px
* height: 100px
* background-color: green
* border-radius: 12px

---

## 🧱 Supported Utilities (Sample)

| Class          | Output                |
| -------------- | --------------------- |
| chai-bg-red    | background-color: red |
| chai-p-10      | padding: 10px         |
| chai-m-20      | margin: 20px          |
| chai-rounded-8 | border-radius: 8px    |
| chai-w-200     | width: 200px          |

---

## 🧩 Customization

Extend your own design system using a map:

```js
export const map = {
  bg: "background-color",
  p: "padding",
  m: "margin",
  text: "color"
};
```

---

## 🛡️ Safe by Design

* ✔ Only processes `chai-*` classes
* ✔ Keeps your custom classes untouched
* ✔ No global CSS pollution

---

## 📁 Project Structure

```
src/
 ├── engine/
 │    ├── parser.js
 │    ├── applier.js
 │    └── index.js
 ├── config/
 │    └── map.js
 └── index.js
```

---

## 💡 Use Cases

* 🚀 Rapid prototyping
* 🎯 Learning CSS engine internals
* 🧪 Building Tailwind-like systems
* 🧩 Lightweight UI projects

---

## 🧠 Inspiration

Inspired by utility-first CSS frameworks like Tailwind,
but built to understand and simplify the core idea.

---

## 🤝 Contributing

Contributions, ideas, and improvements are welcome!
Let’s brew something amazing together ☕

---

## 📄 License

MIT License

---

## 👨‍💻 Author

**Ritik Raghuwanshi**
Building simple, powerful developer tools ⚡
