<template>
  <!-- <form action="" class="grid" @submit="handleSubmit">
    <textarea
      v-model="content"
      name="comment"
      id=""
      placeholder="请输入你的评论"
      class="bg-gray-50 p-2 rounded"
    ></textarea>
    <fieldset class="py-4">
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
    </fieldset>
  </form> -->
  <div class="grid">
    <textarea
      v-model="content"
      name="comment"
      id=""
      placeholder="请输入你的评论"
      class="bg-gray-50 p-2  mb-6 rounded"
    ></textarea>
      </div>
    <button @click="handleSubmit" class="px-4 py-1 bg-blue-600 rounded text-white">评论</button>
    <button class="px-4 py-1 bg-white rounded border ml-3">取消</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'commentBox',
  setup (props, context) {
    const content = ref('')
    const handleSubmit = (e) => {
      e.preventDefault()
      context.emit('submit', content.value)
      content.value = ''
    }
    return { content, handleSubmit }
  }
}
</script>
