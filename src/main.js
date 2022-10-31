import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from "gsap/all";


// don't forget to register plugins
gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin)
createApp(App).use(store).use(router).mount('#app')
