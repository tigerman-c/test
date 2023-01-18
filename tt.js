// 无限背包
function getMaxBagValue(weight, value, size) {
    /**
     * 动规
     * 1. dp[j] 在容量为j的背包，能携带最大价值。
     * 2. 推导公式。要么加，要么不加。
     *   2.1 不加。则dp[j] = dp[j]
     *   2.2 加。则dp[j] = dp[j-weight[i]]+value[i]
     *   公式为 dp[j] = max(dp[j],dp[j-weight[i]]+value[i])
     * 3. 初始值。
     *  dp[0] = 0; 容量0，必然是0。
     * 4. 顺序。无限背包要的就是重复，所以得从前开始。
     */
    let num = weight.length
    let dp = new Array(size + 1).fill(0)
    for (let i = 0; i < num; i++) {
        for (let j = weight[i]; j <= size; j++) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }
    }
    console.table(dp)
    return dp[size]
}
console.log('[  ] >', getMaxBagValue([1, 3, 5], [15, 20, 30], 5))