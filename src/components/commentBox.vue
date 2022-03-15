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
      <div class="info flex ">
          <div class="relative flex flex-col bg-gray-50 rounded-full h-12 w-12 items-center mr-8">
            <input type="file" class="cursor-pointer opacity-0"/>
            <div class="text-xs w-10 text-black text-opacity-50">点击头像上传</div>
          </div>
          <input
          v-model="contents.username"
          type="text"
          placeholder="请输入用户名"
          class="bg-gray-50 p-2 rounded w-48"/>
      </div>
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
