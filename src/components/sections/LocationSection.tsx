import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Find Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Location</h3>
            <p className="text-lg text-gray-600">
              Visit our institute to explore the best commerce education environment.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Address Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <Card className="shadow-lg border-none bg-white/80 backdrop-blur-md">
              <CardContent className="p-6 md:p-8 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h4>
                  <p className="text-gray-600 mb-4">
                    MITHILESH COMMERCE CMC<br/>
                    Patna, Bihar
                  </p>
                  <a
                    href="https://www.google.com/maps/place/MITHILESH+COMMERCE+CMC/@25.6147237,85.1639229,15z/data=!4m6!3m5!1s0x39ed58e9a566ba1b:0x86009c6e6edacfa6!8m2!3d25.6147237!4d85.1639229!16s%2Fg%2F11b6y0m13p?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none bg-white/80 backdrop-blur-md">
              <CardContent className="p-6 md:p-8 flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
                  <a href="tel:+916200491833" className="text-gray-600 hover:text-primary transition-colors block">
                    +91 6200491833
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white/80 backdrop-blur-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7195.409607344829!2d85.16392287409812!3d25.614723677444616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58e9a566ba1b%3A0x86009c6e6edacfa6!2sMITHILESH%20COMMERCE%20CMC!5e0!3m2!1sen!2sin!4v1781369846976!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
