import { reactive, computed } from 'vue'

const state = reactive({
  items: [], // { id, name, price, qty, image }
})

export function useCart() {
  const add = (product, qty = 1) => {
    const existing = state.items.find(i => i.id === product.id)
    if (existing) existing.qty += qty
    else state.items.push({ ...product, qty })
  }

  const remove = id => {
    state.items = state.items.filter(i => i.id !== id)
  }

  const updateQty = (id, qty) => {
    const item = state.items.find(i => i.id === id)
    if (item) item.qty = Math.max(1, qty)
  }

  const clear = () => {
    state.items = []
  }

  const count = computed(() => state.items.reduce((n, i) => n + i.qty, 0))
  const total = computed(() => state.items.reduce((sum, i) => sum + i.price * i.qty, 0))

  return { state, add, remove, updateQty, clear, count, total }
}
