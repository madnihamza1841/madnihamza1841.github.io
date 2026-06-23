import { useEffect, useRef } from 'react';
import { useContributions, type ContribDay } from '../lib/github';

const levelColors = ['var(--color-line)', '#312e81', '#4338ca', '#6366f1', '#a5b4fc'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function Contributions() {
  const { days, total } = useContributions();
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the end on mount so recent months are visible.
  useEffect(() => {
    if (scrollerRef.current && days.length > 0) {
      setTimeout(() => {
        scrollerRef.current!.scrollLeft = scrollerRef.current!.scrollWidth;
      }, 0);
    }
  }, [days]);

  if (days.length === 0) return null;

  // Pad the start so the first column begins on a Sunday, then chunk into weeks.
  const padStart = new Date(days[0].date + 'T00:00:00').getDay();
  const cells: (ContribDay | null)[] = [...Array(padStart).fill(null), ...days];
  const weeks: (ContribDay | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  // Reverse so recent data is on the right (and visible first when scrolled to end).
  weeks.reverse();

  // One month label per column, shown when the month changes; January also
  // shows the year so the multi-year span reads clearly.
  let lastMonth = -1;
  const weekLabels = weeks.map((week) => {
    const first = week.find((d): d is ContribDay => d !== null);
    if (!first) return '';
    const d = new Date(first.date + 'T00:00:00');
    const m = d.getMonth();
    if (m !== lastMonth) {
      lastMonth = m;
      return m === 0 ? `${months[m]} ${d.getFullYear()}` : months[m];
    }
    return '';
  });

  return (
    <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
      <p className="text-sm text-[var(--color-muted)] mb-4">
        <span className="text-[var(--color-ink)] font-medium">{total.toLocaleString()}</span> contributions in the last 3 years
      </p>
      <div className="overflow-x-auto pb-1" ref={scrollerRef}>
        <div className="inline-flex flex-col gap-1.5 min-w-max">
          <div className="flex gap-[3px] text-[11px] text-[var(--color-faint)] h-3">
            {weekLabels.map((label, i) => (
              <span key={i} className="w-[11px] relative whitespace-nowrap">{label}</span>
            ))}
          </div>
          <div className="flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, di) => {
                  const day = week[di];
                  return (
                    <span
                      key={di}
                      className="w-[11px] h-[11px] rounded-[2px]"
                      style={{ background: day ? levelColors[day.level] : 'transparent' }}
                      title={day ? `${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}` : undefined}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-1.5 mt-3 text-[11px] text-[var(--color-faint)]">
        <span>Less</span>
        {levelColors.map((c, i) => (
          <span key={i} className="w-[11px] h-[11px] rounded-[2px]" style={{ background: c }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
