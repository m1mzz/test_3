<script setup lang="ts">

</script>

<template>
  <q-btn
    unelevated
    color="white"
    class="base-btn-white text-600"
    text-color="inherit"
    no-caps
    v-bind="$attrs"
  >
    <slot />
  </q-btn>
</template>

<style lang="scss">
.base-btn-white {

  .q-icon {
    font-size: 1.25em;
    margin-right: 6px;
  }
}
</style>
