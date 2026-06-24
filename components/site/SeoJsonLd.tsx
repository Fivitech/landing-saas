import { contactDetails } from "@/data/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fivi Technologies",
    url: "https://fxcrm.fivitechnologies.com",
    email: contactDetails.email,
    telephone: contactDetails.phone,
    address: contactDetails.address,
    sameAs: ["https://fivitech.com", "https://www.linkedin.com/company/fivitechnologies/"],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
