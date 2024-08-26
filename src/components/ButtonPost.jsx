const ButtonPost = ({ onClickPost }) => {
  return (
    <button className="bg-accent hover:shadow-lg p-3 mt-6 rounded-md" onClick={onClickPost}>
      <a className="text text-white font-semibold"> Cadastrar rota </a>
    </button>
  );
};

export default ButtonPost;