const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const aOffset = 'a'.charCodeAt(0)

type Direction = 'encode' | 'decode'

export class SimpleCipher {
  key: string
  keyOffsets: number[]

  constructor(key?: string) {
    this.key = key ?? SimpleCipher.generateKey()

    this.keyOffsets = [...this.key].map(
      (char) => char.charCodeAt(0) - aOffset
    )
  }

  static generateKey(): string {
    return Array.from(
      { length: 100 },
      () => alphabet[Math.floor(Math.random() * 26)]
    ).join('')
  }

  private transform(text: string, direction: Direction): string {
    const shift = direction === 'encode' ? 1 : -1

    return text.replace(/[a-z]/g, (char, i) => {
      const charOffset = char.charCodeAt(0) - aOffset
      const keyOffset = this.keyOffsets[i % this.keyOffsets.length]

      const transformedOffset =
        (charOffset + shift * keyOffset + 26) % 26

      return String.fromCharCode(
        transformedOffset + aOffset
      )
    })
  }

  encode(plaintext: string): string {
    return this.transform(plaintext, 'encode')
  }

  decode(ciphertext: string): string {
    return this.transform(ciphertext, 'decode')
  }
}