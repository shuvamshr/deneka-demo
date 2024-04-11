import Header from "@/app/components/global/Header/Header";
import Subheader from "@/app/components/global/Header/Subheader/Subheader";
import Breadcrumb from "@/app/components/global/Header/Subheader/Breadcrumb/Breadcrumb";
import InquiryDetailCard from "@/app/components/pages/Inquiry/InquiryDetailCard/InquiryDetailCard";
import inquiriesData from "../../data";

interface ComponentProps {}

export default async function InquiryPage({
  params,
}: {
  params: { id: string };
}) {
  // Filter inquiriesData to find the entry with matching id
  const inquiryData = inquiriesData.find(
    (entry: any) => entry.id === params.id
  );

  if (!inquiryData) {
    return <div>Inquiry not found!</div>;
  }

  const {
    id,
    title,
    description,
    attachment,
    status,
    date,
    client: { name, company, email, phone },
    type,
  } = inquiryData;

  return (
    <>
      <div className="flex flex-col top-0 sticky">
        <div className="flex flex-row">
          <Header title={`Inquiry #${id}`} />
        </div>
        <Subheader type="breadcrumb">
          <Breadcrumb path="/inquiry">Inquiry</Breadcrumb>
          <Breadcrumb state="active">{`Inquiry #${id}`}</Breadcrumb>
        </Subheader>
      </div>
      <div className="container mx-auto p-5">
        <InquiryDetailCard
          key={id}
          id={id}
          title={title}
          description={description}
          attachment={attachment}
          status={status}
          date={date}
          client={`${name}, ${company}`}
          type={type}
          email={email}
          phone={phone}
        />
      </div>
    </>
  );
}
