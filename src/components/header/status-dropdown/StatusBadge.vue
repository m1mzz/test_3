<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

export type StatusName = 'online' | 'away' | 'do not disturb' | 'offline';
export type StatusAccept = {
  calls: boolean;
  chats: boolean;
};
const props = defineProps({
  status: {
    type: String as PropType<StatusName>,
    required: true,
  },
  accept: {
    type: Object as PropType<StatusAccept>,
    default: null,
  },
});

const filled = computed(() => {
  if (props.status !== 'online' || !props.accept) return null;
  const acceptValues = Object.values(props.accept);
  const countAccepts = acceptValues.reduce((acc, val) => acc + Number(val), 0);
  if (countAccepts === 0) return 'empty';
  if (countAccepts === acceptValues.length) return 'full';
  return 'half';
});

const colorMapper = {
  online: 'green',
  away: 'orange',
  'do not disturb': 'negative',
  offline: 'secondary',
};

</script>

<template>
  <q-badge
    rounded
    :color="colorMapper[status]"
    :class="{
      'status-badge--bordered': status === 'offline',
      [`status-badge--${filled}`]: filled,
    }"
  />
</template>

<style lang="scss">
.status-badge {
  &--bordered {
    box-shadow: 0 0 0 1px #B9B9B9;
  }

  &--half {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 1px;
      left: 50%;
      right: 1px;
      bottom: 1px;
      display: block;
      border-radius: 0 20px 20px 0;
      background: #fff;
    }

  }

  &--empty {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      right: 3px;
      bottom: 3px;
      display: block;
      border-radius: 20px;
      background: #fff;
    }

  }
}
</style>
