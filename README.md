# Trying to reproduce https://github.com/colyseus/colyseus/issues/368

This repo is using Colyseus 0.14 to try to reproduce [issue #36](https://github.com/colyseus/colyseus/issues/368)

## How to run

- Clone this repo
- Run `npm install`
- Run `npm start` in one tab
- Run `npm run loadtest` in another tab.

Only one client is going to connect thorugh the `loadtest` tool.

Here are the logs outputted by the loadtest tool:

```
┌─ logs ───────────────────────────────────────────────────────────────────────┐
│                                                                              │
│ 'onStateChange, cards selected =>' [ true, false, false, false, false ]      │
│ 'onStateChange, cards selected =>' [ false, false, false, false, false ]     │
│ 'onStateChange, cards selected =>' [ false, false, false, false, false ]     │
│ '1PmMCelfM' 'joined.'                                                        │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```
