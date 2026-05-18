function somar(a: number, b: number): number {
  return a + b
}

describe('somar', () => {
  it('deve retornar 5 quando somar 2 + 3', () => {
    expect(somar(2, 3)).toBe(5)
  })

  it('deve retornar 0 quando somar -1 + 1', () => {
    expect(somar(-1, 1)).toBe(0)
  })
})