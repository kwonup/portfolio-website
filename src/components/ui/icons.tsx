import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M12 .5A11.5 11.5 0 0 0 .5 12.28c0 5.2 3.36 9.62 8.03 11.18.59.11.8-.26.8-.57v-2.22c-3.27.72-3.96-1.42-3.96-1.42-.53-1.39-1.3-1.76-1.3-1.76-1.07-.75.08-.73.08-.73 1.18.09 1.8 1.25 1.8 1.25 1.05 1.85 2.76 1.32 3.44 1 .1-.78.41-1.32.74-1.62-2.61-.31-5.35-1.34-5.35-5.95 0-1.31.46-2.39 1.21-3.23-.12-.31-.52-1.53.12-3.18 0 0 .99-.33 3.25 1.23a11 11 0 0 1 5.91 0c2.25-1.56 3.24-1.23 3.24-1.23.64 1.65.24 2.87.12 3.18.75.84 1.21 1.92 1.21 3.23 0 4.62-2.75 5.64-5.37 5.94.42.38.8 1.12.8 2.25v3.34c0 .31.21.69.81.57A11.79 11.79 0 0 0 23.5 12.28 11.5 11.5 0 0 0 12 .5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect width="17" height="17" x="3.5" y="3.5" rx="4.5" />
      <circle cx="12" cy="12" r="3.7" />
      <path d="M17.4 6.7h.01" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect width="18" height="14" x="3" y="5" rx="2" />
      <path d="m3.8 7 8.2 6 8.2-6" />
    </svg>
  );
}
