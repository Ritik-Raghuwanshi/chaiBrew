class Applier{
    constructor(){

    }
    apply(element,style){
       return element.style.cssText += style;
    }
}
export default Applier;