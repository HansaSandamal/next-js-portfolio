"use client"
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "succsess" | "error";

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })

  const [status, setStatus] = useState<FormStatus>("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch("/api/contact", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to send message!");
      }

      setStatus("succsess")
      setFormData({
        name: "",
        email: "",
        message: ""
      })
    } catch (error) {
      setStatus("error")
      console.error("Error sending message:", error);
    }

  }

  return (
    <div className="container max-w-7xl max-auto py-20">
      <h1 className="text-4xl font-bold mb-20 text-center">Contact Me</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-secondary">Open to opportunities, collaborations, and new ideas. Reach out!</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary w-6 h-6" />
              <div>
                <h3>Email:</h3>
                <Link href={"mailto:hansasandamal@gmail.com"} className="text-secondary hover:text-primary">
                  hansasandamal@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-primary w-6 h-6" />
              <div>
                <h3>Phone:</h3>
                <Link href={"tel:+94775115558"} className="text-secondary hover:text-primary">
                  +94775115558
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary w-6 h-6" />
              <div>
                <h3>Location:</h3>
                <p className="text-secondary hover:text-primary">
                  Pannipitiya, Colombo, SriLanka
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input required value={formData.name} onChange={handleChange} type="text" id="name" name="name" placeholder="Enter your name" className="placeholder:text-white/50 w-full px-4 py-2 rounded-md border dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input required type="email" id="email" value={formData.email} onChange={handleChange} name="email" placeholder="Enter your email" className="placeholder:text-white/50 w-full px-4 py-2 rounded-md border dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea rows={4} required id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" className="placeholder:text-white/50 w-full px-4 py-2 rounded-md border dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <button type="submit" className="w-full btn btn-primary">{status === "loading" ? "Sending..." : "Send Message"}</button>
            {
              status === 'succsess' && (
                <p className="text-green-500">Message send successfully!</p>
              )
            }
            {
              status === 'error' && (
                <p className="text-red-500">Failed to send Message. Please try again!</p>
              )
            }
          </form>
        </div>
      </div>

    </div>
  )
}

export default ContactPage;