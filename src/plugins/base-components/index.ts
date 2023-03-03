import type { App, Component } from 'vue';

const components: { [key: string]: Component } = {};

const requireComponents = import.meta.globEager('@/components/base/**/*.vue');

Object.keys(requireComponents).forEach((fileName) => {
  // eslint-disable-next-line no-useless-escape
  const componentName = fileName.replace(/^.*[\\\/]/, '').replace('.vue', '');
  const componentConfig = requireComponents[fileName] as any;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  components[componentName!] = componentConfig.default || componentConfig;
});

export default function install(app: App) {
  Object.keys(components).forEach((name) => {
    const component = components[name];
    app.component(name, component);
  });
}
