export class SimpleCipher {
  public readonly key: string

  constructor(key?: string) {
    this.key = key ?? this.generateKey()
  }

  private generateKey(): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let key = ''

    for (let i = 0; i < 100; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length)
      key += alphabet[randomIndex]
    }

    return key
  }

  encode(plaintext: string): string {
    let ciphertext = ''

    for (let i = 0; i < plaintext.length; i++) {
      const plaintextValue = plaintext.charCodeAt(i) - 97
      const keyValue = this.key.charCodeAt(i % this.key.length) - 97

      const ciphertextValue = (plaintextValue + keyValue) % 26

      ciphertext += String.fromCharCode(97 + ciphertextValue)
    }

    return ciphertext
  }

  decode(ciphertext: string): string {
    let plaintext = ''

    for (let i = 0; i < ciphertext.length; i++) {
      const ciphertextValue = ciphertext.charCodeAt(i) - 97
      const keyValue = this.key.charCodeAt(i % this.key.length) - 97

      const plaintextValue = (ciphertextValue - keyValue + 26) % 26

      plaintext += String.fromCharCode(97 + plaintextValue)
    }

    return plaintext
  }
}