object ArmstrongNumber {
    fun check(input: Int): Boolean {
        val digits = input.toString()
        val exponent = digits.length
        val sum = digits.map { 
            Math.pow(it.toString().toDouble(), exponent.toDouble())
        }.sum().toInt()
        return sum == input
    }
}