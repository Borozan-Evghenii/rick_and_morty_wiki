export const CharacterCardLoader = () => (
  <div className="flex min-h-[340px] flex-col gap-5 rounded-[10px] bg-light-thirty p-[12px] dark:bg-dark-thirty">
    <div className="h-full max-h-[300px] w-full max-w-[320px] animate-pulse bg-light-accent dark:bg-dark-accent" />
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <div className=" h-[20px] w-[120px] bg-light-accent dark:bg-dark-accent" />
        <div className="flex items-center gap-5">
          <p className=" block h-[16px] w-[40px] bg-light-accent dark:bg-dark-accent" />
        </div>
      </div>
      <div className="h-[40px] w-[40px] rounded-full bg-light-accent dark:bg-dark-accent" />
    </div>
  </div>
);
