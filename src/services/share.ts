export const shareContent = async (title: string, text: string, url: string) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      });
      console.log('Successfully shared');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  } else {
    // Fallback for browsers that don't support Web Share API
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  }
};
