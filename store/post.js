export const state = () => {
    return {
        search:'',
        editorconter:[],
        color:false
    }
}
export let mutations={
    setSearch(state,data){
        state.search=data
    },
    saveconter(state,data){
        state.editorconter.push(data)
    },
    setColor(state,data){
        state.color=data
    }
}