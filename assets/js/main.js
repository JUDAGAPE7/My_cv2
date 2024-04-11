
import updateCopyright from "./components/deate_updater.js";
import changePage from "./components/language.js";
import parallax from "./components/parallax.js";
import resetToHome from "./components/reload_page.js";
import setThemeOnLoad from "./components/scheme.js";
// import scheme from "./components/scheme.js";
import activeMenu from "./components/selected_menu.js";
import sendEmail from "./helpers/send_form.js";




parallax();
activeMenu();
resetToHome();
updateCopyright();
sendEmail();
setThemeOnLoad();
changePage

