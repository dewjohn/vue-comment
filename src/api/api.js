import http from '../utils/request'

// 获取评论列表
export const getCommentList = () => {
  return http.get('/api/comments')
}
// 发表评论
export const makeAComment = (data = {}) => {
  return http.post('/api/comments', data)
}
// 发表回复
export const makeAReply = (data = {}) => {
  return http.post('/api/comments/reply', data)
}
