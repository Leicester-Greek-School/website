import calendar from './calendar.json';

export const schoolYear = calendar.schoolYear;
export const calendarLastUpdated = calendar.lastUpdated;
export const calendarSeoDescription = calendar.seoDescription;
export const terms = calendar.terms;
export const events = calendar.events;
export const calendarOnlyEvents = calendar.calendarOnlyEvents;

const shortDate = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const weekdayDate = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export function formatDate(date, withWeekday = false) {
  return (withWeekday ? weekdayDate : shortDate).format(new Date(`${date}T12:00:00Z`));
}

export function formatEventDate(event) {
  return event.end
    ? `${formatDate(event.start, true)} – ${formatDate(event.end, true)}`
    : formatDate(event.start, true);
}
