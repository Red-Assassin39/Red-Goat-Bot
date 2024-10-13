module.exports = {
	config: {
			name: "🤣",
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
	if (event.body && event.body.toLowerCase() == "🤣" || event.body && event.body.toLowerCase() == "😂" || event.body && event.body.toLowerCase() == "😹") return message.reply("𝐁𝐞𝐬𝐡𝐢 𝐇𝐚𝐬𝐡𝐥𝐞 𝐝𝐚𝐭 𝐟𝐚𝐥𝐚𝐢 𝐝𝐢𝐛𝐨 𝐠𝐡𝐮𝐬𝐢 𝐝𝐢𝐲𝐞...😒");
}
}
