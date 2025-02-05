import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ videoUrl }: any) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Verifica se o navegador suporta o HLS nativamente
    if (Hls.isSupported()) {
      const hls = new Hls();

      // Carrega o stream HLS
      hls.loadSource(videoUrl);

      // Anexa o HLS ao elemento de vídeo
      hls.attachMedia(video!);

      // Lida com erros de inicialização
      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.error('Erro fatal no HLS:', data);
        }
      });

      return () => {
        hls.destroy(); // Libera recursos quando o componente for desmontado
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Se o navegador tiver suporte nativo (exemplo: Safari), apenas configure a URL
      video.src = videoUrl;
    }
  }, [videoUrl]);

  return (
    <video ref={videoRef} controls width="100%" height="auto">
      Seu navegador não suporta o elemento de vídeo.
    </video>
  );
};

export default VideoPlayer;
