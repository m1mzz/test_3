<script setup lang="ts">
import { ref } from 'vue';

const miniState = ref(true);

const drawer = ref(false);

const toggleMenu = () => {
  miniState.value = !miniState.value;
};
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
        <div class="q-py-lg">
          <div class="column items-start">
            <q-icon
              name="home"
              color="grey-6"
              class="mini-icon"
            />
            <q-icon
              name="forum"
              color="grey-6"
              class="mini-icon"
            />
            <q-icon
              name="send"
              color="grey-6"
              class="mini-icon"
            />
            <q-icon
              name="drafts"
              color="grey-6"
              class="mini-icon"
            />
          </div>
        </div>
      </q-scroll-area>
      <q-btn
        class="button-minimize-menu"
        flat
        round
        dense
        icon="menu"
        @click="toggleMenu"
      />
    </template>

    <q-scroll-area class="fit text-grey-6">
      <q-list padding>
        <q-item
          v-ripple
          clickable
        >
          <q-icon
            name="home"
            class="mini-icon"
          />
          <q-item-section>
            Inbox
          </q-item-section>
        </q-item>

        <q-item
          v-ripple
          active
          clickable
        >
          <q-icon
            name="forum"
            class="mini-icon"
          />
          <q-item-section>
            Star
          </q-item-section>
        </q-item>

        <q-item
          v-ripple
          clickable
        >
          <q-item-section>
            Send
          </q-item-section>
        </q-item>

        <q-item
          v-ripple
          clickable
        >
          <q-item-section>
            Drafts
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-btn
      class="button-minimize-menu"
      flat
      round
      dense
      icon="menu"
      @click="toggleMenu"
    />
  </q-drawer>
</template>

<style lang="scss">
.side-bar {
  // background: radial-gradient(#36364b 0 82%, #2f2f44 82%) no-repeat;
  // background-size: 240vh 113vh;
  // background-position: 100% 71%;
  background: radial-gradient(#36364b 0 82%, #2f2f44 82%) no-repeat;
  background-size: 193vh 103vh;
  background-position: 100% 71%;
  background-color: #2f2f44;
}

.button-minimize-menu {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.mini-slot {
  transition: background-color .28s;

  &:hover {
    background-color: rgba(0, 0, 0, .04);
  }

}

.mini-icon {
  font-size: 1.718em;
  padding: 2px 16px;

  &+& {
    margin-top: 18px;
  }

}
</style>
