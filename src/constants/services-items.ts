import {
  LaptopIcon,
  CodeIcon,
  UsersRoundIcon,
  ShieldCheckIcon,
  ZapIcon,
  SettingsIcon,
} from "lucide-react";

export const SERVICES_ITEMS = [
  {
    Icon: LaptopIcon,
    TITLE: "Digitalización",
    DESCRIPTION:
      "Llevamos tu negocio al mundo digital con soluciones hechas a medida. Nuestras herramientas optimizan procesos, reducen costos y mejoran la experiencia del cliente. Convertimos datos en información útil para ayudarlo a tomar mejores decisiones y mantenerse competitivo en un entorno cada vez más digital."
  },
  {
    Icon: CodeIcon,
    TITLE: "Desarrollo",
    DESCRIPTION:
      "Creamos software adaptado a tus necesidades. Trabajamos con metodologías ágiles y tecnología de vanguardia para ofrecer soluciones eficientes y escalables. Desde aplicaciones web hasta sistemas empresariales, desarrollamos herramientas que impulsan tu crecimiento."
  },
  {
    Icon: UsersRoundIcon,
    TITLE: "Profesionalismo",
    DESCRIPTION: "Nos destacamos por nuestra dedicación a la calidad. Gestionamos cada proyecto con altos estándares y ética profesional. Nuestro equipo combina conocimientos técnicos y de negocio para ofrecer resultados efectivos, siempre cumpliendo con plazos y presupuestos.",
  },
  {
    Icon: ShieldCheckIcon,
    TITLE: "Seguridad",
    DESCRIPTION: "Cuidamos tus datos con las mejores prácticas de seguridad. Implementamos cifrado, autenticación avanzada y monitoreo continuo para proteger su información y cumplir con las normativas más exigentes.",
  },
  {
    Icon: ZapIcon,
    TITLE: "Automatización",
    DESCRIPTION:
      "Hacemos tu negocio más eficiente automatizando procesos. Eliminamos tareas repetitivas, reducimos errores y liberamos a su equipo para que se enfoque en lo más importante. Desde flujos de trabajo hasta integraciones complejas, mejoramos su productividad.",
  },
  {
    Icon: SettingsIcon,
    TITLE: "Soporte IT",
    DESCRIPTION:
      "Brindamos asistencia técnica cuando la necesites. Nuestro equipo soluciona problemas rápidamente y ofrece mantenimiento preventivo para evitar fallas. Con planes de soporte a medida, garantizamos que sus sistemas funcionen sin interrupciones.",
  },
] as const;
