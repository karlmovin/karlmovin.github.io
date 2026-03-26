export const intressen: Record<
  string,
  {
    verb: string;
    tidsåtgång: { min: number; max: number };
    tiderPåDygnet: { från: number; till: number };
    krav?: string[];
  }
> = {
  programmering: {
    verb: "programmera",
    tidsåtgång: { min: 1, max: 4 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  läsning: {
    verb: "läsa",
    tidsåtgång: { min: 1, max: 2 },
    tiderPåDygnet: { från: 8, till: 22 },
  },
  film: {
    verb: "titta på film/serier",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  brädspel: {
    verb: "spela brädspel",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
    krav: ["fler än 1 personer"],
  },
  dataspel: {
    verb: "spela dataspel",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 19 },
  },
  keramik: {
    verb: "göra keramik",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  finsnickeri: {
    verb: "snickra",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  målning: {
    verb: "måla",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  video: {
    verb: "göra video",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 19 },
  },
  musik: {
    verb: "göra musik",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  rollspel: {
    verb: "spela rollspel",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
    krav: ["fler än 1 personer"],
  },
  rollspelsPrepp: {
    verb: "förbereda rollspel",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  diorama: {
    verb: "göra diorama",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  sova: {
    verb: "gå och lägga dig",
    tidsåtgång: { min: 1, max: 9 },
    tiderPåDygnet: { från: 20, till: 24 + 8 },
  },
};
