<template>
  <button
  class="pt-4 text-blue-600"
  :class="[showCommentBox?'pb-2':'pb-10']"
  @click="showCommentBox=!showCommentBox">回复</button>
  <commentBox class="mb-4" v-if="showCommentBox"/>
</template>

<script>
import { ref } from 'vue'
import commentBox from './commentBox.vue'
export default {
  name: 'replyBox',
  components: { commentBox },
  setup () {
    const showCommentBox = ref(false)
    return { showCommentBox }
  }
}
</script>
