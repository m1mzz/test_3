<script setup lang="ts">
import { ref } from 'vue';
import { tabs, activeTab } from './activity-tabs/ContactsActivityTabs';

const searchText = ref('');

</script>

<template>
  <div class="contacts-activity-tab__search flex no-wrap gap-2">
    <q-input
      v-model="searchText"
      dense
      standout
      class="full-width"
      bg-color="white"
      placeholder="Search this contact"
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

    <q-btn
      unelevated
      icon="unfold_more"
      color="white"
      text-color="inherit"
      size="sm"
      padding="0 0.75rem"
    />
  </div>

  <div class="contacts-activity-tab__header">
    <q-avatar
      size="2rem"
      class="q-mr-sm"
    >
      <img src="@/assets/images/user-avatar.jpg">
    </q-avatar>
    <BaseTabs
      v-model="activeTab"
      :tabs="tabs"
      size="sm"
    />
  </div>

  <q-tab-panels
    v-model="activeTab"
    class="bg-transparent"
    animated
    transition-prev="jump-left"
    transition-next="jump-right"
  >
    <q-tab-panel
      v-for="tab in tabs"
      :key="tab.name"
      :name="tab.name"
      :label="tab.label"
      class="no-padding"
    >
      <component :is="tab.component" />
    </q-tab-panel>
  </q-tab-panels>
</template>

<style lang="scss">
.contacts-activity-tab {
  &__search {
    margin-bottom: 1.25rem;
    color: $text-distinct;
  }

  &__header {
    display: flex;
    align-items: start;
  }
}
</style>
