"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function CoffeeChat() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Coffee Chat - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:akkemhumatejaswi222@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="coffee-chat" className="relative px-6 md:px-10 pt-28 pb-24 md:pt-32">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-8xl mb-16 md:mb-20 text-center"
        >
          <span className="block text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "#C8F53F" }}>
            ✦ Coffe Chat
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{ color: "#f0f0f0" }}>
            Let&apos;s connect over
            <br />
            <span style={{ color: "#C8F53F" }}>coffee and ideas.</span>
          </h2>
        </motion.div>

        <div className="w-full flex justify-center">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl rounded-2xl p-6 md:p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block mb-2 text-sm font-semibold" style={{ color: "#C8F53F" }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg px-4 py-3 text-sm"
                  style={{
                    background: "rgba(18,18,18,0.8)",
                    color: "#f0f0f0",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold" style={{ color: "#C8F53F" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg px-4 py-3 text-sm"
                  style={{
                    background: "rgba(18,18,18,0.8)",
                    color: "#f0f0f0",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                />
              </div>
            </div>

            <label className="block mb-2 text-sm font-semibold" style={{ color: "#C8F53F" }}>
              Message
            </label>
            <textarea
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mb-5 rounded-lg px-4 py-3 text-sm"
              style={{
                background: "rgba(18,18,18,0.8)",
                color: "#f0f0f0",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />

            <button
              type="submit"
              className="rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200"
              style={{ background: "#C8F53F", color: "#121212" }}
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
