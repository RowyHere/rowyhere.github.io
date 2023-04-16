export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
            "name": "Bootstrap",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
        },
        {
            "name": "CSS",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
        {
            "name": "Javascript",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
            "name": "Node.js",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        },
        {
            "name": "C#",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
        },
        {
            "name": "Mongo DB",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        },
        {
            "name": "PHP",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
        },
        {
            "name": "TailwindCSS",
            "src": "https://ph-files.imgix.net/2e26f07f-e5e5-411e-ba1e-e92c4083bd92.png?auto=format&fit=crop",
        },
        {
            "name": "Next.js",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        },
        {
            "name": "MySQL",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
        },
        {
            "name": "Express",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        },
        {
            "name": "React",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
            "name": "Bulma",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/bulma/bulma-plain.svg",
        },
        {
            "name": "Git",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        },
        {
            "name": "Photoshop CC",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg",
        },
        {
            "name": "Github",
            "src": "https://i.pinimg.com/736x/b1/5e/ed/b15eedbdafbbdbca3249e3942f4faf3b.jpg",
        },

        

    ]
    res.status(200).json(techs)
}