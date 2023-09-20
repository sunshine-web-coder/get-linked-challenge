import TimelineItem from './TimelineItem'

export default function Timeline() {
  return (
    <div className="timeline-container">
      <TimelineItem
        date="November 18, 2023"
        content="Your content goes here..."
        alignRight={true}
      />
      {/* Add more TimelineItem components as needed */}
    </div>
  )
}
