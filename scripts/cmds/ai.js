const axios = require('axios');
const UPoLPrefix = [
  '-ai',
  'ai',
  '/ai',
  'bot',
  'ask'
]; 

  module.exports = {
  config: {
    name: 'ai',
    version: '1.2.1',
    role: 0,
    category: 'AI',
    author: 'ncs pro',
    shortDescription: '',
    longDescription: '',
  },
  
  onStart: async function () {},
  onChat: async function ({ message, event, args, api, threadID, messageID }) {
      
      const ahprefix = UPoLPrefix.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!ahprefix) {
        return; 
      } 
      
     const upol = event.body.substring(ahprefix.length).trim();
   if (!upol) {
        await message.reply('𝐄𝐧𝐭𝐞𝐫 𝐚 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧..? 🥹');
        return;
      }
      
      const apply = ['𝐀𝐰𝐰𝐰🥹, 𝐦𝐚𝐲𝐛𝐞 𝐲𝐨𝐮 𝐧𝐞𝐞𝐝 𝐦𝐲 𝐡𝐞𝐥𝐩', '𝐇𝐨𝐰 𝐜𝐚𝐧 𝐢 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮?', '𝐇𝐨𝐰 𝐜𝐚𝐧 𝐢 𝐚𝐬𝐬𝐢𝐬𝐭 𝐲𝐨𝐮 𝐭𝐨𝐝𝐚𝐲?', '𝐇𝐨𝐰 𝐜𝐚𝐧 𝐢 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮?🤔'];
      
     const randomapply = apply[Math.floor(Math.random() * apply.length)];

     
      if (args[0] === 'hi') {
          message.reply(`${randomapply}`);
          return;
      }
      
    const encodedPrompt = encodeURIComponent(args.join(" "));

   await message.reply('𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭 𝐘𝐨𝐮𝐫 𝐀𝐧𝐬𝐰𝐞𝐫.✅');
  
    const response = await axios.get(`https://sandipbaruwal.onrender.com/gemini?prompt=${encodedPrompt}`);
 
     const UPoL = response.data.answer; 

      const upolres = `${UPoL}`;
      
        message.reply(upolres);
  }
};
