# ☕ ChaiBrew

### Brew your Chai, in your own style.

> A zero-setup, utility-first CSS engine — just install, import, and start styling.

---

## 🚀 What is ChaiBrew?

ChaiBrew is a **lightweight CSS engine** that lets you style your UI directly from HTML using simple utility classes like:

```html
<div class="chai-bg-red chai-p-10 chai-rounded-8"></div>
```

No CSS files. No configuration. No manual initialization.

Just install and use ⚡

---

## ⚡ Zero Setup Usage

### 📦 Install

```bash
npm install chaibrew
```

---

### 🔌 Import (That’s it!)

```js
import "chaibrew";
```

> No need to call anything manually — ChaiBrew runs automatically.

---

### 🎨 Use in HTML

```html
<div class="chai-bg-blue chai-p-20 chai-text-white chai-rounded-10">
  Welcome to ChaiBrew ☕
</div>
```

---

## 🧠 How It Works

ChaiBrew automatically:

1. 🔍 Scans DOM for `chai-*` classes
2. 🧠 Parses class names
3. 🎨 Applies styles dynamically
4. 🧹 Cleans processed classes safely

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

## 🧱 Utility Examples

| Class          | Output                |
| -------------- | --------------------- |
| chai-bg-red    | background-color: red |
| chai-p-10      | padding: 10px         |
| chai-m-20      | margin: 20px          |
| chai-rounded-8 | border-radius: 8px    |
| chai-w-200     | width: 200px          |

---

## 🛡️ Safe by Design

* ✔ Only processes `chai-*` classes
* ✔ Keeps your custom classes untouched
* ✔ No global CSS pollution

---

## 🧩 Optional Manual Control

If you ever want manual control:

```js
import chaiBrew from "chaibrew";

chaiBrew();
```

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
* 🎯 Learning CSS engines
* 🧪 Building custom utility systems
* 🧩 Lightweight UI projects

---

## 🧠 Inspiration

Inspired by utility-first CSS frameworks like Tailwind,
built to simplify and understand the core idea.

---

## 🤝 Contributing

Contributions and ideas are welcome.
Let’s brew something amazing ☕

---

## 📄 License

MIT License

---

## 👨‍💻 Author

**Ritik Raghuwanshi**
Building simple, powerful developer tools ⚡
