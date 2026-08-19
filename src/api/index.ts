import { request } from '@zdy-oa/utils'

export const getMeetings = () => {
    return request.request({
        url: '/api/meeting/list',
        method: 'GET'
    });
}