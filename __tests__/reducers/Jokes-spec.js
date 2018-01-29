import reducer from "../../src/reducers/Jokes"

describe("categories reducer", () => {
    it("should return the initial state", () => {
        var response = reducer(undefined, {});
        spliceDate(response);
        expect(response).toEqual({
            jokes: [],
            isFetching: false,
            error: "",
        });
    });
    it("should handle REQUEST_JOKE", () => {
        var response = reducer([], {
            type: "REQUEST_JOKE",
        });
        spliceDate(response);
        expect(response).toEqual({
            isFetching: true
        });
    });
    it("should handle RECEIVE_JOKE after initial state", () => {
        var response = reducer({jokes: []}, {
            type: "RECEIVE_JOKE",
            joke: {value: "teste"}
        });
        spliceDate(response);
        expect(response).toEqual({
            isFetching: false,
            jokes: [{value: "teste"}]
        });
    });
    it("should handle RECEIVE_JOKE after a joke was requested", () => {
        var response = reducer({jokes: [{value: "teste1"}]}, {
            type: "RECEIVE_JOKE",
            joke: {value: "teste2"}
        });
        spliceDate(response);
        expect(response).toEqual({
            isFetching: false,
            jokes: [{value: "teste1"}, {value: "teste2"}]
        });
    });
    it("should handle ERROR_FETCH_JOKE", () => {
        var response = reducer([], {type: "ERROR_FETCH_JOKE", error: "error"});
        spliceDate(response);
        expect(response).toEqual({
            isFetching: false,
            error: "error"
        });
    });

    var spliceDate = (response) => {
        for (let i in response) {
            if (i === "lastUpdated") {
                delete response[i];
                break;
            }
        }
    }
});

