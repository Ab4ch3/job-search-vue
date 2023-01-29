import nextElementeInList from "@/utils/next_element_in_list";

describe("nextElementInList", () => {
  it("locates element in list and returns the next element in list ", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";

    const result = nextElementeInList(list, value);
    expect(result).toBe("D");
  });
});

describe("when element is at the endt of the list", () => {
  it("locates next element at start of the list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "E";

    const result = nextElementeInList(list, value);
    expect(result).toBe("A");
  });
});
