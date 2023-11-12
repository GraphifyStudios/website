import CountUp from "~/components/countup";

interface LCXYZResponse {
  counts: number[];
  success: boolean;
  cache: boolean;
  cacheTime: number;
  serverError: boolean;
  user: {
    pfp: string;
    name: string;
  };
}

export async function Stats() {
  const res = await fetch(
    "https://livecounts.xyz/api/youtube-live-subscriber-count/live/UCgG5aRcYGzPPB4UG3mS-ZNg"
  );
  const data: LCXYZResponse = await res.json();

  return (
    <div className="mt-8 container p-0 grid grid-cols-1 gap-1 text-center md:grid-cols-3 md:gap-2 lg:gap-3">
      <div className="bg-primary/5 p-4 rounded-lg space-y-2">
        <div className="flex justify-center">
          <svg
            className=" text-gray-400 h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div>
          <CountUp
            value={data.counts[0]}
            className="text-4xl font-bold text-white"
          />
          <p className="text-lg text-gray-400">Subscribers</p>
        </div>
      </div>
      <div className="bg-primary/5 p-4 rounded-lg space-y-2">
        <div className="flex justify-center">
          <svg
            className=" text-gray-400 h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <div>
          <CountUp
            value={data.counts[1]}
            className="text-4xl font-bold text-white"
          />
          <p className="text-lg text-gray-400">Views</p>
        </div>
      </div>
      <div className="bg-primary/5 p-4 rounded-lg space-y-2">
        <div className="flex justify-center">
          <svg
            className=" text-gray-400 h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </div>
        <div>
          <CountUp
            value={data.counts[2]}
            className="text-4xl font-bold text-white"
          />
          <p className="text-lg text-gray-400">Videos</p>
        </div>
      </div>
    </div>
  );
}

export function StatsFallback() {
  return (
    <div className="mt-8 container p-0 grid grid-cols-1 gap-1 text-center md:grid-cols-3 md:gap-2 lg:gap-3">
      <div className="bg-primary/5 p-4 rounded-lg space-y-2">
        <div className="flex justify-center">
          <svg
            className="text-gray-400 h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div>
          <div className="animate-pulse w-full rounded-lg h-10 bg-foreground/50" />
          <p className="text-lg text-gray-400">Subscribers</p>
        </div>
      </div>
      <div className="bg-primary/5 p-4 rounded-lg space-y-2">
        <div className="flex justify-center">
          <svg
            className="text-gray-400 h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <div>
          <div className="animate-pulse w-full rounded-lg h-10 bg-foreground/50" />
          <p className="text-lg text-gray-400">Views</p>
        </div>
      </div>
      <div className="bg-primary/5 p-4 rounded-lg space-y-2">
        <div className="flex justify-center">
          <svg
            className="text-gray-400 h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </div>
        <div>
          <div className="animate-pulse w-full rounded-lg h-10 bg-foreground/50" />
          <p className="text-lg text-gray-400">Videos</p>
        </div>
      </div>
    </div>
  );
}
