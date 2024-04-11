import {
  Squares2X2Icon as DashboardActiveIcon,
  DocumentDuplicateIcon as InquiryActiveIcon,
  DocumentTextIcon as TicketsActiveIcon,
  BuildingStorefrontIcon as MarketplaceActiveIcon,
  UserIcon as AccountActiveIcon,
  EllipsisHorizontalCircleIcon as MenuActiveIcon,
  UserGroupIcon as ClientActiveIcon,
} from "@heroicons/react/24/solid";
import {
  Squares2X2Icon as DashboardInactiveIcon,
  DocumentDuplicateIcon as InquiryInactiveIcon,
  DocumentTextIcon as TicketsInactiveIcon,
  BuildingStorefrontIcon as MarketplaceInactiveIcon,
  UserIcon as AccountInactiveIcon,
  EllipsisHorizontalCircleIcon as MenuInactiveIcon,
  UserGroupIcon as ClientInactiveIcon,
} from "@heroicons/react/24/outline";

export default function TabIcon(icon: string, state: boolean) {
  switch (icon) {
    case "dashboard":
      return state ? DashboardActiveIcon : DashboardInactiveIcon;
    case "inquiry":
      return state ? InquiryActiveIcon : InquiryInactiveIcon;
    case "tickets":
      return state ? TicketsActiveIcon : TicketsInactiveIcon;
    case "marketplace":
      return state ? MarketplaceActiveIcon : MarketplaceInactiveIcon;
    case "account":
      return state ? AccountActiveIcon : AccountInactiveIcon;
    case "menu":
      return state ? MenuActiveIcon : MenuInactiveIcon;
    case "clients":
      return state ? ClientActiveIcon : ClientInactiveIcon;
    default:
      return state ? InquiryActiveIcon : InquiryInactiveIcon;
  }
}
