import { supabase } from "../../../supabaseClient";

export const CreateForm = ({ userId }) => {
  const handleCreateSong = async (e) => {
    e.preventDefault();
    console.log(e);
    const songTitle = e.target.songTitle.value;
    const songContent = e.target.content.value;
    const user = userId.id; //session.user.identities[0].identity_id
    console.log(user);
    const { data, error } = await supabase
      .from("songs")
      .insert({
        title: songTitle,
        content: songContent,
        artist_id: "f3cc409a-655a-4739-ae58-8416ddda9fe8",
        user_id: user,
      })
      .select();

    if (error) {
      console.error(`Error in creating song: ${error.message}`);
    } else {
      console.log(`Song created: ${data}`);
    }
  };
  return (
    <>
      <h2>Create new song</h2>
      <form onSubmit={(e) => handleCreateSong(e)}>
        <label htmlFor="songTitle">Enter song name</label>
        <input type="text" name="songTitle" placeholder="Song title" required />
        <label htmlFor="content">Song content</label>
        <textarea name="content" required></textarea>

        <input type="submit" value="Create song" />
      </form>
    </>
  );
};
