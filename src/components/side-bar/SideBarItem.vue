<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <q-item
    v-ripple
    clickable
  >
    <q-icon
      :name="icon"
      class="mini-icon text-light"
    />
    <q-item-section>
      {{ label }}
    </q-item-section>
  </q-item>
</template>

<style lang="scss">
.mini-icon {
  font-size: 1.718em;
  padding: 2px 16px;

  &+& {
    margin-top: 18px;
  }

}
</style>
