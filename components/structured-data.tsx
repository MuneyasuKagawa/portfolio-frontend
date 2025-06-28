import Script from "next/script";

interface StructuredDataProps {
  type?: "person" | "website";
}

export function StructuredData({ type = "person" }: StructuredDataProps) {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muneyasu Kagawa",
    alternateName: "Mun",
    url: "https://mun-k.com",
    image: "https://mun-k.com/icon.png",
    description:
      "Frontend Developer and UI/UX Designer with 8+ years of experience",
    jobTitle: ["Frontend Developer", "UI/UX Designer"],
    email: "muneyasu.kagawa@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/muneyasu-kagawa/",
      "https://twitter.com/m_kagawa_",
      "https://github.com/MuneyasuKagawa",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "UI/UX Design",
      "Frontend Development",
      "Web Development",
    ],
    nationality: "Japanese",
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mun's Portfolio",
    url: "https://mun-k.com",
    description:
      "Muneyasu Kagawa's portfolio showcasing frontend development projects and UI/UX design work",
    author: {
      "@type": "Person",
      name: "Muneyasu Kagawa",
    },
    publisher: {
      "@type": "Person",
      name: "Muneyasu Kagawa",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://mun-k.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const data = type === "website" ? websiteData : personData;

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
