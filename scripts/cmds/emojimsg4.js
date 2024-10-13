module.exports = {
	config: {
			name: "🐸",
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
	if (event.body && event.body.toLowerCase() == "🐸") return message.reply("𝐒𝐨𝐛𝐚𝐢 𝐝𝐞𝐤𝐡 𝐞𝐢𝐭𝐚 𝐞𝐤𝐭𝐚 𝐛𝐨𝐥𝐨𝐝...🐸");
}
}