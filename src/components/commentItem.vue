<template>
  <div class="flex">
    <img
      :src="avatar"
      alt=""
      class="w-12 h-12 mr-4 rounded-full"
    />
    <div>
      <p>{{user}}</p>
      <p class="text-gray-600 text-sm">{{time}}</p>
    </div>
    <span class="ml-auto text-2xl">⋮</span>
  </div>
  <p class="text-gray-600 py-4">{{content}}</p>
</template>

<script>
export default {
  name: 'commentItem',
  props: ['user', 'time', 'content', 'avatar']
}
</script>
