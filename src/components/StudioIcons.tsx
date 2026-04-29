import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

function BaseIcon({ title, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function NeedleIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M6 18L18 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 6.5L17.5 15.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M17.2 5.8l1 1-2.2 2.2-1-1L17.2 5.8z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M5.8 17.2l1 1-2.2 2.2-1-1L5.8 17.2z"
        fill="currentColor"
        opacity="0.9"
      />
    </BaseIcon>
  );
}

export function RazorIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M7 16.5c2.4-2.4 5.1-5.1 7.5-7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12.2 6.3l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeOpacity="0.7"
        strokeLinecap="round"
      />
      <path
        d="M6.3 17.7l3.8-3.8 2.1 2.1-3.8 3.8a1.5 1.5 0 0 1-2.1 0l0 0a1.5 1.5 0 0 1 0-2.1z"
        fill="currentColor"
        opacity="0.22"
      />
      <path
        d="M14.6 6.4l2.9-2.9a1.2 1.2 0 0 1 1.7 0l.3.3a1.2 1.2 0 0 1 0 1.7l-2.9 2.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
}

export function InkDropIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 3c3.2 4.2 6.2 7.2 6.2 10.7A6.2 6.2 0 0 1 12 19.9a6.2 6.2 0 0 1-6.2-6.2C5.8 10.2 8.8 7.2 12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M10 14.4c.6 1.5 2.2 2.6 4 2.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.55"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
}

export function CalendarMarkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M7 3v3M17 3v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6 7.2h12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
      <path
        d="M6.5 21h11A2.5 2.5 0 0 0 20 18.5v-11A2.5 2.5 0 0 0 17.5 5h-11A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8.2 13.3l2 2 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

export function ClockDialIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 12h.01M16.5 12h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
    </BaseIcon>
  );
}

export function PinDropIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 21s6-4.1 6-10a6 6 0 1 0-12 0c0 5.9 6 10 6 10z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 13.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z"
        fill="currentColor"
        opacity="0.22"
      />
      <path
        d="M12 13.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </BaseIcon>
  );
}

export function ArrowInkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M5 12h11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 7l4 5-4 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.2 16.8c.5 1.3 1.8 2.2 3.3 2.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.55"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 24 24">
      <path
        d="M12 21a9 9 0 0 0 7.7-13.7A9 9 0 0 0 3.2 17.7L3 21l3.4-.2A9 9 0 0 0 12 21z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.7c.2-.5.5-.6 1-.6h.6c.2 0 .5 0 .6.5l.7 1.8c.1.3.1.6-.1.8l-.5.6c-.2.2-.2.5 0 .7.6 1.1 1.6 2 2.7 2.7.2.1.5.1.7 0l.6-.5c.2-.2.5-.2.8-.1l1.8.7c.5.2.5.4.5.6v.6c0 .5-.1.8-.6 1-1.1.5-2.6.2-4.5-.9-1.8-1-3.3-2.5-4.3-4.3-1.1-1.9-1.4-3.4-.9-4.5z"
        fill="currentColor"
        opacity="0.22"
      />
      <path
        d="M9.2 8.7c.2-.5.5-.6 1-.6h.6c.2 0 .5 0 .6.5l.7 1.8c.1.3.1.6-.1.8l-.5.6c-.2.2-.2.5 0 .7.6 1.1 1.6 2 2.7 2.7.2.1.5.1.7 0l.6-.5c.2-.2.5-.2.8-.1l1.8.7c.5.2.5.4.5.6v.6c0 .5-.1.8-.6 1-1.1.5-2.6.2-4.5-.9-1.8-1-3.3-2.5-4.3-4.3-1.1-1.9-1.4-3.4-.9-4.5z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

