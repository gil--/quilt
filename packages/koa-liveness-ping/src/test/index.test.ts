import {createMockContext} from '@shopify/jest-koa-mocks';
import livenessPing from '..';

describe('koa-liveness-ping', () => {
  it('middleware calls next when url does not match', async () => {
    const middleware = livenessPing('/ping');
    const nextFn = jest.fn();
    const ctx = createMockContext({url: '/some/other/path'});

    await middleware(ctx, nextFn);

    expect(nextFn).toHaveBeenCalledTimes(1);
  });

  it('returns with a 200 status when url is a match', async () => {
    const url = '/ping';
    const middleware = livenessPing(url);
    const nextFn = jest.fn();
    const ctx = createMockContext({url});
    await middleware(ctx, nextFn);

    expect(ctx.status).toBe(200);
    expect(nextFn).not.toHaveBeenCalled();
  });
});
