function fab(n) {
    if (n === 2 || n === 1) {
        return 1;
    }else {
        return fab(n - 1) + fab(n - 2);
    }
}
module.exports = fab;