<template>
<li v-bind:class="[(taskAlreadyExists)? 'border-danger' : '', 'task']">
  <div class="flex items-center justify-between">
    <span class="flex-1">
      <icon v-bind:class="[(checked)? 'bi-check-circle fg-success' : (taskAlreadyExists)? 'bi-x-circle fg-danger' : 'bi-circle']" /> {{ taskName }}
    </span>
    <span v-if="taskAlreadyExists" class="small">
      <i>preview</i>
      <i class="text-red fw-900"> :Task exist!</i>
    </span>
  </div>
</li>
</template>

<script>
export default {
  props: [
        'checked', 'taskName', 'taskAlreadyExists'
    ]
};
</script>