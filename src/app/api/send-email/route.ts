// import { Resend } from "resend";
// import Email from "@/components/email";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   // este mail se debería usar únicamente en testing, en producción se debería usar un mail con el dominio de anthurium
//   const from = "onboarding@resend.dev"; // --> reemplazar por el mail con el dominio de anthurium

//   try {
//     const { email, name, message } = await request.json();

//     if (!email || !name || !message) {
//       return new Response(
//         JSON.stringify({ error: "Faltan datos requeridos" }),
//         { status: 400 }
//       );
//     }

//     await resend.emails.send({
//       from,
//       to: email,
//       subject: "Gracias por comunicarte con Grupo Anthurium",
//       react: Email({ name }),
//     });

//     await resend.emails.send({
//       from,
//       to: "nqchossj@gmail.com",
//       subject: "Nuevo mensaje de contacto",
//       react: Email({ name, message, email }),
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Error enviando email:", error);
//     return new Response(
//       JSON.stringify({ error: "Error interno del servidor" }),
//       { status: 500 }
//     );
//   }
// }
