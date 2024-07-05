const ButtonPost = ({ onClickPost }) => {
  return (
    <button className="bg-sky-800 p-2 mt-6 rounded-sm" onClick={onClickPost}>
      <a className="text text-white"> Cadastrar tudo ... </a>
    </button>
  );
};

export default ButtonPost;
