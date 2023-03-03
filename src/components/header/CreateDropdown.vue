<script setup lang="ts">

const list = [
  [
    {
      label: 'Text message',
      icon: 'message',
    },
    {
      label: 'Email',
      icon: 'email',
    },
    {
      label: 'Call',
      icon: 'call',
    },
  ],
  [
    {
      label: 'Campaign',
      icon: 'campaign',
    },
    {
      label: 'Task',
      icon: 'assignment_turned_in',
    },
    {
      label: 'Deal',
      icon: 'monetization_on',
    },
  ],
  [
    {
      label: 'Contact',
      icon: 'person',
    },
    {
      label: 'Organization',
      icon: 'domain',
    },
    {
      label: 'List',
      icon: 'supervisor_account',
    },
    {
      label: 'Segment',
      icon: 'pie_chart',
    },
  ],
];
</script>

<template>
  <q-btn-dropdown
    unelevated
    color="primary"
    label="Create"
    class="hide-dropdown-icon"
    no-caps
  >
    <q-list dense>
      <template
        v-for="(innerList, i) in list"
        :key="i"
      >
        <q-separator v-if="i" />
        <q-item
          v-for="(item) in innerList"
          :key="item.label"
          v-close-popup
          clickable
          class="flex items-center no-wrap gap-2"
        >
          <q-icon
            class="text-distinct"
            size="1rem"
            :name="item.icon"
          />
          <q-item-section class="create-dropdown__label text-neutral text-600">
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-btn-dropdown>
</template>

<style lang="scss">
.create-dropdown {
  &__label {
    min-width: 8rem;
  }
}
</style>
