export const state = () => {
    return {
        search:'',
        editorconter:[]
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