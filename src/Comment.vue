<template>
  <div id="nav">
    <main class="p-4 bg-gray-50 min-h-screen">
      <div class="max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
        <h2 class="text-3xl my-6">评论</h2>
        <commentBox @submit="addNewComment($event)"/>
        <commentDivider />
          <div
          v-for="comment in comments"
          :key="comment._id">
            <!-- 单个留言 -->
            <commentItem
            :user="comment.username"
            :avatar="comment.avatar"
            :time="comment.createdAt"
            :content="comment.content"/>
            <!-- 回复 -->
            <replyContainer v-if="comment.replies">
              <commentItem
              v-for="reply in comment.replies"
              :key="reply._id"
              :user="reply.replyUserName"
              :avatar="reply.replyAvatar"
              :time="comment.createdAt"
              :content="reply.replyContent"/>
            </replyContainer>
            <reply-box @inSubmit="addReply($event, comment._id)"/>
          </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { getCommentList, makeAComment, makeAReply } from './api/api'
import timestamps from './effect/timestamps'
import commentBox from './components/commentBox.vue'
import commentDivider from './components/commentDivider.vue'
import commentItem from './components/commentItem.vue'
import replyBox from './components/replyBox.vue'
import replyContainer from './components/repyContainer.vue'
const comments = ref('')
onMounted(() => {
  getCommentListEffect()
})

const getCommentListEffect = async () => {
  await getCommentList().then(res => {
    comments.value = res.data;
    (comments.value).forEach(item => {
      item.createdAt = timestamps(item.createdAt)
    })
  })
}
const addReply = async (repContent, id) => {
  const { username, content } = repContent
  const data = { username, content, id }
  await makeAReply(data).then(res => {
    console.log(res)
  })
}
const addNewComment = async (contents) => {
  await makeAComment(contents).then(res => {
    console.log(res)
  })
  watchEffect(() => {
    getCommentListEffect()
  })
}
</script>
