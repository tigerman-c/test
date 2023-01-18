var board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
function solveSudoku(board) {
    function isNumRepeat(arr) {
        var storage = [];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var v = arr_1[_i];
            if (v === '.') {
                continue;
            }
            if (!storage.includes(v)) {
                storage.push(v);
            }
            else {
                return true;
            }
        }
        return false;
    }
    /**
     * board 棋盘
     * pos 新增点定位 [row,column]
     */
    function isValid(pos, curBoard) {
        if (!pos.length) {
            return true;
        }
        var row = pos[0], column = pos[1];
        // 判断行
        var rowArr = curBoard[row];
        if (isNumRepeat(rowArr)) {
            return false;
        }
        // 判断列
        var columnArr = [];
        for (var _i = 0, curBoard_1 = curBoard; _i < curBoard_1.length; _i++) {
            var rowArr_1 = curBoard_1[_i];
            if (rowArr_1[column] === '.') {
                continue;
            }
            if (!columnArr.includes(rowArr_1[column])) {
                columnArr.push(rowArr_1[column]);
            }
            else {
                return false;
            }
        }
        // 判断九宫格
        var nineArr = [];
        // 获取九宫格数组 为了性能 能在遍历获取时验重 不封装 
        var rowTime = Math.floor(row / 3); // rowTime 对应[[0,1,2],[3,4,5...]]
        var columnTime = Math.floor(column / 3);
        for (var r = rowTime * 3; r < (rowTime + 1) * 3; r++) {
            var rowArr_2 = curBoard[r];
            for (var c = columnTime * 3; c < (columnTime + 1) * 3; c++) {
                if (rowArr_2[c] === '.') {
                    continue;
                }
                if (!nineArr.includes(rowArr_2[c])) {
                    nineArr.push(rowArr_2[c]);
                }
                else {
                    return false;
                }
            }
        }
        return true;
    }
    var numArr = new Array(9).fill(0).map(function (v, i) { return String(i + 1); });
    function backtracking(lastPos, inBoard) {
        var curBoard = JSON.parse(JSON.stringify(inBoard));
        var check = isValid(lastPos, curBoard);
        if (!check) {
            return false;
        }
        var pos = [];
        for (var i = 0; i < curBoard.length; i++) {
            var columnArr = curBoard[i];
            var index = columnArr.indexOf('.');
            if (~index) {
                pos.push(i, index);
                break;
            }
        }
        if (!pos.length) {
            // 满了
            board = curBoard;
            return true;
        }
        for (var _i = 0, numArr_1 = numArr; _i < numArr_1.length; _i++) {
            var v = numArr_1[_i];
            curBoard[pos[0]][pos[1]] = v;
            var res = backtracking(pos, curBoard);
            if (res) {
                return true;
            }
        }
    }
    backtracking([], board);
    console.log('%c [  ]-89', 'font-size:13px; background:pink; color:#bf2c9f;', board);
}
solveSudoku(board);
