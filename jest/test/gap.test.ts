import { gap } from '../gap'

describe('test gap and ts', () => {
  it('gap(3,2) === 1', () => {
    expect(gap(3, 2)).toBe(1)
  })
  it('gap(2,3) === 1', () => {
    expect(gap(2, 3)).toBe(1)
  })
})