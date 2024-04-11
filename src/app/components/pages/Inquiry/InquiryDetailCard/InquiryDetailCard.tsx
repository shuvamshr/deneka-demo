import Link from "next/link";

import LinkButton from "@/app/components/global/LinkButton/LinkButton";

import {
  ClockIcon as DateIcon,
  ChartBarIcon as ProgressIcon,
  UserIcon as ClientIcon,
  BriefcaseIcon as WorkTypeIcon,
  EnvelopeIcon as EmailIcon,
  PhoneIcon as PhoneIcon,
  LinkIcon as LinkIcon,
} from "@heroicons/react/24/solid";

const Style = {
  // Fixed Styles
  container:
    "flex flex-col rounded-lg w-full bg-white py-7 px-6 md:py-8 md:px-7 gap-5 border border-gray-200 justify-between ease-in duration-100 ",
  headerContainer: "flex flex-col gap-5",
  footerContainer: "flex flex-col gap-5",
  titleContainer: "flex flex-col gap-2",
  detailContainer: "flex flex-col gap-4",
  buttonContainer: "flex flex-col items-center md:flex-row gap-3",

  cardID: "text-xs text-gray-500 font-medium leading-none",
  cardTitle: "text-lg font-semibold text-gray-900",
  cardDescription: "text-sm font-regular text-gray-700 leading-relaxed",
  detailTitle:
    "flex flex-row gap-2 items-center text-xs font-semibold leading-none text-gray-500",
  detailIcon: "h-4 w-4",
  detailLink:
    "flex flex-row gap-2 items-center text-sm font-medium leading-normal text-indigo-700",

  horizontalDivider: "w-full h-[1px] bg-gray-100",

  // Dynamic Styles
};

interface ComponentProps {
  id: string;
  title: string;
  description: string;
  attachment: string;
  date: string;
  status: string;
  client: string;
  email: string;
  phone: string;
  type: string;
}

export default function InquiryDetailCard({
  id = "Undefined",
  title = "Undefined",
  description = "Undefined",
  attachment = "Undefined",
  date = "Undefined",
  status = "Undefined",
  client = "Undefined",
  email = "Undefined",
  phone = "Undefined",
  type = "Undefined",
}: ComponentProps) {
  return (
    <div className={Style.container}>
      <div className={Style.headerContainer}>
        <div className={Style.titleContainer}>
          <Link href={`/inquiry/id/${id}`} className={Style.cardID}>
            Inquiry #{id}
          </Link>
          <h1 className={Style.cardTitle}>{title}</h1>
        </div>
        <div className={Style.horizontalDivider} />
        <p className={Style.cardDescription}>{description}</p>
        <Link href={`${attachment}`} className={Style.detailLink}>
          <LinkIcon className={Style.detailIcon} />
          View Attached Link
        </Link>
        <div className={Style.horizontalDivider} />
        <div className={Style.detailContainer}>
          <p className={Style.detailTitle}>
            <ProgressIcon className={Style.detailIcon} />
            {status}
          </p>
          <p className={Style.detailTitle}>
            <DateIcon className={Style.detailIcon} />
            {date}
          </p>
          <p className={Style.detailTitle}>
            <ClientIcon className={Style.detailIcon} />
            {client}
          </p>
          <p className={Style.detailTitle}>
            <WorkTypeIcon className={Style.detailIcon} />
            {type}
          </p>
          <p className={Style.detailTitle}>
            <EmailIcon className={Style.detailIcon} />
            {email}
          </p>
          <p className={Style.detailTitle}>
            <PhoneIcon className={Style.detailIcon} />
            {phone}
          </p>
        </div>
      </div>

      <div className={Style.footerContainer}>
        <div className={Style.horizontalDivider} />
        <div className={Style.buttonContainer}>
          <LinkButton type="secondary" path={`/inquiry/id/2`}>
            Archive Ticket
          </LinkButton>
          <LinkButton type="primary" path={`/inquiry/id/1`}>
            Lodge Ticket
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
