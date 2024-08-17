import self from "../assets/img/self.png"



export let colors = ["rgb(102, 126, 234)", "rgb(255, 0, 255)"];

export let singlePage = false;



export const info = {
    firstName: "Vaibhav",
    lastName: "Baria",
    initials: "Vb",
    position: "a Software Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    secondColor: colors[1],
    miniBio: [
        {
            emoji: '💻',
            text: 'Tech enthusiast'
        },
        {
            emoji: '🌎',
            text: 'Based in Toronto, Canada'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer at Community of Guardians"
        },
       
        {
            emoji: '🛠️',
            text: 'Passionate about development and always learning'
        },
        {
            emoji: '🎮',
            text: 'Avid gamer, Currently learing to build games too!'
        },
        {
            emoji: "📧",
            text: "vbaria98@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/BlurryFarce",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/vaibhavbaria/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: `
    Hello! I'm Vaibhav, a dedicated and passionate Software Developer with a strong background in Full Stack Development. 
    I hold a Bachelor's degree in Computer Engineering and have further specialized through programs in Web Development and Software Testing.`,
    bio2: " My expertise lies in building seamless, user-friendly applications, with a keen interest in game development and technology trends. Whether it's creating interactive web apps, optimizing backend systems, or diving into game jams, I'm always eager to push the boundaries of what's possible.",
    hobbies: [
        {
            label: 'game development',
            emoji: '🎲'
        },
        {
            label: 'working on side projects',
            emoji: '💡'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'watching anime',
            emoji: '🎥'
        },
        {
            label: 'exploring new tech',
            emoji: '💻'
        }
    ],
}