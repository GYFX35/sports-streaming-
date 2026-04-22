import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Camera, Video, StopCircle, RefreshCw, Check, X } from 'lucide-react';

interface CameraCaptureProps {
  onCapture: (blob: Blob, type: 'image' | 'video') => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [capturedBlob, setCapturedBlob] = useState<Blob | null>(null);
  const [capturedType, setCapturedType] = useState<'image' | 'video' | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [stream, previewUrl]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: true
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera. Please ensure you have granted permissions.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const takePhoto = useCallback(() => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            setCapturedBlob(blob);
            setCapturedType('image');
            setPreviewUrl(URL.createObjectURL(blob));
            stopCamera();
          }
        }, 'image/jpeg');
      }
    }
  }, [stream]);

  const startRecording = () => {
    if (stream) {
      const chunks: BlobPart[] = [];
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        setCapturedBlob(blob);
        setCapturedType('video');
        setPreviewUrl(URL.createObjectURL(blob));
        stopCamera();
      };
      recorder.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleConfirm = () => {
    if (capturedBlob && capturedType) {
      onCapture(capturedBlob, capturedType);
      handleReset();
    }
  };

  const handleReset = () => {
    setCapturedBlob(null);
    setCapturedType(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    startCamera();
  };

  const handleClose = () => {
    stopCamera();
    setCapturedBlob(null);
    setCapturedType(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
  };

  if (!stream && !previewUrl) {
    return (
      <button
        onClick={startCamera}
        className="w-full h-64 border-2 border-dashed border-surface-200 rounded-[32px] flex flex-col items-center justify-center gap-4 hover:border-brand-500 hover:bg-brand-50 transition-all group"
      >
        <div className="p-4 bg-surface-100 rounded-2xl group-hover:bg-brand-100 transition-colors">
          <Camera className="w-8 h-8 text-surface-400 group-hover:text-brand-600" />
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-surface-900">Click to Open Camera</p>
          <p className="text-xs text-surface-500 mt-1">Photos or Videos</p>
        </div>
      </button>
    );
  }

  return (
    <div className="relative bg-black rounded-[32px] overflow-hidden aspect-video shadow-2xl ring-1 ring-white/10">
      {previewUrl ? (
        capturedType === 'image' ? (
          <img src={previewUrl} className="w-full h-full object-cover" alt="Captured" />
        ) : (
          <video src={previewUrl} className="w-full h-full object-cover" controls />
        )
      ) : (
        <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
      )}

      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-6 z-10">
        {!previewUrl ? (
          <>
            <button
              onClick={takePhoto}
              className="p-4 bg-white text-surface-900 rounded-full shadow-xl hover:scale-110 transition-transform active:scale-95"
              title="Take Photo"
            >
              <Camera className="w-6 h-6" />
            </button>
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="p-4 bg-red-600 text-white rounded-full shadow-xl hover:scale-110 transition-transform active:scale-95"
                title="Start Recording"
              >
                <Video className="w-6 h-6" />
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="p-4 bg-white text-red-600 rounded-full shadow-xl animate-pulse"
                title="Stop Recording"
              >
                <StopCircle className="w-6 h-6" />
              </button>
            )}
            <button
              onClick={handleClose}
              className="p-4 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleConfirm}
              className="p-4 bg-brand-600 text-white rounded-full shadow-xl hover:scale-110 transition-transform active:scale-95"
            >
              <Check className="w-6 h-6" />
            </button>
            <button
              onClick={handleReset}
              className="p-4 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-colors"
            >
              <RefreshCw className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CameraCapture;
