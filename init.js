const mongoose=require("mongoose");
const Chat = require("./models/chat");


main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats=[
    {
        from:"Alice",
        to:"Bob",
        msg:"Hello",
        created_at:new Date(),
    },
    {
        from:"Bob",
        to:"Alice",
        msg:"Hi",
        created_at:new Date(),
    },
    {
        from:"Alice",
        to:"Bob",
        msg:"How are you?",
        created_at:new Date(),
    },
    {
        from:"Bob",
        to:"Alice",
        msg:"I am fine",
        created_at:new Date(),
    },
    {
        from:"Alice",
        to:"Bob",
        msg:"Good to hear",
        created_at:new Date(),
    },
    {
        from:"Bob",
        to:"Alice",
        msg:"How about you?",
        created_at:new Date(),
    },
    {
        from:"Alice",
        to:"Bob",
        msg:"I am good too",
        created_at:new Date(),
    },
    {
        from:"Bob",
        to:"Alice",
        msg:"Great",
        created_at:new Date(),
    },
    {
        from:"Alice",
        to:"Bob",
        msg:"Bye",
        created_at:new Date(),
    },
    {
        from:"Bob",
        to:"Alice",
        msg:"Bye",
        created_at:new Date(),
    },
]

Chat.insertMany(allChats).then((chats)=>{
    console.log(chats);
}).catch((err)=>{
    console.log(err);
});
