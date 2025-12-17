import './ScheduleCard.css'

export default function ScheduleCard({ day, time, game }) {
  return (
    <div className="schedule-card card">
      <div className="schedule-day">{day}</div>
      <div className="schedule-time">{time}</div>
      <div className="schedule-game">{game}</div>
    </div>
  )
}
