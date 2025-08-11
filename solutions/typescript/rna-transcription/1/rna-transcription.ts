const dnaToRnaMap: Record<string, string> = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
}

export function toRna(dnaSequence: string): string {
  const nucleotides = dnaSequence.split('')
  
  const rnaSequence = nucleotides
    .map((nucleotide) => {
      if (!dnaToRnaMap.hasOwnProperty(nucleotide)) throw new Error('Invalid input DNA.')
      return dnaToRnaMap[nucleotide];
    })
    .join('')
  
  return rnaSequence
}
