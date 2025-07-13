import { useEffect, useState } from 'react';
import { Pause, Play } from "lucide-react";
import { motion } from "framer-motion";


function Spotify() {
  const [topTracks, setTopTracks] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [followedArtists, setFollowedArtists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://cactrobackend13july.onrender.com/spotify/top-tracks')
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        setTopTracks(data || [])
      } )
      .catch(err => setError('Failed to load top tracks'));
    
      fetch("https://cactrobackend13july.onrender.com/spotify/followed-artists")
      .then(res => res.json())
      .then(data => setFollowedArtists(data));

    fetch('https://cactrobackend13july.onrender.com/spotify/now-playing')
      .then(res => res.json())
      .then(data => setNowPlaying(data))
      .catch(err => setError('Failed to load now playing song'));
  }, []);

  const handlePlay = (id) => {
    fetch(`https://cactrobackend13july.onrender.com/spotify/play/${id}`, { method: 'PUT' })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        alert('Started playing!')})
      .catch(err =>  alert('Failed to play. Make sure you have a Spotify Premium account and an active device.'));
  };

  const handlePause = () => {
    fetch('https://cactrobackend13july.onrender.com/spotify/pause', { method: 'PUT' })
      .then(res => res.json())
      .then(data => alert('Playback paused'))
      .catch(err =>  alert('Failed to pause. Spotify Premium is required.'));
  };

  return (
  <section id="spotify" className="px-6 pb-10 bg-[#121212] text-white">
    <p className="text-sm text-yellow-400 italic mt-2">
    * Playback controls (Play/Pause) require a Spotify Premium account and an active Spotify device.
  </p>
    <div className='pt-10 pb-5 flex justify-center items-center gap-2'>
        <img src="/spotify.png" alt="spotify" />
    <h1 className="font-bold sm:text-4xl text-3xl text-center text-green-500">Spotify Insights</h1>
    </div>


    <section className='mt-2'>
      {nowPlaying?.is_playing && (<>
        <h2 className="text-2xl font-semibold mb-2 text-green-400">Now Playing:</h2>
        <div className="mb-8 flex justify-between items-center p-4 border border-[#2a2a2a] bg-[#1e1e1e] rounded-xl shadow">
          <div>
            <p className="text-lg text-white">{nowPlaying.name}</p>
            <p className="text-sm text-gray-400">{nowPlaying.artist}</p>
          </div>
          <motion.button
            onClick={handlePause}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white text-white p-3 rounded-full text-sm"
          >
            <Pause size={20} color='black' />
          </motion.button>
        </div>
      </>)}

      <div className='flex gap-6 mt-4 flex-col lg:flex-row'>
        <div className="mb-4 flex justify-between items-center flex-col gap-4">
          <h2 className="text-2xl font-semibold text-green-400">Top 10 Tracks</h2>
          <ul className="space-y-4">
            {topTracks.map((track, index) => (
              <li
                key={track.trackId}
                className="p-4 rounded-xl border border-[#2a2a2a] bg-[#1e1e1e] shadow-md flex justify-between items-center gap-1"
              >
                <div>
                  <p className="font-semibold text-white">{track.name}</p>
                  <p className="text-sm text-gray-400">{track.artist}</p>
                </div>
                <motion.button
                  onClick={() => handlePlay(track.trackId)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 text-black p-2 rounded-full flex items-center gap-2 text-sm"
                >
                  <Play size={16} />
                </motion.button>
              </li>
            ))}
          </ul>
        </div>

        {followedArtists.length > 0 && (
          <div className="mt-0">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Followed Artists</h2>
            <ul className="space-y-2">
              {followedArtists.map((artist, index) => (
                <li key={index}>
                  <a
                    href={artist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline text-base"
                  >
                    {artist.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  </section>
);

}

export default Spotify;
