import demo from '../app';

test('Функция demo возвращает переданное в неё значение', () => {
  expect(demo('123')).toBe('123');
});
