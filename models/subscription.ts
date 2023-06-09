export interface Subscription {
  id: number
  userAuthId: string
  name: string
  image?: string
  auth0Id?: string
  isEmailSent?: boolean
  reminder?: boolean
  frequency: string
  endDate: string
  isLastDate: boolean
  scheduleDate: string
  category: string
  website: string
  price: number
}

export interface SubscriptionUpdate {
  id: number
  name: string
  category: string
  website: string
  price: number
}
