object Acronym {
    fun generate(phrase: String) : String {
        return phrase
        .replace("-", " ")
        .replace(Regex("[^\\p{L}\\p{N}\\s]"), "")
        .split("\\s+".toRegex())
        .filter { it.isNotEmpty() }
        .map { it.first().uppercaseChar() }
        .joinToString("")  
    }
}
