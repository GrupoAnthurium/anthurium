import {
  LaptopIcon,
  CodeIcon,
  UsersRoundIcon,
  ShieldIcon,
  ZapIcon,
  SettingsIcon,
} from "lucide-react";

export const SERVICES_ITEMS = [
  {
    Icon: LaptopIcon,
    TITLE: "Digitalización",
    DESCRIPTION:
      "Transformamos tus procesos con soluciones tecnológicas avanzadas.",
  },
  {
    Icon: CodeIcon,
    TITLE: "Desarrollo",
    DESCRIPTION:
      "Desarrollamos tu software a medida para potenciar tu negocio.",
  },
  {
    Icon: UsersRoundIcon,
    TITLE: "Profesionalismo",
    DESCRIPTION: "Ofrecemos compromiso, calidad y excelencia en cada solución.",
  },
  {
    Icon: ShieldIcon,
    TITLE: "Seguridad",
    DESCRIPTION: "Protegemos tus datos y sistemas contra amenazas digitales.",
  },
  {
    Icon: ZapIcon,
    TITLE: "Automatización",
    DESCRIPTION:
      "Optimizamos procesos y reducimos tiempos con tecnología inteligente.",
  },
  {
    Icon: SettingsIcon,
    TITLE: "Soporte IT",
    DESCRIPTION:
      "Damos asistencia y mantenimiento para tu infraestructura tecnológica.",
  },
] as const;
