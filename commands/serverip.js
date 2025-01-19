const { SlashCommandBuilder } = require('discord.js');

const addressEmbed = {
	color: 0x3AE474,
	title: 'PLAY.VOLTACCEPT.COM',
	description: 'Join us today and become part of a vibrant and friendly community. Whether you\'re a seasoned builder, an ambitious explorer, or a fierce competitor, VoltaMC has something for everyone. Gear up, log in, and let the adventures begin!',
	timestamp: new Date().toISOString(),
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('server-ip')
    .setDescription('Replies With VoltaMC\'s Server IP'),
  async execute(interaction) {
    await interaction.reply({embeds: [addressEmbed]});
  },
};

