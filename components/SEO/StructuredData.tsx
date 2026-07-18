export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: "Peninsula Private",
    description:
      "Peninsula Private là dự án căn hộ hạng sang tại trung tâm Downtown Đà Nẵng.",
    url: "https://www.peninsulaprivatedn.com",
    image: "https://www.peninsulaprivatedn.com/images/og-cover.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Đà Nẵng",
      addressCountry: "VN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}