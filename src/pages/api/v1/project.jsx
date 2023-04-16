export default async(req, res) => { 
    const project = [
        {
            "name": "Ringoffires.com",
            "link": "https://cdn.discordapp.com/attachments/710864623242444901/1084858988484636702/image.png",
            "description": "Ring Of Fire event coordination firm, a subsidiary of PCIFIC Esports.",
            "html_url": "https://ringoffires.com"
        },
        {
            "name": "Yengeç Restaurant",
            "link": "https://media.discordapp.net/attachments/710864623242444901/1084639404313804800/image.png",
            "description": "A great fish restaurant in Izmir, one of Turkey's favorite cities.",
            "html_url": "https://yengecrestaurant.com.tr"
        },
        {
            "name": "ValoCord",
            "link": "https://user-images.githubusercontent.com/64329332/194653080-546007e4-23ff-4b9b-a453-8df072e46a66.png",
            "description": "Valorant Discord RPC Program for Windows",
            "html_url": "https://github.com/Aronshire/ValoCord"
        }
    ]
    res.status(200).json(project)
}
