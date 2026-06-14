import React from 'react';
import { Mail, MapPin, Phone, Globe, Share2 } from 'lucide-react';
import youtubesvg from '../../assets/icons8-youtube.svg';
import twittersvg from '../../assets/icons8-twitter.svg';
import instagramsvg from '../../assets/icons8-instagram.svg';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">MITHILESH COMMERCE <span className="text-secondary">CMC</span></h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bihar's leading commerce institute providing quality education and ensuring top ranks in professional and academic exams.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@mithileshcommerce" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <img src={youtubesvg} alt="youtube"/>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <img src={twittersvg} alt="twitter" className='bg-white rounded-full p-1'/>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <img src={instagramsvg} alt="instagram"/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Institute</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-primary transition-colors">Courses Offered</a></li>
              <li><a href="#director" className="text-gray-400 hover:text-primary transition-colors">Director's Message</a></li>
              <li><a href="#fees" className="text-gray-400 hover:text-primary transition-colors">Fee Structure</a></li>
            </ul>
          </div>

          {/* Courses Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Top Courses</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">CA / CS / CMA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">CUET</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">BPSE</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">B.Com / BBA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">XI - XII Commerce</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-gray-400">Bhikhna Pahari, Patna, Bihar<br/>Pin: 800004</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+916200491833" className="text-gray-400 hover:text-white transition-colors">Mob: 6200491833</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:cmcpatna99@gmail.com" className="text-gray-400 hover:text-white transition-colors">cmcpatna99@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mithilesh CMC Commerce. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
