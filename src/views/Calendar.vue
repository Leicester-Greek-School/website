<template>
  <div class="school-calendar-page">
    <div class="breadcrumb-section">
      <div class="container">
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb-list">
            <li><router-link to="/">Home</router-link></li>
            <li aria-current="page">School Calendar</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container calendar-content">
      <header class="calendar-intro">
        <p class="eyebrow">Plan the school year</p>
        <h1>School Calendar 2026–2027</h1>
        <p>Term dates, half-term breaks, Greek Easter and school celebrations for Leicester Greek School. Select a date for more information, or switch to the table for a complete list.</p>
      </header>

      <div class="calendar-toolbar" aria-label="Calendar display options">
        <div class="view-switch" role="group" aria-label="Choose calendar view">
          <button type="button" :class="{ active: view === 'calendar' }" :aria-pressed="view === 'calendar'" @click="view = 'calendar'">
            <i class="bi bi-calendar3" aria-hidden="true"></i> Calendar
          </button>
          <button type="button" :class="{ active: view === 'table' }" :aria-pressed="view === 'table'" @click="view = 'table'">
            <i class="bi bi-table" aria-hidden="true"></i> Table
          </button>
        </div>
        <p class="calendar-year">Academic year 2026–2027</p>
      </div>

      <section v-if="selectedEvent" ref="eventDetail" class="event-detail" aria-labelledby="event-detail-title" tabindex="-1">
        <div>
          <span class="event-kind" :class="`kind-${selectedEvent.kind}`">{{ kindLabel(selectedEvent) }}</span>
          <h2 id="event-detail-title">{{ selectedEvent.title }}</h2>
          <p class="event-detail-date">
            <time :datetime="selectedEvent.start">{{ formatDate(selectedEvent.start, true) }}</time>
            <template v-if="selectedEvent.end"> – <time :datetime="selectedEvent.end">{{ formatDate(selectedEvent.end, true) }}</time></template>
          </p>
          <p>{{ selectedEvent.description }}</p>
        </div>
        <button type="button" class="detail-close" aria-label="Close event details" @click="selectedId = null">×</button>
      </section>

      <section v-show="view === 'calendar'" aria-label="Monthly school calendar">
        <div class="month-heading">
          <button type="button" class="month-button" :disabled="monthIndex === 0" aria-label="Previous month" @click="monthIndex--">
            <i class="bi bi-chevron-left" aria-hidden="true"></i>
          </button>
          <h2 aria-live="polite">{{ monthLabel }}</h2>
          <button type="button" class="month-button" :disabled="monthIndex === months.length - 1" aria-label="Next month" @click="monthIndex++">
            <i class="bi bi-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
        <p class="mobile-scroll-hint">Swipe sideways to see all seven days.</p>
        <div class="calendar-scroll">
          <table class="month-grid">
            <caption class="visually-hidden">{{ monthLabel }} school dates. Weeks begin on Monday.</caption>
            <thead><tr><th v-for="day in weekdays" :key="day" scope="col">{{ day }}</th></tr></thead>
            <tbody>
              <tr v-for="(week, weekIndex) in weeks" :key="weekIndex">
                <td v-for="(date, dayIndex) in week" :key="dayIndex" :class="{ 'outside-month': !date, 'term-day': date && isTermDay(date), 'break-day': date && isBreakDay(date), 'in-person-day': date && isInPersonDay(date) }">
                  <template v-if="date">
                    <span class="day-number">{{ Number(date.slice(-2)) }}</span>
                    <span v-if="isInPersonDay(date)" class="visually-hidden">In-person classes on this date.</span>
                    <div class="day-events">
                      <button v-for="event in eventsForDay(date)" :key="event.id" type="button" class="calendar-event" :class="`kind-${event.kind}`" :aria-label="`${event.title}, ${formatDate(date, true)}. Show details`" @click="showDetails(event)">
                        {{ event.title }}
                      </button>
                    </div>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="calendar-legend" aria-label="Calendar key">
          <span><i class="legend-dot in-person" aria-hidden="true"></i> In-person classes (Thursdays &amp; Saturdays)</span>
          <span><i class="legend-dot kind-term" aria-hidden="true"></i> Term start / end</span>
          <span><i class="legend-dot kind-break" aria-hidden="true"></i> Half term / Greek Easter</span>
          <span><i class="legend-dot kind-celebration" aria-hidden="true"></i> Celebration</span>
          <span><i class="legend-dot kind-meeting" aria-hidden="true"></i> AGM</span>
        </div>
      </section>

      <div v-show="view === 'table'" class="calendar-tables">
        <section v-for="term in terms" :key="term.id" class="calendar-table-section" :aria-labelledby="`${term.id}-heading`">
          <h2 :id="`${term.id}-heading`">{{ term.name }}</h2>
          <div class="table-scroll">
            <table>
              <caption class="visually-hidden">{{ term.name }} dates</caption>
              <thead><tr><th scope="col">Date</th><th scope="col">School date</th><th scope="col">Information</th></tr></thead>
              <tbody>
                <tr v-for="event in eventsByTerm(term.id)" :key="event.id">
                  <td><time :datetime="event.start">{{ formatDate(event.start, true) }}</time><template v-if="event.end"> – <time :datetime="event.end">{{ formatDate(event.end, true) }}</time></template></td>
                  <th scope="row">{{ event.title }}</th>
                  <td><button type="button" class="detail-link" @click="showDetails(event)">More information <span class="visually-hidden">about {{ event.title }}</span><i class="bi bi-arrow-up-right" aria-hidden="true"></i></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="calendar-table-section" aria-labelledby="celebrations-heading">
          <h2 id="celebrations-heading">School celebrations 2026–2027</h2>
          <div class="table-scroll">
            <table>
              <caption class="visually-hidden">School celebrations 2026–2027</caption>
              <thead><tr><th scope="col">Date</th><th scope="col">Celebration</th><th scope="col">Information</th></tr></thead>
              <tbody>
                <tr v-for="event in eventsByTerm('celebrations')" :key="event.id">
                  <td><time :datetime="event.start">{{ formatDate(event.start, true) }}</time></td>
                  <th scope="row">{{ event.title }}</th>
                  <td><button type="button" class="detail-link" @click="showDetails(event)">More information <span class="visually-hidden">about {{ event.title }}</span><i class="bi bi-arrow-up-right" aria-hidden="true"></i></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <p class="calendar-contact">For details about a celebration, <router-link to="/contact">contact Leicester Greek School</router-link>.</p>
    </div>
  </div>
</template>

<script>
import { nextTick } from 'vue';
import { terms, events, formatDate } from '@/data/calendar';
import { injectJsonLd, removeJsonLd, breadcrumbSchema } from '@/utils/seo';

const months = Array.from({ length: 11 }, (_, index) => new Date(Date.UTC(2026, 8 + index, 1)));
const today = new Date();
const currentIndex = months.findIndex(month => month.getUTCFullYear() === today.getFullYear() && month.getUTCMonth() === today.getMonth());
const calendarOnlyEvents = [
  {
    id: 'agm-2026',
    kind: 'meeting',
    title: 'AGM',
    start: '2026-10-31',
    description: 'Annual General Meeting (AGM) on Saturday 31 October 2026. Please contact the school for further details.'
  }
];

export default {
  name: 'SchoolCalendar',
  data() {
    return {
      terms,
      events,
      calendarOnlyEvents,
      months,
      weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      monthIndex: currentIndex < 0 ? 0 : currentIndex,
      view: 'calendar',
      selectedId: null
    };
  },
  computed: {
    selectedEvent() { return [...this.events, ...this.calendarOnlyEvents].find(event => event.id === this.selectedId); },
    monthLabel() {
      return new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(this.months[this.monthIndex]);
    },
    weeks() {
      const month = this.months[this.monthIndex];
      const year = month.getUTCFullYear();
      const monthNumber = month.getUTCMonth();
      const firstDay = (month.getUTCDay() + 6) % 7;
      const daysInMonth = new Date(Date.UTC(year, monthNumber + 1, 0)).getUTCDate();
      const cells = Array(firstDay).fill(null);
      for (let day = 1; day <= daysInMonth; day++) {
        cells.push(`${year}-${String(monthNumber + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
      }
      while (cells.length % 7) cells.push(null);
      return Array.from({ length: cells.length / 7 }, (_, index) => cells.slice(index * 7, index * 7 + 7));
    }
  },
  watch: {
    monthIndex() { this.selectedId = null; },
    view() { this.selectedId = null; }
  },
  mounted() {
    // Direct visits already include this schema in the generated HTML; client-side visits need it injected.
    if (!document.getElementById('calendar-data')) {
      const url = 'https://leicestergreekschool.com/calendar/';
      injectJsonLd('calendar-data', {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${url}#page`,
        url,
        name: 'School Calendar 2026–2027 | Term Dates & Celebrations | Leicester Greek School',
        description: 'Leicester Greek School calendar 2026–2027: autumn, spring and summer term dates, half-term breaks, Greek Easter and school celebrations in Leicester.',
        inLanguage: 'en-GB',
        about: { '@id': 'https://leicestergreekschool.com/#organization' },
        mainEntity: {
          '@type': 'ItemList',
          name: 'Leicester Greek School dates 2026–2027',
          itemListElement: this.events.map((event, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Event',
              '@id': `${url}#${event.id}`,
              name: event.title,
              description: event.description,
              startDate: event.start,
              ...(event.end ? { endDate: event.end } : {}),
              organizer: { '@id': 'https://leicestergreekschool.com/#organization' }
            }
          }))
        }
      });
    }
    injectJsonLd('breadcrumb-calendar', breadcrumbSchema([
      { name: 'Home', url: 'https://leicestergreekschool.com/' },
      { name: 'School Calendar', url: 'https://leicestergreekschool.com/calendar/' }
    ]));
  },
  beforeUnmount() {
    removeJsonLd('calendar-data');
    removeJsonLd('breadcrumb-calendar');
  },
  methods: {
    formatDate,
    eventsByTerm(termId) { return this.events.filter(event => event.term === termId); },
    eventsForDay(date) { return [...this.events, ...this.calendarOnlyEvents].filter(event => event.start <= date && (event.end || event.start) >= date); },
    isBreakDay(date) { return this.events.some(event => event.kind === 'break' && event.start <= date && event.end >= date); },
    isTermDay(date) {
      return this.terms.some(term => {
        const termEvents = this.eventsByTerm(term.id);
        return date >= termEvents[0].start && date <= termEvents[termEvents.length - 1].start;
      });
    },
    isInPersonDay(date) {
      const weekday = new Date(`${date}T12:00:00Z`).getUTCDay();
      return (weekday === 4 || weekday === 6) && this.isTermDay(date) && !this.isBreakDay(date);
    },
    kindLabel(event) {
      if (event.kind === 'meeting') return 'School meeting';
      if (event.kind === 'celebration') return 'School celebration';
      if (event.kind === 'break') return 'School calendar break';
      return this.terms.find(term => term.id === event.term)?.name || 'Term date';
    },
    async showDetails(event) {
      this.selectedId = event.id;
      await nextTick();
      this.$refs.eventDetail?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.$refs.eventDetail?.focus({ preventScroll: true });
    }
  }
};
</script>

<style scoped>
.school-calendar-page { background: #fff; color: var(--text-dark); }
.breadcrumb-section { background: var(--primary-light); border-bottom: 1px solid var(--border-color); padding: 1.1rem 0; }
.breadcrumb-list { display: flex; gap: .65rem; list-style: none; margin: 0; padding: 0; font-size: .9rem; }
.breadcrumb-list li + li::before { content: '›'; margin-right: .65rem; color: var(--text-light); }
.calendar-content { max-width: 1160px; padding-top: 3rem; padding-bottom: 2rem; }
.calendar-intro { max-width: 760px; margin-bottom: 2rem; }
.eyebrow { color: var(--primary-color); font-weight: 800; text-transform: uppercase; font-size: .78rem; letter-spacing: .13em; margin-bottom: .5rem; }
.calendar-intro h1, .month-heading h2, .calendar-table-section h2, .event-detail h2 { font-family: Georgia, 'Times New Roman', serif; color: var(--primary-color); }
.calendar-intro h1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; margin-bottom: .8rem; }
.calendar-intro > p:last-child { color: var(--text-medium); font-size: 1.08rem; line-height: 1.7; }
.calendar-toolbar { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin: 2rem 0 1.4rem; }
.view-switch { display: inline-flex; padding: .25rem; background: var(--primary-light); border: 1px solid var(--border-color); border-radius: 12px; }
.view-switch button { border: 0; border-radius: 9px; padding: .65rem 1rem; background: transparent; color: var(--primary-color); font-weight: 700; }
.view-switch button.active { color: #fff; background: var(--primary-color); box-shadow: var(--shadow-sm); }
.view-switch i { margin-right: .3rem; }
.calendar-year { margin: 0; color: var(--text-medium); font-weight: 600; }
.month-heading { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin: 0 0 1rem; }
.month-heading h2 { margin: 0; font-size: clamp(1.45rem, 3vw, 2rem); text-align: center; }
.month-button { width: 42px; height: 42px; border-radius: 50%; border: 1px solid var(--border-color); background: #fff; color: var(--primary-color); }
.month-button:disabled { opacity: .35; cursor: not-allowed; }
.month-button:not(:disabled):hover { background: var(--primary-light); }
.calendar-scroll, .table-scroll { overflow-x: auto; }
.mobile-scroll-hint { display: none; color: var(--text-medium); font-size: .85rem; }
.month-grid { width: 100%; min-width: 700px; table-layout: fixed; border-collapse: separate; border-spacing: 4px; }
.month-grid th { padding: .65rem; text-align: center; color: var(--text-medium); font-size: .82rem; text-transform: uppercase; letter-spacing: .06em; }
.month-grid td { height: 118px; vertical-align: top; padding: .55rem; border: 1px solid var(--border-color); border-radius: 10px; background: #fff; }
.month-grid td.outside-month { background: #f7f7f7; border-color: transparent; }
.month-grid td.term-day { background: #fbf7f9; }
.month-grid td.break-day { background: #fff8e9; }
.month-grid td.in-person-day { background: #e8f5e9; box-shadow: inset 0 0 0 2px #39824a; }
.month-grid td.in-person-day .day-number { color: #1d6532; }
.day-number { display: block; color: var(--text-dark); font-weight: 700; margin-bottom: .3rem; }
.day-events { display: grid; gap: .3rem; }
.calendar-event { display: block; width: 100%; border: 0; border-radius: 5px; padding: .3rem .35rem; color: #fff; font-size: .72rem; font-weight: 700; line-height: 1.2; text-align: left; overflow-wrap: anywhere; }
.calendar-event:hover, .calendar-event:focus-visible { filter: brightness(.84); }
.calendar-event.kind-term, .legend-dot.kind-term { background: var(--primary-color); }
.calendar-event.kind-break, .legend-dot.kind-break { background: #93651c; }
.calendar-event.kind-celebration, .legend-dot.kind-celebration { background: #245e70; }
.calendar-event.kind-meeting, .legend-dot.kind-meeting { background: #514d79; }
.calendar-legend { display: flex; flex-wrap: wrap; gap: .7rem 1.5rem; padding: 1rem .2rem; color: var(--text-medium); font-size: .9rem; }
.legend-dot { display: inline-block; width: .72rem; height: .72rem; border-radius: 50%; margin-right: .35rem; }
.legend-dot.in-person { background: #39824a; }
.event-detail { display: flex; justify-content: space-between; gap: 1.5rem; background: var(--primary-light); border-left: 5px solid var(--primary-color); border-radius: 10px; padding: 1.25rem 1.5rem; margin: 0 0 1.5rem; scroll-margin-top: 1rem; }
.event-detail h2 { font-size: 1.5rem; font-weight: 700; margin: .3rem 0; }
.event-detail p { margin-bottom: .4rem; line-height: 1.6; }
.event-detail-date { font-weight: 700; }
.event-kind { color: var(--primary-color); font-size: .8rem; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; }
.event-kind.kind-break { color: #795014; }
.event-kind.kind-celebration { color: #245e70; }
.event-kind.kind-meeting { color: #514d79; }
.detail-close { align-self: flex-start; border: 0; background: transparent; color: var(--primary-color); font-size: 1.8rem; line-height: 1; }
.calendar-table-section { margin: 0 0 2.25rem; }
.calendar-table-section h2 { font-size: 1.65rem; font-weight: 700; padding-bottom: .65rem; border-bottom: 3px solid var(--accent-gold); }
.calendar-table-section table { width: 100%; min-width: 650px; border-collapse: collapse; }
.calendar-table-section th, .calendar-table-section td { padding: 1rem .75rem; border-bottom: 1px solid var(--border-color); text-align: left; vertical-align: top; }
.calendar-table-section thead th { color: var(--text-medium); font-size: .82rem; text-transform: uppercase; letter-spacing: .06em; }
.calendar-table-section tbody th { color: var(--primary-color); font-weight: 700; }
.calendar-table-section tbody tr:nth-child(even) { background: #fbf8fa; }
.calendar-table-section td:first-child { width: 43%; }
.detail-link { border: 0; background: none; padding: 0; color: var(--primary-color); text-decoration: underline; text-underline-offset: 3px; font-weight: 700; white-space: nowrap; }
.detail-link i { margin-left: .3rem; }
.calendar-contact { margin: 2rem 0 0; padding: 1rem 1.25rem; border-radius: 8px; background: var(--primary-light); }
.calendar-contact a { color: var(--primary-color); font-weight: 700; }
button:focus-visible { outline: 3px solid var(--accent-gold); outline-offset: 2px; }
@media (max-width: 767px) { .mobile-scroll-hint { display: block; } .month-grid { min-width: 560px; } }
@media (max-width: 575px) { .calendar-content { padding-top: 2rem; } .calendar-year { width: 100%; } .month-grid td { height: 100px; } }
</style>
