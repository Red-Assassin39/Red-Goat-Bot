module.exports = {
	config: {
			name: "bot",
			version: "1.0",
			author: "Rifad",
			countDown: 5,
			role: 0,
			shortDescription: "goi bot lite",
			longDescription: "nothing",
			category: "fun",
	},
	onStart: async function ({  }) { },
	 onChat: async function ({ api, event, args, Threads, userData }) {
	event,
	message,
	getLang

	var { threadID, messageID, senderID } = event;
	const moment = require("moment-timezone");
	const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
	var idgr = event.threadID;
	var id = event.senderID;
  
	var Messages = ["আহ শুনা আমার কেমন আছো তুমি? 😇", "কি গো সোনা আমাকে ডাকছো কেনো?", " আহ শোনা আমার আমাকে এতো ডেকোনো, আমি ব্যস্ত🥱", "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি?", "রিফাদ ছাড়া কেউ ডাকবি না আমকে", "আমাকে এতো না ডেকে রিফাদ বস কে একটা গফ দে 🙄"];
	  var rand = Messages[Math.floor(Math.random() * Messages.length)]

}
};

module.exports = {
	config: {
			name: "rndmMention",
			aliases: ['@MD Rifad Hossain'],
			version: "1.0",
			author: "Rifad",
			countDown: 5,
			role: 0,
			shortDescription: "",
			longDescription: "nothing",
			category: "fun",
	},
	onStart: async function ({  }) { },
	 onChat: async function ({ api, event, args, Threads, userData }) {
	event,
	message,
	getLang

	var { threadID, messageID, senderID } = event;
	const moment = require("moment-timezone");
	const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
	var idgr = event.threadID;
	var id = event.senderID;
  
	var Messages = ["Mention দিস না রিফাদ বস এর মন ভালো নেই আজকে-!💔🥀", "Mention দিলে থাপ্পড় মেরে চেহারার কালার change কইরা লামু 😾😾🔨", "এতো মেনশন নাহ দিয়া সিংগেল রিফাদ রে একটা গফ দে 😒 😏", "Mention দিস না বাঁলপাঁক্না রিফাদ প্রচুর বিজি 🥵🥀🤐"];
	  var rand = Messages[Math.floor(Math.random() * Messages.length)]

}
};
