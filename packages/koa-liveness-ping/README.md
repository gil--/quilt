# `@shopify/koa-liveness-ping`

A package for creating a liveness ping middleware for use with koa

A liveness ping is a URL at which your application will respond with a `200` whenever your server is running. It can be used, for example, for liveness checks in kubernetes deployments.

## Installation

```bash
$ yarn add @shopify/koa-liveness-ping
```

## Usage

```typescript
import Koa from 'koa';
import livenessPing from '@shopify/koa-liveness-ping';

const app = new Koa();

// set up any error or loggin middlewares

app.use(livenessPing('/ping'));

// other routing middlewares should go after the liveness ping
```

Where `/ping` can be replaced by any path at which to respond to liveness pings.

**Note:** The `livenessPing` middleware should be the first routing-related middleware, in order to ensure it can respond quickly and reliably.
