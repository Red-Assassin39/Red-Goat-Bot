module.exports = {
	config: {
			name: "🗿",
			version: "1.0",
			author: "Rifad",
			countDown: 5,
			role: 0,
			shortDescription: "msg according to emoji",
			longDescription: "msg according to emoji",
			category: "fun",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "🗿") return message.reply("𝐏𝐚𝐥𝐚 𝐛𝐡𝐚𝐢 𝐩𝐚𝐥𝐚, 𝐬𝐢𝐠𝐦𝐚 𝐜𝐡𝐨𝐥𝐞 𝐞𝐬𝐡𝐞𝐜𝐡𝐞...😭");
}
}