export function isValidHttpDate(dateString) {
  const httpDatePattern =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4} \d{2}:\d{2}:\d{2} GMT)|(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{2} \d{2}:\d{2}:\d{2} GMT)|((Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2} \d{2}:\d{2}:\d{2}))$/;
  return httpDatePattern.test(dateString);
}
export function isValidName(name) {
  const nameRegex = /^[A-Za-z0-9]+$/;
  return typeof name === "string" && nameRegex.test(name);
}
export function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return typeof email === "string" && emailRegex.test(email);
}
export function isValidPassword(password) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+={[}\]|:;"'<,>.?/]).{1,}$/;
  return typeof password === "string" && passwordRegex.test(password);
}
