const { cmd, commands } = require('../inconnuboy');
const config = require('../config');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "source"],
    desc: "Get bot source code and repository link",
    category: "main",
    react: "📁",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        let repoText = `*╭────⬡ ${config.BOT_NAME} ⬡────⭓*
*├▢ 📂 Repository:* 𝐈𝐁𝐑𝐀𝐇𝐈𝐌 𝐌𝐃 𝐁𝐎𝐓 
*├▢ 👨‍💻 Owner:* ${config.OWNER_NAME}
*├▢ 🏷️ Version:* 1.0
*╰─────────────────⭓*

*╭────⬡ LINK ⬡────*
*├▢ 🌐 Web:* https://ibrahemtech.gt.tc//
*╰────────────────*

> *© 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝗜𝗯𝗿𝗮𝗵𝗶𝗺 —*`;

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL || 'https://i.postimg.cc/brn9qXD1/bot-logo.png' },
            caption: repoText,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363408911326244@newsletter',
                    newsletterName: config.BOT_NAME,
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});

