const { sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("returns the sum of all its digits,", () => {
        expect(sumDigits(123)).toBe(6);

    });
    test("return zero if no multiple", () => {
        expect(sumDigits(0)).toBe(0);
    });

});

describe("createRange", () => {
    test("return the range,", () => {
        expect(createRange(3, 11, 2)).toStrictEqual([3, 5, 7, 9, 11]);

    });
});

describe("getScreentimeAlertList", () => {

    const users = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
            ]
        },
    ]
    test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date,", () => {

        expect(getScreentimeAlertList(users, "2019-05-04")).toStrictEqual(["beth_1234"]);

    });

    test("return empty array of usernames of users with no record found,", () => {

        expect(getScreentimeAlertList(users, "2019-06-14")).toStrictEqual([]);

    });
});


describe("hexToRGB", () => {
    test(" should transform the hex code into an RGB code in the format,", () => {
        expect(hexToRGB("1502BE")).toStrictEqual([21, 2, 190]);
        expect(hexToRGB("ff0000")).toStrictEqual([255, 0, 0]);
    });
    test(" should return empty array,", () => {
        expect(hexToRGB("f00")).toStrictEqual([]);
    });
});


describe("findWinner", () => {
    test(" should transform the hex code into an RGB code in the format,", () => {
        expect(findWinner("ff0000")).toStrictEqual([255, 0, 0]);

    });
  
});