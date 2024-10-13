module.exports = {
	config: {
			name: "🐱",
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
	if (event.body && event.body.toLowerCase() == "🐱") return message.reply("𝐨𝐡 𝐦𝐚𝐢 𝐠𝐨𝐭𝐭𝐨, 𝐭𝐮𝐦𝐢 𝐚𝐦𝐚𝐫 𝐦𝐨𝐭𝐨 𝐤𝐨𝐭𝐭𝐨 𝐜𝐮𝐭𝐞 𝐁𝐢𝐫𝐚𝐥 😻");
}
}