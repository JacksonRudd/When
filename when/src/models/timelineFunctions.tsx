import StoryModel, {
  getEarliestEvent,
  getMostRecentEvent,
} from "../views/StoryModel";

function getFirstAndLastYearOrDefault(
  storyState: StoryModel,
  defaultStartYear = 1900,
  defaultEndYear = 2020
) {
  if (storyState.events.length === 0) {
    return { startYear: defaultStartYear, endYear: defaultEndYear };
  }

  return {
    startYear: getEarliestEvent(storyState)?.date.getFullYear(),
    endYear: getMostRecentEvent(storyState)?.date.getFullYear(),
  };
}

function getTimelineParameters(
  startYear: number,
  endYear: number,
  pageHeight: number
) {
  if (startYear === endYear) {
    startYear -= 10;
    endYear += 10;
  }
  const year_delta = endYear - startYear;

  const pixelsPerYear = pageHeight / year_delta;
  function yearsPerTickToPixelsPerYear(pixelsPerYear: number): number {
    const index = 50 / pixelsPerYear;
    const options = [
      1, 2, 5, 10, 20, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000,
    ];
    const closest = options.reduce((prev, curr) =>
      Math.abs(curr - index) < Math.abs(prev - index) ? curr : prev
    );

    return closest;
  }
  const yearsPerTick = yearsPerTickToPixelsPerYear(pixelsPerYear);
  const start = new Date(
    startYear - (startYear % yearsPerTick) - 2 * yearsPerTick,
    0,
    1
  );
  const end = new Date(
    endYear - (endYear % yearsPerTick) + 4 * yearsPerTick,
    0,
    1
  );
  const pixelsPerTick = pixelsPerYear * yearsPerTick;
  return { start, end, pixelsPerTick, yearsPerTick };
}

export { getFirstAndLastYearOrDefault, getTimelineParameters };
