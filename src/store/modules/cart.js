const state = () => ({
    items: [],
    discount: 0
})

const getters = {
    
}

const mutations = {
    initItems(state) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'))
        if (cartItems && cartItems.length) {
            state.items = cartItems
        }
    },
    addItem(state, newItem) {
        const findItem = state.items.find((item) => item.id === newItem.id)
        if (findItem) {
            findItem.qty += 1;
        } else {
            state.items.push({...newItem, qty: 1})
        }
        localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    deleteItem(state, id) {
        const findItemIndex = state.items.findIndex((item) => item.id === id)
        if (findItemIndex > -1) {
            state.items.splice(findItemIndex, 1)
        }
        localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    saveInformation(state, price) {
        state.discount = price;
    },
}

const actions = {
    actionInitItems({commit}) {
        commit('initItems')
    },
    actionAddItem({commit}, item) {
        commit('addItem', item)
    },
    actionDeleteItem({commit}, id) {
        commit('deleteItem', id)
    },
    actionSaveInformation({commit}, price) {
        commit('saveInformation', price)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}