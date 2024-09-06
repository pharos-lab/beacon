import * as components from './components';

const beacon = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);
    }
  },
};

export { beacon };