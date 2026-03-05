interface ISectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ tag, title, description }: ISectionHeaderProps) => {
  return (
    <div className="text-center">
      <span className="mb-4 inline-block text-sm font-semibold tracking-widest text-blue-600 uppercase">
        {tag}
      </span>
      <h2
        className={`text-4xl font-bold tracking-tight text-gray-900 ${description ? 'mb-4' : 'mb-14'}`}
      >
        {title}
      </h2>
      {description && (
        <p className="mx-auto mb-14 max-w-xl text-lg text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
