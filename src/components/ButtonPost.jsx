const ButtonPost = ({ onClickPost }) => {
  return (
    <button className="bg-gradient-to-r from-sky-300 from-20% via-sky-200 via-40% to-sky-300 to-80% hover:shadow-md p-3 mt-6 rounded-sm" onClick={onClickPost}>
      <a className="text text-black"> Cadastrar tudo ... </a>
    </button>
  );
};

export default ButtonPost;