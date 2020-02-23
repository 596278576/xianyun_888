export const state = () => {
    return {
        search:'',
    }
}
export let mutations={
    setSearch(state,data){
        state.search=data
    },
    saveconter(state,data){
        state.editorconter.push(data)
    }
}