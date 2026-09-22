const TZ = "Europe/Istanbul";

export function eventDayKey(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function istanbulTodayKey(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function eventStartIso(date: Date): string {
  return `${eventDayKey(date)}T18:00:00+03:00`;
}

export function isUpcoming(date: Date, now = new Date()): boolean {
  return eventDayKey(date) >= istanbulTodayKey(now);
}

export function firstUpcoming<T extends { id: string; data: { date: Date } }>(
  events: T[],
  now = new Date(),
): T | undefined {
  return events
    .filter((event) => isUpcoming(event.data.date, now))
    .sort((a, b) => eventDayKey(a.data.date).localeCompare(eventDayKey(b.data.date)))[0];
}

export function countdownParts(iso: string, now = new Date()) {
  const diff = new Date(iso).getTime() - now.getTime();
  if (diff <= 0) return null;
  const totalMinutes = Math.floor(diff / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  return { days, hours, minutes };
}
