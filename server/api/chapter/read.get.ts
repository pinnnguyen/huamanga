export default defineEventHandler(async (event) => {
  const serviceURL = useRuntimeConfig().SERVICE_URL
  const query = getQuery(event)

  const url = `${serviceURL}/api/nt/chapter/${query.slug}/${query.chapterNumber}/${query.chapterId}`
  return await $fetch(url)
})
