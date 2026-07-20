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

  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",

    name: "Vũ Realty",
    alternateName: "Đất Xanh Miền Trung",

    url: "https://www.peninsulaprivatedn.com",
    logo: "https://www.peninsulaprivatedn.com/images/logo.png",
    image: "https://www.peninsulaprivatedn.com/images/logo.png",

    telephone: "+84945562311",

    address: {
      "@type": "PostalAddress",
      streetAddress: "565 Nguyễn Tất Thành",
      addressLocality: "Đà Nẵng",
      addressCountry: "VN",
    },

    areaServed: {
      "@type": "City",
      name: "Đà Nẵng",
    },

    knowsAbout: [
      "Peninsula Private",
      "Bất động sản Đà Nẵng",
      "Căn hộ cao cấp",
      "Đầu tư căn hộ",
    ],

    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "ApartmentComplex",
        name: "Peninsula Private",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateSchema),
        }}
      />
    </>
  );
}