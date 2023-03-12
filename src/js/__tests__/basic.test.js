import Team from '../app';

test('test iterator', () => {
  const character = { name: '1', team: 'bad' };
  const character2 = { name: '2', team: 'good' };
  const character3 = { name: '3', team: 'bad' };
  const character4 = { name: '4', team: 'good' };
  const teamChar = [character, character2, character3, character4];
  const commandos = new Team();
  commandos.addAll(character, character2, character3, character4);
  const teamArray = commandos.team.map((item) => item);
  expect(teamArray).toEqual(teamChar);
});
