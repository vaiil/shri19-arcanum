export default function applyMiddleware (store, middlewares) {
  let dispatch = store.dispatch.bind(store)

  middlewares.forEach(middleware => {
    dispatch = middleware(store, dispatch)
  })

  store.dispatch = dispatch

  return store
}
