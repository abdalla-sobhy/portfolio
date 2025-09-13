'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Validate form fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const subject = `New ${formData.service} inquiry from ${formData.firstName} ${formData.lastName}`
      const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service: ${formData.service}

Message:
${formData.message}
      `.trim()
      
      const mailtoLink = `mailto:abdallahbs9393@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
      
      setSubmitStatus('success')
      
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
        setSubmitStatus('idle')
        setErrors({})
      }, 3000)
      
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <main className="min-h-screen pt-24 px-4 sm:px-6 pb-12">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12"
        >
          Let&apos;s work <span className="text-teal-400">together</span>
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Changed this line to be responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none transition-colors ${
                      errors.firstName ? 'border-red-500' : 'border-slate-700 focus:border-teal-400'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none transition-colors ${
                      errors.lastName ? 'border-red-500' : 'border-slate-700 focus:border-teal-400'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-slate-700 focus:border-teal-400'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-teal-400 focus:outline-none transition-colors"
                disabled={isSubmitting}
              />
              
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none transition-colors ${
                    errors.service ? 'border-red-500' : 'border-slate-700 focus:border-teal-400'
                  } ${formData.service ? 'text-white' : 'text-gray-400'}`}
                  disabled={isSubmitting}
                >
                  <option value="">Select a service</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="fullstack">Full-Stack Development</option>
                  <option value="consultation">Technical Consultation</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-slate-700 focus:border-teal-400'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                    : 'bg-teal-500 text-slate-900 hover:bg-teal-400'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
            
            {/* Success/Error Messages */}
            <AnimatePresence>
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`mt-4 p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus === 'success' 
                      ? 'bg-green-900/50 border border-green-700' 
                      : 'bg-red-900/50 border border-red-700'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="text-green-400" size={20} />
                      <p className="text-green-300">
                        Message sent successfully! Your email client should open with the message.
                      </p>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="text-red-400" size={20} />
                      <p className="text-red-300">
                        Something went wrong. Please try again later.
                      </p>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-500/10 rounded-full">
                  <Phone className="text-teal-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300 text-sm sm:text-base">(+20) 155 032 8625</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-500/10 rounded-full">
                  <Mail className="text-teal-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-300 text-sm sm:text-base break-all">abdallahbs9393@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-500/10 rounded-full">
                  <MapPin className="text-teal-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Address</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Alexandria, Egypt</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}