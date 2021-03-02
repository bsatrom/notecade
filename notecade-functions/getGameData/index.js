module.exports = async function (context, req) {
    data = context.bindings.gameDataStorage;

    const gameData = data
        .sort((first, second) => first.event_time - second.event_time)

    const numRecords = gameData.length;
    const lastEntry = gameData[numRecords-1];
    const currentlyPlaying = lastEntry.event === 'start' ? lastEntry.game : '';
    const lastPlayed = lastEntry.event === 'end' ? lastEntry.game : '';
    let totalTimePlayed = 0;

    const sessionData = gameData.reduce((accumulator, next, index) => {
        if (next.event === 'start') {
            endTime = numRecords > index+1 ? gameData[index+1].event_time : "";

            const session = {
                "game": next.game,
                "platform": next.platform,
                "start": next.event_time,
                "end": endTime,
                "time_played": endTime !== "" ? (new Date(endTime).getTime() - new Date(next.event_time).getTime()) / 1000 : 0
            };

            totalTimePlayed += session.time_played;
            accumulator.push(session);
        }

        return accumulator;
    }, []);

    const platformData = sessionData.reduce((previous, next) => {
        previous[next.platform] = previous[next.platform] || [];
        previous[next.platform].push(next);
        return previous;
      }, Object.create(null));

    context.res = {
        body: {
            currentlyPlaying,
            lastPlayed,
            totalTimePlayed,
            sessions: platformData
        }
    };
}