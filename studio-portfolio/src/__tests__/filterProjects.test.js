import filterProjects from '../utils/filterProjects';

const data = [
  { id: 1, title: 'Harbor Coffee', description: 'Packaging for a roastery' },
  { id: 2, title: 'Kito App', description: 'Mobile banking' },
];

test('returns everything for an empty search', () => {
  expect(filterProjects(data, '  ')).toHaveLength(2);
});
test('matches title and description, ignoring capital letters', () => {
  expect(filterProjects(data, 'harbor')).toHaveLength(1);
  expect(filterProjects(data, 'BANKING')[0].id).toBe(2);
});
test('returns an empty list when nothing matches', () => {
  expect(filterProjects(data, 'zzz')).toEqual([]);
});
