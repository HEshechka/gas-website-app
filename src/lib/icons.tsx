import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  ...props,
});

export const ShieldIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4.5" />
  </svg>
);

export const TeamIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c.6-3 2.8-4.7 5.5-4.7s4.9 1.7 5.5 4.7" />
    <path d="M15.5 5.4a3.2 3.2 0 010 5.9M17.5 14.6c1.8.6 3 2 3.4 4.4" />
  </svg>
);

export const BadgeCheckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 2.5l2.1 1.9 2.8-.4 1 2.7 2.7 1-.4 2.8 1.9 2.1-1.9 2.1.4 2.8-2.7 1-1 2.7-2.8-.4-2.1 1.9-2.1-1.9-2.8.4-1-2.7-2.7-1 .4-2.8L1.9 12l1.9-2.1-.4-2.8 2.7-1 1-2.7 2.8.4L12 2.5z" />
    <path d="M9 12.2l2.1 2.1L15.4 9.8" />
  </svg>
);

export const ZapIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11H12l1-8z" />
  </svg>
);

export const FlameIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 2.8c.6 3-1.4 4.6-2.9 6.3C7.5 10.9 6.5 12.6 6.5 15a5.5 5.5 0 0011 0c0-1.9-.8-3.4-1.8-4.8-.6 1-1.2 1.5-2 1.9.6-2.8-.2-6.3-1.7-9.3z" />
    <path d="M12 20.5a3 3 0 003-3c0-1.6-1.3-2.6-3-4.5-1.7 1.9-3 2.9-3 4.5a3 3 0 003 3z" />
  </svg>
);

export const RouterIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="13.5" width="18" height="6.5" rx="2" />
    <path d="M6.5 16.8h.01M9.7 16.8h.01M17.5 16.8h.01" />
    <path d="M7 10.5a7 7 0 0110 0M9.5 13a3.8 3.8 0 015 0" />
    <path d="M12 15.5v.01" />
  </svg>
);

export const FactoryIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 21V9.5l5.5 3.5V9.5L14 13V4.5a1 1 0 011-1h3a1 1 0 011 1V21H3z" />
    <path d="M17 8.5h2.5V21" />
    <path d="M6.5 16.5h2M11 16.5h2M6.5 19h2M11 19h2" />
  </svg>
);

export const HomeIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 11l8-7 8 7" />
    <path d="M6 9.5V20h12V9.5" />
    <path d="M10 20v-5.5h4V20" />
  </svg>
);

export const WeldIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 20h18" />
    <path d="M6 20v-4.5L12 8l6 7.5V20" />
    <path d="M12 8V4.5M9 2.5l3 2 3-2" />
    <path d="M18.5 3.5l1.5-1M19.5 6.5h2M17 6.5l-1.5 1" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 4h4l1.5 4.5L8 10a12 12 0 006 6l1.5-2.5L20 15v4a1.5 1.5 0 01-1.6 1.5C10.5 20 4 13.5 3.5 5.6A1.5 1.5 0 015 4z" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M4 7.5l8 5.5 8-5.5" />
  </svg>
);

export const MapPinIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21.5S5.5 15 5.5 10a6.5 6.5 0 0113 0c0 5-6.5 11.5-6.5 11.5z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5l3.2 2" />
  </svg>
);

export const ArrowRightIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 12h15M13.5 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4.5 12.5l5 5L19.5 7" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const SendIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M21 3L10.5 13.5M21 3l-6.8 18-3.7-7.5L3 9.8 21 3z" />
  </svg>
);

export const DocumentIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 3H7a1.5 1.5 0 00-1.5 1.5v15A1.5 1.5 0 007 21h10a1.5 1.5 0 001.5-1.5V7.5L14 3z" />
    <path d="M14 3v4.5h4.5M9 12.5h6M9 16h6" />
  </svg>
);

export const GaugeIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 17a8.5 8.5 0 1116 0" />
    <path d="M12 17l3.5-5" />
    <circle cx="12" cy="17" r="1.4" />
  </svg>
);

export const WhatsAppIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const TelegramIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.891 8.11l-1.92 9.041c-.145.639-.523.797-1.057.498l-2.924-2.154-1.411 1.358c-.156.156-.287.287-.588.287l.21-2.981 5.426-4.9c.236-.21-.051-.326-.367-.117l-6.705 4.221-2.887-.903c-.628-.196-.64-.628.131-.929l11.282-4.348c.523-.19.98.123.81.9z" />
  </svg>
);
