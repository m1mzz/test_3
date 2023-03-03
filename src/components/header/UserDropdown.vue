<script setup lang="ts">
import logoImgPath from '@/assets/images/logo_1.png';

const list = [
  [
    {
      label: 'Settings',
      icon: 'settings',
    },
    {
      label: 'Workspace',
      icon: 'business',
    },
    {
      label: 'Users',
      icon: 'supervisor_account',
    },
    {
      label: 'Billing',
      icon: 'payment',
    },
    {
      label: 'Help center',
      icon: 'help_outline',
    },
  ],
  [
    {
      label: 'Log out',
      icon: 'logout',
    },
  ],
];
</script>

<template>
  <q-btn-dropdown
    unelevated
    outline
    color="secondary"
    class="hide-dropdown-icon"
    no-caps
  >
    <template #label>
      <div class="flex items-center no-wrap gap-2">
        <div class="text-600 text-distinct">
          TextMagic
        </div>
        <q-avatar size="1.375rem">
          <img src="@/assets/images/user-avatar.jpg">
        </q-avatar>
      </div>
    </template>
    <q-list dense>
      <div class="user-dropdown__header">
        <q-avatar
          size="52px"
          class="q-mb-sm"
        >
          <img src="@/assets/images/user-avatar.jpg">
        </q-avatar>
        <div class="subhead-600 text-neutral">
          Robert Overrit
        </div>
        <div class="text-400">
          robert.overrit@textmagic.com
        </div>
        <q-btn
          flat
          no-caps
          class="text-600"
          padding="xs"
          color="primary"
          to="/some.link"
        >
          Manage account
        </q-btn>
      </div>
      <q-item
        clickable
        class="flex items-center no-wrap gap-2"
      >
        <q-icon
          class="text-distinct rounded-borders q-py-sm"
          size="2.5rem"
          :name="'img:' + logoImgPath"
        />
        <q-item-section class="text-neutral text-600">
          <q-item-label>
            <div class="subhead-600">
              TextMagic
            </div>
            <div class="text-distinct text-600">
              textmagic.touchpoint.com
            </div>
          </q-item-label>
        </q-item-section>
        <q-icon
          class="text-distinct rounded-borders q-ml-lg"
          size="1.375rem"
          name="chevron_right"
        />
      </q-item>
      <template
        v-for="(innerList, i) in list"
        :key="i"
      >
        <q-separator />
        <q-item
          v-for="(item) in innerList"
          :key="item.label"
          v-close-popup
          clickable
          class="flex items-center no-wrap gap-2"
        >
          <q-icon
            class="text-distinct q-py-sm"
            size="1rem"
            :name="item.icon"
          />
          <q-item-section class="text-neutral text-600">
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-btn-dropdown>
</template>

<style lang="scss">
.user-dropdown {
  &__header {
    width: 300px;
    min-height: 170px;
    background: url(@/assets/images/user_bg.png);
    background-size: cover;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
