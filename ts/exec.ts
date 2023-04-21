/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
function findLength(nums1: number[], nums2: number[]): number {
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
  let max = 0;
  const dp = new Array(nums1.length + 1).fill(0).map(()=>new Array(nums2.length + 1).fill(0))
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        if (dp[i][j] > max) {
          max = dp[i][j]
        }
      }
    }
  }
  console.table(dp)
  return max
};
// @lc code=end

findLength([1], [1, 1, 1, 1, 1])