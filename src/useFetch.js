"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useFetch = function (url, options) {
    var _a = react_1.useState(null), data = _a[0], setData = _a[1];
    var _b = react_1.useState(true), isLoading = _b[0], setLoading = _b[1];
    var fetchData = function () {
        return fetch(url, options)
            .then(function (response) { return response.json(); })
            .then(function (response) {
            setData(response);
            setLoading(false);
        });
    };
    react_1.useEffect(function () {
        fetchData();
    }, []);
    return { isLoading: isLoading, data: data };
};
exports["default"] = useFetch;
