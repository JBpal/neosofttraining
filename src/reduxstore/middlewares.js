/* export function loggerMiddleware(store){
    return function(next){
        return function(action){
        console.log("Before action", action.type, store.getState())

        var result = next(action)
        console.log("Logged in test", store.getState())
        return result
        }
    }
}

//redux logging */

export let logger = store=>next=>action=>{
    console.log("Before action", action.type, store.getState())

        var result = next(action)
        console.log("Logged in test", store.getState())
        return result
}