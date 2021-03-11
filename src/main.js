import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import BootstrapVue from 'bootstrap-vue';
import router from './router';
import 'animate.css';
import VAnimateCss from 'v-animate-css';
import store from './store';

Vue.use( Vuex );
Vue.use( VAnimateCss );
Vue.use( BootstrapVue );

Vue.config.productionTip = false;

export default new Vue( {
    store,
    router,
    render: h => h( App )
} ).$mount( '#app' );
