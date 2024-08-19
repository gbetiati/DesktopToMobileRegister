const ButtonPost = ({ onClickPost }) => {
  return (
    <button className="bg-gradient-to-r from-[#70AFCE] from-20% via-[#3b7b9a] via-40% to-[#70AFCE]  hover:shadow-lg p-3 mt-6 rounded-md" onClick={onClickPost}>
      <a className="text text-white font-semibold"> Cadastrar tudogit </a>
    </button>
  );
};

export default ButtonPost;