<script setup lang="ts">
import { ref } from 'vue';
import ActivityList from './note-tab/ActivityList.vue';

const noteText = ref('');
</script>

<template>
  <q-input
    v-model="noteText"
    dense
    standout
    bg-color="transparent"
    class="active-note-tab__input"
    placeholder="Click to add note"
  />
  <ActivityList />
</template>

<style lang="scss">
.active-note-tab {
  &__input {
    border: 1px solid $fills-yellow-dark;
    background: $fills-yellow-light;
    border-radius: 4px;
    margin-left: 40px !important;
    margin-bottom: 0.75rem;
  }
}
</style>
