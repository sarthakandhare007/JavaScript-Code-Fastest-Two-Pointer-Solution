var numSubseq = function(nums, target) {
    const mod = 1e9 + 7;
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const pow2 = Array(n).fill(1);

    // precompute powers of 2
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % mod;
    }

    let i = 0, j = n - 1;
    let ans = 0;

    while (i <= j) {
        if (nums[i] + nums[j] <= target) {
            ans = (ans + pow2[j - i]) % mod;
            i++;
        } else {
            j--;
        }
    }

    return ans;
};
