const handleDownload = () => {
    const link = document.createElement('a'); // Crée un lien invisible
    link.href = '/ficher_pdf.pdf'; // Cible ton fichier
    link.download = 'Harding.pdf'; // Donne un nom au fichier final
    link.click(); // Simule un clic pour déclencher le téléchargement
}
export default handleDownload;