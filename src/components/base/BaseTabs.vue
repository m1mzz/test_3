<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  tabs: {
    type: Array as PropType<{ name: string, label: string, counter?: number }[]>,
    required: true,
  },
  size: {
    type: String as PropType<'sm' | 'md'>,
    default: 'md',
  },
});
const emits = defineEmits(['update:modelValue']);

const activeTab = computed({
  get() {
    return props.modelValue;
  },
  set(tab: string) {
    emits('update:modelValue', tab);
  },
});
</script>

<template>
  <q-tabs
    v-model="activeTab"
    no-caps
    align="left"
    narrow-indicator
    indicator-color="primary"
    :class="['base-tabs', { 'base-tabs--sm': size === 'sm' }]"
    active-class="base-tabs__active-tab"
    :dense="size === 'sm'"
  >
    <q-tab
      v-for="tab in tabs"
      :key="tab.name"
      :name="tab.name"
      :class="['base-tabs__tab', { 'base-tabs__tab--sm': size === 'sm' }]"
    >
      <div class="flex no-wrap">
        <span class="text-600">
          {{ tab.label }}
        </span>
        <span
          v-if="tab.counter ?? false"
          class="base-tabs__counter text-sm-600"
        >
          {{ tab.counter }}
        </span>
      </div>
    </q-tab>
  </q-tabs>
</template>

<style lang="scss">
.base-tabs {
  margin-left: -16px;

  &--sm {
    margin-left: -12px;
  }

  &__tab {

    &--sm {
      padding-left: 12px;
      padding-right: 12px;
    }
  }

  &__active-tab {
    color: $text-neutral;
  }

  &__counter {
    color: $text-light;
    margin-left: 6px;
    align-self: flex-end;
  }

  .q-tab__indicator {
    height: 0.1875rem;
    border-radius: 2px 2px 0 0;
  }
}
</style>
