import { groupNewsletters } from "../group-newsletters.array";

const mockNewsletters = [
  {
    id: "000000000000000000000000",
    image: "https://via.placeholder.com/300",
    description: "Dive into the unknown with this week's spotlight!",
    title: "Weekly Wonders",
    site: "DEN",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000001",
    image: "https://via.placeholder.com/300",
    description: "Kickstart your week with a burst of inspiration.",
    title: "Marvelous Mondays",
    site: "DAN",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000002",
    image: "https://via.placeholder.com/300",
    description: "Tuesdays just got a lot more exciting!",
    title: "Terrific Tuesdays",
    site: "LAN",
    subscriptions: ["RIGHT_1"],
  },
];

const expectedGroupedNewsletters = [
  {
    site: "DEN",
    newsletters: [
      {
        id: "000000000000000000000000",
        image: "https://via.placeholder.com/300",
        description: "Dive into the unknown with this week's spotlight!",
        title: "Weekly Wonders",
        subscriptions: ["RIGHT_1"],
      },
    ],
  },
  {
    site: "DAN",
    newsletters: [
      {
        id: "000000000000000000000001",
        image: "https://via.placeholder.com/300",
        description: "Kickstart your week with a burst of inspiration.",
        title: "Marvelous Mondays",
        subscriptions: ["RIGHT_1"],
      },
    ],
  },
  {
    site: "LAN",
    newsletters: [
      {
        id: "000000000000000000000002",
        image: "https://via.placeholder.com/300",
        description: "Tuesdays just got a lot more exciting!",
        title: "Terrific Tuesdays",
        subscriptions: ["RIGHT_1"],
      },
    ],
  },
];

describe("groupNewsletters", () => {
  it("correctly map a newsletters array into a grouped newsletter array", () => {
    expect(groupNewsletters(mockNewsletters)).toStrictEqual(expectedGroupedNewsletters);
  });

  it("returns an empty array", () => {
    expect(groupNewsletters([])).toEqual([]);
  });
});
