describe('env.test', () => {
  test('VITE_TESLO_API_URL: value', () => {

    expect(import.meta.env.VITE_TESLO_API_URL).toBe('http://localhost:3000/api')
  });
});
