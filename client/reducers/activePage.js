const reducer = (homePage = 'home', action) => {
    switch (action.type){
        case 'NAVIGATE':
        return action.page



default:
    return homePage
 }
}


export default reducer