import SongCard from "./components/SongCard";
import Banner from "./components/Banner";

const Dashboard = () => {
  return (
    <>
      <div className="header">
        <h1 className="soundify">Soundify</h1>
      </div>
      <Banner url={"https://storage.googleapis.com/pr-newsroom-wp/1/2020/12/Spotify_Edit_Playlist_Covers_PR-Header_1920%E2%80%8A%C3%97%E2%80%8A733_A-1-1.gif"} />
      <h2 className="section">Recently played</h2>
      <div className="songs" style={{ display: "flex" }}>
        <SongCard />
      </div>
    </>
  );
};

export default Dashboard;
