export const addOther=()=>dispatch=>{
    let itemData=[
        {name:"ZHANG"},
        {name:"WEN"},
        {name:"YA"}
    ];
    dispatch({
        type:"OTHER_ACTION",
        data:itemData
    })

}