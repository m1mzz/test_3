<script setup lang="ts">
import { ref, reactive } from 'vue';
import StatusBadge from './StatusBadge.vue';
import StatusItem from './StatusItem.vue';
import type { StatusName, StatusAccept } from './StatusBadge.vue';

const currentStatus = ref<StatusName>('online');

const accept = reactive<StatusAccept>({
  calls: true,
  chats: true,
});

// const changeStatus = (statusName: StatusName) => {
//   currentStatus.value = statusName;
// };

</script>

<template>
  <q-btn-dropdown
    unelevated
    color="secondary"
    class="status-dropdown hide-dropdown-icon text-600"
  >
    <template #label>
      <div class="text-capitalize">
        <div class="flex items-center no-wrap gap-2 text-distinct">
          <StatusBadge
            :accept="accept"
            :status="currentStatus"
          />
          <span class="status-dropdown__btn-label">
            {{ currentStatus }}
          </span>
        </div>
      </div>
    </template>
    <q-list dense>
      <StatusItem
        status="online"
        label="Online"
        @click="currentStatus = 'online'"
      />

      <q-item
        class="flex items-center no-wrap gap-2"
        clickable
        @click="accept.calls = !accept.calls"
      >
        <q-badge color="transparent" />
        <q-item-section class="status-dropdown__label text-neutral text-600">
          <q-item-label :class="{ 'text-light': !accept.calls }">
            Accept calls
          </q-item-label>
        </q-item-section>
        <q-toggle
          v-model="accept.calls"
        />
      </q-item>

      <q-item
        class="flex items-center no-wrap gap-2"
        clickable
        @click="accept.chats = !accept.chats"
      >
        <q-badge color="transparent" />
        <q-item-section class="status-dropdown__label text-neutral text-600">
          <q-item-label :class="{ 'text-light': !accept.chats }">
            Accept chats
          </q-item-label>
        </q-item-section>
        <q-toggle
          v-model="accept.chats"
        />
      </q-item>

      <StatusItem
        status="away"
        label="Away"
        @click="currentStatus = 'away'"
      />

      <StatusItem
        status="do not disturb"
        label="Do not disturb"
        @click="currentStatus = 'do not disturb'"
      />

      <StatusItem
        status="offline"
        label="Offline"
        @click="currentStatus = 'offline'"
      />
    </q-list>
  </q-btn-dropdown>
</template>

<style lang="scss">
.status-dropdown {
  &[aria-expanded="true"] {
    background: $text-distinct !important;

    .status-dropdown__btn-label {
      color: #fff;
    }
  }

  &__label {
    min-width: 153px;
  }

}
</style>
