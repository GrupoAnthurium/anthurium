export const sendEmail = async (formData: {
  name: string;
  email: string;
  message?: string;
}) => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Error al enviar el correo");
    }

    return { success: true };
  } catch (error) {
    console.error("Error enviando el email:", error);
    return { success: false };
  }
};
