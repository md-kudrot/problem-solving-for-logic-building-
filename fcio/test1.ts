function HexSum(x: string, y: string): string {
    const bigX = BigInt("0x" + x)
    const bigY = BigInt("0x" + y)
    const bigSum = (bigX + bigY).toString(16)

    return bigSum
}
console.log(HexSum("fa", "fb"))