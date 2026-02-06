import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Music } from "lucide-react";

export default function GhazalPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show after 1 second for effect
    const timer = setTimeout(() => {
      // Check session storage to see if already shown
      const hasSeen = sessionStorage.getItem("ghazal_popup_seen");
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("ghazal_popup_seen", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-sm bg-card border border-primary/20 shadow-2xl rounded-2xl p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full p-2 transition-all"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="flex flex-col items-center text-center space-y-4 pt-2 relative z-10">
              <div className="bg-primary/10 p-3 rounded-full mb-1 ring-1 ring-primary/20">
                <Music className="w-6 h-6 text-primary" />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground leading-tight">
                  Book Tickets for <br/> Ghazal Revival
                </h2>
              </div>

              <div className="pt-2 w-full">
                <a
                  href="https://rebrand.ly/indostage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
                  onClick={handleClose}
                >
                  <span>Book Now</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
