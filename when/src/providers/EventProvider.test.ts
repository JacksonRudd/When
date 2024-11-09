import { get_event_by_name, get_events_by_substring } from "./EventProvider";

describe("get_event_by_name", () => {
  it("returns the correct event when the name exists", () => {
    const eventName = "Indus Valley Civilization Flourishes";
    const event = get_event_by_name(eventName);
    expect(event?.name).toBe(eventName);
    expect(event?.description).toBe(
      "Development of one of the world's earliest urban civilizations"
    );

    expect(event.date).toEqual(new Date(-2600, 0, 1));
    expect(event?.location).toBe("Indus Valley");
  });
});

describe("get_events_by_substring", () => {
  it("returns the correct events when the substring exists", () => {
    const substring = "indus";
    const events = get_events_by_substring(substring);
    const event_names = events.map((event) => event.name);
    expect(event_names).toContain("Indus Valley Civilization Flourishes");
  });
});