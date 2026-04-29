import React, { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  images?: string[];
  currentIndex?: number;
  onNavigate?: (direction: "prev" | "next") => void;
}

const ImageModal = ({
  isOpen = true,
  onClose = () => {},
  images = [
    "https://images.unsplash.com/photo-1581342878583-5f71d2dac3d7?q=80&w=1000",
    "https://images.unsplash.com/photo-1590246814883-351321987df1?q=80&w=1000",
    "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?q=80&w=1000",
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1000",
    "https://images.unsplash.com/photo-1594067598377-478c61d59f3f?q=80&w=1000",
    "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=1000",
  ],
  currentIndex = 0,
  onNavigate = () => {},
}: ImageModalProps) => {
  const [localIndex, setLocalIndex] = useState(currentIndex);

  const handlePrevious = () => {
    const newIndex = localIndex > 0 ? localIndex - 1 : images.length - 1;
    setLocalIndex(newIndex);
    onNavigate("prev");
  };

  const handleNext = () => {
    const newIndex = localIndex < images.length - 1 ? localIndex + 1 : 0;
    setLocalIndex(newIndex);
    onNavigate("next");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-4xl w-full bg-black p-0 border-none"
      >
        <div className="relative w-full h-[700px] bg-black flex items-center justify-center">
          {/* Close button */}
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          </DialogClose>

          {/* Image */}
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img
              src={images[localIndex]}
              alt={`Tattoo artwork ${localIndex + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/10 h-12 w-12"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/10 h-12 w-12"
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {localIndex + 1} / {images.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
