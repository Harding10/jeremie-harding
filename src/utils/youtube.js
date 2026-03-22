/**
 * Extrait l'ID d'une vidéo YouTube à partir de son URL.
 * @param {string} url - L'URL de la vidéo YouTube.
 * @returns {string|null} - L'ID de la vidéo ou null si non trouvé.
 */
export const getYoutubeId = (url) => {
    if (typeof url !== 'string') return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};


/**
 * Génère l'URL d'embed YouTube avec les paramètres appropriés.
 * @param {string} url - L'URL de la vidéo YouTube.
 * @param {boolean} isModal - Si la vidéo est affichée en plein écran (modal).
 * @returns {string|null} - L'URL d'embed ou null si l'ID n'est pas trouvé.
 */
export const getYoutubeEmbedUrl = (url, isModal = false) => {
    const videoId = getYoutubeId(url);
    if (!videoId) return null;
    
    // Pour que le loop fonctionne avec une seule vidéo, YouTube demande le paramètre playlist=VIDEO_ID
    // mute=1 est souvent requis pour que l'autoplay soit autorisé par les navigateurs
    const params = new URLSearchParams({
        rel: '0',
        showinfo: '0',
        autoplay: '1',
        loop: '1',
        playlist: videoId,
        mute: '1',
        controls: isModal ? '1' : '0'
    });
    
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
};

