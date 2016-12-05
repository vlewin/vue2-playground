import Vue from 'vue'

export function fetchBars() {
  return Promise.resolve([
    {
      id: 1,
      name: 'BarItem 1'
    },

    {
      id: 2,
      name: 'BarItem 2'
    },
  ])
}
