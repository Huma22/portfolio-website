"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <section id="coffee-chat" className="relative pt-20 sm:pt-24 lg:pt-32 pb-14 sm:pb-16 lg:pb-24">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-3xl p-12 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(200,245,63,0.08), rgba(123,227,255,0.05)), rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
                }}
              >
                <Image
                  src="/coffee/coffee-chat.svg"
                  alt="Coffee chat"
                  width={400}
                  height={400}
                  className="w-full max-w-sm"
                />
              </motion.div>

              {/* Form Card */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-3xl p-8"
                style={{
                  background: "linear-gradient(135deg, rgba(200,245,63,0.08), rgba(123,227,255,0.05)), rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
                }}
              >
                <div className="space-y-5">
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

            <div className="mt-5">
            <label className="block mb-2 text-sm font-semibold" style={{ color: "#C8F53F" }}>
              Message
            </label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg px-4 py-3 text-sm"
              style={{
                background: "rgba(18,18,18,0.8)",
                color: "#f0f0f0",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{ background: "#C8F53F", color: "#121212" }}
            >
              Send Message
            </button>
          </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
