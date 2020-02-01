import { refundOneTran } from '../utils/utils'
import { correctUpdatedTranData, oldTranData } from './data'

test('update the data with correct state as REFUNDED', () => {
  const targetTran = {
    id: 'id3',
    created: 'created3',
    updated: 'updated3',
    amount: 10000011,
    currency: 'SGD',
    state: 'Confirmed',
    contactName: 'name3'
  }

  const updatedTran = refundOneTran(targetTran as any, oldTranData as any)
  expect(updatedTran).toEqual(correctUpdatedTranData)
})
