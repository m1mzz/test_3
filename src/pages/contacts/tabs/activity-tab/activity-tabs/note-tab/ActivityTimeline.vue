<script setup lang="ts">
import type { PropType } from 'vue';
import type { ActivityChild, ActivityTypes, ActivityPriority } from './ActivityTypes';

defineProps({
  timelines: {
    type: Array as PropType<ActivityChild[]>,
    required: true,
  },
});

const iconMapper: Record<ActivityTypes, string> = {
  task: 'assignment_turned_in',
  deal: 'monetization_on',
};

const priorityIconMapper: Record<ActivityPriority, string> = {
  low: 'south',
  high: 'expand_less',
  urgent: 'keyboard_double_arrow_up',
};

const priorityIconColorMapper: Record<ActivityPriority, string> = {
  low: 'text-green',
  high: 'text-negative',
  urgent: 'text-negative',
};

const DAYS_NEAR = 1;
const getTimeIndicator = (time: string) => {
  const diff = new Date(time).getTime() - Date.now();
  if (diff < 0) return 'negative';
  if (diff < DAYS_NEAR * 24 * 60 * 60 * 1000) return 'orange';
  return null;
};
</script>

<template>
  <q-timeline
    class="activity-timeline q-pl-sm"
    color="secondary"
  >
    <q-timeline-entry
      v-for="activity in timelines"
      :key="activity.title"
      :heading="false"
      :icon="iconMapper[activity.type]"
    >
      <div class="bg-white rounded-borders q-pa-md">
        <div class="flex no-wrap q-mb-sm">
          <span class="text-uppercase caption-caps text-light">
            {{ activity.type }}
          </span>
          <q-space />
          <span
            class="text-light text-400"
            :class="`text-${getTimeIndicator(activity.date)}`"
          >
            {{ activity.date }}
          </span>
        </div>
        <div class="subhead-600 q-mb-sm">
          {{ activity.title }}
        </div>
        <div class="text-400 q-mb-sm">
          {{ activity.description }}
        </div>
        <div class="flex items-center gap-6 text-600">
          <div class="activity-timeline__status caption-caps">
            {{ activity.status }}
          </div>
          <div class="flex items-center gap-2">
            <q-icon
              :name="priorityIconMapper[activity.priority]"
              size="1rem"
              :class="priorityIconColorMapper[activity.priority]"
            />
            <div class="text-capitalize">
              {{ activity.priority }}
            </div>
          </div>
        </div>
      </div>
    </q-timeline-entry>
  </q-timeline>
</template>

<style lang="scss">
.activity-timeline {
  margin-top: 2px;

  &__status {
    border: 1px solid #C7BBDD;
    border-radius: 20px;
    background: #F7F5FA;
    padding: 3px 8px;
  }

  .q-timeline__subtitle,
  .q-timeline__title {
    display: none;
  }

  .q-timeline__content {
    padding-bottom: 8px;
  }

  .q-timeline__entry--icon .q-timeline__dot:before {
    background: #fff;
  }

  .q-timeline__dot .q-icon {
    color: $text-distinct;
  }

  .q-timeline__entry--icon .q-timeline__dot {
    width: 36px;
    top: 10px;
  }

  .q-timeline__entry--icon .q-timeline__dot:before {
    width: 36px;
    height: 36px;
    top: 1px
  }

  .q-timeline__entry--icon .q-timeline__dot:after {
    top: 45px;
    bottom: 8px;
    left: 17px;
    width: 1px;
    background: $bg-soft-gray;
  }

}
</style>
