export function normalizePhone(phone) {
  return phone.replace(/[^\w\s]/gi, "").replace(" ", "");
}

export function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/[^\w\s]/gi, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
}
