<script setup lang="ts">
import ContactsSidebar from './ContactsSidebar.vue';
import { tabs, activeTab } from './tabs/useContactsTabs';

</script>

<template>
  <div class="contacts-body">
    <div class="contacts-body__tab">
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
    </div>
    <div class="contacts-body__sidebar">
      <ContactsSidebar />
    </div>
  </div>
</template>

<style lang="scss">
.contacts-body {
  display: flex;
  gap: 1.25rem;

  &__tab {
    max-width: 690px;
    width: 100%;
  }

  &__sidebar {
    width: 20rem;
    flex: none;
  }
}
</style>
