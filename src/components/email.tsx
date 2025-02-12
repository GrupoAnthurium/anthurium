import { Html, Heading, Text, Container } from "@react-email/components";

interface EmailProps {
  name: string;
  message?: string;
  email?: string;
}

export default function Email({ name, message, email }: EmailProps) {
  const renderMailContent = () => {
    if (email) {
      return (
        <>
          <Heading>Nuevo mensaje de contacto</Heading>
          <Text>
            <strong>Nombre:</strong> {name}
          </Text>
          <Text>
            <strong>Mensaje:</strong> {message}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
        </>
      );
    }
    return (
      <>
        <Heading>Hola, {name}!</Heading>
        <Text>
          Gracias por comunicarte con <strong>Anthurium</strong>. Recibimos tu
          mensaje y a la brevedad nos pondremos en contacto.
        </Text>
        <Text>
          Mientras tanto, si necesitas más información, no dudes en visitar
          nuestra página web o escribirnos nuevamente.
        </Text>
        <Text>Saludos,</Text>
        <Text>
          <strong>El equipo de Anthurium</strong>
        </Text>
      </>
    );
  };

  return (
    <Html>
      <Container>{renderMailContent()}</Container>
    </Html>
  );
}
