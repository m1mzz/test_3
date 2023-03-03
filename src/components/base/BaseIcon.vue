<template>
  <component
    :is="iconComponent"
    role="img"
    :width="size || width"
    :height="size || height"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { ComputedRef } from 'vue';

const icons: { [key: string]: typeof defineComponent; } = {};
const iconsModules = import.meta.globEager('/src/assets/svgIcon/**/*.svg');

// eslint-disable-next-line no-restricted-syntax, guard-for-in
for (const path in iconsModules) {
  // eslint-disable-next-line no-useless-escape
  const iconName = path.replace(/^.*[\\\/]/, '').replace('.svg', '');
  icons[iconName] = (iconsModules[path] as any).default || iconsModules[path];
}

export default defineComponent({
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true,
      validator: (value: string) => Object.prototype.hasOwnProperty.call(icons, value),
    },
    width: {
      type: [String, Number],
      default: 22,
    },
    height: {
      type: [String, Number],
      default: 22,
    },
    size: {
      type: [String, Number],
      default: 0,
    },
  },
  setup(props) {
    const iconComponent: ComputedRef<typeof defineComponent> = computed(() => icons[props.name]);

    return {
      iconComponent,
      iconsModules,
      icons,
    };
  },
});
</script>
