const ButtonPost = ({ onClickPost }) => {
  return (
    <button className="bg-gradient-to-r from-sky-200 from-10% via-sky-300 via-30% to-cyan-200 to-90% p-3 mt-6 rounded-sm" onClick={onClickPost}>
      <a className="text text-black"> Cadastrar tudo ... </a>
    </button>
  );
};

export default ButtonPost;