const db = require('../../data/dbConfig')

async function getAllLikes() {
  return await db('Likes')
}

async function getLikeCount(post_id) {
  const likeCount = await db('Likes')
    .count('like_id', { as: 'like_count' })
    .where('post_id', post_id)
    .first()
  return likeCount.like_count
}

async function getLikeByPostId(post_id) {
  const likes = await db('Likes').where('post_id', parseInt(post_id)).first()
  return likes
}
async function getLikeById(like_id) {
  const like = await db('Likes').where('like_id', like_id).first()
  return like
}

async function getLikesByFilter(filter) {
  const post = await db('Likes').where(filter).first()
  return post
}

async function createLike(like) {
  const [like_id] = await db('Likes').insert(like)
  return await getLikeById('like_id', like_id)
}

async function deleteLike(like_id) {
  return await db('Likes').where('like_id', like_id).delete()
}

module.exports = {
  getLikesByFilter,
  createLike,
  deleteLike,
  getLikeById,
  getLikeByPostId,
  getAllLikes,
  getLikeCount,
}
