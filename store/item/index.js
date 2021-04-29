export const state = () => ({
    item: {
        id: '',
        name: '',
        quantity: 0,
        valoration: 0,
        contVal: 0
    }
})

export const mutations = {
    set (state, item) {
        state.item = item
    }
}

export const getters = {
    get (state) {
        return state
    }
}