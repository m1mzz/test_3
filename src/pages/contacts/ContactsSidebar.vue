<script setup lang="ts">

</script>

<template>
  <div class="contacts-sidebar bg-white">
    <div class="flex items-center no-wrap justify-between">
      <div class="headline">
        Details
      </div>
      <BaseBtnWhite
        icon="more_vert"
        padding="sm"
      />
    </div>
    <dl>
      <dt class="text-distinct text-sm-600 q-mb-sm q-mt-md">
        Assigned to
      </dt>
      <dd class="flex items-center no-wrap gap-2">
        <q-avatar size="1.5rem">
          <img src="@/assets/images/user-avatar.jpg">
        </q-avatar>
        <div class="text-600">
          Franklin Strickland
        </div>
      </dd>

      <dt class="text-distinct text-sm-600 q-mb-sm q-mt-md">
        Status
      </dt>
      <dd>
        <div class="contacts-sidebar__status caption-caps">
          lead
        </div>
      </dd>

      <dt class="text-distinct text-sm-600 q-mb-sm q-mt-md">
        <span>
          Email
        </span>
        <span class="text-light">
          (Work)
        </span>
      </dt>
      <dd class="text-600">
        kenzilaw@textmagic.com
      </dd>

      <dt class="text-distinct text-sm-600 q-mb-sm q-mt-md">
        <span>
          Phone
        </span>
        <span class="text-light">
          (Home)
        </span>
      </dt>
      <dd class="text-600">
        (990) 338-9983
      </dd>

      <dt class="text-distinct text-sm-600 q-mb-sm q-mt-md">
        Organization
      </dt>
      <dd class="flex items-center no-wrap gap-2">
        <q-avatar size="1.5rem">
          <img src="@/assets/images/master-card.png">
        </q-avatar>
        <div class="text-600">
          MasterCard
        </div>
      </dd>

      <dt class="text-distinct text-sm-600 q-mb-sm q-mt-md">
        Lists
      </dt>
      <dd class="flex items-center no-wrap gap-2 text-600 text-distinct">
        <div class="rounded-borders bg-secondary q-py-xs q-px-sm">
          Key account
        </div>
        <div class="rounded-borders bg-secondary q-py-xs q-px-sm">
          Important
        </div>
      </dd>

      <dt class="text-distinct text-sm-600 q-mb-sm q-mt-md">
        Segments
      </dt>
      <dd class="flex items-center no-wrap gap-2 text-600 text-distinct">
        <div class="rounded-borders bg-secondary q-py-xs q-px-sm">
          Summer client
        </div>
      </dd>

      <dt class="text-distinct text-sm-600 q-mb-sm q-mt-md">
        Followers
      </dt>
      <dd class="flex items-center no-wrap text-600 text-distinct contacts-sidebar__avatars">
        <q-avatar
          size="1.5rem"
          class="contacts-sidebar__avatars-item"
        >
          <img src="@/assets/images/user-avatar.jpg">
        </q-avatar>
        <q-avatar
          size="1.5rem"
          class="contacts-sidebar__avatars-item"
        >
          <img src="@/assets/images/user-avatar.jpg">
        </q-avatar>
        <q-avatar
          size="1.5rem"
          class="contacts-sidebar__avatars-item"
        >
          <img src="@/assets/images/user-avatar.jpg">
        </q-avatar>
        <q-avatar
          size="1.5rem"
          class="contacts-sidebar__avatars-item"
        >
          <img src="@/assets/images/user-avatar.jpg">
        </q-avatar>
      </dd>

      <dt class="text-distinct text-sm-600 q-mb-sm q-mt-md">
        Tags
      </dt>
      <dd class="flex items-center no-wrap gap-2 text-600 text-distinct">
        <div class="rounded-borders bg-secondary q-py-xs q-px-sm">
          account
        </div>
        <div class="rounded-borders bg-secondary q-py-xs q-px-sm">
          issue
        </div>
      </dd>

      <q-btn
        flat
        no-caps
        class="text-600 q-mb-lg q-mt-md"
        padding="xs"
        color="primary"
        to="/some.link"
      >
        Show more
      </q-btn>

      <div class="text-sm-400 text-light">
        <div>
          Created: 29 Jul 2:24 am
        </div>
        <div>
          Updated: 30 Jul 10:24 am
        </div>
      </div>
    </dl>
  </div>
</template>

<style lang="scss">
.contacts-sidebar {
  padding: 1.5rem;
  border-radius: 0.5rem;

  &__status {
    display: inline-block;
    border: 1px solid #BFE0B8;
    border-radius: 20px;
    background: #F8FCF7;
    padding: 3px 8px;
    color: #6D9F4F;
  }

  &__avatars {
    flex-direction: row-reverse;
    justify-content: start;

    &-item {
      margin-right: -7px;

      img {
        border: 2px solid #fff;
      }
    }
  }
}
</style>
