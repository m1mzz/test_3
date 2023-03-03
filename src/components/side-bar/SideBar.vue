<script setup lang="ts">
import { ref } from 'vue';
import logoImgPath from '@/assets/icons/logo.svg';
import SideBarItem from './SideBarItem.vue';

const miniState = ref(true);

const drawer = ref(false);

const toggleMenu = () => {
  miniState.value = !miniState.value;
};

const menu = [
  {
    label: 'Home',
    icon: 'home',
  },
  {
    label: 'Messenger',
    icon: 'question_answer',
  },
  {
    label: 'Ticket',
    icon: 'mail',
  },
  {
    label: 'Campaign',
    icon: 'campaign',
  },
  {
    label: 'Contacts',
    icon: 'person',
  },
  {
    label: 'Task',
    icon: 'assignment_turned_in',
  },
  {
    label: 'Deal',
    icon: 'monetization_on',
  },
  {
    label: 'Files',
    icon: 'folder',
  },
  {
    label: 'Automations',
    icon: 'play_circle_outline',
  },
  {
    label: 'Reports',
    icon: 'assessment',
  },
];
</script>

<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :mini="!drawer || miniState"
    :width="200"
    :breakpoint="500"
    bordered
    class="side-bar"
  >
    <template #mini>
      <q-scroll-area class="fit mini-slot cursor-pointer">
        <q-btn
          class="full-width text-white text-weight-bolder"
          size="18px"
          no-caps
          unelevated
          :icon="'img:' + logoImgPath"
        />
        <q-list padding>
          <SideBarItem
            v-for="menuItem in menu"
            :key="menuItem.label"
            :icon="menuItem.icon"
            :label="menuItem.label"
          />
        </q-list>
      </q-scroll-area>
      <q-btn
        class="button-minimize-menu text-light"
        flat
        round
        dense
        icon="menu"
        @click="toggleMenu"
      />
    </template>

    <q-scroll-area class="fit text-grey-6">
      <q-btn
        class="full-width text-white text-weight-bolder"
        size="18px"
        no-caps
        unelevated
        label="Touchpoint"
        :icon="'img:' + logoImgPath"
      />
      <q-list padding>
        <SideBarItem
          v-for="menuItem in menu"
          :key="menuItem.label"
          :icon="menuItem.icon"
          :label="menuItem.label"
        />
      </q-list>
    </q-scroll-area>

    <q-btn
      class="button-minimize-menu text-light text-600 full-width"
      flat
      dense
      no-caps
      icon="menu_open"
      label="Minimize menu"
      @click="toggleMenu"
    />
  </q-drawer>
</template>

<style lang="scss">
.side-bar {
  background: radial-gradient(#36364b 0 82%, #2f2f44 82%) no-repeat;
  background-size: 193vh 103vh;
  background-position: 100% 71%;
  background-color: #2f2f44;
}

.button-minimize-menu {
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
