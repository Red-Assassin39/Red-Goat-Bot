module.exports = {
    config: {
      name: "goiadmin",
      aurthor:"?/zed",// Convert By Goatbot Zed
       role: 0,
      shortDescription: " ",
      longDescription: "",
      category: "love",
      guide: "{pn}"
    },
      onStart: async function ({ api, event }) {
      if (event.senderID !== "100080803245939") {
        var aid = ["100080803245939"];
        for (const id of aid) {
        if ( Object.keys(event.mentions) == id) {
          var msg = ["Mention দিস না, রিফাদ বস এর মন ভালো নেই আজকে-!💔🥀", "Mention দিলে থাপ্পড় মেরে চেহারার কালার change কইরা লামু 😾😾🔨", "এতো মেনশন নাহ দিয়া সিংগেল রিফাদ রে একটা গফ দে 😒 😏","Do you like my admin thats why your tagging him? 😏","Mention দিস না বাঁলপাঁক্না রিফাদ প্রচুর বিজি 🥵🥀🤐"];
          api.setMessageReaction("😍", event.messageID, (err) => {}, true);
          return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
        }
        }}
    },
      };