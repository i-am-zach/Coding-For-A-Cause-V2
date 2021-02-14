const { getAllMembers } = require('../lib/members');
const { join } = require('path');
const fs = require('fs');

test('Fetching members is successful', () => {
  expect(getAllMembers).not.toThrow();
  expect(Array.isArray(getAllMembers())).toBe(true);
});

const publicDirectory = join(process.cwd(), 'public');
const members = getAllMembers();

members.forEach((member) => {
  const filepath = member.frontmatter.profile_picture;
  test(`Testing ${member.frontmatter.full_name}'s image path at ${filepath}`, () => {
    expect(fs.existsSync(join(publicDirectory, filepath))).toBe(true);
  });
});
