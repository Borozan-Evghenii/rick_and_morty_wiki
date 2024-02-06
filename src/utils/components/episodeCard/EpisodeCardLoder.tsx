export const EpisodeCardLoader = () => (
  <div className="flex flex-col justify-between gap-5 rounded-[20px] bg-light-thirty p-5 dark:bg-dark-thirty ">
    <div className="flex animate-pulse flex-col gap-2">
      <div className="flex flex-wrap items-center justify-between ">
        <div className="title4-bold mr-5 h-[30px] w-[150px] rounded-2xl bg-light-accent dark:bg-dark-accent" />
        <div className="title4 h-[30px] w-[60px] rounded-2xl bg-light-accent dark:bg-dark-accent" />
      </div>
      <div className=" h-[21px] w-[100px] rounded-2xl bg-light-accent dark:bg-dark-accent" />
    </div>
    <div className="flex animate-pulse flex-wrap items-center gap-5">
      <div className="flex">
        <div className="h-[40px] w-[40px] rounded-full bg-light-accent dark:bg-dark-accent" />
        <div className="-ml-5 h-[40px] w-[40px] rounded-full bg-light-accent dark:bg-dark-accent" />
        <div className="-ml-5 h-[40px] w-[40px] rounded-full bg-light-accent dark:bg-dark-accent" />
        <div className="-ml-5 h-[40px] w-[40px] rounded-full bg-light-accent dark:bg-dark-accent" />
        <div className="-ml-5 h-[40px] w-[40px] rounded-full bg-light-accent dark:bg-dark-accent" />
      </div>
      <div className="h-[41px] w-[190px]  rounded-full bg-light-accent dark:bg-dark-accent" />
    </div>
  </div>
);
