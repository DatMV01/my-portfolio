"use client";

import clsx from "clsx";
import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

const SendMessageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
          setTimeout(() => setStatus(""), 3000);
        },
      );
  };

  return (
    <form
      className="flex w-full flex-col items-center gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className={clsx(
          "border-border bg-background focus:border-primary",
          "focus:ring-primary/30 w-full rounded-md border p-3",
          "transition outline-none focus:ring-2",
        )}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className={clsx(
          "border-border bg-background focus:border-primary",
          "focus:ring-primary/30 w-full rounded-md border p-3",
          "transition outline-none focus:ring-2",
        )}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        className={clsx(
          "border-border bg-background focus:border-primary",
          "focus:ring-primary/30 w-full rounded-md border p-3",
          "transition outline-none focus:ring-2",
        )}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className={clsx(
          "block h-12 w-40",
          "flex items-center justify-center gap-x-2 rounded-full text-white",
          "bg-gradient-to-r from-orange-600 to-purple-500",
          "hover:scale-105 hover:shadow-md",
          "cursor-pointer transition-transform duration-300",
          status === "sending" && "cursor-not-allowed opacity-70",
        )}
      >
        <span>
          {status === "sending"
            ? "Sending..."
            : status === "success"
              ? "Sent!"
              : status === "error"
                ? "Error!"
                : "Send Message"}
        </span>
        <Send className="transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </form>
  );
};

export default SendMessageForm;
