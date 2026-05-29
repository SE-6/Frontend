import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getPost } from './getPost';

describe('getPost', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1, title: 'Post 1', Body: 'Body 1' }),
      }),
    );
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('resolves with post data', async () => {
    const result = await getPost(1);
    expect(result.title).toBe('Post 1');
  });

  it('rejects on failure', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
    await expect(getPost(99)).rejects.toThrow('Network error');
  });

  it('logs the post ID being fetched', async () => {
    const consoleSpy = vi.spyOn(console, 'log');

    await getPost(2);

    consoleSpy.mockRestore();
  });
});
