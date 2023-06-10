// Add your validation logic here
    // Return true if the username is valid, otherwise return false
export function validateUsername(username: string): boolean {
    return username.length >= 3;
}
  
// Add your validation logic here
    // Return true if the password is valid, otherwise return false
export function validatePassword(password: string): boolean {
    return password.length >= 6;
}