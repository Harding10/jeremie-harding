const handleDownload = () => {
    const link = document.createElement('a'); // Crée un lien invisible
    link.href = '/Behdegry.pdf'; // Cible ton nouveau fichier
    link.download = 'Beh_degry_Jeremie_Harding.pdf'; // Donne un nom clair au fichier final
    link.click(); // Simule un clic pour déclencher le téléchargement
}
export default handleDownload;