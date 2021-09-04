<template>
  <div id="nav">
    <main class="p-4 bg-gray-50 min-h-screen">
      <div class="max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
        <h2 class="text-3xl my-6">评论</h2>
        <commentBox @submit="addNewComment"/>
        <commentDivider />
        <div v-for="(comment, index) in comments" :key="index">
          <!-- 单个留言 -->
          <commentItem
          :user="comment.user"
          :avatar="comment.avatar"
          :time="comment.time"
          :content="comment.content"/>
          <!-- 回复 -->
          <replyContainer v-if="comment.replies">
            <commentItem
            v-for="reply in comment.replies"
            :key="reply.id"
            :user="reply.user"
            :avatar="reply.avatar"
            :time="reply.time"
            :content="reply.content"/>
          </replyContainer>
          <reply-box/>
        </div>
      </div>
    </main>
  </div>
  <router-view />
</template>

<script>
import { ref } from 'vue'
import commentBox from './components/commentBox.vue'
import commentDivider from './components/commentDivider.vue'
import commentItem from './components/commentItem.vue'
import replyBox from './components/replyBox.vue'
import replyContainer from './components/repyContainer.vue'
import face1 from './assets/images/face1.jpeg'
import face2 from './assets/images/face2.png'
import face3 from './assets/images/face3.jpg'
import face4 from './assets/images/face4.jpeg'

const comments = ref([
  {
    id: 1,
    user: '梦落轻寻',
    avatar: face1,
    time: '2 小时之前',
    content: '新买的小皮筋不是我不想要，而是我认为只要有一个就好，虽然现在的它也有一些旧了，看起来没有那么新，但是它代替你陪着我是最长时间的呀。',
    replies: [
      {
        id: 2,
        user: '彼岸花开',
        avatar: face2,
        time: '1 小时之前',
        content: '赞！！！'
      },
      {
        id: 3,
        user: '行云流水',
        avatar: face3,
        time: '1 小时之前',
        content: '一直都是最开始就分好技术栈的才开始动手的，静态页面就用jq ，从来没有试过从静态转vue'
      }
    ]
  }
])
const testId = ref(4)
const constructNewComment = (content) => {
  return {
    id: testId.value++,
    user: '当前用户',
    avatar: face4,
    time: '1 秒前',
    content
  }
}
const addNewComment = (content) => {
  const newComment = constructNewComment(content)
  comments.value.push(newComment)
  console.log(newComment)
}
export default {
  name: 'App',
  components: { commentBox, commentDivider, commentItem, replyBox, replyContainer },
  setup () {
    return { comments, addNewComment }
  }
}
</script>
