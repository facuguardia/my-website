import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string | null;
  title: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoId,
  title,
}: VideoModalProps) {
  if (!videoId) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
      <DialogContent
        className={cn(
          "sm:max-w-[800px] p-0 overflow-hidden",
          "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        )}
      >
        <DialogTitle className="sr-only">{title} - Video Preview</DialogTitle>
        <div className="relative aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute inset-0 h-full w-full border-0 rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
