const ButtonPost = ({ onClickPost }) => {
  return (
    <button className="bg-gradient-to-r from-sky-600 from-20% via-blue-400 via-40% to-sky-600 to-80%  hover:shadow-lg p-3 mt-6 rounded-sm" onClick={onClickPost}>
      <a className="text text-black"> Cadastrar tudo ... </a>
    </button>
  );
};

export default ButtonPost;