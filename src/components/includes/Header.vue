<template>
  <header class="px-2 py-3 flex-column">
    <h1 class="fw-900">
      <icon class="bi-list-check" />
      Check list
    </h1>
    <slot></slot>
  </header>
</template>

<script>
  import FloatingButton from "@/components/includes/FloatingButton.vue";
</script>