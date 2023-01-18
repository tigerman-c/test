const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

function solveSudoku(board: string[][]): void {
    function isNumRepeat(arr: string[]) {
        let storage: string[] = []
        for (let v of arr) {
            if (v === '.') { continue }
            if (!storage.includes(v)) {
                storage.push(v)
            } else {
                return true
            }
        }
        return false
    }
    /**
     * board 棋盘
     * pos 新增点定位 [row,column]
     */
    function isValid(pos: number[],curBoard: string[][]) {
        if(!pos.length) {return true}
        const row = pos[0], column = pos[1];
        // 判断行
        const rowArr = curBoard[row]
        if (isNumRepeat(rowArr)) {
            return false
        }
        // 判断列
        let columnArr: string[] = []
        for (let rowArr of curBoard) {
            if (rowArr[column] === '.') { continue }
            if (!columnArr.includes(rowArr[column])) {
                columnArr.push(rowArr[column])
            } else {
                return false
            }
        }

        // 判断九宫格
        const nineArr: string[] = []
        // 获取九宫格数组 为了性能 能在遍历获取时验重 不封装 
        let rowTime = Math.floor(row / 3)  // rowTime 对应[[0,1,2],[3,4,5...]]
        let columnTime = Math.floor(column / 3)
        for (let r = rowTime * 3; r < (rowTime + 1) * 3;r++) {
            let rowArr = curBoard[r]
            for(let c = columnTime * 3; c < (columnTime + 1) * 3; c++) {
                if (rowArr[c] === '.') { continue }
                if (!nineArr.includes(rowArr[c])) {
                    nineArr.push(rowArr[c])
                } else {
                    return false
                }
            }
        }
        return true
    }
    const numArr = new Array(9).fill(0).map((v,i)=>String(i+1))
    function backtracking(lastPos: number[],inBoard: string[][]) {
        const curBoard = JSON.parse(JSON.stringify(inBoard))
        const check = isValid(lastPos,curBoard)
        if(!check) {
            return false
        }
        const pos: number[] = []
        for(let i = 0; i < curBoard.length; i++) {
            let columnArr = curBoard[i]
            const index = columnArr.indexOf('.')
            if(~index) {
                pos.push(i,index)
                break
            }
        }
        if(!pos.length) {
            // 满了
            board = curBoard
            return true
        }
        for(let v of numArr) {
            curBoard[pos[0]][pos[1]] = v
            const res = backtracking(pos,curBoard)
            if(res) {
                return true
            }
        }
        
    }
    backtracking([],board)

    console.log('%c [  ]-89', 'font-size:13px; background:pink; color:#bf2c9f;', board)
}

solveSudoku(board)