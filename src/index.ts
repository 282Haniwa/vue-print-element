import Vue from 'vue';
import App from './components/App';

const vue = new Vue({
  el: '#app',
  components: { App },
  template: `
    <div>
      <app />
    </div>`,
});
