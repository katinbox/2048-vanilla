export default class Tile {
  #x;
  #y;
  #tileElement;
  #value;
  constructor(tileContainer, value = Math.random() <= .5 ? 2 : 4) {
    this.#tileElement = document.createElement("div");
    this.#tileElement.classList.add("tile");
    tileContainer.append(this.#tileElement);
    this.value = value;
  }

  set x(value) {
    this.#x = value;
    this.#tileElement.style.setProperty("--x", value);
  }

  set y(value) {
    this.#y = value;
    this.#tileElement.style.setProperty("--y", value);
  }

  get value() {
    return this.#value;
  }

  set value(v) {
    const power = Math.log2(v);
    const backgroundLightness = 100 - power * 9;
    const textLightness = backgroundLightness < 50 ? 90 : 10;
    this.#value = v;
    this.#tileElement.textContent = v;
    this.#tileElement.style.setProperty("--background-lightness", `${backgroundLightness}%`);
    this.#tileElement.style.setProperty("--text-lightness", `${textLightness}%`);
  }

  remove() {
    this.#tileElement.remove();
  }
}
