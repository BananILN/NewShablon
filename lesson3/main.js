import Wrapper from "./constructor/Wrapper.js";
import content from "./modules/content.js";
import footer from "./modules/footer.js";
import header from "./modules/header.js";
import sidebarContent from "./modules/sidebarContent.js";
import sidebar  from "./modules/sidebar.js";
import FirstCards from "./modules/Cards.js";
import main from "./modules/maindiv.js";


main.append(header.get());
main.append(content.get());
main.append(footer.get())

content.append(FirstCards.get());
content.append(sidebarContent.get());


new Wrapper('#root', [main,sidebar]);