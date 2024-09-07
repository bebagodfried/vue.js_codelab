<template>
  <Header>
    <form action=""
          method="post"
          id="taskForm"
          class="block w-100" v-show="getFormFocus()"
          v-on:submit.prevent="pushTask(taskName)">

      <hr class="divider">

      <div class="flex g-1 w-100">
        <input type="text"
               id="taskName"
               class="m-0 w-100"
               v-model="taskName"
               placeholder="Insert your task"
               autofocus=true>

        <button type="submit" class="p-0 size-32 bg-none" :disabled="!checkTask(taskName) || taskName === ''">
          <icon class="bi-floppy-fill fs-18"></icon>
        </button>
      </div>
    </form>
  </Header>
  <ul>
    <task v-for="i in tasks"

          :taskName="i.name"
          :checked="i.checked"

          v-on:click="i.checked = !i.checked"
    />

    <task v-show="taskName !== '' && formSwitch"
          :taskAlreadyExists="!checkTask(taskName)"
          :taskName="taskName"
          :checked="false"
          :isPreview="true"

          v-on:click.prevent
    />
  </ul>

  <FloatingButton
      class="pos-fixed bottom-5 right-5"
      v-on:click="(formSwitch)? setFormFocus(0) : setFormFocus(1)"
      v-bind:is-btn-close="formSwitch" />
</template>

<script>
import Header from "@/components/includes/Header.vue";
import FloatingButton from "@/components/includes/FloatingButton.vue";

export default {
  components: {FloatingButton, Header},
  data() {
    return {
      taskName: '',
      formSwitch: false,
      taskValidated: true,
      tasks : [
        {
          name: 'code',
          checked: false
        }
      ]
    }
  },

  methods: {
    checkTask(newTask) {
      this.taskValidated = !this.tasks.some(item => item.name.toLowerCase() === newTask.toLowerCase())
      return this.taskValidated
    },

    pushTask(taskName) {
      const task = {
        name: taskName,
        checked: false
      };

      if(this.taskValidated) {
        this.tasks.push(task)
        this.taskName = ''
      }
    },

    setFormFocus(v) {
      this.formSwitch = v;
    },
    
    getFormFocus() {
      return this.formSwitch
    }
  }
}
</script>