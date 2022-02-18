const state = () => ({
    newProduct: "",
    listNewProducts: []
})

const getters = {

}

const mutations = {
    initListProduct(state) {
        const listProd = JSON.parse(localStorage.getItem('listNewProducts'));
        if (listProd && listProd.length) {
            state.listNewProducts = listProd;
        }
    },
    addProduct(state, product) {
        const findProd = state.listNewProducts.find((item) => item.id === product.id)
        if (findProd) {
            findProd.id += 1;
            state.listNewProducts.push({...product, id: findProd.id})
        } else {
            state.listNewProducts.push({...product, id: 1})
        }
        localStorage.setItem('listNewProducts', JSON.stringify(state.listNewProducts))
    },
    // update(state, id) {
    //     const findItemIndex = state.listNewProducts.findIndex((item) => item.id === id);
    //     if (findItemIndex > -1) {
    //         state.listNewProducts[id + 1] =
    //     }
    //     localStorage.setItem('listNewProducts', JSON.stringify(state.listNewProducts))
    // },
    deleteProduct(state, id) {
        const findItemIndex = state.listNewProducts.findIndex((item) => item.id === id)
        if (findItemIndex > -1) {
            state.listNewProducts.splice(findItemIndex, 1)
        }
        localStorage.setItem('listNewProducts', JSON.stringify(state.listNewProducts))
    } 
}

const actions = {
    actionInitListProduct({commit}) {
        commit('initListProduct');
    },
    actionsAddProduct({commit}, product) {
        commit('addProduct', product);
    },
    actionsDeleteProduct({commit}, id) {
        commit('deleteProduct', id);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}