import { formatRelative } from 'date-fns'

export const formatDate = (createdAt: string): string =>
  formatRelative(new Date(parseInt(createdAt)), new Date())
