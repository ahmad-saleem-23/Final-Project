import subscriptionReducer, { SubscriptionState } from '../subscriptionsReducer'
import {
  setSubsSuccess,
  setSubsRemove,
  setSubEdit,
} from '../../actions/subscriptions'
import { Subscription } from '../../../models/subscription'

const initialState: SubscriptionState = {
  loading: false,
  error: undefined,
  data: [] as Subscription[],
}

describe('taskReducer tests', () => {
  const subscriptions: Subscription[] = [
    {
      id: 1,
      userAuthId: 'google|123',
      name: 'Metlink',
      image: 'image.jpb',
      frequency: 'weekly',
      endDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      category: 'Travel',
      website: 'www.metlink.org.nz',
      price: 5.0,
    },
    {
      id: 2,
      userAuthId: 'google|123',
      name: 'Netflix',
      image: 'image.jpb',
      frequency: 'Monthly',
      endDate: '2023-04-14T08:41:30.872Z',
      isLastDate: false,
      scheduleDate: '2023-04-14T08:41:30.872Z',
      category: 'Entertainment',
      website: 'www.netflix.co.nz',
      price: 15.0,
    },
  ]

  it('should get all subscriptions', async () => {
    const action = setSubsSuccess(subscriptions)
    const newState = subscriptionReducer(initialState, action)

    expect(newState.data).toEqual(subscriptions)
  })

  it('should delete a subscription', () => {
    const tasks: Subscription[] = [
      {
        id: 1,
        userAuthId: 'google|123',
        name: 'Metlink',
        image: 'image.jpb',
        frequency: 'weekly',
        endDate: '2023-04-12T08:41:30.872Z',
        isLastDate: false,
        scheduleDate: '2023-04-12T08:41:30.872Z',
        category: 'Travel',
        website: 'www.metlink.org.nz',
        price: 5.0,
      },
      {
        id: 2,
        userAuthId: 'google|123',
        name: 'Netflix',
        image: 'image.jpb',
        frequency: 'Monthly',
        endDate: '2023-04-14T08:41:30.872Z',
        isLastDate: false,
        scheduleDate: '2023-04-14T08:41:30.872Z',
        category: 'Entertainment',
        website: 'www.netflix.co.nz',
        price: 15.0,
      },
    ]

    const initial: SubscriptionState = {
      loading: false,
      error: undefined,
      data: tasks,
    }

    const action = setSubsRemove('1')
    const newState = subscriptionReducer(initial, action)
    expect(newState.data).toEqual([
      {
        id: 2,
        userAuthId: 'google|123',
        name: 'Netflix',
        image: 'image.jpb',
        frequency: 'Monthly',
        endDate: '2023-04-14T08:41:30.872Z',
        isLastDate: false,
        scheduleDate: '2023-04-14T08:41:30.872Z',
        category: 'Entertainment',
        website: 'www.netflix.co.nz',
        price: 15.0,
      },
    ])
  })

  it('should update a subscription', () => {
    //Arrange
    const initialSubState: SubscriptionState = {
      loading: false,
      error: undefined,
      data: [
        {
          id: 2,
          userAuthId: 'google|123',
          name: 'Netflix Update',
          image: 'image.jpb',
          frequency: 'Monthly',
          endDate: '2023-04-14T08:41:30.872Z',
          isLastDate: false,
          scheduleDate: '2023-04-14T08:41:30.872Z',
          category: 'Entertainment Update',
          website: 'www.netflix.com',
          price: 20.0,
        },
      ],
    }

    const updateSubScription: Subscription = {
      id: 2,
      userAuthId: 'google|123',
      name: 'Netflix Update',
      image: 'image.jpb',
      frequency: 'Monthly',
      endDate: '2023-04-14T08:41:30.872Z',
      isLastDate: false,
      scheduleDate: '2023-04-14T08:41:30.872Z',
      category: 'Entertainment Update',
      website: 'www.netflix.com',
      price: 20.0,
    }
    const updateTaskAction = setSubEdit(updateSubScription)

    //Act
    const newState = subscriptionReducer(initialSubState, updateTaskAction)

    //Assert
    expect(newState.data).toEqual([updateSubScription])
  })
})
