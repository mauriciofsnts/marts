import { registerApplication, start, LifeCycles } from 'single-spa'

registerApplication({
  name: '@single-spa/welcome',
  app: () =>
    System.import<LifeCycles>(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  activeWhen: ['/'],
})

registerApplication({
  name: '@hydra/admin',
  app: () => System.import<LifeCycles>('@hydra/admin'),
  activeWhen: ['/admin'],
})

registerApplication({
  name: '@hydra/blog',
  app: () => System.import<LifeCycles>('@hydra/blog'),
  activeWhen: ['/news'],
})

// registerApplication({
//   name: "@hydra/navbar",
//   app: () => System.import("@hydra/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
})
