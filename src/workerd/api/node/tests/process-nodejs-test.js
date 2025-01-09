import assert from 'node:assert';

export const processPlatform = {
  test() {
    assert.strictEqual(typeof process.platform, 'string');
    assert.ok(['darwin', 'win32', 'linux'].includes(process.platform));
  },
};

process.env.BAZ = 1;
const env = { ...process.env };

export const processEnv = {
  async test() {
    assert.strictEqual(env.FOO, 'BAR');
    assert.strictEqual(env.BAR, '{}');
    assert.strictEqual(env.BAZ, '1');

    const { FOO } = await import('mod');
    assert.strictEqual(FOO, 'BAR');
  },
};
