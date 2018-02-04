/**
 * Uses a regex to match email addresses that end in @statefarm.com and @fcb.com
 *
 * @param  {string} email
 * @return {boolean} true if valid, false if invalid
 */
export const validateEmail = email => {
  if(!email) return false;
  let pattern = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
  return pattern.test(email);
}
