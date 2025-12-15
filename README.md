import 'dotenv/config';
import{REST , Routes , SlashCommanBuilder } from 'discord.js'

//拿到資料
const Client_ID = process.env.DISCORD_CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const TOKEN = process.env.DISCORD_BOT_TOKEN;

//指令
const commands = [
    new SlashCommanBuilder()
     .setName('ping')
     .setDescription('test'),
    new SlashCommanBuilder()
     .setName('eat')
     .setDescription('隨機推薦好料的')
].map(cmd => cmd.toJSON());

// 
const rest = new REST({version:'10'}).setToken(TOKEN);

try{
    console.log('start');
    await rest.put(
        Routes.applicationGuildCommands(Client_ID, GUILD_ID),
        {body : commands}
    );
    console.log('註冊完成');
} catch(err) {
    console.err(err);
}
