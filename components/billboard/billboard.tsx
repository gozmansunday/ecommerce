interface Props {
  data: Billboard;
}

export const Billboard = ({ data }: Props) => {
  return (
    <div
      className="relative bg-cover bg-center w-full overflow-hidden aspect-square rounded-xl md:rounded-2xl lg:rounded-3xl md:aspect-[2.8/1]"
      style={{
        backgroundImage: `url(${data?.imageUrl})`
      }}
    >
      <div className="flex items-center justify-center text-center h-full w-full p-6 bg-black/30">
        <div className="font-bold text-white text-xl max-w-xs sm:text-3xl sm:max-w-sm sm:leading-tight md:text-4xl md:max-w-lg md:leading-tight lg:text-6xl lg:max-w-2xl lg:leading-tight">
          {data?.label}
        </div>
      </div>
    </div>
  );
};
