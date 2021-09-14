<template>
  <button
  class="pt-4 text-blue-600"
  :class="[showCommentBox?'pb-2':'pb-10']"
  @click="showCommentBox=!showCommentBox">回复</button>
  <commentBox
  class="mb-4"
  v-if="showCommentBox"
  @submit="emit('inSubmit', $event)"
  showCommentBox = false
  />
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import commentBox from './commentBox.vue'
const emit = defineEmits(['inSubmit'])
const showCommentBox = ref(false)
</script>
