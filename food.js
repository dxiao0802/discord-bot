import 'dotenv/config';
import { Client, GatewayIntentBits, Events } from 'discord.js';

const client = new Client({
    intents:[
      GatewayIntentBits.Guilds,
     GatewayIntentBits.GuildMembers,
    ],
});

client.once(Events.ClientReady, (c) => {
  console.log('work✅'+ c.user.tag);
});


client.on(Events.InteractionCreate,async(interaction)=>{
  if(!interaction.isChatInputCommand())return;

// /ping
  if (interaction.commandName ==='ping'){
    await interaction.reply('ckc小雞雞');
    return;
  }

// / eat
  if (interaction.commandName ==='eat'){
    await interaction.reply('今天吃大便');
    return;
    }
// /kick
if (interaction.commandName === 'kick') {
    try {
        // 1. 先主動獲取所有成員，確保名單是最新的
        const allMembers = await interaction.guild.members.fetch();

        // 2. 過濾：不是機器人、不是發送指令的人、且機器人有權限踢的人
        const targets = allMembers.filter(member => 
            !member.user.bot && 
            member.id !== interaction.user.id &&
            member.kickable // 自動檢查機器人是否踢得動這個人（權限與層級）
        );

        if (targets.size === 0) {
            await interaction.reply('目前沒有我可以踢的人（可能大家權限都比我高，或沒人了）。');
            return;
        }

        // 3. 隨機選一個
        const randomMember = targets.random();

        await randomMember.kick('命運的安排');
        await interaction.reply(`🥾 再見了！**${randomMember.user.tag}** 被隨機踢出了伺服器！`);

    } catch (err) {
        console.error(err);
        await interaction.reply('執行踢人時發生錯誤，請檢查我的權限。');
    }
    return;
}

const randomMumber = members.random();
try{
  await randomMumber.kick('要來囉');
  await interaction.reply(`${randomMumber.user.tag}被踢了`);
}catch(err){
  console.error(err);
  await interaction.reply('fail');
}
return;
 });
client.login(process.env.DISCORD_BOT_TOKEN);
