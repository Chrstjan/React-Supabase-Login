import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export const SongsPage = () => {
  const [songs, setSongs] = useState([]);
  const getSongData = async () => {
    const { data, error } = await supabase.from("songs").select("*");
    console.log(data);
    setSongs(data);

    if (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSongData();
  }, []);

  return (
    <>
      <h2>Songs</h2>
      {songs?.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        );
      })}
    </>
  );
};
