module.exports = async function (context, req) {
    data = context.bindings.gameDataStorage;

    context.res = {
        body: data
    };
}