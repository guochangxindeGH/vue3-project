<template>
  <div >
    <button @click="modalOpen = true">
      点我打开对话框
    </button>

    <teleport to="body">
      <div v-if="modalOpen"
           >
        看看我出现在了哪里
        <button @click="modalOpen = false">
          Close
        </button>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'modal-button',
  setup () {
    const modalOpen = ref(false)
    return {
      modalOpen
    }
  }
}
</script>
