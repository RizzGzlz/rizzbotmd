//
let { MessageType } = (await import('@adiwajshing/baileys')).default
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Reply stiker nya!'
      stiker = await sticker(img, false, '𝙍𝙞𝙯𝙯-𝘽𝙤𝙩', 'By 𝘙𝘪𝘻𝘻 𝘑𝘪𝘨𝘶𝘮𝘪𝘯𝘢')
    } else if (args[0]) stiker = await sticker(false, args[0],  '𝙍𝙞𝙯𝙯-𝘽𝙤𝙩', 'By 𝘙𝘪𝘻𝘻 𝘑𝘪𝘨𝘶𝘮𝘪𝘯𝘢')
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else throw 'Conversion failed'
  }
}
handler.help = ['stiker']
handler.tags = ['sticker']
handler.command = /^stiker$/i

export default handler