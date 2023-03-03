<script setup lang="ts">
import { tabs, activeTab } from './tabs/useContactsTabs';
</script>

<template>
  <div class="contacts-header">
    <div class="flex items-center q-mb-lg">
      <q-avatar
        size="3.5rem"
        class="q-mr-md"
      >
        <img src="@/assets/images/avatar.jpg">
      </q-avatar>
      <div>
        <div class="page-title">
          Jennifer Crowford
        </div>
        <div class="flex items-center">
          <span>
            Sunflower Limited
          </span>
          <q-btn
            href="/start/pick-quasar-flavour"
            icon="north_east"
            size="0.625rem"
            padding="sm"
            flat
          />
        </div>
      </div>
    </div>
    <div class="flex no-wrap items-center justify-between">
      <BaseTabs
        v-model="activeTab"
        :tabs="tabs"
      />
      <div class="flex no-wrap items-center gap-2 text-distinct">
        <BaseBtnWhite
          icon="call"
          label="Call"
        />
        <BaseBtnWhite
          icon="mail"
          label="Mail"
        />
        <BaseBtnWhite
          icon="chat"
          label="Text"
        />
        <BaseBtnWhite
          icon="edit"
          label="Edit"
        />
        <BaseBtnWhite
          icon="more_vert"
          label="More"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contacts-header {
  color: $text-neutral;
  background: url('@/assets/images/pink-gradient-bg.png');
  background-size: cover;
  padding: 2rem 2rem 0;
  border-radius: 0.5rem;
  margin-bottom: 1.25rem;
}
</style>
