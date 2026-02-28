import hwCisco from '../assets/certif/Hardware_Basics_cisco.jpg';
import cyberCisco from '../assets/certif/introduction_to_Cybersecurity_cisco.jpg';
import openAlgo from '../assets/certif/Open-algo.jpg';
import openJs from '../assets/certif/Open-js.jpg';
import devWeb from '../assets/certif/certifica-dev-web.jpg';
import dockerCert from '../assets/certif/certifica_docker.jpeg';

const certificationsList = [
    {
        id: 'cisco-hw',
        title: 'Hardware Basics',
        issuer: 'Cisco',
        image: hwCisco,
        color: 'from-[#4468b8] to-blue-900'
    },
    {
        id: 'cisco-cyber',
        title: 'Cybersecurity',
        issuer: 'Cisco',
        image: cyberCisco,
        color: 'from-[#e84c3d] to-red-900'
    },
    {
        id: 'dev-web',
        title: 'Développement Web',
        issuer: 'Bootcamp',
        image: devWeb,
        color: 'from-[#9b59b6] to-purple-900'
    },
    {
        id: 'open-js',
        title: 'JavaScript',
        issuer: 'OpenClassrooms',
        image: openJs,
        color: 'from-[#f1c40f] to-yellow-900'
    },
    {
        id: 'open-algo',
        title: 'Algorithmique',
        issuer: 'OpenClassrooms',
        image: openAlgo,
        color: 'from-[#2ecc71] to-green-900'
    },

    {
        id: 'docker',
        title: 'Docker',
        issuer: 'DevOps',
        image: dockerCert,
        color: 'from-[#00cec9] to-cyan-900'
    }
];

export default certificationsList;