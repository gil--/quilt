import {Context} from 'koa';

export default function livenessPing(mountPath: string) {
  return async function livenessPingMiddleware(ctx: Context, next: Function) {
    if (ctx.path === mountPath) {
      ctx.status = 200;
      return;
    }
    await next();
  };
}
