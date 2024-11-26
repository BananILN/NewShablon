import Element from "../constructor/Element.js";

const cardssData = [
  'Same card1',
  "Same card2",
  "Same card3",
  "Same card4",
  "Same card5",
];

const sidecards = cardssData.map(el => new Element('div', 'Sidecard', el).get());
const sidebarContent = new Element("div", "sidebarContent", sidecards);

export default sidebarContent;