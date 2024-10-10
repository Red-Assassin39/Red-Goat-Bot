module.exports.config = {
    name: "murgi",
    version: "1.2.0",
    role: 2,
    author: "Arohi & Rifad",
    description: "Don't need to describe this, you know better :) ",
    category: "nsfw",
    guide: "{pn} @mention",
    coolDown: 10
}
module.exports.onStart = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("যারে এগুলো বলতে চাও তাকে মেনশন করো 🐱", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("VALO HOYE JAO 😊");
setTimeout(() => {a({body:"সালা তুই একটা ঘোড়ার ডিম 🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Sala tui Dinasour cho*a 😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "তোর পাছায় লাত্থি মারবো 🐰" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Oi Oi Oi emne ki dekhis 💔!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Tor pachay time bomb lagai dibo..🙄" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "depression er maire bap 🤬 " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "tor sahos kmne hoy boss ke gali dewar🤬" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "বান্দির বাচ্চা 🫦" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Amar boss ke salam de 😑" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "tor pachai injection dibo  💉।" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "অনলাইনে গালি বাজ হয়ে গেছো 🤬।" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Gali dile thappor dibo  ✋" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: "Tui toh darun gadha re 😁" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("~ গালি কি আরো খাবি বলদের বাচ্চা 🤖")} , 39000);
setTimeout(() => {a({body: "Tor gola Khule pocket e rekhe dibo bolod।" + " " + name, mentions: arraytag})}, 42000);
setTimeout(() => {a({body: "সালা তুই একটা ঘোড়ার ডিম 🥰.." + " " + name, mentions: arraytag})}, 48000);
setTimeout(() => {a({body: "tui pagol murgi" + " " + name, mentions: arraytag})}, 51000);
setTimeout(() => {a({body: "Tui pagol hati 💔!" + " " + name, mentions: arraytag})}, 54000);
setTimeout(() => {a({body: "Panda kothakar ... " + " " + name, mentions: arraytag})}, 57000);
setTimeout(() => {a({body: "depression থেকেও তোরে ভালোবেসে গালি দেই 🥰 " + " " + name, mentions: arraytag})}, 59400);
setTimeout(() => {a({body: " বাস্ট্রাড এর বাচ্ছা বস্তির পোলা " + " " + name, mentions: arraytag})}, 63000);
setTimeout(() => {a({body: "~ Pagol er ghorer dim🤖" + " " + name, mentions: arraytag})}, 66000);
setTimeout(() => {a({body: "Welcome Hala Bolod 🥰।" + " " + name, mentions: arraytag})},69000);
setTimeout(() => {a({body: "থু তোর নোংরা চেহারায়  🤮।" + " " + name, mentions: arraytag})}, 72000);
setTimeout(() => {a({body: "Gay gay gayyyyyyyy  ✋" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "বস্তিরন্দালাল এর বাচ্ছা বস্তির পোলা 🤣" + " " + name, mentions: arraytag})},81000);
setTimeout(() => {a({body: " বাস্ট্রাড এর বাচ্চা বস্তিতে জন্ম তোর 🫵 " + " " + name, mentions: arraytag})}, 87000);
setTimeout(() => {a("~ আমার পুত। জা ভাগ🤖")} , 93000);
setTimeout(() => {a({body: "ekhono amr smne theke jashni 🫦।" + " " + name, mentions: arraytag})}, 99000);
setTimeout(() => {a({body: "hush hush ja ja ja..." + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a({body: "tor ma toh tore dustbin e kurai paiche 🤣" + " " + name, mentions: arraytag})}, 111000);
setTimeout(() => {a({body: "idur er bish khawai marbo tore!" + " " + name, mentions: arraytag})}, 114000);
setTimeout(() => {a({body: "Valo manusher pet theke pagoler jonmo..😂" + " " + name, mentions: arraytag})}, 120000);
setTimeout(() => {a({body: "Tor jibon thappor amr kheyei sesh" + " " + name, mentions: arraytag})}, 126000);
setTimeout(() => {a({body: "Maira ekdom bhoot banai felbo 👻" + " " + name, mentions: arraytag})}, 132000);
setTimeout(() => {a({body: "amr tore gali dite valo lage..😁" + " " + name, mentions: arraytag})}, 138000);
setTimeout(() => {a({body: "tui eto bolod keno, dekhlei doya lage pagol...😹" + " " + name, mentions: arraytag})},144000);
}
