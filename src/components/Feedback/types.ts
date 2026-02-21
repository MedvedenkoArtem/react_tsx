export type FeedbackProps = {
  likes: number
  dislikes: number
  onLike: () => void
  onDislike: () => void
  resetResults: () => void
}