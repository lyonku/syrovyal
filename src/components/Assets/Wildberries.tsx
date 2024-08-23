import * as React from "react";

type WildberriesType = {
  gradientId: string;
};

function Wildberries({
  gradientId,
  ...props
}: React.SVGProps<SVGSVGElement> & WildberriesType) {
  return (
    <svg width={161} height={21} fill="none" {...props}>
      <path
        d="M18.113 15.646L14.052 1.018l-3.005-.001L7 15.569 3.224 1.018H0l4.914 18.944 3.707-.003 3.93-14.151 3.925 14.147 3.736.005L25.13 1.016l-3.224.004-3.792 14.625zm9.24-14.618h3.068V19.95h-3.069V1.028zm9.629 0h-3.005V19.95h10.476v-2.969h-7.471V1.028zm16.91 0h-7.217V19.95h7.217c2.518 0 4.613-.917 6.264-2.729 1.672-1.833 2.519-4.081 2.519-6.722 0-2.663-.847-4.91-2.519-6.722-1.65-1.812-3.746-2.75-6.264-2.75zm4.211 14.143c-1.058 1.222-2.476 1.833-4.212 1.833h-4.19V4.04h4.19c1.715 0 3.133.61 4.212 1.833 1.1 1.222 1.65 2.75 1.65 4.649 0 1.855-.55 3.427-1.65 4.649zm18.18-5.037c1.227-.94 1.862-2.206 1.862-3.865 0-1.485-.508-2.73-1.566-3.734-1.037-.983-2.307-1.507-3.81-1.507h-7.28V19.96h7.852c1.566 0 2.836-.524 3.915-1.55 1.08-1.026 1.609-2.315 1.609-3.865 0-1.966-.974-3.538-2.582-4.411zm-7.767-6.18h4.275c1.333 0 2.35 1.092 2.35 2.49 0 1.397-1.017 2.489-2.35 2.489h-4.275V3.954zm4.846 13.102h-4.846V11.75h4.846c1.397 0 2.498 1.157 2.498 2.642 0 1.485-1.101 2.664-2.498 2.664zm11.365-5.197h7.343V8.91h-7.343V3.998h8v-2.97H81.721V19.96h11.132v-2.97h-8.127V11.86zM108.81 7.12c0-1.703-.593-3.144-1.736-4.302-1.121-1.2-2.518-1.79-4.169-1.79h-7.344V19.96h3.006v-6.9h3.555l3.894 6.9h3.323l-4.169-7.359c2.179-.873 3.64-3.079 3.64-5.48zm-5.926 3.167h-4.317V3.954h4.317c1.587 0 2.878 1.42 2.878 3.166 0 1.77-1.27 3.167-2.878 3.167zm22.01-3.173c0-1.705-.592-3.147-1.735-4.304-1.122-1.202-2.519-1.792-4.17-1.792h-7.343V19.96h3.005v-6.904h3.555l3.873 6.904h3.344l-4.169-7.363c2.18-.873 3.64-3.08 3.64-5.483zm-5.926 3.168h-4.317V3.946h4.317c1.588 0 2.878 1.42 2.878 3.168 0 1.77-1.269 3.168-2.878 3.168zm8.656-9.262h3.005v18.94h-3.005V1.02zm9.566 10.839h7.344V8.91h-7.344V3.998h8v-2.97h-11.005V19.96h11.132v-2.97h-8.127V11.86zm21.925-.988c-.275-.24-.74-.524-1.333-.764-.571-.24-1.016-.436-1.355-.545-.317-.131-.825-.306-1.523-.546-2.815-.895-3.704-1.55-3.704-2.946 0-1.441 1.122-2.358 2.879-2.358 1.798 0 3.09.895 3.851 2.641l2.54-1.506C159.285 2.25 157.021.68 154.08.68c-1.63 0-3.027.48-4.17 1.484-1.164.982-1.735 2.291-1.735 3.972 0 1.702.592 2.946 1.778 3.82 1.227.829 2.095 1.178 3.851 1.724 1.566.48 2.667.938 3.259 1.353.593.393.911.96.911 1.746 0 1.484-1.122 2.488-3.408 2.488-2.307 0-3.809-1.048-4.55-3.186l-2.603 1.57c.952 2.904 3.534 4.65 7.09 4.671 1.947 0 3.513-.48 4.698-1.484 1.206-1.004 1.799-2.378 1.799-4.081 0-1.846-.91-3.1-1.884-3.885z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1={0}
          y1={10.5}
          x2={161}
          y2={10.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CB11AB" />
          <stop offset={0.5} stopColor="#909" />
          <stop offset={1} stopColor="#481173" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const MemoWildberries = React.memo(Wildberries);
export default MemoWildberries;
