export const TaskCard = ({ task, onComplete }: { task: any; onComplete?: (id: string) => void }) => {
  return (
    <div className="col-md-3">
      <div className={`card ${task.Status === 1 ? "finished" : ""}`}>
        <div className="card-header">{task.Title}</div>
        <div className="card-body">{task.Description}</div>
        <div className="card-footer d-flex justify-content-between">
          {task.EndDate}
          {onComplete && (
            <form onSubmit={(e) => { e.preventDefault(); onComplete(task.idTask); }}>
              <button type="submit" className="btn btn-outline-success btn-sm">
                Completar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};