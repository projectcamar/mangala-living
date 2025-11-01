/**
 * Image Protection Utility
 * Mencegah visitor download gambar dengan cara:
 * - Disable right-click context menu pada gambar
 * - Disable drag & drop gambar
 * - Disable keyboard shortcuts yang bisa digunakan untuk save gambar
 */

export const enableImageProtection = () => {
  // Prevent context menu (right-click) pada semua gambar
  const handleContextMenu = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    // Cek apakah yang di-klik adalah gambar atau elemen di dalam gambar
    if (
      target.tagName === 'IMG' ||
      target.closest('img') ||
      target.tagName === 'PICTURE' ||
      target.closest('picture')
    ) {
      e.preventDefault();
      return false;
    }
  };

  // Prevent drag pada gambar
  const handleDragStart = (e: DragEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'IMG' ||
      target.closest('img') ||
      target.tagName === 'PICTURE' ||
      target.closest('picture')
    ) {
      e.preventDefault();
      return false;
    }
  };

  // Prevent keyboard shortcuts yang bisa digunakan untuk save gambar
  // Note: Kita tidak disable semua shortcut karena bisa mengganggu UX normal
  // Fokus pada mencegah right-click dan drag sudah cukup efektif
  const handleKeyDown = (e: KeyboardEvent) => {
    // Disable Ctrl+S hanya jika user sedang fokus pada gambar
    // (meskipun ini jarang terjadi karena gambar biasanya tidak bisa di-focus)
    const target = e.target as HTMLElement;
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === 's' || e.key === 'S') &&
      (target.tagName === 'IMG' || target.closest('img') || target.tagName === 'PICTURE' || target.closest('picture'))
    ) {
      e.preventDefault();
      return false;
    }
  };

  // Prevent select/copy gambar (meskipun tidak 100% efektif, tapi membantu)
  const handleSelectStart = (e: Event) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'IMG' ||
      target.closest('img') ||
      target.tagName === 'PICTURE' ||
      target.closest('picture')
    ) {
      e.preventDefault();
      return false;
    }
  };

  // Tambahkan event listeners
  document.addEventListener('contextmenu', handleContextMenu);
  document.addEventListener('dragstart', handleDragStart);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('selectstart', handleSelectStart);

  // Return cleanup function
  return () => {
    document.removeEventListener('contextmenu', handleContextMenu);
    document.removeEventListener('dragstart', handleDragStart);
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('selectstart', handleSelectStart);
  };
};

/**
 * Tambahkan atribut CSS untuk mencegah drag pada gambar
 */
export const addImageProtectionStyles = () => {
  const styleId = 'image-protection-styles';
  
  // Hapus style yang sudah ada jika ada
  const existingStyle = document.getElementById(styleId);
  if (existingStyle) {
    return;
  }

  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    img, picture {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-user-drag: none !important;
      -khtml-user-drag: none !important;
      -moz-user-drag: none !important;
      -o-user-drag: none !important;
      user-drag: none !important;
      pointer-events: auto !important;
    }
  `;
  document.head.appendChild(style);
};