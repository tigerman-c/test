// 测试并浅析axios的cancelToken
import axios from '../node_modules/axios/dist/axios.js'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.get('http://172.17.61.11:3113/', { cancelToken: source.token }).then(res => console.log(res.data)).catch(e => {
    if (axios.isCancel(e))
        console.log('cancel1', e.message);
})

axios.post('http://172.17.61.11:3113/', { cancelToken: source.token }).catch(e => {
    if (axios.isCancel(e))
        console.log('cancel2', e.message);
})

setTimeout(() => {
    source.cancel('auto cancel')
}, 2000);