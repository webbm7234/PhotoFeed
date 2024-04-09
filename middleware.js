let locales = ["bn", "en"];

let defaultLocale = "en";

function getLocale(request) {
  const acceptedLanguage = request.header.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  let languages = new Navigator({ headers }).language();
  return match(languages, locales, defaultLocale);
}
