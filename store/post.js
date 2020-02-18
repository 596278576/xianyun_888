export const state = () => {
    return {
        search:''
    }
}
export let mutations={
    setSearch(state,data){
        state.search=data
    }
}