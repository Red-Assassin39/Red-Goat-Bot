module.exports = {
    config: {
      name: "🙂",
      aliases: ["🙂"],
      author: "Rifad",
      version: 1.0,
      role: 0,
      shortDescription: {
        en: "emoji diben na pls."
      },
      longDescription: {
        en: "Responds with a sundor vasha."
      },
      category: "fun",
      guide: {
        en: "use emoji"
      }
    },
    event: null,
    onStart: async function ({ api, event }) {
      api.sendMessage("prefix dile latthi khabi!", event.threadID);
    },
    onChat: async function ({ event, message }) {
      if (event.body && (event.body.toLowerCase() === "🙂")) {
        message.reply("𝐒𝐞𝐧𝐭𝐢 𝐤𝐡𝐚𝐢𝐥𝐞 𝐥𝐚𝐭𝐭𝐡𝐢 𝐦𝐚𝐫𝐛𝐨...😑");
      }
    }
  };
