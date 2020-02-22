export const state = () => {
    return {
        search:'',
<<<<<<< HEAD
        editorconter:[]
=======
>>>>>>> 20a228bbc8200da0f051625f209f29145865f712
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