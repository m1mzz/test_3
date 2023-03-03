<script setup lang="ts">
import type { PropType } from 'vue';
import StatusBadge from './StatusBadge.vue';
import type { StatusName } from './StatusBadge.vue';

defineProps({
  label: {
    type: String,
    required: true,
  },
  status: {
    type: String as PropType<StatusName>,
    required: true,
  },
});
</script>

<template>
  <q-item
    v-close-popup
    clickable
    class="flex items-center no-wrap gap-2"
  >
    <StatusBadge :status="status" />
    <q-item-section class="status-dropdown__label text-neutral text-600 q-py-sm">
      <q-item-label>{{ label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
