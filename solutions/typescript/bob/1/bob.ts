export function hey(message: string): string {
   if (
    /[A-Za-z]/.test(message) &&
    message === message.toUpperCase() &&
    message.trim().endsWith("?")
  ) return "Calm down, I know what I'm doing!";
   else if (
    /[A-Za-z]/.test(message) &&
    message === message.toUpperCase()
  )    return "Whoa, chill out!";
  else if (message.trim().endsWith("?")) 
    return "Sure.";
  else if (message.trim() === "") 
    return "Fine. Be that way!";
  else 
    return "Whatever.";
}
