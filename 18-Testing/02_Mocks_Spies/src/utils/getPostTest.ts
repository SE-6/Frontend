import { describe, expect, it, vi } from 'vitest';
import { getPost } from './getPost';

describe('getPost', () => {
  it('resolves with post data', async () => {
    const mockPost = { id: 1, title: 'Post 1', body: 'Body 1' };

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockPost),
      }),
    );
    const result = await getPost(1);
    expect(result).toEqual(mockPost);

    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1',
    );

    vi.restoreAllMocks();
  });

  it('rejects with an error when the request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));

    await expect(getPost(99)).rejects.toThrow('Network error');

    vi.restoreAllMocks();
  });
});
