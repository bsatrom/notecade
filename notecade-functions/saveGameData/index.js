module.exports = async function (context, req) {
    context.log('Processed Location Data from Notehub.');

    context.bindings.gameDataStorage = req.body;

    const game = (req.query.game || (req.body && req.body.game));
    const responseMessage = game
        ? "Data for " + game + " received."
        : "Game data received.";

    context.res = {
        body: responseMessage
    };
}