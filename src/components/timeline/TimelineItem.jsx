
export default function TimelineItem({ date, content, alignRight }) {
    const dateClassName = alignRight ? 'timeline-date align-right' : 'timeline-date';

  return (
    <div className="timeline-item">
      <div className={dateClassName}>{date}</div>
      <div className="timeline-content">{content}</div>
    </div>
  )
}
