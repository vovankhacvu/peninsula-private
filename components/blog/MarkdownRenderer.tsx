export default function MarkdownRenderer({
  content,
}: {
  content: string;
}) {
  const lines = content.trim().split("\n");

  return (
    <div className="space-y-6">
      {lines.map((line, index) => {
        const text = line.trim();

        if (!text) return <div key={index} className="h-2" />;

        // H1
        if (text.startsWith("# ")) {
          return (
            <h1
              key={index}
              className="[font-family:var(--font-heading)] text-5xl font-medium leading-tight tracking-tight text-[#3F3528]"
            >
              {text.replace("# ", "")}
            </h1>
          );
        }

        // H2
        if (text.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="mt-10 [font-family:var(--font-heading)] text-4xl font-semibold text-[#3F3528]"
            >
              {text.replace("## ", "")}
            </h2>
          );
        }

        // H3
        if (text.startsWith("### ")) {
          return (
            <h3
              key={index}
              className="mt-8 [font-family:var(--font-heading)] text-3xl font-semibold text-[#3F3528]"
            >
              {text.replace("### ", "")}
            </h3>
          );
        }

        // Bullet
        if (text.startsWith("- ")) {
          return (
            <li
              key={index}
              className="ml-6 list-disc text-lg leading-9 text-[#5D554C]"
            >
              {text.replace("- ", "")}
            </li>
          );
        }

        return (
          <p
            key={index}
            className="[font-family:var(--font-body)] text-lg leading-9 text-[#5D554C]"
          >
            {text}
          </p>
        );
      })}
    </div>
  );
}