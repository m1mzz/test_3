<script setup lang="ts">
import { ref } from 'vue';
import CreateDropdown from './CreateDropdown.vue';
import UserDropdown from './UserDropdown.vue';
import StatusDropdown from './status-dropdown/StatusDropdown.vue';

const searchText = ref('');
</script>

<template>
  <q-header
    bordered
    class="q-px-md bg-white"
  >
    <q-toolbar class="q-px-md">
      <div class="flex no-wrap q-py-sm">
        <CreateDropdown />

        <q-input
          v-model="searchText"
          dense
          standout
          class="search"
          placeholder="Search TextMagic workspace"
        >
          <template #prepend>
            <q-icon name="search" />
          </template>
          <template #append>
            <q-icon
              name="clear"
              class="cursor-pointer"
              :class="{ invisible: searchText === '' }"
              @click="searchText = ''"
            />
          </template>
        </q-input>
      </div>
      <q-toolbar-title />
      <div class="flex q-py-sm text-distinct">
        <StatusDropdown />
        <q-btn
          unelevated
          icon="event"
          class="q-ml-sm"
        />
        <q-btn
          unelevated
          icon="notifications"
        />
        <q-btn
          unelevated
          icon="settings"
        />
        <UserDropdown />
      </div>
    </q-toolbar>
  </q-header>
</template>

<style lang="scss">
.search {
  width: 20rem;
  margin-left: 0.626rem;
}
</style>
