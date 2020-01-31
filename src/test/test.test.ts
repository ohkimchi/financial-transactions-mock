import 'jasmine'
import { refundOneTran } from '../utils/utils'
import { correctUpdatedTranData, oldTranData } from './data'

describe('update the state as REFUNDED', () => {
  it('should be true as the correct tran state is updated', () => {
    const targetTran = {
      id: 'id3',
      created: 'created3',
      updated: 'updated3',
      amount: 10000011,
      currency: 'SGD',
      state: 'Confirmed',
      contactName: 'name3'
    }

    const updatedTran = refundOneTran(targetTran, oldTranData)
    expect(updatedTran).toEqual(correctUpdatedTranData)
  })
})
