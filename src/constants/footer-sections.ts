import { CONTACT_INFO } from "@/constants";

export const FOOTER_SECTIONS = [
  {
    title: "Servicios",
    items: [
      "Digitalización",
      "Desarrollo",
      "Profesionalismo",
      "Seguridad",
      "Automatización",
      "Soporte IT",
    ],
  },
  { title: "Clientes", items: ["asd"] },
  {
    title: "Contacto",
    items: (() => [CONTACT_INFO.EMAIL, CONTACT_INFO.PHONE])(),
  },
] as const;
