<template>
  <form action="" class="grid" @submit="handleSubmit">
    <textarea
      v-model="contents.content"
      name="comment"
      id=""
      placeholder="Just so so"
      class="bg-gray-50 p-2 rounded"
    ></textarea>
    <fieldset class="py-4 flex justify-between">
      <input
      v-model="contents.username"
      type="text"
      placeholder="请输入用户名"
      class="bg-gray-50 p-2 rounded w-48"/>
      <div>
        <input
          type="submit"
          value="评论"
          class="px-4 py-1 bg-blue-600 rounded text-white"
        />
        <input
          type="reset"
          value="取消"
          class="px-4 py-1 bg-white rounded border ml-3"
        />
      </div>
    </fieldset>
  </form>
</template>

<script setup>
import { defineEmits, reactive } from 'vue'
// const username = ref('')
// const content = ref('')
const contents = reactive({
  username: '',
  content: '',
  replies: []
})
const emit = defineEmits(['submit'])
const handleSubmit = (e) => {
  e.preventDefault()
  if (contents.content !== '') {
    emit('submit', contents)
    contents.username = ''
    contents.content = ''
  }
}
</script>
