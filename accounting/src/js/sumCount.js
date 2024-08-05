export function sumCountByRoom(data) {
    const result = {};

    for (const item of data) {
        const { room, count } = item;

        if (!result[room]) {
            result[room] = { count: 0 };
        }

        result[room].count += count;
    }

    const rooms = Object.keys(result);
    const counts = rooms.map(room => result[room].count);

    return [rooms, counts];
}