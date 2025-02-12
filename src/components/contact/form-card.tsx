"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/services";
import { toast } from "sonner";
import { Send, Loader2Icon } from "lucide-react";

export const FormCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("El email ingresado no es válido", {
        description: "Por favor, revisá el email ingresado",
      });

      return;
    }

    setIsLoading(true);
    const result = await sendEmail(formData);
    setIsLoading(false);

    if (result.success) {
      setFormData({ name: "", email: "", message: "" });
      toast.success("Mensaje enviado correctamente", {
        description: "¡Gracias por comunicarte con nosotros!",
      });
    } else {
      console.error("Hubo un problema al enviar el correo");
    }
  };

  return (
    <div className="w-full bg-foreground p-4 border rounded-lg min-h-[405px]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-softgrey">
            Nombre
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-softgrey">
            Email
          </label>
          <Input
            id="email"
            name="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm text-softgrey">
            Mensaje
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tu mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          type="submit"
          variant="custom"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <Loader2Icon className="animate-spin" />
          ) : (
            <span className="flex items-center">
              Enviar mensaje
              <Send className="ml-2 size-4" />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};
