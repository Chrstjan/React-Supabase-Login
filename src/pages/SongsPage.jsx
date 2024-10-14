import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { CreateForm } from "../components/CreateForm/CreateForm";

export const SongsPage = ({ user }) => {
  const [songs, setSongs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

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
      <button onClick={() => handleModal()}>Create song</button>
      {isModalOpen ? <CreateForm userId={user} /> : null}
    </>
  );
};
