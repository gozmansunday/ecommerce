interface Props {
  content: string;
};

export const NoItems = ({ content }: Props) => {
  return (
    <div className="flex items-center justify-center text-center text-neutral-400 italic text-lg py-8 md:text-xl md:py-12 lg:text-2xl lg:py-16">
      {content}
    </div>
  );
};
