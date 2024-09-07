<template>
<li v-bind:class="[(taskAlreadyExists)? 'border-danger' : '', 'task']">
  <div class="flex items-center justify-between">

    <span :class="[(checked)? 'opacity-50' : '', 'flex-1']">
      <icon v-bind:class="[(checked)? 'bi-check-circle fg-success' : (taskAlreadyExists)? 'bi-x-circle fg-danger' : 'bi-circle']" /> {{ taskName }}
    </span>

    <span class="small pos-relative">
      <i v-if="isPreview">preview</i>
      <i v-else class="bi bi-x fs-16 bg-red rounded-full size-16 fg-white opacity-50 hover:opacity-100 z-9" title="Delete"></i>

      <i v-if="taskAlreadyExists" class="text-red fw-900">{{ ' - Task exist!' }}</i>
    </span>
  </div>
</li>
</template>

<script>
export default {
  props: [
        'checked', 'taskName', 'taskAlreadyExists', 'isPreview'
    ]
};
</script>