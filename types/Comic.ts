export interface Comic {
    _id: string
    status: String,
    author: String,
    genres: [],
    otherNames: String,
    review: String,
    newestChapter: Number,
    view: Number,
    name: String,
    updatedAt: String,
    slug: String,
    chapSuggests: [],
    follow: Number,
    comment: Number,
    thumbnail: String,
    chapterList: {
        chapterId: string
        chapterNumber: string
        chapterTitle: string
        updatedAt: string
        view: string
    }[]
}
