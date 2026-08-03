import '../module.css'

const rooms = [
  { name: 'A301', capacity: 12, equipment: '投影 / 视频会议' },
  { name: 'B102', capacity: 6, equipment: '白板' },
  { name: 'C201', capacity: 20, equipment: '投影 / 音响' },
]

export function MeetingRoomPage() {
  return (
    <div className="oa-module-page">
      <h2>会议室</h2>
      <div className="oa-module-cards">
        {rooms.map((room) => (
          <article key={room.name} className="oa-module-card">
            <h3>{room.name}</h3>
            <p>容纳 {room.capacity} 人</p>
            <p>{room.equipment}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
