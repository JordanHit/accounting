export function sumCountByRoom(data) {
    const result = {};

    for (const item of data) {
        const { room, count } = item;

        if (!result[room]) {
            result[room] = { count: 0 };
        }

        result[room].count += count;
    }

    return {
        rooms: Object.keys(result),
        counts: Object.values(result).map(({ count }) => count),
    };
}