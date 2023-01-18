type ToArray1<T> = T extends unknown ? T[] : never
// type ToArray1<T> = T[]

let arr: ToArray1<number | string> = [1]