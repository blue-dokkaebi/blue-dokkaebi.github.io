import ScheduleCard from '../components/ScheduleCard'
import { schedule } from '../data/schedule'
import './Schedule.css'

export default function Schedule() {
  return (
    <div className="schedule page">
      <div className="container">
        <h1 className="page-title">Stream Schedule</h1>
        <p className="schedule-note">All times are in UTC−05:00 (EST)</p>
        <div className="schedule-grid">
          {schedule.map((item) => (
            <ScheduleCard key={item.day} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
