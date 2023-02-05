 const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require("./config.json");

let name = "amir khatar";
client.once('ready', () => {
	console.log(`${client.user.tag} ONLINE! `);
});


client.on("ready", () => {
	function YousamPower() {
	  let hungry = ["Allise Family"]
	  let Power = Math.floor(Math.random() * hungry.length);
	  client.user.setActivity(hungry[Power], {type: "PLAYING", url: "https://discord.com/api/oauth2/authorize?client_id=1020548134708973578&permissions=8&scope=bot"});
	}; setInterval(YousamPower, 5000)
  });


client.on("message", message => {
// cap //
if (message.content.startsWith(`${prefix}cap`)){
	message.delete();
	message.channel.send("@everyone");
	const capEmbed = new Discord.MessageEmbed()
	.setColor("000000")
	.setTimestamp()
	.setTitle("درود به همه همراهان گرامی ")
	.setAuthor("📢 Capture Announce 📢")
	.setFooter("Allise Family", "https://cdn.discordapp.com/attachments/1003572501772771368/1070707914718859344/image.png")
	.setImage("https://media.discordapp.net/attachments/1003572501772771368/1003572584262148126/grand_theft_auto_5_trevor_flames_3840.0.jpg")
	.setThumbnail("https://cdn.discordapp.com/attachments/1003572501772771368/1070707914718859344/image.png")
	.addField('Emshab Capture Hast Hatman Biaid Merc ✅' ,'Hozor Gheyre Movajah =❌ Strike ❌' , true)
	message.channel.send(capEmbed)
}
// Ticket //
if (message.content.startsWith(`${prefix}ticket`)){
	message.delete();
	message.channel.send("@everyone");
	const capEmbed = new Discord.MessageEmbed()
	.setColor("000000")
	.setTimestamp()
	.setAuthor("Allise Family")
	.setFooter("Allise Family", "https://cdn.discordapp.com/attachments/1003572501772771368/1070707914718859344/image.png")
	.setImage("https://cdn.discordapp.com/attachments/1003572501772771368/1070707995522121768/standard.gif")
	.setThumbnail("https://cdn.discordapp.com/attachments/1003572501772771368/1070707914718859344/image.png")
	.addField('Ba Salam Va Dorod. Lotfan Montazer Bashid !! ',' Ta Lahazati Digar High Rank Ha Shoma ro Tag Mikonan !! ', true)
	message.channel.send(capEmbed)
}
// ozv // 
if (message.content.startsWith(`${prefix}ozv`)){
	message.delete();
	message.channel.send("@everyone");
	const capEmbed = new Discord.MessageEmbed()
	.setColor("000000")
	.setTimestamp()
	.setAuthor("🏴‍☠️ OzvGiri Allise Family 🏴‍☠️")
	.setFooter("Allise Family", "https://cdn.discordapp.com/attachments/1003572501772771368/1070707914718859344/image.png")
	.setImage("https://cdn.discordapp.com/attachments/1003572501772771368/1070707995522121768/standard.gif")
	.setThumbnail("https://cdn.discordapp.com/attachments/1003572501772771368/1070707914718859344/image.png")
	.addField('Family 💀 Allise 💀 Ozv Faal Mipazirad ',' Jahat Ozviat Ticket Baz Konid ', true)
	message.channel.send(capEmbed)
}
// help //
if (message.content.startsWith(`${prefix}help`)){
	message.delete();
	const capEmbed = new Discord.MessageEmbed()
	.setColor("000000")
	.setTimestamp()
	.setFooter("https://cdn.discordapp.com/attachments/1003572501772771368/1070707914718859344/image.png")
	.addFields(
		{ name: '^cap', value: 'Baraye Announce Capture' },
		{ name: '^say', value: 'Baraye Neveshtan Payam' },
		{ name: '^ticket', value: 'Pasokh Be ticket' },
		{ name: '^ozv', value: 'Baraye Ozv Giri' },

	)
	message.channel.send(capEmbed)
}
// say //
if (message.content.startsWith(`${prefix}say`)){
	message.delete();
	const args = message.content.slice(4).split("");
	const saymessage = args.join("");
	message.channel.send(saymessage);
}

});

client.login('MTA3MDcwMDU1Mzk3OTU3NjMzMQ.GqQn_O.4GA6Edzw97d0YQ4Arycl2FzpcvtDABUjbZkQFo');