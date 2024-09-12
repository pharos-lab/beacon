import Chart from './components/Chart.vue'

const beacon = {
  install(Vue, options = {}) {
      Vue.component('Chart', Chart);
  },
};

export { beacon };