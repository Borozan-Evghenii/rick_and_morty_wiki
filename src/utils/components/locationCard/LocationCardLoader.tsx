export const LocationCardLoader = () => (
  <div className="flex flex-col items-start gap-5 rounded-[20px] bg-light-thirty p-5 dark:bg-dark-thirty">
    <div className="flex animate-pulse flex-col gap-2">
      <div className=" h-[30px] w-[170px] rounded-2xl bg-light-accent dark:bg-dark-accent" />
      <div className="flex h-[30px] w-[150px] items-center rounded-2xl bg-light-accent pl-[20px] dark:bg-dark-accent">
        🪐
      </div>
      <div className="h-[16px] w-[170px] rounded-2xl bg-light-accent dark:bg-dark-accent" />
    </div>
    <div className="flex animate-pulse">
      <div className="h-[40px] w-[40px] rounded-full bg-light-accent dark:bg-dark-accent" />
      <div className="-ml-5 h-[40px] w-[40px] rounded-full bg-light-accent dark:bg-dark-accent" />
      <div className="-ml-5 h-[40px] w-[40px] rounded-full bg-light-accent dark:bg-dark-accent" />
      <div className="-ml-5 h-[40px] w-[40px] rounded-full bg-light-accent dark:bg-dark-accent" />
      <div className="-ml-5 h-[40px] w-[40px] rounded-full bg-light-accent dark:bg-dark-accent" />
    </div>
    <div className="h-[41px] w-[190px]  animate-pulse rounded-full bg-light-accent dark:bg-dark-accent" />
  </div>
);
