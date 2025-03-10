function count_ways(n) {
    if (n === 0) return 1;
    if (n === 1 || n === 2) return n;
    let dp = new Array(n + 1).fill(0);
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    
    return dp[n];
}