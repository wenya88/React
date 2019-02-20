
const initState={
    items:[]
}

export default (state=initState,action)=>{

    switch(action.type){
        case "OTHER_ACTION":
            return {
                items:action.data
            }
        default:
            return state
    }
}