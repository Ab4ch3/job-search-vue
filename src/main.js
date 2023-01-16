import { createApp } from "vue";
// importamos las librerias de fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// importamos el icono que queremos agregar
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import App from "@/App.vue";
import "@/assets/tailwind.css";

library.add(faSearch);
// De esta manera colocamos un componenente global
//Primero va la etiqueta , y luego el componente real que va a renderizar
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
