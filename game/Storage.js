const storage = () => {
    let json = {};
    return {
        setItem: function (key, item) {
            json[key] = item;
        },
        getItem: function (key) {
            return json[key]? json[key] : "{}";
        }
    }
}

module.exports = storage;