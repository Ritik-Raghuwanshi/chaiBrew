import Parser from "./parser.js";
import Applier from "./applier.js";
import { map } from "../config/map.js";

const parser = new Parser(map);
const applier = new Applier();

function chaiBrew() {
  // Select all elements having chai-* classes
  const elements = document.querySelectorAll('[class*="chai-"]');

  elements.forEach((element) => {
    const classAttr = element.getAttribute("class");
    if (!classAttr) return;

    const classList = classAttr.split(" ");

    classList.forEach((cls) => {
      if (!cls.startsWith("chai-")) return;
      const result = parser.parse(cls);
     console.log(result)
      if (result) {
        applier.apply(element, result);
      }
    });


    // Remove only chai-* classes while other remains same
    const filteredClasses = classList.filter(
      (cls) => !cls.startsWith("chai-")
    );
     console.log("Filter",filteredClasses)
    if (filteredClasses.length > 0) {
      console.log("Ye run hua")
      element.setAttribute("class", filteredClasses.join(" "));
    } else {
      console.log("Removed Class:",element.removeAttribute("class"))
      element.removeAttribute("class")
    }
  });
}

export default chaiBrew;