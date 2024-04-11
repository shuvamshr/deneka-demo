import { format } from "date-fns";

export default function dateFormat(dateString: string): string {
  const date = new Date(dateString);

  // Convert numerical month to name
  const monthName = format(date, "MMMM");

  // Format the day with suffix
  const day = format(date, "do");

  // Format the time in 12-hour format
  const time = format(date, "h:mmaaa");

  // Combine all components
  return `${day} ${monthName} ${date.getFullYear()}, ${time}`;
}
