import Magician from '../classes/magician.js';

test('Проверка класса Magician', () => {
  const hero = new Magician('Ivan');
  const correct = {
    name: 'Ivan', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(hero).toEqual(correct);
});
