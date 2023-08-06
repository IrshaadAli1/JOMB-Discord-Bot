const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pipebomb')
		.setDescription('sends a pipebomb to someone's mailbox!'),
	async execute(interaction) {
		await interaction.reply('Heheh! THINK FAST CHUCKLENUTS!');
	},
};
