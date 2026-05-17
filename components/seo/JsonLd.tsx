type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
};

export const JsonLd = ({ data, id }: JsonLdProps) => {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
};
