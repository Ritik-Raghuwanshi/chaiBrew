class Parser {
  constructor(map) {
    this.map = map;
  }

  isChaiClass(className) {
    return className.startsWith("chai-");
  }

  extractParts(className) {
    return className.split("-").slice(1); // better than splice
  }

  getPropertyKey(key) {
    return this.map[key];
  }

  getFinalValue(key, value) {
    // spacing system (p, m)
    if (key === "p" || key === "m") {
      return value * 4 + "px";
    }

    return value;
  }
  parse(className) {
    if (!this.isChaiClass(className)) return;
   
    const parts = this.extractParts(className);
  
    const key = parts[0];
   
    const value = parts[1];

    // safety check
    if (!key || !value) return;

    const property = this.getPropertyKey(key);
    // console.log(property)
    if (!property) return "Property does not exist ";

    const finalValue = this.getFinalValue(key, value);
    if(!finalValue)return
    return `${property}:${finalValue}; `;
  }
}

export default Parser;