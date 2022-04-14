/**
 * 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
 */

function getTargetArr() {
    const getRandomNumber = () => Math.round(Math.random() * 30 + 2)
    const initSet = new Set()
    const addOneItem = (set) => {
        if (set.size === 5) {
            return set
        }
        const _set = new Set(set)
        _set.add(getRandomNumber())
        return addOneItem(_set)
    }
    return [...addOneItem(initSet)]
}

console.log(getTargetArr(), 11111)