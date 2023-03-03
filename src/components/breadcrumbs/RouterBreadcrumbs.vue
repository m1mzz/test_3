<template>
  <div class="router-breadcrumbs flex items-center q-py-sm">
    <q-breadcrumbs-el>
      <q-btn
        unelevated
        color="secondary"
        icon="chevron_left"
        padding="xs"
        text-color="inherit"
      />
    </q-breadcrumbs-el>
    <q-breadcrumbs active-color="inherit">
      <template #separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          class="router-breadcrumbs__separator"
        />
      </template>

      <q-breadcrumbs-el label="Contacts" />
      <q-breadcrumbs-el label="Jennifer Crowford" />
    </q-breadcrumbs>
  </div>
</template>

<style lang="scss">
.router-breadcrumbs {
  gap: 0.75rem;
  color: $text-distinct;
  font-weight: 600;

  &__separator {
    color: $text-light;
  }
}
</style>
