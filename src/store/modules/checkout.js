const state = () => ({
    data: {},
    listData: [],
})

const mutations = {
   setDataCheckout(state, data) {
    state.data = data;
    state.listData.push(state.data);
    localStorage.setItem('dataCheckout', JSON.stringify(state.listData));
   }
}

const actions = {
   actionSetDataCheckout({commit}, data) {
       commit('setDataCheckout', data);
   }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}