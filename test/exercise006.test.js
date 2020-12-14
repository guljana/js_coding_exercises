const { sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([1, 3, 5])).toBe(8);

    });

    test("if works with decimal numbers", () => {
        expect(sumMultiples([1, 3, 5.0, 8])).toBe(8);
    });

    test("return zero if no multiple", () => {
        expect(sumMultiples([1, 4, 8])).toBe(0);
    });

});

describe("isValidDNA", () => {
    test("true/false depending on whether it is a valid DNA string", () => {
        expect(isValidDNA(("CAA"))).toBe(true);
        expect(isValidDNA(("NNNN"))).toBe(false);
        expect(isValidDNA(("NNNG"))).toBe(true);
        expect(isValidDNA(("NNTN"))).toBe(true);
        expect(isValidDNA(("NNAN"))).toBe(true);


    });
    test("check with small case", () => {
        expect(isValidDNA(("NNaN"))).toBe(true);
    });


});

describe("getComplementaryDNA", () => {
    test("return a string of the complementary base pairs", () => {
        expect(getComplementaryDNA(("ACTG"))).toBe("TGAC");
        expect(getComplementaryDNA(("TGAC"))).toBe("ACTG");
    });

    test("check with small case", () => {
        expect(getComplementaryDNA(("tgac"))).toBe("ACTG");
    });


});
describe("isItPrime", () => {
    test("true/false depending on whether it is a prime number or not", () => {
        expect(isItPrime((2))).toBe(true);
        expect(isItPrime((4))).toBe(false);

    });



});
describe("createMatrix", () => {
    test("return an array of n arrays, each filled with n items", () => {
        let n = 3;
        let fill = "foo";
        expect(createMatrix((3), (fill))).toStrictEqual([
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"]
        ]);

    });

});

describe("areWeCovered", () => {
    test("return fasle if no staff", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);

    });

    test("return fasle if less than 3 staff members are required per day", () => {
        const staff = [
            { name: "Sally", rota: ["Tuesday", "Friday", "Sunday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
        ];
        expect(areWeCovered(staff, "Monday")).toBe(false);
        expect(areWeCovered(staff, "Sunday")).toBe(true);

    });
});