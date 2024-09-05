// Import a stylesheet
import '@/assets/main.css'

/**
 * L'objet que nous passons dans createApp est en fait un composant.
 * Chaque application nécessite un "composant racine" qui peut contenir d'autres composants en tant qu'enfants.
 * Si vous utilisez des composants monofichiers, nous importons généralement le composant racine à partir d'un autre fichier :
 */
// Import de la fonction `createApp` depuis Vue.
import { createApp } from 'vue';

// Import du composant racine de l'application (nommée 'App').
import App from './App.vue';
import FoodItem from "@/components/FoodItem.vue";
import ListItem from "@/components/ListItem.vue";
import Icon from "@/components/includes/Icon.vue";

// An instance of Vue
const app = createApp(App);

// Components
app.component('icon', Icon);
app.component('food-item', FoodItem);
app.component('task', ListItem);

// Montage de l'application
// Le rendu sera à l'intérieur de l'élément #app.
// Ce dernier n'est pas considéré comme faisant partie de l'application.
app.mount('#app');
