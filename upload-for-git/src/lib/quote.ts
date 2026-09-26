import { whatsappUrl } from "../content/site";
export function createQuoteUrl(data: FormData) {
  const value = (key: string) =>
    String(data.get(key) ?? "")
      .trim()
      .slice(0, 1200);
  return whatsappUrl(
    [
      "Hello S A Catering,",
      "",
      "I would like a custom catering quotation.",
      "",
      `Name: ${value("name")}`,
      `Phone: ${value("phone")}`,
      `Event: ${value("event")}`,
      `Date: ${value("date") || "To be decided"}`,
      `Venue / Location: ${value("location")}`,
      `Guests: ${value("guests")}`,
      `Meal: ${value("meal")}`,
      `Budget: ${value("budget") || "To be discussed"}`,
      `Preferences: ${value("message") || "To be discussed"}`,
      "",
      "Please help me plan the menu and share a quotation.",
    ].join("\n"),
  );
}
