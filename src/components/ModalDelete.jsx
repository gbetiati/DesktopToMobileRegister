const ModalDelete = ({ onConfirmDel, onCancelDel }) => {
  return (
    <div className="card bg-zinc-200 text-neutral-content w-96">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Confirmação</h2>
        <p>Deseja realmente deletar a loja?.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onConfirmDel}>
            Deletar
          </button>
          <button className="btn btn-ghost" onClick={onCancelDel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
