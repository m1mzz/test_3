<script setup lang="ts">
import activities from './ActivityData';
import ActivityTimeline from './ActivityTimeline.vue';

</script>

<template>
  <div class="activity-list">
    <q-expansion-item
      v-for="activityGroup in activities"
      :key="activityGroup.title"
      v-model="activityGroup.isExpanded"
      class="activity-list__expand-container"
    >
      <template #header>
        <div class="flex items-center gap-2 full-width subhead-600">
          <span>
            {{ activityGroup.title }}
          </span>
          <span class="text-light text-600">
            {{ activityGroup.counter }}
          </span>
        </div>
      </template>

      <ActivityTimeline :timelines="activityGroup.timelines" />
    </q-expansion-item>
  </div>
</template>

<style lang="scss">
.activity-list {

  .q-item {
    padding-left: 0;
    padding-right: 0;
  }

  .q-item__section {
    padding-right: 2px;
  }

  &__expand-container {
    overflow: visible;
  }

}
</style>
