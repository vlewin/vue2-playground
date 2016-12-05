import Vue from 'vue'

export function fetchFoos() {
  return Promise.resolve([
    {
      id: 1,
      name: 'FooItem 1'
    },

    {
      id: 2,
      name: 'FooItem 2'
    },
  ])
}
