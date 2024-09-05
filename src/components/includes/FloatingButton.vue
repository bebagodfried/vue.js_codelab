<script setup>

</script>

<template>
  <button class="size-48 p-0 rounded-full hover:scale-15 fs-1">
    <Icon v-bind:class="(isBtnClose)? 'bi-x' : 'bi-plus'" />
  </button>
</template>

<script>
export default {
  props : [ 'isBtnClose' ]
}
</script>