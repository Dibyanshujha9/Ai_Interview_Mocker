'use client'

import { SignIn } from '@clerk/nextjs'
import { Briefcase, Users, Trophy, ArrowRight, Target, BookOpen, Star } from 'lucide-react'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    // Custom styles for Clerk components
    const style = document.createElement('style')
    style.textContent = `
      .cl-rootBox {
        width: 100% !important;
      }
      
      .cl-card {
        box-shadow: none !important;
        border: none !important;
        background: transparent !important;
      }
      
      .cl-headerTitle {
        display: none !important;
      }
      
      .cl-headerSubtitle {
        display: none !important;
      }
      
      .cl-socialButtonsBlockButton {
        border: 1px solid #e2e8f0 !important;
        border-radius: 16px !important;
        padding: 14px 20px !important;
        font-weight: 600 !important;
        font-size: 15px !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        background: #ffffff !important;
        color: #1e293b !important;
        height: 52px !important;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
      }
      
      .cl-socialButtonsBlockButton:hover {
        border-color: #3b82f6 !important;
        background: #f8fafc !important;
        transform: translateY(-1px) !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
      }
      
      .cl-formFieldInput {
        border: 1px solid #e2e8f0 !important;
        border-radius: 16px !important;
        padding: 14px 20px !important;
        font-size: 15px !important;
        font-weight: 500 !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        background: #ffffff !important;
        color: #1e293b !important;
        height: 52px !important;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
      }
      
      .cl-formFieldInput:focus {
        border-color: #3b82f6 !important;
        box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05) !important;
        outline: none !important;
      }
      
      .cl-formFieldInput::placeholder {
        color: #94a3b8 !important;
      }
      
      .cl-formButtonPrimary {
        background: linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%) !important;
        border: none !important;
        border-radius: 16px !important;
        padding: 14px 24px !important;
        font-weight: 700 !important;
        font-size: 15px !important;
        letter-spacing: 0.025em !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        height: 52px !important;
        text-transform: uppercase !important;
        box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3) !important;
      }
      
      .cl-formButtonPrimary:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4) !important;
        background: linear-gradient(135deg, #2563eb 0%, #5b21b6 50%, #7c3aed 100%) !important;
      }
      
      .cl-dividerLine {
        background: linear-gradient(90deg, transparent, #e2e8f0, transparent) !important;
        height: 1px !important;
      }
      
      .cl-dividerText {
        color: #64748b !important;
        font-size: 13px !important;
        font-weight: 500 !important;
        background: #ffffff !important;
        padding: 0 16px !important;
      }
      
      .cl-footerActionLink {
        color: #3b82f6 !important;
        font-weight: 600 !important;
        text-decoration: none !important;
        transition: all 0.2s ease !important;
      }
      
      .cl-footerActionLink:hover {
        color: #1d4ed8 !important;
        text-decoration: underline !important;
      }
      
      .cl-loading {
        border-color: #3b82f6 !important;
      }
      
      .cl-formFieldLabel {
        color: #374151 !important;
        font-weight: 600 !important;
        font-size: 14px !important;
        margin-bottom: 8px !important;
      }
      
      .cl-formFieldAction {
        color: #3b82f6 !important;
        font-weight: 500 !important;
        font-size: 14px !important;
      }
      
      .cl-formFieldAction:hover {
        color: #1d4ed8 !important;
      }
      
      /* Hide development mode message */
      .cl-internal-b3fm6y {
        display: none !important;
      }
      
      .cl-footer {
        display: none !important;
      }
      
      /* Alternative: Hide any text containing "Development mode" */
      [data-localization-key*="developmentMode"] {
        display: none !important;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left Side - Enhanced Branding */}
        <div className="hidden xl:flex xl:w-5/12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          {/* Sophisticated Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-white/10 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-32 left-40 w-16 h-16 border border-white/10 rounded-full animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping delay-1000"></div>
          </div>
          
          <div className="relative z-10 flex flex-col justify-center px-16 py-12 text-white">
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Let's Prepare
                </h1>
              </div>
              <p className="text-xl text-blue-100 leading-relaxed font-light">
                Transform your career with AI-powered interview preparation. Master every question, perfect your technique, and land your dream job.
              </p>
            </div>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6 group cursor-pointer">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Smart Practice</h3>
                  <p className="text-blue-100 leading-relaxed">AI-curated questions from 500+ top companies with real-time feedback and improvement suggestions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group cursor-pointer">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Expert Mentorship</h3>
                  <p className="text-blue-100 leading-relaxed">Connect with industry leaders and get personalized guidance from professionals at FAANG companies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group cursor-pointer">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-7 h-7 text-green-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">Success Analytics</h3>
                  <p className="text-blue-100 leading-relaxed">Track your progress with detailed analytics and celebrate milestones on your journey to success.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl backdrop-blur-lg border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-white font-semibold text-lg">Join 150,000+ professionals</p>
                  <p className="text-blue-200 text-sm">who've accelerated their careers</p>
                </div>
                <ArrowRight className="w-6 h-6 text-blue-300 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Premium Sign In Form */}
        <div className="w-full xl:w-7/12 flex items-center justify-center p-4 sm:p-8 lg:p-12">
          <div className="w-full max-w-lg">
            {/* Mobile/Tablet Header */}
            <div className="xl:hidden text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
                  Let's Prepare
                </h1>
              </div>
              <p className="text-slate-600 text-lg sm:text-xl font-medium">Your interview success starts here</p>
            </div>
            
            {/* Welcome Section */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                Welcome Back
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                Continue your journey to interview mastery
              </p>
            </div>
            
            {/* Premium Sign In Container */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="p-6 sm:p-8 lg:p-10">
                <SignIn 
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      card: "shadow-none border-0 bg-transparent p-0"
                    }
                  }}
                  redirectUrl="/dashboard"
                />
              </div>
            </div>
            
            {/* Motivational Slogan */}
            <div className="mt-8 sm:mt-10 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                <p className="text-lg sm:text-xl font-bold tracking-wide">
                  "Success is where preparation meets opportunity"
                </p>
              </div>
              <p className="text-slate-500 text-sm mt-2 font-medium">
                Prepare today, succeed tomorrow
              </p>
            </div>
            
            {/* Enhanced Trust Indicators */}
            <div className="mt-8 sm:mt-12">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-400/30"></div>
                  <span className="font-semibold">Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full shadow-lg shadow-blue-400/30"></div>
                  <span className="font-semibold">150K+ Success Stories</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-400/30"></div>
                  <span className="font-semibold">AI-Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}