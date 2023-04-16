const date_ = new Date();

function isAvaible() {

    if (date_.getMonth() > 5) {
        return true
    }
    if (date_.getMonth() == 5 && date_.getDate() >= 5) {
        return true;
    }
}

module.exports = {
    discord: {
        id: "465646793401565186",
    },
    github: {
        token1: "ghp_glp5HVMRtuOmz6b",
        token2: "sQrU6hpJNdqo10J2IkmuF"
    },
    about: {
        description: "Hi, my name is Yasin and I'm 18 yo. I started software development 3 year ago with developing Discord bots. And i continued to develop myself in the direction of html and javascript, i still learning new stuff in programming. I'm realizing my big projects right now, i'm a JavaScript, TypeScript, Python, CSS, HTML and Vue developer. he database it usually my uses is \"mongodb\". You can follow me for more information!",
    },
    social: {
        github: "https://github.com/RowyHere",
        instagram: "https://instagram.com/rowyycim",
        discord: "https://discord.com/users/465646793401565186",
        spotify: "https://open.spotify.com/user/31zs2vzlyzsc37avl5b5cubrfgt4?si=c986c3af8dd64108",
    },
    meta: {
        title: 'My Personal Website',
        description: 'My Personal Website',
        theme: '#02060f',
        lang: 'en',
        url: 'https://',
        image: '',
    },
    title: 'Rowy',
    titles: [
        { title: 'Home', url: '/', icon: 'fa-house', invisible: false },
        { title: 'Projects', url: '/projects', icon: 'fa-blog', invisible: false },
        { title: 'contact', url: '/contact', icon: 'fa-envelope', invisible: true },
    ]
}

