import ComicSchema from '../schema/Comic'

export default defineEventHandler(async () => {
  return [
    {
      name: 'Người theo dõi',
      comics: await ComicSchema.find({}).sort({ follow: -1 }).limit(18)
    },
    {
      name: 'Cập nhật mới',
      comics: await ComicSchema.find({}).sort({ updatedAt: -1 }).limit(18)
    },
    {
      name: 'Đọc nhiều nhất',
      comics: await ComicSchema.find({}).sort({ view: -1 }).limit(18)
    }
  ]
})
