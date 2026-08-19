import { useState, useEffect } from 'react'
import { getMeetings } from '../api'
import '../module.css'

const meetings = [
  { id: 1, title: '产品迭代评审', time: '今天 14:00', room: 'A301', host: '陈晓' },
  { id: 2, title: '周例会', time: '周三 10:00', room: 'B102', host: '刘洋' },
]

export function MeetingListPage() {
  const [meetings, setMeetings] = useState([])

  useEffect(() => {
    getMeetings().then(res => {
      console.log("meetings", res)
      if(res.code === 200) {
        setMeetings(res.data)
      }
    })
  }, [])

  return (
    <div className="oa-module-page">
      <h2>会议列表</h2>
      <p className="oa-module-page__desc">oa-meeting 业务模块</p>
      <ul className="oa-module-list">
        {meetings.map((m) => (
          <li key={m.id}>
            <strong>{m.title}</strong>
            <span>
              {m.time} · {m.room} · 主持人 {m.host}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
