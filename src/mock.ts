/**
 * oa-meeting mock 规则
 * 命中接口：GET /api/meeting/list
 */
import { registerMocks, type ResponseData } from '@zdy-oa/utils'

function ok<T>(data: T, message = ''): ResponseData<T> {
  return { code: 200, data, message }
}

const meetings = [
  { id: 'm-001', title: '产品迭代评审', time: '今天 14:00', room: 'A301', host: '陈晓' },
  { id: 'm-002', title: '周例会', time: '周三 10:00', room: 'B102', host: '刘洋' },
  { id: 'm-003', title: '需求评审', time: '周四 15:30', room: 'C205', host: '王芳' },
]

export function registerMeetingMocks(): void {
  registerMocks([
    {
      method: 'GET',
      pattern: '/api/meeting/list',
      handler: () => ok(meetings),
    },
  ])
}
