import { MeetingListPage } from './pages/MeetingListPage'
import { MeetingRoomPage } from './pages/MeetingRoomPage'
import type { OaModuleDefinition } from './types'

export const meetingModule: OaModuleDefinition = {
  id: 'oa-meeting',
  name: '会议',
  basePath: '/meeting',
  menu: [
    { key: 'list', label: '会议列表', path: '/meeting' },
    { key: 'rooms', label: '会议室', path: '/meeting/rooms' },
  ],
  routes: [
    { index: true, element: <MeetingListPage /> },
    { path: 'rooms', element: <MeetingRoomPage /> },
  ],
}
