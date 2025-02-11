"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export const FormCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setFormData({ name: "", email: "", message: "" });
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
            type="email"
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
        <Button type="submit" variant="custom" className="w-full">
          Enviar mensaje
          <Send className="ml-2 size-4" />
        </Button>
      </form>
    </div>
  );
};
