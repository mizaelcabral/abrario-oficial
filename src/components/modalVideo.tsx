import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

interface ModalVideoProps {
  children: React.ReactNode;
  videoId?: string;
  videoUrl?: string;
}

const getYoutubeEmbedUrl = (urlOrId: string) => {
  if (!urlOrId) return "https://www.youtube.com/embed/vn9B2hH4G_E";
  try {
    if (urlOrId.includes("youtube.com/watch")) {
      const url = new URL(urlOrId);
      const id = url.searchParams.get("v");
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (urlOrId.includes("youtu.be/")) {
      const id = urlOrId.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (urlOrId.includes("youtube.com/embed/")) {
      return urlOrId.includes("?") ? `${urlOrId}&autoplay=1` : `${urlOrId}?autoplay=1`;
    }
  } catch {
    // fallback
  }
  return `https://www.youtube.com/embed/${urlOrId}?autoplay=1`;
};

const ModalVideo = ({ children, videoId, videoUrl }: ModalVideoProps) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const embedSrc = getYoutubeEmbedUrl(videoUrl || videoId || "vn9B2hH4G_E");

  return (
    <div>
      <div onClick={onOpenModal}>{children}</div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        styles={{ modal: { padding: "0px", width: "800px", maxWidth: "90vw" } }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            height: 0,
          }}
        >
          {open && (
            <iframe
              src={embedSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            ></iframe>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ModalVideo;
