export function barData(items){
    let obj = {
        rooms: [],
        count: [],
    }
    let rooms = []
    let count = []
    items.forEach(el => {
       rooms.push(el.room)
    })
    items.forEach(el => {
        count.push(el.count)
    })

    obj = {
        rooms: rooms,
        count: count,
    }

    return obj
}