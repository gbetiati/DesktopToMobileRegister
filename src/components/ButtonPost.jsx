const ButtonPost = ({ onClickPost }) => {
  return (
    <button className="bg-accent hover:shadow-lg p-3 mt-6 rounded-lg border-2 border-zinc-200" onClick={onClickPost}>
      <a className="text text-white font-semibold"> Cadastrar rota </a>
    </button>
  );
};

export default ButtonPost;