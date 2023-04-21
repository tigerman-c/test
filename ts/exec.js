/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 */
// @lc code=start
function findLength(nums1, nums2) {
    // 双指针法
    // let p1, p2;
    // let max = 0, curLength;
    // // 先找出起点。
    // for (let i = 0; i < nums1.length; i++) {
    //   for (let j = 0; j < nums2.length; j++) {
    //     if (nums2[j] === nums1[i]) {
    //       curLength = 1
    //       p1 = i + 1;
    //       p2 = j + 1;
    //       while (p1 < nums1.length && p2 < nums2.length && nums1[p1] === nums2[p2]) {
    //         curLength++
    //         p1++
    //         p2++
    //       }
    //       if(curLength > max) {max = curLength}
    //     }
    //   }
    // }
    // return max
    // 想不出的动规
    // dp[i][j]。长度为i和j的数组的最长重复子数组长度。
    // dp[i][j] = dp[i-1][j-1] /+ 1。相等则加一。
    // dp[0][0] = 0,dp[i][0]=0,dp[0][i]=0;
    // 从前到后。
    var max = 0;
    var dp = new Array(nums1.length + 1).fill(0).map(function () { return new Array(nums2.length + 1).fill(0); });
    console.log('%c [  ]-37', 'font-size:13px; background:pink; color:#bf2c9f;', dp);
    for (var i = 1; i <= nums1.length; i++) {
        for (var j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                console.log('%c [ 1 ]-41', 'font-size:13px; background:pink; color:#bf2c9f;', i, j);
                dp[i][j] = dp[i - 1][j - 1] + 1;
                console.log('%c [ 1 ]-43', 'font-size:13px; background:pink; color:#bf2c9f;', dp[0]);
                if (dp[i][j] > max) {
                    max = dp[i][j];
                }
            }
        }
    }
    console.table(dp);
    return max;
}
;
// @lc code=end
findLength([1], [1, 1, 1, 1, 1]);
