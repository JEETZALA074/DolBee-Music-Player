
Copy

const mongoose = require("mongoose");
require("dotenv/config");
 
const SongSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    songUrl: { type: String, required: true },
    album: { type: String },
    artist: { type: String, required: true },
    language: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);
 
const Song = mongoose.model("song", SongSchema);
 
const songs = [
  {
    name: "Song One",
    imgUrl: "https://picsum.photos/seed/song1/300/300",
    songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    album: "SoundHelix Vol 1",
    artist: "SoundHelix",
    language: "English",
    category: "Electronic",
  },
  {
    name: "Song Two",
    imgUrl: "https://picsum.photos/seed/song2/300/300",
    songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    album: "SoundHelix Vol 1",
    artist: "SoundHelix",
    language: "English",
    category: "Ambient",
  },
  {
    name: "Song Three",
    imgUrl: "https://picsum.photos/seed/song3/300/300",
    songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    album: "SoundHelix Vol 1",
    artist: "SoundHelix",
    language: "English",
    category: "Rock",
  },
  {
    name: "Song Four",
    imgUrl: "https://picsum.photos/seed/song4/300/300",
    songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    album: "SoundHelix Vol 2",
    artist: "SoundHelix",
    language: "English",
    category: "Jazz",
  },
  {
    name: "Song Five",
    imgUrl: "https://picsum.photos/seed/song5/300/300",
    songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    album: "SoundHelix Vol 2",
    artist: "SoundHelix",
    language: "English",
    category: "Pop",
  },
];
 
async function seed() {
  try {
    await mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
    console.log("Connected to MongoDB");
 
    await Song.deleteMany({});
    console.log("Cleared existing songs");
 
    await Song.insertMany(songs);
    console.log(`✅ Inserted ${songs.length} songs successfully!`);
 
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding:", err);
    mongoose.connection.close();
  }
}
 
seed();