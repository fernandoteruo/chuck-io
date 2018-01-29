import reducer from "../../src/reducers/Categories"

describe("categories reducer", () => {
    it("should return the initial state", () => {
        var response = reducer(undefined, {});
        spliceDate(response);
        expect(response).toEqual({
            categories: [],
            isFetching: false,
            error: ""
        });
    });
    it("should handle REQUEST_CATEGORIES", () => {
        var response = reducer([], {
            type: "REQUEST_CATEGORIES",
        });
        spliceDate(response);
        expect(response).toEqual({
            isFetching: true,
        });
    });
    it("should handle RECEIVE_CATEGORIES", () => {
        var response = reducer([], {
            type: "RECEIVE_CATEGORIES",
            categories: ["teste1", "teste2"],
        });
        spliceDate(response);
        expect(response).toEqual({
            isFetching: false,
            categories: ["teste1", "teste2"]
        });
    });
    it("should handle ERROR_FETCH_CATEGORIES", () => {
        var response = reducer([], {
            type: "ERROR_FETCH_CATEGORIES",
            error: "error"
        });
        spliceDate(response);
        expect(response).toEqual({
            isFetching: false,
            error: "error"
        });
    });
    var spliceDate = (response) => {
        for(let i in response) {
            if(i === "lastUpdated") {
                delete response[i];
                break;
            }
        }
    }
});

