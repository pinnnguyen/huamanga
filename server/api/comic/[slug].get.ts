import ComicSchema from '../../schema/Comic'

export default defineEventHandler((event) => {
  const slug = event.context?.params?.slug

  return ComicSchema.findOne({ slug })
})
