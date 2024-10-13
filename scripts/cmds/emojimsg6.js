module.exports = {
	config: {
			name: "🌚",
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
	if (event.body && event.body.toLowerCase() == "🌚" || event.body && event.body.toLowerCase() == "👽") return message.reply("𝐊𝐢𝐫𝐞 𝐜𝐡𝐚𝐧𝐝𝐮 𝐭𝐨𝐫 𝐤𝐚𝐥𝐚 𝐦𝐨𝐧𝐞 𝐤𝐢 𝐤𝐮𝐟𝐚 𝐜𝐡𝐢𝐧𝐭𝐚 𝐤𝐨𝐫𝐢𝐬𝐡? 👽");
}
}