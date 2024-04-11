import InquiryCard from "./InquiryCard/InquiryCard";

const Style: Record<string, string> = {
  // Fixed Styles
  container: "flex flex-wrap gap-4",
};

interface ComponentProps {
  data: Array<{
    id: string;
    title: string;
    date: string;
    status: string;
    client: string;
    type: string;
  }>;
}

export default function InquiryCardCollection({ data }: ComponentProps) {
  return (
    <div className={Style.container}>
      {data.map((entry) => (
        <InquiryCard
          key={entry.id} // Assign a unique key to each InquiryCard
          id={entry.id}
          title={entry.title}
          date={entry.date}
          status={entry.status}
          client={entry.client}
          type={entry.type}
        />
      ))}
    </div>
  );
}
