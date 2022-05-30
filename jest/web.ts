export function setStorage(name: string, value: any) {
    window.localStorage.setItem(name, value)
}
export function getStorage(name: string) {
    return window.localStorage.getItem(name)
}

