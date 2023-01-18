type fnType = (v: number) => boolean
type fnType1<T> = (v: T) => T

function f() {
    return {
        x: 1,
        y: [1, 2, 3],
    }
}

type fnResType = ReturnType<fnType>

type personType = {
    name: string
    age: number
}

let personname: personType['name']
let personValue: personType[keyof personType]

const arr1 = [1, 2, 3]
const arr2 = [
    { name: 'a', age: 1 },
    { name: 123, age: 11 },
]
const arr3 = ['1', '2'] as const

type arr1ValType = typeof arr1[number]
type arr2ValType = typeof arr2[number]
type arr3ValType = typeof arr3[number]

interface IdLabel {
    id: number /* some fields */
}
interface NameLabel {
    name: string /* other fields */
}

// function createLabel(id: number): IdLabel
// function createLabel(name: string): NameLabel
// function createLabel(nameOrId: string | number): IdLabel | NameLabel
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//     throw 'unimplemented'
// }

function createLabel<T extends string | number>(
    nameOrId: T
): T extends string ? NameLabel : IdLabel {
    throw 'unimplemented'
}

let a = createLabel('123')
let b = createLabel(123)

type messageOf<T> = T extends { message: any } ? T['message'] : never

type Email = {
    message: 1234
}
type Dog = {
    say: Function
}
type Type<T> = T
type emailMessage = messageOf<Email>
type dogMessage = messageOf<Dog>

type messageOfArray<T> = T extends Array<infer item> ? item : T

type arrayV = messageOfArray<string[]>
type commonV = messageOfArray<string>

type getReturnType<T> = T extends (...args: never[]) => infer ReturnType
    ? ReturnType
    : never

type fnResType1 = getReturnType<typeof createLabel>

type ToArray<T> = T extends any ? T[] : never

type StringOrNumArr = ToArray<'string' | 'number'>

type personKeyBoolean = {
    [key in keyof personType]: boolean
}

type createmutable<T> = {
    -readonly [key in keyof T]-?: boolean
}

type createLockTable<T> = {
    readonly [key in keyof T]?: boolean
}

type lockPerson = {
    readonly name: string
    age: number
}

type maybePerson = {
    name: string
    age?: number
}

type muttable1 = createmutable<lockPerson>
type muttable2 = createmutable<maybePerson>

type locktable1 = createLockTable<lockPerson>

type Getter<T> = {
    [key in keyof T as `get${Capitalize<key & string>}`]: () => T[key]
}

type getPersonfn = Getter<personType>

type RemoveAgeField<T> = {
    [key in keyof T as `get${Capitalize<
        Exclude<key, 'age'> & string
    >}`]: () => T[key]
}

type getExcludeAgePerson = RemoveAgeField<personType>

type arrkey = keyof any[]

type arrType = `${keyof personType}_id`

const passedObject = {
    firstName: 'Saoirse',
    lastName: 'dogEgg',
    age: 17,
}

const passedObjectT = typeof passedObject

type fnObjType = {
    fn(a: number): number
}

const fnObj: fnObjType = {
    fn: (a) => ++a,
}

type listenPassedObjectT<T> = {
    // on(anyname: `${Extract<keyof T,string>}change`,callback: (...args: any[])=>any):void
    on<key extends string & keyof T>(
        anyname: `${key}change`,
        callback: (p1: T[key]) => any
    ): void
}

type passedObject11 = listenPassedObjectT<typeof passedObject>

function ff<T>(params: T) {
    console.log(params.length)
}

interface IdLabel {
    id: number /* some fields */;
}
interface NameLabel {
    name: string /* other fields */;
}
type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;

function _createLabel<T extends string | number>(
    idOrName: T
): NameOrId<T> {
    if (typeof idOrName === 'number') {
        return { id: 1 } as NameOrId<T>
    } else if (typeof idOrName === 'string') {
        return { name: '1' } as NameOrId<T>
    }
}

_createLabel(123)

let obj: {
    a: string,
    b: number
} = {
    a: '11',
    b: 1
}

let o1: {
    a?: string,
    b: number
} = {
    b: 1
}
