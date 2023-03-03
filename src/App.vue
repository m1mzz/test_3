<script setup lang="ts">
import TheHeader from './components/header/TheHeader.vue';
import SideBar from './components/side-bar/SideBar.vue';
import PageContactsViewer from './pages/contacts/PageContactsViewer.vue';
import RouterBreadcrumbs from './components/breadcrumbs/RouterBreadcrumbs.vue';

</script>

<template>
  <q-layout
    view="lHh Lpr lff"
    container
    style="height: 300px"
    class="full-height text-neutral"
  >
    <TheHeader />

    <SideBar />

    <q-page-container class="app__main-container">
      <q-page class="q-px-md">
        <div class="app__main-content q-px-md">
          <RouterBreadcrumbs />
          <!-- Router-view -->
          <PageContactsViewer />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
HTML,
BODY,
#app {
  height: 100%;
}

.app {
  &__main-content {
    max-width: 1100px;
    margin: 0 auto;
  }

  &__main-container {
    background: $bg-main;
  }
}
</style>
